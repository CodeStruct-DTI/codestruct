"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FunctionsLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
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
            C++ <span className="text-red-600">Functions_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to modular programming: defining, implementing, and passing data through functions.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Function Definition */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">1. Understanding Functions</h2>
            <p className="text-neutral-300 leading-8">
              In C++, a <strong>function</strong> is a self-contained block of code designed to perform a specific task. Instead of writing the same logic multiple times, you group that logic into a function and "call" it whenever needed. This approach makes your code reusable, easier to debug, and much more organized. Every execution in C++ starts from the <code>main()</code> function.
            </p>
          </section>

          {/* 2. Syntax & Key Components */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">2. Syntax & Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">General Syntax</h4>
                <div className="text-blue-400 font-mono text-sm leading-7">
                  return_type function_name(parameter_list) &#123;<br/>
                  &nbsp;&nbsp;// Function Body (logic)<br/>
                  &nbsp;&nbsp;return value;<br/>
                  &#125;
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-300 text-sm leading-6">
                  <strong className="text-white">Return Type:</strong> Defines what data type the function sends back (e.g., <code>int</code>, <code>char</code>). Use <code>void</code> if no value is returned.
                </p>
                <p className="text-neutral-300 text-sm leading-6">
                  <strong className="text-white">Function Name:</strong> The unique identifier used to call the function.
                </p>
                <p className="text-neutral-300 text-sm leading-6">
                  <strong className="text-white">Parameters:</strong> Variables that act as placeholders for the data you pass into the function.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Example Implementation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">3. Example Implementation</h2>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br />
              <span className="text-red-500">using namespace</span> std;<br /><br />

              <span className="text-neutral-500">// Function to check if a number is even</span><br />
              <span className="text-red-500">bool</span> <span className="text-yellow-400">isEven</span>(<span className="text-red-500">int</span> num) &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">return</span> num % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>; <span className="text-neutral-500">// Returns true if the number is even or else returns false if it's not even, to the if() statement from where it's called</span><br />
              &#125;<br /><br />

              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">24</span>;<br />
              &nbsp;&nbsp;<span className="text-red-500">if</span>(<span className="text-yellow-400">isEven</span>(n)) &#123; <span className="text-neutral-500">//calls the isEven function and execution control goes to the function isEven</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is even."</span> &lt;&lt; endl;<br />
              &nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br />
              &#125;
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              24 is even.
            </div>
          </section>

          {/* 4. Pass by Value vs. Pass by Reference */}
          <section className="space-y-10">
            <h2 className="text-2xl font-semibold text-white">4. Passing Mechanisms</h2>
            
            {/* Pass by Value */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-500 italic">A. Pass by Value</h3>
              <p className="text-neutral-300 leading-7">
                In <strong>Pass by Value</strong>, a copy of the actual parameter is created in memory. Any changes made to the parameter inside the function <strong>do not affect</strong> the original variable.
              </p>
              <div className="bg-neutral-900/80 p-6 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                void updateValue(int x) &#123; <br/>&nbsp;&nbsp;x = 100; // Original variable won't change <br/>&#125;
              </div>
            </div>

            {/* Pass by Reference */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-500 italic">B. Pass by Reference</h3>
              <p className="text-neutral-300 leading-7">
                In <strong>Pass by Reference</strong>, the function accesses the actual memory address of the variable using the <code>&</code> operator. Any changes made inside the function <strong>will directly update</strong> the original variable.
              </p>
              <div className="bg-neutral-900/80 p-6 rounded-lg font-mono text-sm text-green-400 border border-neutral-800">
                void updateValue(int &x) &#123; <br/>&nbsp;&nbsp;x = 100; // Original variable will change <br/>&#125;
              </div>
            </div>

            {/* Comparison Code */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-neutral-500">// Implementation Example</span><br/>
              <span className="text-red-500">void</span> <span className="text-yellow-400">byValue</span>(<span className="text-red-500">int</span> a) &#123; <br/>&nbsp;&nbsp;a = <span className="text-blue-400">50</span>; <span className="text-neutral-500">// Changes only affect the local copy that's going to be used in this function</span><br/>&#125;<br/>
              <span className="text-red-500">void</span> <span className="text-yellow-400">byReference</span>(<span className="text-red-500">int</span> &b) &#123; <br/>&nbsp;&nbsp;b = <span className="text-blue-400">50</span>; <span className="text-neutral-500">// Changes affect the original variable entirely</span><br/>&#125;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> num1 = <span className="text-blue-400">10</span>, num2 = <span className="text-blue-400">10</span>;<br/><br/>
              &nbsp;&nbsp;<span className="text-yellow-400">byValue</span>(num1);<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">byReference</span>(num2);<br/><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"num1 (Value): "</span> &lt;&lt; num1 &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"num2 (Ref): "</span> &lt;&lt; num2 &lt;&lt; endl;<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
            
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              num1 (Value): 10<br/>
              num2 (Ref): 50
            </div>
          </section>

        </article>
        {/* Previous Lesson Button */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
            <Link href="/langroadmap/cpp/phase1/control-flow">
                <motion.div
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer text-left"
                >
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-left">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                    <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    Phase-1 Control Flow in C++
                    </span>
                </div>
                </motion.div>
            </Link>

            {/* Next Lesson Button */}
            <Link href="/langroadmap/cpp/phase2/recursion">
                <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 group cursor-pointer"
                >
                <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                    <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    Recursion in C++
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
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