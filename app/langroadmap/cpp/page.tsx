"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, Terminal, Cpu, Zap, ChevronLeft } from "lucide-react";

export default function CppRoadmap() {
  const steps = [
    {
      title: "Phase 1: Basics & Foundation",
      items: ["Variables & Data Types", "Input/Output (cin/cout)", "Operators & Expressions", "Control Flow (If/Else, Loops)"],
      icon: <Terminal className="w-6 h-6 text-red-500" />
    },
    {
      title: "Phase 2: Functional Logic",
      items: ["Functions & Parameters", "Recursion", "Arrays & Strings", "References & Basic Pointers"],
      icon: <Code2 className="w-6 h-6 text-red-500" />
    },
    {
      title: "Phase 3: Standard Template Library(STL)",
      items: ["Vectors & Iterators", "Maps & Sets", "Pairs & Tuples", "Sorting Algorithms"],
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      title: "Phase 4: Advanced Concepts",
      items: ["Object Oriented Programming", "Memory Management", "Templates", "File Handling"],
      icon: <Cpu className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden relative">
      {/* Background Ambient Glow */}
      <Link href="/">
        <motion.div
          className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
        >
          <ChevronLeft className="w-4 h-4 text-red-600"/>
          <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
            CodeStruct_
          </span>
        </motion.div>
      </Link>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[120px] -z-10" />

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32">
        {/* Header Section */}
        <Link 
          href="/languageoptions" 
          className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 text-xs uppercase font-bold tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Languages
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            C++ <span className="text-red-600">ROADMAP_</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            The gold standard for Competitive Programming. This structured path takes you from 
            basic syntax to mastering the Standard Template Library (STL).
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 rounded-full font-bold cursor-pointer hover:scale-105 transition-transform">
            Start Your Journey
          </button>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Glowing Dot on the Line */}
              <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] border-4 border-black" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-neutral-900 rounded-lg border border-white/5">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{step.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {step.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl cursor-pointer text-neutral-400 hover:text-white hover:border-red-900/50 transition-all cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}