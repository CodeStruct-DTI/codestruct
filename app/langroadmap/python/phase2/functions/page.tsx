"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonFunctionsLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans text-[18px]">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Brand Header */}
        <Link href="/">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
              CodeStruct_
            </span>
          </motion.div>
        </Link>

        {/* Navigation */}
        <Link
          href="/langroadmap/python"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Python Roadmap
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Python <span className="text-red-600">Functions_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The building blocks of Python logic: learning how to define, call, and pass data through modular, first-class functions.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Understanding Functions */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">1. Understanding Functions</h2>
            <p className="text-neutral-300 leading-8">
              In Python, reusable blocks of code are defined as <strong>Functions</strong>. Unlike Java, where every method must belong to a class, Python functions can exist independently at the top level of a module. Python treats functions as <strong>first-class objects</strong>, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
            </p>
          </section>

          {/* 2. Syntax & Key Components */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">2. Syntax & Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-[16px]">
              <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Function Structure</h4>
                <div className="text-blue-400 font-mono text-sm leading-7">
                  <span className="text-red-500">def</span> function_name(parameters):<br/>
                  &nbsp;&nbsp;<span className="text-neutral-500">"""Optional docstring"""</span><br/>
                  &nbsp;&nbsp;<span className="text-neutral-500"># Function Body</span><br/>
                  &nbsp;&nbsp;<span className="text-red-500">return</span> value
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">def Keyword:</strong> Declares the start of a function definition.
                </p>
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">Parameters:</strong> Variables accepted as inputs (supports positional, default, and keyword arguments).
                </p>
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">Return Statement:</strong> Passes back a value (or multiple values as a tuple). Returns <code>None</code> by default if omitted.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Example Implementation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">3. Example Implementation</h2>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-neutral-500"># Function to check even numbers</span><br />
              <span className="text-red-500">def</span> <span className="text-yellow-400">is_even</span>(num: <span className="text-blue-400">int</span>) -&gt; <span className="text-blue-400">bool</span>:<br />
              &nbsp;&nbsp;<span className="text-red-500">return</span> num % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span><br /><br />

              <span className="text-red-500">def</span> <span className="text-yellow-400">main</span>():<br />
              &nbsp;&nbsp;n = <span className="text-blue-400">24</span><br />
              &nbsp;&nbsp;<span className="text-red-500">if</span> <span className="text-yellow-400">is_even</span>(n):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-orange-400">f"&#123;n&#125; is even."</span>)<br /><br />

              <span className="text-red-500">if</span> __name__ == <span className="text-orange-400">"__main__"</span>:<br />
              &nbsp;&nbsp;<span className="text-yellow-400">main</span>()
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              24 is even.
            </div>
          </section>

          {/* 4. Memory Behavior: Pass by Object Reference */}
          <section className="space-y-10">
            <h2 className="text-2xl font-semibold text-white italic decoration-red-600/50">4. Memory & Parameter Passing</h2>
            
            <div className="space-y-4">
              <p className="text-neutral-300 leading-7">
                Python uses <strong>Pass-by-Assignment</strong> (or Pass-by-Object-Reference). Parameters are bound to objects in memory; behavior depends entirely on whether the object passed is mutable or immutable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                    <h3 className="text-white text-lg font-bold mb-2">Immutable Objects</h3>
                    <p className="text-neutral-400 text-sm mb-4">Passing an <code>int</code>, <code>str</code>, or <code>tuple</code> prevents modifications inside the function from changing the caller's variable.</p>
                </div>
                <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                    <h3 className="text-white text-lg font-bold mb-2">Mutable Objects</h3>
                    <p className="text-neutral-400 text-sm mb-4">Passing a <code>list</code>, <code>dict</code>, or <code>set</code> passes a reference to the same memory object, so in-place mutations will affect the original.</p>
                </div>
              </div>
            </div>

            {/* Pass by Assignment Comparison */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-red-500">def</span> <span className="text-yellow-400">modify</span>(x):<br/>
              &nbsp;&nbsp;x = <span className="text-blue-400">100</span> <span className="text-neutral-500"># Rebinds local name 'x' to a new int object</span><br/><br/>
              
              num = <span className="text-blue-400">10</span><br/>
              <span className="text-yellow-400">modify</span>(num)<br/>
              print(num) <span className="text-neutral-500"># Still prints 10</span>
            </div>
          </section>

        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10 text-[16px]">
            <Link href="/langroadmap/python/phase1/control-flow">
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
                    Control Flow in Phase-1 of Python
                    </span>
                </div>
                </motion.div>
            </Link>

            <Link href="/langroadmap/python/phase2/recursion">
                <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 group cursor-pointer"
                >
                <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                    <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    Recursion in Python
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-red-500" />
                </div>
                </motion.div>
            </Link>
        </div>
      </main>

      {/* Back to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}