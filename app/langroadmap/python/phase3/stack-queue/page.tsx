"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Layers, RefreshCw, Layers3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonStackQueueLesson() {
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
            Stack & <span className="text-red-600">Queue_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Learn linear data structure operations in Python. Implement LIFO Stacks with standard lists and high-performance FIFO Queues using <code>collections.deque</code>.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Stacks in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Stacks (LIFO - Last In, First Out)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>Stack</strong> operates on a Last-In, First-Out (LIFO) order. Python&apos;s standard <code>list</code> is the ideal structure for a stack, providing $O(1)$ amortized push (<code>append</code>) and pop operations from the end of the list.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              stack = []<br/><br/>

              <span className="text-neutral-500"># Push operations - O(1)</span><br/>
              stack.append(<span className="text-orange-400">&quot;page_1&quot;</span>)<br/>
              stack.append(<span className="text-orange-400">&quot;page_2&quot;</span>)<br/>
              stack.append(<span className="text-orange-400">&quot;page_3&quot;</span>)<br/><br/>

              <span className="text-neutral-500"># Peek at top element - O(1)</span><br/>
              top_element = stack[-<span className="text-blue-400">1</span>] <span className="text-neutral-500"># &quot;page_3&quot;</span><br/><br/>

              <span className="text-neutral-500"># Pop operation - O(1)</span><br/>
              last_visited = stack.pop() <span className="text-neutral-500"># Output: &quot;page_3&quot;</span>
            </div>
          </section>

          {/* 2. Queues in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Queues (FIFO - First In, First Out)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>Queue</strong> follows a First-In, First-Out (FIFO) pattern. Avoid using standard lists for queues, as <code>list.pop(0)</code> takes $O(N)$ time due to memory shifts. Instead, use <code>collections.deque</code> (Double-Ended Queue) for fast $O(1)$ operations at both ends.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">from</span> collections <span className="text-red-500">import</span> deque<br/><br/>

              queue = deque([<span className="text-orange-400">&quot;user_1&quot;</span>, <span className="text-orange-400">&quot;user_2&quot;</span>])<br/><br/>

              <span className="text-neutral-500"># Enqueue (push to right) - O(1)</span><br/>
              queue.append(<span className="text-orange-400">&quot;user_3&quot;</span>)<br/><br/>

              <span className="text-neutral-500"># Dequeue (pop from left) - O(1)</span><br/>
              first_in_line = queue.popleft() <span className="text-neutral-500"># Output: &quot;user_1&quot;</span>
            </div>
          </section>

          {/* 3. Double-Ended Queue (Deque) Features */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Layers3 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Advanced Deque Capabilities</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <code>deque</code> object also supports bounded capacity via <code>maxlen</code>, which automatically drops old items when full—making it ideal for sliding-window buffers.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-red-500">from</span> collections <span className="text-red-500">import</span> deque<br/><br/>

              <span className="text-neutral-500"># Fixed-size buffer maintaining last 3 entries</span><br/>
              recent_logs = deque(maxlen=<span className="text-blue-400">3</span>)<br/>
              recent_logs.extend([<span className="text-blue-400">101, 102, 103</span>])<br/>
              recent_logs.append(<span className="text-blue-400">104</span>) <span className="text-neutral-500"># Automatically drops 101</span><br/><br/>

              <span className="text-yellow-400">print</span>(recent_logs) <span className="text-neutral-500"># deque([102, 103, 104], maxlen=3)</span>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">LIFO Stack:</span> Use standard Python lists with <code>append()</code> and <code>pop()</code> for optimal $O(1)$ stack performance.</li>
                 <li><span className="text-red-500 font-bold">FIFO Queue:</span> Use <code>collections.deque</code> with <code>append()</code> and <code>popleft()</code> to avoid $O(N)$ array shifts.</li>
                 <li><span className="text-red-500 font-bold">Bounded Buffers:</span> Use <code>deque(maxlen=K)</code> for automatic fixed-size circular buffers.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase3/heap" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Heap (heapq)</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase3/sorting" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Sorting in Python</span>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}