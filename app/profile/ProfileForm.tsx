"use client";

import { useState } from "react";
import { Camera, Mail, ShieldCheck, User, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

type ProfileProps = {
  user: { id: string; email: string };
  initialProfile: {
    username: string;
    avatar_url: string | null;
    created_at?: string;
  } | null;
};

export default function ProfileForm({ user, initialProfile }: ProfileProps) {
  const supabase = createClient();
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialProfile?.avatar_url || null);

  const username = initialProfile?.username || "Developer";
  const email = user.email || "";

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0) return;

      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/avatar.${fileExt}`;

      // 1. Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const publicUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`;

      // 3. Update database record with avatar_url, username, AND email
      const { error: updateError } = await supabase
        .from("profiles")
        .upsert({ 
          id: user.id, 
          username: username,
          email: email, // <-- Included to satisfy NOT NULL constraint
          avatar_url: publicUrl, 
          updated_at: new Date().toISOString() 
        });

      if (updateError) throw updateError;

      setAvatarUrl(publicUrl);
    } catch (error) {
      alert("Error uploading avatar!");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 font-sans flex flex-col justify-center items-center p-6">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Header Link */}
      <Link href="/unidashboard" className="fixed top-8 left-8 z-50">
        <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>
      </Link>

      {/* Profile Card */}
      <div className="z-10 w-full max-w-xl rounded-3xl border border-red-500/20 bg-neutral-950/90 p-8 sm:p-10 shadow-[0_0_80px_rgba(220,38,38,0.15)] backdrop-blur-xl">
        
        {/* Avatar & Header Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-8 mb-8 text-center sm:text-left">
          
          <div className="relative group">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-red-500/40 bg-neutral-900 shadow-inner flex items-center justify-center">
              {avatarUrl ? (
                <Image 
                  src={avatarUrl} 
                  alt="Profile" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <User className="h-10 w-10 text-neutral-600" />
              )}

              {/* Uploading Overlay */}
              {uploading && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
                  <Loader2 className="h-6 w-6 text-red-500 animate-spin" />
                </div>
              )}
            </div>

            {/* Change Image Button */}
            <label className="absolute -bottom-2 -right-2 bg-red-600 hover:bg-red-500 text-white p-2.5 rounded-xl cursor-pointer transition-transform hover:scale-105 shadow-md z-10">
              <Camera size={16} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleAvatarUpload} 
                disabled={uploading} 
                className="hidden" 
              />
            </label>
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-red-500">
              CodeStruct Profile
            </span>
            <h1 className="mt-1 text-3xl font-black tracking-tighter text-white">{username}</h1>
            <p className="text-xs text-neutral-500 font-mono mt-1">Hover image icon to update avatar</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <ProfileRow icon={<User size={18} />} label="Username" value={username} />
          <ProfileRow icon={<Mail size={18} />} label="Email Address" value={email || "Not available"} />
          <ProfileRow icon={<ShieldCheck size={18} />} label="Account ID" value={user.id} />
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/50 p-4 transition-all hover:border-white/10">
      <div className="mb-1 flex items-center gap-2 text-red-500">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-[0.25em]">{label}</span>
      </div>
      <p className="break-all font-mono text-sm text-neutral-200">{value}</p>
    </div>
  );
}