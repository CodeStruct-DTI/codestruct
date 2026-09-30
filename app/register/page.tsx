"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, Lock, Mail, User, UserPlus, Code, Trophy } from "lucide-react";
import styles from "./register.module.css";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [leetcodeHandle, setLeetcodeHandle] = useState("");
  const [codeforcesHandle, setCodeforcesHandle] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSignup = async () => {
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    const cleanUsername = username.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,20}$/.test(cleanUsername)) {
      setError("Username must be 3-20 characters and use only letters, numbers, or underscores.");
      return;
    }

    setIsSubmitting(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          username: cleanUsername,
          leetcode_handle: leetcodeHandle.trim() || null,
          codeforces_handle: codeforcesHandle.trim() || null,
        },
      },
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    if (data.user && !data.session) {
      setMessage("Account created. Check your email to confirm before logging in.");
      return;
    }

    router.push("/");
    router.refresh();
  };

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
            Codestruct_
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
          <h1 className={styles.introTitle}>Welcome to CodeStruct!</h1>
          <p className={styles.introSubtitle}>Master your DSA Journey with us!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.card}
        >
          <div className="text-center mb-8">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className={styles.iconCircle}>
              <UserPlus className="text-red-500 w-8 h-8" />
            </motion.div>
            <h2 className={styles.title}>Create Account</h2>
          </div>

          <motion.button
            type="button"
            onClick={handleGoogleSignup}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mb-6 flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Sign up with Google
          </motion.button>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-neutral-800" />
            <span className="text-xs uppercase font-bold text-neutral-500">or register with email</span>
            <div className="h-[1px] flex-1 bg-neutral-800" />
          </div>

          <form onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Username</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <User className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="pranav_codes"
                  className={styles.inputField}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  pattern="[A-Za-z0-9_]{3,20}"
                  title="Use 3-20 letters, numbers, or underscores."
                  required
                />
              </motion.div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <Mail className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input
                  type="email"
                  placeholder="codestruct@dsa.com"
                  className={styles.inputField}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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

            <div className={styles.inputGroup}>
              <label className={styles.label}>LeetCode Username (Optional)</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <Code className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="leetcode_id"
                  className={styles.inputField}
                  value={leetcodeHandle}
                  onChange={(event) => setLeetcodeHandle(event.target.value)}
                />
              </motion.div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Codeforces Handle (Optional)</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <Trophy className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="tourist"
                  className={styles.inputField}
                  value={codeforcesHandle}
                  onChange={(event) => setCodeforcesHandle(event.target.value)}
                />
              </motion.div>
            </div>

            {error && (
              <p className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm font-bold text-red-400">
                {error}
              </p>
            )}

            {message && (
              <p className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm font-bold text-green-400">
                {message}
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
              {isSubmitting ? "Creating account..." : "Begin Journey"}{" "}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <p className="text-center mt-6 text-neutral-500 text-sm">
            Already signed in?{" "}
            <Link href="/login" className="text-red-500 font-bold ml-1 hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}