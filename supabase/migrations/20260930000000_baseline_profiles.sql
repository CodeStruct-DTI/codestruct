-- Baseline schema for CodeStruct: profiles, avatar storage, sign-up trigger.
-- Idempotent: safe to run on an existing database or a fresh Supabase project.
-- Run in the Supabase SQL Editor (or via `supabase db push`).

begin;

-- ---------------------------------------------------------------------------
-- profiles table
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  email text not null,
  avatar_url text,
  leetcode_handle text,
  codeforces_handle text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Columns that were originally added by hand in the dashboard.
alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists leetcode_handle text;
alter table public.profiles add column if not exists codeforces_handle text;

-- Unique usernames. (If the table already has `username text unique`, Postgres
-- named that index profiles_username_key, so this is a no-op.)
create unique index if not exists profiles_username_key
  on public.profiles (username);

-- Username format. NOT VALID enforces it for new/changed rows without
-- failing on any legacy row that might not match.
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'username_format'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint username_format
      check (username ~ '^[a-z0-9_]{3,20}$') not valid;
  end if;
end $$;

-- ---------------------------------------------------------------------------
-- Row level security: owner-only access
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;

drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Users can insert their own profile." on public.profiles;
drop policy if exists "Users can update own profile." on public.profiles;
drop policy if exists "Users can read own profile" on public.profiles;
drop policy if exists "Users can insert own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;

create policy "Users can read own profile"
on public.profiles for select
to authenticated
using (auth.uid() = id);

create policy "Users can insert own profile"
on public.profiles for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- Sign-up trigger: create a profile for every new auth user
-- ---------------------------------------------------------------------------
-- Email sign-up passes a username (and optional handles) in user metadata.
-- OAuth sign-up (Google) passes none, so we generate a unique fallback.
-- An explicit username that is valid but already taken still raises a unique
-- violation; the sign-up form should check availability first.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested text := lower(nullif(trim(new.raw_user_meta_data ->> 'username'), ''));
  base text;
  candidate text;
  attempts int := 0;
begin
  if requested is not null and requested ~ '^[a-z0-9_]{3,20}$' then
    candidate := requested;
  else
    base := left(
      regexp_replace(lower(split_part(coalesce(new.email, ''), '@', 1)), '[^a-z0-9_]', '', 'g'),
      12
    );
    if length(base) < 3 then
      base := 'user';
    end if;

    loop
      candidate := base || '_' || substr(md5(random()::text || clock_timestamp()::text), 1, 6);
      exit when not exists (
        select 1 from public.profiles where username = candidate
      );
      attempts := attempts + 1;
      exit when attempts > 5;
    end loop;
  end if;

  insert into public.profiles (id, username, email, leetcode_handle, codeforces_handle)
  values (
    new.id,
    candidate,
    coalesce(new.email, ''),
    nullif(trim(new.raw_user_meta_data ->> 'leetcode_handle'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'codeforces_handle'), '')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Username -> email lookup (used by password login)
-- ---------------------------------------------------------------------------
-- TODO (migration for step 11): revoke execute from anon/authenticated and
-- move this lookup behind a rate-limited server route.
create or replace function public.get_email_for_username(input_username text)
returns text
language sql
security definer
set search_path = ''
as $$
  select email
  from public.profiles
  where username = lower(input_username)
  limit 1;
$$;

grant execute on function public.get_email_for_username(text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Avatar storage
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Avatar Public Access" on storage.objects;
drop policy if exists "Avatar Upload Policy" on storage.objects;
drop policy if exists "Avatar Update Policy" on storage.objects;

-- Anyone can read avatars (the bucket is public).
create policy "Avatar Public Access"
on storage.objects for select
using (bucket_id = 'avatars');

-- Users can only write inside their own folder: avatars/<user id>/...
create policy "Avatar Upload Policy"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'avatars'
  and (select auth.uid())::text = (storage.foldername(name))[1]
);

create policy "Avatar Update Policy"
on storage.objects for update
to authenticated
using (
  bucket_id = 'avatars'
  and (select auth.uid())::text = (storage.foldername(name))[1]
)
with check (
  bucket_id = 'avatars'
  and (select auth.uid())::text = (storage.foldername(name))[1]
);

commit;