"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Database, Share2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonMemoryLesson() {
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
            References & <span className="text-red-600">Memory_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Understand how Python manages data under the hood. Learn how variables act as object references, mutability affects memory, and automatic garbage collection works.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Stack vs Heap in Python */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Private Heap & Stack Memory</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              In Python, <strong>everything is an object</strong>. The Python interpreter (CPython) uses a <strong>Call Stack</strong> to keep track of function execution frames and variable names, while all actual data structures and objects are allocated dynamically in a <strong>Private Heap</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Stack Memory</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                  <li>Tracks execution contexts and function calls.</li>
                  <li>Holds local variable names (symbol table bindings).</li>
                  <li>Clears stack frames automatically as functions return.</li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Private Heap Memory</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                  <li>Stores all objects (integers, strings, lists, custom classes).</li>
                  <li>Managed internally by CPython&apos;s Memory Manager.</li>
                  <li>Freed continuously by reference counting & GC.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Object References */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Object References & Aliasing</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python variables do not contain data values directly; they are <strong>names that point to object references</strong> in memory. When you assign one variable to another, both point to the exact same object in the heap.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              list1 = [<span className="text-blue-400">10, 20, 30</span>]<br/>
              list2 = list1 <span className="text-neutral-500"># list2 points to the SAME object in memory as list1</span><br/><br/>
              
              list2.append(<span className="text-blue-400">40</span>)<br/>
              <span className="text-yellow-400">print</span>(list1) <span className="text-neutral-500"># Output: [10, 20, 30, 40] (Shared memory allocation)</span><br/>
              <span className="text-yellow-400">print</span>(list1 <span className="text-red-500">is</span> list2) <span className="text-neutral-500"># Output: True (Identical id() reference addresses)</span>
            </div>
          </section>

          {/* 3. Garbage Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Automatic Memory & Garbage Collection</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python manages memory allocation automatically using two mechanisms: <strong>Reference Counting</strong> and a cyclic <strong>Garbage Collector (GC)</strong>. When an object&apos;s reference count drops to zero, Python immediately frees its memory.
            </p>
            
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6">
              <p className="text-sm text-neutral-300 italic">
                <strong>Pro Tip:</strong> Rebinding a variable or unlinking it using <code>del obj</code> removes a reference name. If no other references remain, the heap memory is flagged for immediate cleanup.
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Names vs. Values:</span> Variables in Python are labels referencing objects stored in the private heap.</li>
                 <li><span className="text-red-500 font-bold">Identity Check:</span> Use <code>is</code> to check if two variables reference the same memory address (`id()`).</li>
                 <li><span className="text-red-500 font-bold">Pass-by-Object-Reference:</span> Function parameters receive copies of reference addresses, affecting mutable objects in place.</li>
                 <li><span className="text-red-500 font-bold">Reference Counting:</span> Objects are deallocated automatically as soon as their active reference count reaches zero.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase2/lists-tuples" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Lists &amp; Tuples in Python</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase3/dictionaries-sets" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Dictionaries &amp; Sets in Phase-3 of Python</span>
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