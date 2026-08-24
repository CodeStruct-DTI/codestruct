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

  // Fetch handles along with other profile metadata
  const { data: profile } = await supabase
    .from("profiles")
    .select("username, avatar_url, leetcode_handle, codeforces_handle, created_at")
    .eq("id", user.id)
    .single();

  // Fallback to user_metadata stored during registration if profiles table is empty/null
  const leetcodeHandle = profile?.leetcode_handle || user.user_metadata?.leetcode_handle || "";
  const codeforcesHandle = profile?.codeforces_handle || user.user_metadata?.codeforces_handle || "";

  return (
    <ProfileForm
      user={{ id: user.id, email: user.email || "" }}
      initialProfile={{
        username: profile?.username || user.user_metadata?.username || "Developer",
        avatar_url: profile?.avatar_url || null,
        leetcode_handle: leetcodeHandle,
        codeforces_handle: codeforcesHandle,
      }}
    />
  );
}