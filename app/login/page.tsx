"use client";

import styles from "../register/register.module.css"; // Reusing your sexy styles!
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.glowBackdrop} 
      />

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
            <motion.div 
              whileHover={{ rotate: -15, scale: 1.1 }}
              className={styles.iconCircle}
            >
              {/* LogIn icon for visual consistency */}
              <LogIn className="text-red-500 w-8 h-8" />
            </motion.div>
            <h2 className={styles.title}>Login to Account</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <Mail className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="master@codestruct.com"
                  className={styles.inputField}
                />
              </motion.div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <motion.div whileTap={{ scale: 0.99 }} className={styles.inputWrapper}>
                <Lock className="absolute left-3 top-3 text-neutral-600 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className={styles.inputField}
                />
              </motion.div>
            </div>

            <motion.button 
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#ef4444",
                boxShadow: "0 0 25px rgba(220, 38, 38, 0.6)" 
              }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitBtn}
            >
              Continue Your Journey <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <p className="text-center mt-6 text-neutral-500 text-sm">
            New Here? <a href="/register" className="text-red-500 font-bold ml-1 hover:underline">Register</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}