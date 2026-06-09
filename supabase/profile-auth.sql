-- Run this once in Supabase SQL Editor.
-- It creates public profiles, enforces unique usernames, and lets the app
-- resolve username -> email for password login.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  email text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint username_format check (username ~ '^[a-z0-9_]{3,20}$')
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username, email)
  values (
    new.id,
    lower(new.raw_user_meta_data ->> 'username'),
    new.email
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.get_email_for_username(input_username text)
returns text
language sql
security definer
set search_path = public
as $$
  select email
  from public.profiles
  where username = lower(input_username)
  limit 1;
$$;

grant execute on function public.get_email_for_username(text) to anon, authenticated;
