"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, ShieldAlert, AlertTriangle, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonExceptionHandlingLesson() {
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
            Exception <span className="text-red-600">Handling_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Build resilient Python programs. Learn to catch runtime errors with <code>try-except</code> blocks, utilize <code>else</code> and <code>finally</code> clauses, raise custom exceptions, and define custom exception hierarchies.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Try-Except Blocks */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Basic Error Trapping</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Exceptions interrupt standard execution flow when runtime errors occur. Wrap risky code inside a <code>try</code> block and handle specific failure modes with targeted <code>except</code> blocks rather than catching generic exceptions.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">def</span> <span className="text-yellow-400">safe_divide</span>(a: <span className="text-yellow-400">float</span>, b: <span className="text-yellow-400">float</span>) -&gt; <span className="text-yellow-400">float</span>:<br/>
              &nbsp;&nbsp;<span className="text-red-500">try</span>:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;result = a / b<br/>
              &nbsp;&nbsp;<span className="text-red-500">except</span> <span className="text-yellow-400">ZeroDivisionError</span> <span className="text-red-500">as</span> err:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Error caught: &#123;err&#125;&quot;</span>)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0.0</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">except</span> (<span className="text-yellow-400">TypeError</span>, <span className="text-yellow-400">ValueError</span>) <span className="text-red-500">as</span> err:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Invalid input type: &#123;err&#125;&quot;</span>)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0.0</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> result
            </div>
          </section>

          {/* 2. Full Control Flow: else & finally */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. The `else` and `finally` Clauses</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <code>else</code> block executes only if <strong>no exceptions were raised</strong> in the <code>try</code> block. The <code>finally</code> block executes <strong>unconditionally</strong>, making it suitable for resource cleanup like closing network sockets or file descriptors.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">try</span>:<br/>
              &nbsp;&nbsp;file = <span className="text-yellow-400">open</span>(<span className="text-orange-400">&quot;data.txt&quot;</span>, <span className="text-orange-400">&quot;r&quot;</span>)<br/>
              &nbsp;&nbsp;content = file.read()<br/>
              <span className="text-red-500">except</span> <span className="text-yellow-400">FileNotFoundError</span>:<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">&quot;Target file missing.&quot;</span>)<br/>
              <span className="text-red-500">else</span>:<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">f&quot;Successfully read &#123;len(content)&#125; bytes.&quot;</span>)<br/>
              <span className="text-red-500">finally</span>:<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">print</span>(<span className="text-orange-400">&quot;Execution finished. Cleaning up connection states.&quot;</span>)
            </div>
          </section>

          {/* 3. Raising & Custom Exceptions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Raising Custom Exceptions</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Trigger errors manually using the <code>raise</code> keyword. Create domain-specific error classes by inheriting from the built-in <code>Exception</code> class.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-neutral-500"># Define custom Exception domain class</span><br/>
              <span className="text-red-500">class</span> <span className="text-yellow-400">InsufficientFundsError</span>(<span className="text-yellow-400">Exception</span>):<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-red-500">self</span>, balance: <span className="text-yellow-400">float</span>, amount: <span className="text-yellow-400">float</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">super</span>().__init__(<span className="text-orange-400">f&quot;Cannot withdraw &#123;amount&#125; with balance &#123;balance&#125;&quot;</span>)<br/><br/>

              <span className="text-neutral-500"># Usage in application logic</span><br/>
              <span className="text-red-500">def</span> <span className="text-yellow-400">withdraw</span>(balance: <span className="text-yellow-400">float</span>, amount: <span className="text-yellow-400">float</span>):<br/>
              &nbsp;&nbsp;<span className="text-red-500">if</span> amount &gt; balance:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">raise</span> <span className="text-yellow-400">InsufficientFundsError</span>(balance, amount)<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> balance - amount
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Explicit Handling:</span> Catch specific runtime exceptions (e.g., <code>KeyError</code>, <code>ValueError</code>) instead of bare <code>except:</code> clauses.</li>
                 <li><span className="text-red-500 font-bold">Control Flow:</span> Use <code>else</code> for code that depends on the <code>try</code> block succeeding, and <code>finally</code> for mandatory cleanup.</li>
                 <li><span className="text-red-500 font-bold">Domain Errors:</span> Derive custom application exceptions from standard <code>Exception</code> classes to signal specific validation or domain state failures.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase4/oop" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">OOP (Classes &amp; Objects)</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase4/comprehensions-lambda" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">List Comprehensions &amp; Lambda</span>
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