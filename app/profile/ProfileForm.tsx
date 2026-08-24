"use client";

import { useState, useEffect, useCallback } from "react";
import { Camera, Mail, ShieldCheck, User, Loader2, ArrowLeft, RefreshCw, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

type ProfileProps = {
  user: { id: string; email: string };
  initialProfile: {
    username: string;
    avatar_url: string | null;
    leetcode_handle: string | null;
    codeforces_handle: string | null;
    created_at?: string;
  } | null;
};

type ContestRanking = {
  globalRanking?: number | null;
  rating?: number | null;
  attendedContestsCount?: number | null;
};

type DashboardResults = {
  leetcode?: {
    totalSolved?: number;
    easySolved?: number;
    mediumSolved?: number;
    hardSolved?: number;
    contestRanking?: ContestRanking | null;
  } | null;
  codeforces?: {
    solvedCount?: number;
    rating?: number;
    rank?: string;
    maxRating?: number;
    maxRank?: string;
    titlePhoto?: string;
  } | null;
};

export default function ProfileForm({ user, initialProfile }: ProfileProps) {
  const supabase = createClient();
  const [uploading, setUploading] = useState(false);
  
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialProfile?.avatar_url || null);
  const username = initialProfile?.username || "Developer";
  const email = user.email || "";

  // Handles State
  const [leetcodeHandle, setLeetcodeHandle] = useState(initialProfile?.leetcode_handle || "");
  const [codeforcesHandle, setCodeforcesHandle] = useState(initialProfile?.codeforces_handle || "");

  // Dashboard Stats State
  const [results, setResults] = useState<DashboardResults | null>(null);
  const [fetchingStats, setFetchingStats] = useState(false);

  const fetchProfileStats = useCallback(async (lc = leetcodeHandle, cf = codeforcesHandle) => {
    if (!lc.trim() && !cf.trim()) return;
    setFetchingStats(true);

    try {
      const res = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leetcode: lc.trim(),
          codeforces: cf.trim(),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResults(data);
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setFetchingStats(false);
    }
  }, [leetcodeHandle, codeforcesHandle]);

  useEffect(() => {
    fetchProfileStats();
  }, [fetchProfileStats]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0) return;

      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/avatar.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const publicUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`;

      const { error: updateError } = await supabase
        .from("profiles")
        .upsert({ 
          id: user.id, 
          username: username,
          email: email, 
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
    <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 font-sans flex flex-col justify-center items-center p-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)] pointer-events-none" />

      <Link href="/unidashboard" className="fixed top-8 left-8 z-50">
        <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>
      </Link>

      <div className="z-10 w-full max-w-4xl rounded-3xl border border-red-500/20 bg-neutral-950/90 p-8 sm:p-10 shadow-[0_0_80px_rgba(220,38,38,0.15)] backdrop-blur-xl space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-8 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
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

                {uploading && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
                    <Loader2 className="h-6 w-6 text-red-500 animate-spin" />
                  </div>
                )}
              </div>

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
              <p className="text-xs text-neutral-500 font-mono mt-1">Track coding statistics</p>
            </div>
          </div>

          <button
            onClick={() => fetchProfileStats()}
            disabled={fetchingStats}
            className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-400 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${fetchingStats ? "animate-spin" : ""}`} />
            {fetchingStats ? "Refreshing..." : "Refresh Stats"}
          </button>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProfileRow icon={<User size={18} />} label="Username" value={username} />
          <ProfileRow icon={<Mail size={18} />} label="Email Address" value={email || "Not available"} />
          <ProfileRow icon={<ShieldCheck size={18} />} label="Account ID" value={user.id} />
        </div>

        {/* Handles Display Section */}
        <div className="border border-white/5 bg-black/40 p-6 rounded-2xl space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
            Connected Handles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
            <div className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-neutral-300">
              <span className="text-[10px] text-neutral-500 block uppercase font-black">LeetCode</span>
              {leetcodeHandle || "Not connected"}
            </div>
            <div className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-neutral-300">
              <span className="text-[10px] text-neutral-500 block uppercase font-black">Codeforces</span>
              {codeforcesHandle || "Not connected"}
            </div>
          </div>
        </div>

        {/* Full Stats Overview */}
        {results && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Card title="LeetCode" mainStat={results.leetcode?.totalSolved} subLabel="Problems Solved">
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 border-t border-white/5 pt-6">
                <Stat label="Easy" val={results.leetcode?.easySolved} color="text-green-500" />
                <Stat label="Medium" val={results.leetcode?.mediumSolved} color="text-yellow-500" />
                <Stat label="Hard" val={results.leetcode?.hardSolved} color="text-red-500" />
                <Stat 
                  label="Contest Rank" 
                  val={results.leetcode?.contestRanking?.globalRanking ? `#${results.leetcode.contestRanking.globalRanking.toLocaleString()}` : "Unranked"} 
                  color="text-blue-400" 
                />
                <Stat 
                  label="Rating" 
                  val={results.leetcode?.contestRanking?.rating ? Math.round(results.leetcode.contestRanking.rating).toLocaleString() : "—"} 
                  color="text-purple-400" 
                />
                <Stat 
                  label="Attended" 
                  val={results.leetcode?.contestRanking?.attendedContestsCount} 
                  color="text-neutral-400" 
                />
              </div>
            </Card>

            <Card 
              title="Codeforces" 
              mainStat={results.codeforces?.solvedCount} 
              subLabel="Problems Solved" 
              avatar={results.codeforces?.titlePhoto}
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/5 pt-6">
                <Stat label="Current Rating" val={results.codeforces?.rating} color="text-yellow-500" />
                <Stat label="Current Rank" val={results.codeforces?.rank} color="text-red-400" />
                <Stat label="Max Rating" val={results.codeforces?.maxRating} color="text-yellow-400" />
                <Stat label="Max Rank" val={results.codeforces?.maxRank} color="text-neutral-400" />
              </div>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}

function Card({ title, mainStat, subLabel, avatar, children }: { title: string; mainStat?: React.ReactNode; subLabel: string; avatar?: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/50 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-red-600 font-black text-xs uppercase tracking-widest mb-1">{title} Stats</h3>
          <p className="text-4xl text-white font-mono font-black">{mainStat ?? "—"}</p>
          <p className="text-neutral-500 text-[10px] uppercase font-mono tracking-widest">{subLabel}</p>
        </div>
        {avatar ? (
          <img src={avatar} alt={`${title} profile avatar`} className="w-14 h-14 rounded-xl border border-white/10" />
        ) : (
          <Trophy className="text-neutral-700 w-10 h-10" />
        )}
      </div>
      {children}
    </div>
  );
}

function Stat({ label, val, color }: { label: string; val?: React.ReactNode; color: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase text-neutral-600 font-black tracking-tighter mb-1">{label}</p>
      <p className={`text-sm font-mono font-bold ${color}`}>{val ?? "N/A"}</p>
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