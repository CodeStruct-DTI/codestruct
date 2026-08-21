"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Code2, Zap, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonComprehensionsLambdaLesson() {
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
            Comprehensions &amp; <span className="text-red-600">Lambda_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Write clean, idiomatic Python code. Master list, dictionary, and set comprehensions alongside anonymous lambda functions and functional tools like <code>map()</code> and <code>filter()</code>.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. List, Dict & Set Comprehensions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Collection Comprehensions</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Comprehensions provide a concise syntax for constructing new collections from existing iterables. They combine loops and conditional filtering into a single readable line.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              nums = [<span className="text-blue-400">1, 2, 3, 4, 5, 6</span>]<br/><br/>

              <span className="text-neutral-500"># 1. List Comprehension: Squares of even numbers</span><br/>
              even_squares = [x**<span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> nums <span className="text-red-500">if</span> x % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>] <span className="text-neutral-500"># [4, 16, 36]</span><br/><br/>

              <span className="text-neutral-500"># 2. Dictionary Comprehension: Key to value mapping</span><br/>
              square_map = &#123;x: x**<span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> nums&#125; <span className="text-neutral-500"># &#123;1: 1, 2: 4, ...&#125;</span><br/><br/>

              <span className="text-neutral-500"># 3. Set Comprehension: Deduplicated values</span><br/>
              unique_lengths = &#123;<span className="text-yellow-400">len</span>(word) <span className="text-red-500">for</span> word <span className="text-red-500">in</span> [<span className="text-orange-400">&quot;aa&quot;</span>, <span className="text-orange-400">&quot;b&quot;</span>, <span className="text-orange-400">&quot;cc&quot;</span>]&#125; <span className="text-neutral-500"># &#123;1, 2&#125;</span>
            </div>
          </section>

          {/* 2. Anonymous Lambda Functions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Lambda Expressions</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Lambda functions are small, anonymous functions defined with the <code>lambda</code> keyword. They can accept any number of arguments but are restricted to evaluating a <strong>single expression</strong>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500"># Standard function equivalence</span><br/>
              <span className="text-red-500">def</span> <span className="text-yellow-400">add</span>(a, b):<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> a + b<br/><br/>

              <span className="text-neutral-500"># Lambda variant</span><br/>
              add_lambda = <span className="text-red-500">lambda</span> a, b: a + b<br/>
              <span className="text-yellow-400">print</span>(add_lambda(<span className="text-blue-400">5</span>, <span className="text-blue-400">10</span>)) <span className="text-neutral-500"># Output: 15</span>
            </div>
          </section>

          {/* 3. Functional Patterns: map() & filter() */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Filter className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Map, Filter, and Generators</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Lambdas excel as inline callbacks for higher-order functions like <code>map()</code> and <code>filter()</code>. However, generator expressions are generally preferred in modern Python for memory efficiency.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              data = [<span className="text-blue-400">1, 2, 3, 4, 5</span>]<br/><br/>

              <span className="text-neutral-500"># Using map() and filter() with lambda</span><br/>
              doubled_evens = <span className="text-yellow-400">map</span>(<span className="text-red-500">lambda</span> x: x * <span className="text-blue-400">2</span>, <span className="text-yellow-400">filter</span>(<span className="text-red-500">lambda</span> x: x % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>, data))<br/>
              <span className="text-yellow-400">print</span>(<span className="text-yellow-400">list</span>(doubled_evens)) <span className="text-neutral-500"># [4, 8]</span><br/><br/>

              <span className="text-neutral-500"># Generator Expression (Lazy Evaluation - O(1) Memory)</span><br/>
              gen = (x * <span className="text-blue-400">2</span> <span className="text-red-500">for</span> x <span className="text-red-500">in</span> data <span className="text-red-500">if</span> x % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>)<br/>
              <span className="text-yellow-400">print</span>(<span className="text-yellow-400">next</span>(gen)) <span className="text-neutral-500"># Output: 4</span>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Comprehensions:</span> Use list, dict, and set comprehensions for clean, fast transformations instead of manual <code>for</code> loops.</li>
                 <li><span className="text-red-500 font-bold">Lambda Usage:</span> Reserve <code>lambda</code> for single-expression throwaway functions (e.g., key functions for <code>sort()</code>).</li>
                 <li><span className="text-red-500 font-bold">Generator Expressions:</span> Use round parentheses <code>(x for x in iterable)</code> to build lazy iterators that process elements on demand with minimal memory usage.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase4/exception-handling" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Exception Handling</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase4/file-handling" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">File Handling</span>
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