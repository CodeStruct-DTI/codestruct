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