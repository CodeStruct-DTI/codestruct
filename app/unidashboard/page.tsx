"use client";

import { useState, useEffect } from "react"; // To handle effects and state
import { useRouter } from "next/navigation"; // For programmatic navigation
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Code2, Terminal, Trophy, ChevronLeft } from "lucide-react";
import styles from "../register/register.module.css"; 

export default function DashboardPage() {
  const router = useRouter();
  
  // Placeholder Auth State (Toggle this to 'true' to stay on page)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief auth check
    const checkAuth = () => {
      if (!isLoggedIn) {
        // Direct jump to login if unauthorized
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, [isLoggedIn, router]);

  // --- PERSISTENT TOP NAVIGATION (Requirement: Home button on every page) ---
  const BrandNavigation = (
    <Link href="/">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
      >
        <ChevronLeft className="w-4 h-4 text-red-600 group-hover:text-red-500 transition-colors" />
        <span className="text-xl font-black tracking-tighter text-red-600 group-hover:text-red-500 transition-colors uppercase">
          CodeStruct_
        </span>
      </motion.div>
    </Link>
  );

  // While checking auth, show a blank screen or a simple loader to prevent "flashing"
  if (loading && !isLoggedIn) {
    return <div className="min-h-screen bg-black" />; 
  }

  // --- LOGGED IN VIEW (Active Dashboard) ---
  return (
    <div className={styles.container}>
      {BrandNavigation}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.glowBackdrop} />

      <div className="z-10 w-full max-w-5xl px-6 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-16 border-l-4 border-red-600 pl-6"
        >
          <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">Track your coding profiles</h1>
          <p className="text-neutral-500 font-mono tracking-[0.3em] uppercase text-xs">One Stop to Manage All Your Coding Profiles</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileInput icon={<Code2 />} label="LeetCode ID" placeholder="User Handle" />
          <ProfileInput icon={<Code2 />} label="Codeforces ID" placeholder="User Handle" />
          <ProfileInput icon={<Code2 />} label="GeeksForGeeks ID" placeholder="User Handle" />
          <ProfileInput icon={<Code2 />} label="CodeChef ID" placeholder="User Handle" />
        </div>

        <motion.button 
          whileHover={{ scale: 1.01, backgroundColor: "#ef4444" }}
          whileTap={{ scale: 0.99 }}
          className="mt-12 w-full bg-red-700 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-[0.4em] text-sm shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
        >
          Start Tracking
        </motion.button>
      </div>
    </div>
  );
}

// Sub-component for inputs
function ProfileInput({ icon, label, placeholder }: { icon: React.ReactNode, label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-3 group">
      <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] ml-1 group-focus-within:text-red-500 transition-colors">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-red-600 transition-colors">
          {icon}
        </div>
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-neutral-900/30 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-red-600/50 focus:outline-none focus:bg-black/50 transition-all font-mono text-sm"
        />
      </div>
    </div>
  );
}