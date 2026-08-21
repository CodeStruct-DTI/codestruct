"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, ArrowUpDown, KeyRound, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonSortingLesson() {
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
            Sorting in <span className="text-red-600">Python_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master sorting techniques in Python using the Timsort algorithm. Understand the difference between <code>sorted()</code> and <code>.sort()</code>, custom key functions, and multi-level sorting patterns.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. sorted() vs .sort() */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ArrowUpDown className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. sorted() vs. list.sort()</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python provides two ways to sort collections: the <code>sorted()</code> built-in function creates a <strong>new sorted list</strong> from any iterable, while <code>list.sort()</code> sorts a list <strong>in-place</strong> and returns <code>None</code> to save memory.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              nums = [<span className="text-blue-400">4, 2, 9, 1</span>]<br/><br/>

              <span className="text-neutral-500"># 1. Out-of-place sorting (Returns new list)</span><br/>
              new_sorted = <span className="text-yellow-400">sorted</span>(nums, reverse=<span className="text-red-500">True</span>) <span className="text-neutral-500"># [9, 4, 2, 1]</span><br/>
              <span className="text-yellow-400">print</span>(nums) <span className="text-neutral-500"># Output: [4, 2, 9, 1] (Original preserved)</span><br/><br/>

              <span className="text-neutral-500"># 2. In-place sorting (Modifies list directly)</span><br/>
              nums.sort()<br/>
              <span className="text-yellow-400">print</span>(nums) <span className="text-neutral-500"># Output: [1, 2, 4, 9]</span>
            </div>
          </section>

          {/* 2. Custom Key Functions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <KeyRound className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Custom Sorting with `key`</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <code>key</code> parameter accepts a function that transforms each element before comparison. You can pass lambda functions or built-in functions like <code>len</code> or <code>str.lower</code>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              words = [<span className="text-orange-400">&quot;banana&quot;</span>, <span className="text-orange-400">&quot;fig&quot;</span>, <span className="text-orange-400">&quot;apple&quot;</span>, <span className="text-orange-400">&quot;date&quot;</span>]<br/><br/>

              <span className="text-neutral-500"># Sort by string length ascending</span><br/>
              words.sort(key=<span className="text-yellow-400">len</span>)<br/>
              <span className="text-yellow-400">print</span>(words) <span className="text-neutral-500"># Output: [&apos;fig&apos;, &apos;date&apos;, &apos;apple&apos;, &apos;banana&apos;]</span><br/><br/>

              <span className="text-neutral-500"># Sort case-insensitively</span><br/>
              mixed = [<span className="text-orange-400">&quot;b&quot;</span>, <span className="text-orange-400">&quot;A&quot;</span>, <span className="text-orange-400">&quot;c&quot;</span>]<br/>
              sorted_mixed = <span className="text-yellow-400">sorted</span>(mixed, key=<span className="text-yellow-400">str.lower</span>) <span className="text-neutral-500"># [&apos;A&apos;, &apos;b&apos;, &apos;c&apos;]</span>
            </div>
          </section>

          {/* 3. Multi-Attribute & Tuple Sorting */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Multi-Criteria Sorting</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              To sort by multiple criteria, return a <strong>tuple</strong> from your key function. Python evaluates tuple elements sequentially from left to right.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              students = [<br/>
              &nbsp;&nbsp;&#123;<span className="text-orange-400">&quot;name&quot;</span>: <span className="text-orange-400">&quot;Alice&quot;</span>, <span className="text-orange-400">&quot;score&quot;</span>: <span className="text-blue-400">85</span>, <span className="text-orange-400">&quot;age&quot;</span>: <span className="text-blue-400">20</span>&#125;,<br/>
              &nbsp;&nbsp;&#123;<span className="text-orange-400">&quot;name&quot;</span>: <span className="text-orange-400">&quot;Bob&quot;</span>, <span className="text-orange-400">&quot;score&quot;</span>: <span className="text-blue-400">95</span>, <span className="text-orange-400">&quot;age&quot;</span>: <span className="text-blue-400">19</span>&#125;,<br/>
              &nbsp;&nbsp;&#123;<span className="text-orange-400">&quot;name&quot;</span>: <span className="text-orange-400">&quot;Charlie&quot;</span>, <span className="text-orange-400">&quot;score&quot;</span>: <span className="text-blue-400">85</span>, <span className="text-orange-400">&quot;age&quot;</span>: <span className="text-blue-400">18</span>&#125;<br/>
              ]<br/><br/>

              <span className="text-neutral-500"># Sort by score descending (-score), then by age ascending</span><br/>
              students.sort(key=<span className="text-red-500">lambda</span> s: (-s[<span className="text-orange-400">&quot;score&quot;</span>], s[<span className="text-orange-400">&quot;age&quot;</span>]))
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Algorithm & Complexity:</span> Python uses Timsort, offering stable $O(N \log N)$ worst-case performance and $O(N)$ best-case for nearly sorted data.</li>
                 <li><span className="text-red-500 font-bold">In-Place vs. Copy:</span> Use <code>list.sort()</code> to mutate lists in memory; use <code>sorted()</code> when you need to preserve original inputs or sort non-list iterables.</li>
                 <li><span className="text-red-500 font-bold">Tuple Keys:</span> Return tuples in `key` parameters for complex, multi-attribute ordering rules.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase3/stack-queue" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Stack &amp; Queue</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase4/oop" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">OOP in Phase-4 of Python</span>
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