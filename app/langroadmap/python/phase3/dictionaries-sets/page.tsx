"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Zap, Hash, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonDictionariesSetsLesson() {
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
            Dictionaries & <span className="text-red-600">Sets_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master Python&apos;s hash-based collections. Learn key-value mapping with Dictionaries and high-performance unique set operations.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Dictionaries in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Hash className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Dictionaries (Key-Value Maps)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>dictionary</strong> (<code>dict</code>) in Python is an ordered, mutable collection of key-value pairs. Under the hood, Python uses a hash table structure, offering fast constant-time average access ($O(1)$) by key. Keys must be immutable types (strings, numbers, tuples).
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500"># Declaration &amp; Access</span><br/>
              user = &#123;<span className="text-orange-400">&quot;username&quot;</span>: <span className="text-orange-400">&quot;alex99&quot;</span>, <span className="text-orange-400">&quot;role&quot;</span>: <span className="text-orange-400">&quot;admin&quot;</span>, <span className="text-orange-400">&quot;level&quot;</span>: <span className="text-blue-400">5</span>&#125;<br/><br/>

              <span className="text-neutral-500"># Safe lookup with .get() to avoid KeyError</span><br/>
              role = user.get(<span className="text-orange-400">&quot;role&quot;</span>, <span className="text-orange-400">&quot;guest&quot;</span>)<br/><br/>

              <span className="text-neutral-500"># Iterating over key-value pairs</span><br/>
              <span className="text-red-500">for</span> key, value <span className="text-red-500">in</span> user.items():<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;&#123;key&#125; -&gt; &#123;value&#125;&quot;</span>)
            </div>
          </section>

          {/* 2. Sets in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Sets (Unique Collections)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <code>set</code> is an unordered collection of unique, hashable items. Sets automatically filter out duplicate values and enable fast mathematical set operations like unions, intersections, and differences.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              set_a = &#123;<span className="text-blue-400">1, 2, 3, 4</span>&#125;<br/>
              set_b = &#123;<span className="text-blue-400">3, 4, 5, 6</span>&#125;<br/><br/>

              <span className="text-neutral-500"># Set Operations</span><br/>
              union_set = set_a | set_b        <span className="text-neutral-500"># &#123;1, 2, 3, 4, 5, 6&#125;</span><br/>
              intersect_set = set_a &amp; set_b    <span className="text-neutral-500"># &#123;3, 4&#125;</span><br/>
              diff_set = set_a - set_b         <span className="text-neutral-500"># &#123;1, 2&#125;</span>
            </div>
          </section>

          {/* 3. Dict & Set Comprehensions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Comprehensions</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Similar to list comprehensions, Python provides concise syntax for dynamically generating dictionaries and sets.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-neutral-500"># Dictionary Comprehension</span><br/>
              squares_dict = &#123;x: x**<span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> <span className="text-yellow-400">range</span>(<span className="text-blue-400">5</span>)&#125;  <span className="text-neutral-500"># &#123;0: 0, 1: 1, 2: 4, 3: 9, 4: 16&#125;</span><br/><br/>

              <span className="text-neutral-500"># Set Comprehension</span><br/>
              even_squares = &#123;x**<span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> <span className="text-yellow-400">range</span>(<span className="text-blue-400">10</span>) <span className="text-red-500">if</span> x % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>&#125;
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Dictionaries:</span> Store key-value mappings with insertion order maintained (since Python 3.7+). Fast $O(1)$ lookups.</li>
                 <li><span className="text-red-500 font-bold">Sets:</span> Store unique elements without duplicates; ideal for quick existence checks (`x in set`) and set math.</li>
                 <li><span className="text-red-500 font-bold">Hashability:</span> Keys in dicts and elements in sets must be immutable/hashable types (integers, strings, tuples).</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase2/references-memory" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">References &amp; Memory</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase3/heap" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Heap (heapq) in Python</span>
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