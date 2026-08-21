"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Sparkles, Repeat, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonDecoratorsGeneratorsLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
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
            Decorators &amp; <span className="text-red-600">Generators_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master advanced control flow in Python. Modify function behavior dynamically with Decorators and build memory-efficient stream processing pipelines using Generators.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Decorators */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Decorators (@syntax)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>Decorator</strong> is a higher-order function that takes another function as an argument, extends its behavior without modifying it directly, and returns a new function.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">import</span> time<br/>
              <span className="text-red-500">from</span> functools <span className="text-red-500">import</span> wraps<br/><br/>

              <span className="text-red-500">def</span> <span className="text-yellow-400">timer_decorator</span>(func):<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">@wraps</span>(func)<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">wrapper</span>(*args, **kwargs):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;start = time.perf_counter()<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;result = func(*args, **kwargs)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;end = time.perf_counter()<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Execution time: &#123;end - start:.4f&#125;s&quot;</span>)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> result<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> wrapper<br/><br/>

              <span className="text-yellow-400">@timer_decorator</span><br/>
              <span className="text-red-500">def</span> <span className="text-yellow-400">process_data</span>():<br/>
              &nbsp;&nbsp;[x**<span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> <span className="text-yellow-400">range</span>(<span className="text-blue-400">1000000</span>)]<br/><br/>

              process_data() <span className="text-neutral-500"># Triggers timer wrapping automatically</span>
            </div>
          </section>

          {/* 2. Generators & yield */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Repeat className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Generators &amp; yield</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              <strong>Generators</strong> yield items one at a time using the <code>yield</code> keyword instead of returning a complete array at once. They retain execution state between calls, allowing $O(1)$ memory usage during large iterations.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500"># Generator function producing an infinite stream</span><br/>
              <span className="text-red-500">def</span> <span className="text-yellow-400">fibonacci_stream</span>():<br/>
              &nbsp;&nbsp;a, b = <span className="text-blue-400">0</span>, <span className="text-blue-400">1</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">while</span> <span className="text-red-500">True</span>:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">yield</span> a<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a + b<br/><br/>

              fib = fibonacci_stream()<br/>
              <span className="text-yellow-400">print</span>(<span className="text-yellow-400">next</span>(fib)) <span className="text-neutral-500"># Output: 0</span><br/>
              <span className="text-yellow-400">print</span>(<span className="text-yellow-400">next</span>(fib)) <span className="text-neutral-500"># Output: 1</span><br/>
              <span className="text-yellow-400">print</span>(<span className="text-yellow-400">next</span>(fib)) <span className="text-neutral-500"># Output: 1</span>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Decorators:</span> Use <code>@wraps</code> from <code>functools</code> to preserve metadata when writing wrapper functions.</li>
                 <li><span className="text-red-500 font-bold">Generators:</span> Use <code>yield</code> over returning lists to evaluate values lazily, keeping memory overhead $O(1)$.</li>
                 <li><span className="text-red-500 font-bold">Use Cases:</span> Use decorators for cross-cutting concerns (logging, auth, timers) and generators for stream processing and large file parsing.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase4/file-handling" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">File Handling</span>
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}