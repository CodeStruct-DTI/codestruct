"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Cpu, Binary, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonHeapLesson() {
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
            Heap Queue (<span className="text-red-600">heapq_</span>)
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master priority-based data structures in Python using the built-in <code>heapq</code> module. Learn min-heap operations, custom heap patterns, and optimal top-K algorithms.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Min-Heap Fundamentals */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Binary className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Min-Heap Basics</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python&apos;s <code>heapq</code> module provides an implementation of the <strong>Min-Heap</strong> algorithm using standard <code>list</code> structures. In a min-heap, the smallest element is always maintained at the root position (index <code>0</code>), enabling fast $O(1)$ access and $O(\log N)$ pushes and pops.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">import</span> heapq<br/><br/>

              numbers = [<span className="text-blue-400">20, 1, 8, 5, 3</span>]<br/>
              heapq.heapify(numbers) <span className="text-neutral-500"># In-place conversion to min-heap in O(N) time</span><br/><br/>

              <span className="text-yellow-400">print</span>(numbers[<span className="text-blue-400">0</span>]) <span className="text-neutral-500"># Output: 1 (Smallest element always at index 0)</span><br/><br/>

              heapq.heappush(numbers, <span className="text-blue-400">2</span>) <span className="text-neutral-500"># O(log N) insertion</span><br/>
              smallest = heapq.heappop(numbers) <span className="text-neutral-500"># O(log N) extract min</span>
            </div>
          </section>

          {/* 2. Max-Heap Workaround */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Max-Heap Pattern</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Because <code>heapq</code> only supports min-heaps natively, you create a <strong>Max-Heap</strong> by multiplying numerical values by <code>-1</code> when pushing and popping from the heap.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">import</span> heapq<br/><br/>

              max_heap = []<br/>
              values = [<span className="text-blue-400">10, 50, 20, 40</span>]<br/><br/>

              <span className="text-neutral-500"># Invert values for Max-Heap simulation</span><br/>
              <span className="text-red-500">for</span> val <span className="text-red-500">in</span> values:<br/>
              &nbsp;&nbsp;heapq.heappush(max_heap, -val)<br/><br/>

              largest = -heapq.heappop(max_heap) <span className="text-neutral-500"># Output: 50</span>
            </div>
          </section>

          {/* 3. Top-K Selection Utilities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Built-in Top-K Utilities</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <code>heapq</code> module provides optimized methods for finding the $K$ largest or smallest elements from any iterable without sorting the full collection.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-red-500">import</span> heapq<br/><br/>

              data = [<span className="text-blue-400">4, 1, 7, 3, 8, 5, 2, 9</span>]<br/><br/>

              <span className="text-neutral-500"># Get 3 largest elements: [9, 8, 7]</span><br/>
              top3_max = heapq.nlargest(<span className="text-blue-400">3</span>, data)<br/><br/>

              <span className="text-neutral-500"># Get 3 smallest elements: [1, 2, 3]</span><br/>
              top3_min = heapq.nsmallest(<span className="text-blue-400">3</span>, data)
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Min-Heap Behavior:</span> Python lists transformed with <code>heapq.heapify()</code> keep the minimum element at index 0.</li>
                 <li><span className="text-red-500 font-bold">Time Complexity:</span> Heapify takes $O(N)$, push/pop operations take $O(\log N)$, and root access takes $O(1)$.</li>
                 <li><span className="text-red-500 font-bold">Max-Heap Strategy:</span> Negate numerical values before pushing to simulate max-heap ordering.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase3/dictionaries-sets" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Dictionaries &amp; Sets</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase3/stack-queue" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Stack &amp; Queue in Python</span>
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