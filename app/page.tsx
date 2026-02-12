"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Cpu, Code2, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] -z-10" />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-red-600"
          >
            CODESTRUCT_
          </motion.div>
          <div className="flex gap-8 items-center text-sm font-medium text-neutral-400">
            <Link href="/login" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Login</Link>
            <Link href="/register" className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] text-xs font-bold uppercase tracking-tighter">
              Join Hub
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-32 text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
            Learn the <span className="text-red-600">Syntax</span>,<br /> 
            Solve the <span className="text-neutral-500 italic">Problem.</span>
          </h1>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-10">
            From your first line of code to mastering complex Data Structures. 
            The only command center built for the complete engineering journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 rounded-xl font-bold text-lg flex items-center gap-2"
              >
                Begin Journey <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Clickable Feature Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-32"
        >
          {/* Link to Language Selection (To be built) */}
          <FeatureCard 
            icon={<Code2 className="text-red-500 w-10 h-10" />}
            title="Language Roadmaps"
            desc="Structured paths to master Java, C++, or Python from scratch before diving into DSA."
            href="/languages" 
          />
          {/* Link to DSA Path (To be built) */}
          <FeatureCard 
            icon={<Cpu className="text-red-500 w-10 h-10" />}
            title="Pattern Roadmaps"
            desc="Once you know the syntax, master the logic with visual paths through core DSA patterns."
            href="/dsa"
          />
          {/* Link to your newly created Unified Dashboard */}
          <FeatureCard 
            icon={<Terminal className="text-red-500 w-10 h-10" />}
            title="Unified Dashboard"
            desc="A centralized view of your progress across LeetCode, Codeforces, and your roadmap goals."
            href="/unidashboard"
          />
        </motion.div>
      </main>
    </div>
  );
}

/* FeatureCard with Link wrapper and Hover animations */
function FeatureCard({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="block"> {/* Wrapper to make the entire card a link */}
      <motion.div 
        whileHover={{ 
          y: -10, 
          borderColor: "rgba(220, 38, 38, 0.5)",
          backgroundColor: "rgba(10, 10, 10, 1)" 
        }}
        className="p-8 bg-neutral-950 border border-neutral-900 rounded-2xl text-left transition-all relative group cursor-pointer h-full"
      >
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-between items-start">
          {icon}
          {/* Subtle indicator that card is clickable */}
          <ArrowRight className="w-5 h-5 text-neutral-800 group-hover:text-red-500 transition-colors" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{title}</h3>
        <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-400 transition-colors">{desc}</p>
        
        {/* Decorative glow line at the bottom of the card */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
      </motion.div>
    </Link>
  );
}