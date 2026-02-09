"use client";

import styles from "./register.module.css";
import { UserPlus, Mail, Lock, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.glowBackdrop} />
      {/* NEW: Introduction Section outside the card */}
      <div className={styles.contentWrapper}> 
        <div className={styles.introWrapper}>
          <h1 className={styles.introTitle}>Welcome to CodeStruct!</h1>
          <p className={styles.introSubtitle}>Master your DSA Journey with us!</p>
        </div>

        <div className={styles.card}>
          <div className="text-center mb-8">
            <div className={styles.iconCircle}>
              <UserPlus className="text-red-500 w-8 h-8" />
            </div>
            <h2 className={styles.title}>Create Account</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="codestruct@dsa.com"
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className={styles.inputField}
                />
              </div>
            </div>

            <button className={styles.submitBtn}>
              Begin Journey <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center mt-6 text-neutral-500 text-sm">
            Already a master? <a href="/login" className="text-red-500 font-bold ml-1">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}