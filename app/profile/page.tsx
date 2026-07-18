import Link from "next/link";
import { redirect } from "next/navigation";
import { ChevronLeft, Mail, ShieldCheck, User } from "lucide-react";
import styles from "../register/register.module.css";
import { createClient } from "@/lib/supabase/server";

type Profile = {
  username: string;
  email: string;
  created_at: string;
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("username, email, created_at")
    .eq("id", user.id)
    .single<Profile>();

  const username = profile?.username ?? user.user_metadata.username ?? "Not set";
  const email = profile?.email ?? user.email ?? "Not available";

  return (
    <div className={styles.container}>
      <div className={styles.glowBackdrop} />

      <Link href="/unidashboard">
        <div className="fixed top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
          <ChevronLeft className="w-4 h-4 text-red-600" />
          <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
            Back to Home Page
          </span>
        </div>
      </Link>

      <div className="z-10 w-full max-w-2xl rounded-3xl border border-red-500/20 bg-neutral-950/80 p-8 shadow-[0_0_60px_rgba(220,38,38,0.15)]">
        <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/40 bg-red-500/10">
            <User className="h-8 w-8 text-red-500" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">CodeStruct Profile</p>
            <h1 className="mt-2 text-4xl font-black tracking-tighter text-white">{username}</h1>
          </div>
        </div>

        <div className="grid gap-4">
          <ProfileRow icon={<User className="h-5 w-5" />} label="Username" value={username} />
          <ProfileRow icon={<Mail className="h-5 w-5" />} label="Email" value={email} />
          <ProfileRow
            icon={<ShieldCheck className="h-5 w-5" />}
            label="User ID"
            value={user.id}
          />
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/40 p-5">
      <div className="mb-2 flex items-center gap-2 text-red-500">
        {icon}
        <p className="text-xs font-black uppercase tracking-[0.3em]">{label}</p>
      </div>
      <p className="break-all font-mono text-sm text-neutral-200">{value}</p>
    </div>
  );
}
