"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Layers, Type, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonListsTuplesLesson() {
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
            Lists & <span className="text-red-600">Tuples_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Learn to manage collections of data in Python. From dynamic, mutable lists to lightweight, immutable tuples.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Lists in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Lists in Python</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              In Python, <strong>lists</strong> are ordered, mutable sequences that can store items of mixed data types. Unlike traditional fixed-size arrays, Python lists dynamic-resize automatically as you add or remove elements.
            </p>

            {/* List Operations & Iteration */}
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-red-500 italic">A. Declaring & Iterating Lists</h3>
              <p className="text-neutral-300 leading-7">
                You can iterate over lists using simple loops or leverage Python&apos;s built-in <code>len()</code> function and negative indexing to access elements from the end.
              </p>
              
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                nums = [<span className="text-blue-400">10, 20, 30</span>]<br/><br/>
                
                <span className="text-neutral-500"># 1. Iterating with index using enumerate()</span><br/>
                <span className="text-red-500">for</span> i, val <span className="text-red-500">in</span> <span className="text-yellow-400">enumerate</span>(nums):<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Index &#123;i&#125;: &#123;val&#125;&quot;</span>)<br/><br/>

                <span className="text-neutral-500"># 2. Direct iteration (For-Each)</span><br/>
                <span className="text-red-500">for</span> n <span className="text-red-500">in</span> nums:<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">print</span>(n, end=<span className="text-orange-400">&quot; &quot;</span>)
              </div>
            </div>

            {/* Multi-Dimensional Lists */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-bold text-red-500 italic">B. Nested Lists</h3>
              <p className="text-neutral-300 leading-7">
                Python supports multi-dimensional structures by nesting lists inside lists.
              </p>
              
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                matrix = [<br/>
                &nbsp;&nbsp;[<span className="text-blue-400">1, 2, 3</span>],<br/>
                &nbsp;&nbsp;[<span className="text-blue-400">4, 5, 6</span>]<br/>
                ]<br/><br/>

                <span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Value at [1][0]: &#123;matrix[1][0]&#125;&quot;</span>) <span className="text-neutral-500"># Output: 4</span>
              </div>
            </div>
          </section>

          {/* 2. Tuples in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Type className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. Tuples in Python</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <code>tuple</code> is an ordered collection that is <strong>immutable</strong>, meaning once created, its elements cannot be changed, added, or removed. Tuples are declared using parentheses <code>()</code> and are memory-efficient alternatives to lists.
            </p>
          </section>

          {/* 3. List & Tuple Operations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Code2 className="text-red-600 w-8 h-8" />
               <h2 className="text-2xl font-bold text-white m-0 text-red-500 italic">Common Collection Operations</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python provides powerful built-in methods and syntax features like slicing and unpacking for working with sequences.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 my-6 shadow-2xl">
              text_list = [<span className="text-orange-400">&quot;Python&quot;</span>, <span className="text-orange-400">&quot;Code&quot;</span>, <span className="text-orange-400">&quot;Struct&quot;</span>]<br/>
              point_tuple = (<span className="text-blue-400">10</span>, <span className="text-blue-400">20</span>)<br/><br/>
              
              <span className="text-neutral-500"># 1. Modifying List vs Tuple</span><br/>
              text_list.append(<span className="text-orange-400">&quot;Rocks&quot;</span>) <span className="text-neutral-500"># Valid</span><br/>
              <span className="text-neutral-500"># point_tuple[0] = 15  # Raises TypeError: immutable</span><br/><br/>

              <span className="text-neutral-500"># 2. Slicing</span><br/>
              sub_list = text_list[<span className="text-blue-400">0</span>:<span className="text-blue-400">2</span>] <span className="text-neutral-500"># [&apos;Python&apos;, &apos;Code&apos;]</span><br/><br/>

              <span className="text-neutral-500"># 3. Tuple Unpacking</span><br/>
              x, y = point_tuple
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Dynamic Lists:</span> Python lists are mutable, dynamically sized arrays that allow element modifications and mixed data types.</li>
                 <li><span className="text-red-500 font-bold">Immutability:</span> Tuples cannot be modified after creation, offering performance optimization and data safety.</li>
                 <li><span className="text-red-500 font-bold">Slicing &amp; Unpacking:</span> Native sequence operations allow quick subset extraction (<code>list[start:stop]</code>) and multi-variable assignments.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase2/recursion" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Recursion in Python</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase2/references-memory" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">References &amp; Memory in Python</span>
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