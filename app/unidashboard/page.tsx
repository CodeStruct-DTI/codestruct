"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { AlertCircle, ChevronLeft, Code2, Loader2, LogOut, Trophy, User as UserIcon } from "lucide-react";
import styles from "../register/register.module.css";
import { createClient } from "@/lib/supabase/client";

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

export default function DashboardPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [ids, setIds] = useState({ leetcode: "", codeforces: "" });
  const [results, setResults] = useState<DashboardResults | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null); // New state for UI errors
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const handleStartTracking = async () => {
    // UI-friendly validation
    if (!ids.leetcode.trim() && !ids.codeforces.trim()) {
      setError("Please enter at least one ID to start tracking.");
      return;
    }
    
    setError(null); // Clear error if validation passes
    setIsFetching(true);
    setResults(null); 

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ids),
      });
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className="fixed top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
          <ChevronLeft className="w-4 h-4 text-red-600" />
          <span className="text-xl font-black text-red-600 uppercase tracking-tighter">CodeStruct_</span>
        </div>
      </Link>

      <button
        type="button"
        onClick={handleLogout}
        className="fixed right-8 top-8 z-50 flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-400 transition hover:bg-red-500/20"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>

      <Link
        href="/profile"
        className="fixed right-36 top-8 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-neutral-300 transition hover:bg-white/10"
      >
        <UserIcon className="h-4 w-4" />
        Profile
      </Link>

      <div className="z-10 w-full max-w-6xl px-6 pt-32 pb-20">
        <div className="mb-12 border-l-4 border-red-600 pl-6">
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase">Profile Tracker</h1>
          {user?.email && (
            <p className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <UserIcon className="h-4 w-4" />
              Signed in as {user.email}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileInput label="LeetCode ID" value={ids.leetcode} onChange={(val: string) => { setIds({...ids, leetcode: val}); setError(null); }} />
          <ProfileInput label="Codeforces ID" value={ids.codeforces} onChange={(val: string) => { setIds({...ids, codeforces: val}); setError(null); }} />
        </div>

        {/* UI Friendly Error Message */}
        {error && (
          <div className="mt-6 flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-bold uppercase tracking-tight">{error}</p>
          </div>
        )}

        <button 
          onClick={handleStartTracking} disabled={isFetching}
          className="mt-6 w-full bg-red-700 disabled:bg-neutral-800 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-[0.4em] flex justify-center items-center cursor-pointer hover:bg-red-600 active:scale-[0.98]"
        >
          {isFetching ? <Loader2 className="animate-spin" /> : "Start Tracking"}
        </button>

        {results && (
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-500">
            {/* ... rest of your cards (LeetCode and Codeforces) remain the same ... */}
            <Card title="LeetCode" mainStat={results.leetcode?.totalSolved} subLabel="Problems Solved">
              <div className="grid grid-cols-3 gap-y-8 gap-x-4 border-t border-white/5 pt-6">
                <Stat label="Easy" val={results.leetcode?.easySolved} color="text-green-500" />
                <Stat label="Medium" val={results.leetcode?.mediumSolved} color="text-yellow-500" />
                <Stat label="Hard" val={results.leetcode?.hardSolved} color="text-red-500" />
                <Stat label="Contest Rank" val={results.leetcode?.contestRanking?.globalRanking ? `#${results.leetcode.contestRanking.globalRanking.toLocaleString()}` : "Unranked"} color="text-blue-400" />
                <Stat label="Rating" val={results.leetcode?.contestRanking?.rating ? Math.round(results.leetcode.contestRanking.rating).toLocaleString() : "—"} color="text-purple-400" />
                <Stat label="Attended" val={results.leetcode?.contestRanking?.attendedContestsCount} color="text-neutral-400" />
              </div>
            </Card>

            <Card title="Codeforces" mainStat={results.codeforces?.solvedCount} subLabel="Problems Solved" avatar={results.codeforces?.titlePhoto}>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-white/5 pt-6">
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

// Sub-components with explicit types to stop "val" errors
function Card({ title, mainStat, subLabel, avatar, children }: { title: string, mainStat?: React.ReactNode, subLabel: string, avatar?: string, children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-red-600 font-black text-xs uppercase tracking-widest mb-1">{title} Stats</h3>
          <p className="text-4xl text-white font-mono font-black">{mainStat ?? "—"}</p>
          <p className="text-neutral-500 text-[10px] uppercase font-mono tracking-widest">{subLabel}</p>
        </div>
        {avatar ? <img src={avatar} alt={`${title} profile avatar`} className="w-14 h-14 rounded-xl border border-white/10" /> : <Trophy className="text-neutral-700 w-10 h-10" />}
      </div>
      {children}
    </div>
  );
}

function Stat({ label, val, color }: { label: string, val?: React.ReactNode, color: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase text-neutral-600 font-black tracking-tighter mb-1">{label}</p>
      <p className={`text-sm font-mono font-bold ${color}`}>{val ?? "N/A"}</p>
    </div>
  );
}

function ProfileInput({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] ml-1">{label}</label>
      <div className="relative">
        <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
        <input 
          type="text" value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full bg-neutral-900/30 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-red-600 transition-all font-mono text-sm outline-none"
        />
      </div>
    </div>
  );
}
