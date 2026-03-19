"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Layers, Type, Grid3X3, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ArraysStringsLesson() {
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
            Arrays & <span className="text-red-600">Strings_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Mastering contiguous memory blocks. Learn how to store collections of data in single dimensions, multi-dimensional matrices, and handle textual data using C++ strings.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          
          {/* 1. Introduction to Arrays */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Layers className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">1. One-Dimensional Arrays</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              An <strong>Array</strong> is a collection of items of the same type stored at <strong>contiguous memory locations</strong>. Imagine a row of lockers, each holding a value, where you can access any locker instantly if you know its position (index).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Syntax & Declaration</h4>
                <div className="text-blue-400 font-mono text-sm space-y-2">
                  <p>// Declaration</p>
                  <p>int marks[5];</p>
                  <p>// Declaration + Initialization</p>
                  <p>int ages[] = &#123;19, 21, 18, 20&#125;;</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-sm text-neutral-400"><strong className="text-white">Fixed Size:</strong> The size must be known at compile time.</p>
                <p className="text-sm text-neutral-400"><strong className="text-white">Zero-Based:</strong> The first element is always at index <code>0</code>, and the last is at <code>size - 1</code>.</p>
              </div>
            </div>

            {/* Implementation: Array Traversal */}
            <h3 className="text-xl font-bold text-white mb-4">Implementation: Summing an Array</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br />
              <span className="text-red-500">using namespace</span> std;<br /><br />
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">int</span> prices[3] = &#123;<span className="text-blue-400">10, 20, 30</span>&#125;; <span className="text-neutral-500">// Initialize array</span><br />
              &nbsp;&nbsp;<span className="text-red-500">int</span> total = <span className="text-blue-400">0</span>;<br /><br />
              &nbsp;&nbsp;<span className="text-neutral-500">// Standard For-Loop Traversal</span><br />
              &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">0</span>; i &lt; <span className="text-blue-400">3</span>; i++) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;total += prices[i]; <span className="text-neutral-500">// Accessing elements via index [i]</span><br />
              &nbsp;&nbsp;&#125;<br /><br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Total: "</span> &lt;&lt; total;<br />
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br />
              &#125;
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              Total: 60
            </div>
          </section>

          {/* 2. Multi-Dimensional Arrays */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Grid3X3 className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. Multi-Dimensional Arrays (Matrices)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A 2D Array is essentially an <strong>array of arrays</strong>. It is commonly used to represent grids, tables, or mathematical matrices.
            </p>

            

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-8">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Syntax: matrix[rows][columns]</h4>
               <p className="text-blue-400 font-mono text-sm">int grid[2][3] = &#123; &#123;1, 2, 3&#125;, &#123;4, 5, 6&#125; &#125;;</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Example: Accessing a Matrix</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-neutral-500">// Nested loops are required to traverse 2D arrays</span><br />
              <span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">0</span>; i &lt; <span className="text-blue-400">2</span>; i++) &#123; <span className="text-neutral-500">// Rows</span><br />
              &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> j = <span className="text-blue-400">0</span>; j &lt; <span className="text-blue-400">3</span>; j++) &#123; <span className="text-neutral-500">// Columns</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; grid[i][j] &lt;&lt; <span className="text-orange-400">" "</span>;<br />
              &nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;cout &lt;&lt; endl;<br />
              &#125;
            </div>
          </section>

          {/* 3. Strings: C-Style vs C++ String */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Type className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">3. Strings in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              There are two ways to handle text in C++. The old <strong>C-Style String</strong> (character arrays) and the modern <strong>std::string</strong> class.
            </p>

            <div className="space-y-10 mt-10">
              {/* C-Style Strings */}
              <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                <h3 className="text-red-500 font-bold mb-2">A. C-Style Strings (Character Arrays)</h3>
                <p className="text-sm text-neutral-400 mb-4 italic">char name[] = "C++";</p>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
                  <li>Stored as an array of characters.</li>
                  <li>Ends with a <strong>Null Terminator</strong> <code>'\0'</code> to tell the compiler where the string stops.</li>
                  <li>Fixed size and harder to manipulate.</li>
                </ul>
              </div>

              {/* std::string */}
              <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                <h3 className="text-green-500 font-bold mb-2">B. Modern C++ std::string Class</h3>
                <p className="text-sm text-neutral-400 mb-4 italic">string greeting = "Hello World";</p>
                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
                  <li>Part of the <code>&lt;string&gt;</code> library.</li>
                  <li><strong>Dynamic Size:</strong> It grows or shrinks automatically.</li>
                  <li>Rich set of functions like <code>.length()</code>, <code>.append()</code>, and <code>.substr()</code>.</li>
                </ul>
              </div>
            </div>

            {/* Implementation: String Manipulation */}
            <h3 className="text-xl font-bold text-white mt-12 mb-4">Practical Implementation</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br />
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;string&gt;</span> <span className="text-neutral-500">// Required for string class</span><br />
              <span className="text-red-500">using namespace</span> std;<br /><br />
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br />
              &nbsp;&nbsp;string text = <span className="text-orange-400">"Code"</span>;<br />
              &nbsp;&nbsp;text += <span className="text-orange-400">"Struct"</span>; <span className="text-neutral-500">// Concatenation using + operator</span><br /><br />
              
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Full String: "</span> &lt;&lt; text &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Length: "</span> &lt;&lt; text.<span className="text-yellow-400">length</span>() &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"First Char: "</span> &lt;&lt; text[<span className="text-blue-400">0</span>] &lt;&lt; endl;<br /><br />
              
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br />
              &#125;
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              Full String: CodeStruct<br/>
              Length: 10<br/>
              First Char: C
            </div>
          </section>

          {/* 4. Advanced Concepts & Pitfalls */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
               <Zap className="text-red-600 w-8 h-8" />
               <h2 className="text-2xl font-semibold text-white">4. Critical Concepts & Safety</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-red-900/5 border border-red-900/20 rounded-2xl">
                <h4 className="text-white font-bold mb-2">1. Out-of-Bounds Error</h4>
                <p className="text-neutral-400 text-sm leading-6">
                  C++ does <strong>not</strong> perform bounds checking automatically. If you have an array of size 5 and try to access <code>arr[10]</code>, the program will access "garbage" memory or crash. This is a common source of security vulnerabilities.
                </p>
              </div>

              <div className="p-6 bg-blue-900/5 border border-blue-900/20 rounded-2xl">
                <h4 className="text-white font-bold mb-2">2. getline() vs cin</h4>
                <p className="text-neutral-400 text-sm leading-6">
                  Standard <code>cin &gt;&gt; str;</code> stops reading at the first whitespace. To read a full sentence with spaces, always use <code>getline(cin, str);</code>.
                </p>
              </div>

              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl">
                <h4 className="text-white font-bold mb-2">3. Passing Arrays to Functions</h4>
                <p className="text-neutral-400 text-sm leading-6">
                  Arrays are always passed by <strong>pointer/reference</strong> behavior by default. Changes made to an array inside a function will affect the original array.
                </p>
              </div>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          
          {/* Previous Lesson */}
          <Link href="/langroadmap/cpp/phase2/recursion" className="w-full md:w-auto">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Recursion in C++
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Next Lesson */}
          <Link href="/langroadmap/cpp/phase3/pointers" className="w-full md:w-auto">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-right justify-end"
            >
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Pointers & Memory
                </span>
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