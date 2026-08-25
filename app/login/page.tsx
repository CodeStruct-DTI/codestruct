"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, Lock, LogIn, UserRound } from "lucide-react";
import styles from "../register/register.module.css";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const cleanIdentifier = identifier.trim().toLowerCase();
    let email = cleanIdentifier;

    if (!cleanIdentifier.includes("@")) {
      const { data, error: lookupError } = await supabase.rpc("get_email_for_username", {
        input_username: cleanIdentifier,
      });

      if (lookupError || !data) {
        setIsSubmitting(false);
        setError("No account found for that username.");
        return;
      }

      email = data;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    router.push(searchParams.get("redirectedFrom") || "/");
    router.refresh();
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Email or Username</label>
        <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
          <UserRound className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
          <input
            type="text"
            placeholder="master@codestruct.com or pranav_codes"
            className={styles.inputField}
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            required
          />
        </motion.div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Password</label>
        <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
          <Lock className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
          <input
            type="password"
            placeholder="********"
            className={styles.inputField}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />
        </motion.div>
      </div>

      {error && (
        <p className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm font-bold text-red-400">
          {error}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{
          scale: 1.02,
          backgroundColor: "#ef4444",
          boxShadow: "0 0 25px rgba(220, 38, 38, 0.6)",
        }}
        whileTap={{ scale: 0.98 }}
        className={styles.submitBtn}
      >
        {isSubmitting ? "Signing in..." : "Continue Your Journey"}{" "}
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.glowBackdrop}
      />

      <Link href="/">
        <motion.div className="fixed top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
          <ChevronLeft className="w-4 h-4 text-red-600" />
          <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
            CodeStruct_
          </span>
        </motion.div>
      </Link>

      <div className={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.introWrapper}
        >
          <h1 className={styles.introTitle}>Welcome Back!</h1>
          <p className={styles.introSubtitle}>Continue your DSA Journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.card}
        >
          <div className="text-center mb-8">
            <motion.div whileHover={{ rotate: -15, scale: 1.1 }} className={styles.iconCircle}>
              <LogIn className="text-red-500 w-8 h-8" />
            </motion.div>
            <h2 className={styles.title}>Login to Account</h2>
          </div>

          <Suspense fallback={<div className="text-center py-4 font-mono text-xs text-neutral-500">Loading form...</div>}>
            <LoginForm />
          </Suspense>

          <p className="text-center mt-6 text-neutral-500 text-sm">
            New Here?{" "}
            <Link href="/register" className="text-red-500 font-bold ml-1 hover:underline">
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}