"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function PythonInputOutput() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Top Logo Navigation */}
        <Link href="/">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
              CodeStruct_
            </span>
          </motion.div>
        </Link>

        {/* Roadmap Back Link */}
        <Link
          href="/langroadmap/python"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Python Roadmap
        </Link>

        {/* Page Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Python Input & Output (input & print)
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to handling input and output operations in Python. Unlike statically-typed languages like Java or C++, Python simplifies data interaction using built-in functions like <code className="bg-neutral-800 px-1 rounded">print()</code> for displaying results and <code className="bg-neutral-800 px-1 rounded">input()</code> for capturing user input.
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: The Stream Concept */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">The Concept of I/O Streams</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In Python, standard input and output rely on underlying system streams (<code>sys.stdin</code> and <code>sys.stdout</code>). Python wraps these low-level operations into high-level, human-readable functions that perform clean reading and string formatting seamlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Output explanation */}
              <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 font-bold">out</div>
                    <h3 className="text-xl font-semibold text-white">print() Function</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4">
                    Outputs formatted data to standard output. Supports formatting parameters like <code>sep</code> (separator) and <code>end</code> (line ending).
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl text-blue-400">
                  print(<span className="text-orange-400">"Hello Python"</span>, end=<span className="text-orange-400">"\n"</span>)
                </div>
              </div>

              {/* Input explanation */}
              <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">in</div>
                    <h3 className="text-xl font-semibold text-white">input() Function</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4">
                    Reads a raw string line from standard input. Because it always returns a <code>str</code>, numerical values require explicit casting.
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl text-blue-400">
                  <span className="text-red-400">int</span>(input(<span className="text-orange-400">"Enter score: "</span>)) <span className="text-neutral-500 text-sm"># Convert to int</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Implementation Example */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Python I/O Implementation</h2>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-neutral-500"># Prompt user for string and integer input</span><br />
              name = input(<span className="text-orange-400">"Enter your name: "</span>)<br />
              score = <span className="text-red-500">int</span>(input(<span className="text-orange-400">"Enter your score: "</span>)) <span className="text-neutral-500"># Type conversion</span><br /><br />

              <span className="text-neutral-500"># Output results using f-string interpolation</span><br />
              print(<span className="text-orange-400">f"Welcome, &#123;name&#125;!"</span>)<br />
              print(<span className="text-orange-400">f"Final Score: &#123;score&#125;"</span>)<br /><br />

              <span className="text-neutral-500"># Customizing print behavior</span><br />
              print(<span className="text-orange-400">"Status"</span>, <span className="text-orange-400">"Passed"</span>, sep=<span className="text-orange-400">": "</span>)
            </div>

            {/* Simulated Terminal Output */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Console Output
              </h4>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm">
                <span className="text-neutral-300 italic">Enter your name: </span><span className="text-white font-bold">Alice</span><br />
                <span className="text-neutral-300 italic">Enter your score: </span><span className="text-white font-bold">95</span><br />
                <span className="text-neutral-300">Welcome, Alice!</span><br />
                <span className="text-neutral-300">Final Score: 95</span><br />
                <span className="text-neutral-300">Status: Passed</span>
              </div>
            </div>
          </section>

          {/* Section 3: Essential Input & Output Techniques */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Essential I/O Functions & Tricks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                <code className="text-red-400 text-xs">int(input()) / float(input())</code>
                <p className="text-neutral-500 text-xs mt-2">Explicitly casts string inputs into numerical types.</p>
              </div>
              <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                <code className="text-red-400 text-xs">input().split()</code>
                <p className="text-neutral-500 text-xs mt-2">Splits multiple space-separated input tokens into a list.</p>
              </div>
              <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                <code className="text-red-400 text-xs">f"text &#123;var&#125;"</code>
                <p className="text-neutral-500 text-xs mt-2">F-strings provide modern and ultra-fast string formatting.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Visual Flow */}
          <section className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl text-center">
            <h3 className="text-white font-semibold mb-6">Python Data Flow</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded text-blue-400 font-mono mb-2">input()</div>
                <span className="text-xs text-neutral-500">Standard Input Stream (stdin)</span>
              </div>
              <div className="hidden md:block text-neutral-700 text-3xl">→</div>
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-red-500/10 border border-red-500/50 rounded text-red-400 font-mono mb-2">print()</div>
                <span className="text-xs text-neutral-500">Standard Output Stream (stdout)</span>
              </div>
            </div>
          </section>
        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          {/* Previous Lesson Button */}
          <Link href="/langroadmap/python/phase1/variables">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Variables & Data Types in Python
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Next Lesson Button */}
          <Link href="/langroadmap/python/phase1/operators">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-right"
            >
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Operators & Expressions in Python
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-red-500" />
              </div>
            </motion.div>
          </Link>
        </div>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors border border-red-500/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}