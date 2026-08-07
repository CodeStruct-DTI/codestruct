import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProfileForm from "./ProfileForm";

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
    .select("username, avatar_url, created_at")
    .eq("id", user.id)
    .single();

  return (
    <ProfileForm
      user={{ id: user.id, email: user.email || "" }}
      initialProfile={profile}
    />
  );
}