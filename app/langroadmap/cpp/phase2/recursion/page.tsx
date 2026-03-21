"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, GitMerge, StopCircle, RefreshCcw, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RecursionLesson() {
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
          href="/langroadmap/cpp"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            C++ <span className="text-red-600">Recursion_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            A deep dive into functions that call themselves. Learn how to break complex problems into smaller, repeatable tasks using base and recursive cases.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. What is Recursion? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <RefreshCcw className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">1. Recursion in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              <strong>Recursion</strong> is a method in C++ where a function calls itself to solve a problem. Instead of solving the whole problem at once, the function solves a small part of the problem and then calls itself to solve the remaining part. This process continues until a stopping condition is reached. Recursion is extremely useful for problems that can be broken into smaller, similar sub-problems, such as factorials or tree traversals.
            </p>
            
          </section>

          {/* 2. Base Case */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <StopCircle className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. Base Case</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <strong>Base Case</strong> is the condition that stops the recursive function. When the base condition becomes true, the function stops calling itself and returns a value. Without a base case, the function would keep calling itself forever, eventually leading to a <strong>Stack Overflow</strong> error.
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6">
              <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Base Case Syntax</h4>
              <div className="text-blue-400 font-mono text-sm leading-7">
                if (condition) &#123;<br/>
                &nbsp;&nbsp;return value; // Stops the recursion<br/>
                &#125;
              </div>
            </div>
          </section>

          {/* 3. Recursive Case */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <GitMerge className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">3. Recursive Case</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <strong>Recursive Case</strong> is the part where the function calls itself with a smaller or simpler input. Each time the function calls itself, the problem becomes smaller, moving closer and closer until the base case is finally reached.
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6">
              <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Recursive Case Syntax</h4>
              <div className="text-blue-400 font-mono text-sm leading-7">
                else &#123;<br/>
                &nbsp;&nbsp;return functionName(smaller_input); // Moves toward base case<br/>
                &#125;
              </div>
            </div>
          </section>

          {/* 4. General Syntax & Implementation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Terminal className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">4. General Syntax of Recursion</h2>
            </div>
            
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>

              <span className="text-red-500">int</span> <span className="text-yellow-400">factorial</span>(<span className="text-red-500">int</span> n) &#123;<br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Base Case</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">if</span> (n &lt;= <span className="text-blue-400">1</span>) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">1</span>;<br/>
              &nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Recursive Case</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">else</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> n * <span className="text-yellow-400">factorial</span>(n - <span className="text-blue-400">1</span>);<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;<br/><br/>

              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-yellow-400">factorial</span>(<span className="text-blue-400">5</span>); <span className="text-neutral-500">// Output: 120</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                120
                <span className="text-neutral-500 block mt-4 italic">// How it works:</span>
                <span className="text-blue-400">5 * (4 * (3 * (2 * (1)))) = 120</span>
            </div>

            <div className="mt-10 bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Recursion:</span> A function calling itself.</li>
                 <li><span className="text-red-500 font-bold">Base Case:</span> The condition that stops the recursion.</li>
                 <li><span className="text-red-500 font-bold">Recursive Case:</span> The step where the function calls itself again with a simpler input.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase2/functions" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Functions in C++</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/phase2/arrays-strings" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Arrays & Strings in C++</span>
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