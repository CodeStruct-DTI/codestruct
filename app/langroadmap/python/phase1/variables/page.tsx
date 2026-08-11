"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonVariablesLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Direct Home Navigation */}
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
            Python Variables & Dynamic Typing
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to understanding variable assignment, dynamic typing, and built-in data types in Python.
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: Definition */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Understanding Variables in Python</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In Python, variables are created the moment you first assign a value to them—there is no need for explicit type declaration. Python is a <strong>dynamically-typed</strong> language, meaning the data type is determined at runtime based on the value assigned. Behind the scenes, Python variables act as references (pointers) pointing to objects stored in heap memory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h4>
                <code className="text-blue-400 font-mono text-sm">variable_name = value</code>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Example</h4>
                <code className="text-blue-400 font-mono text-sm">speed_limit = 60</code>
              </div>
            </div>
          </section>

          {/* Section 2: Data Type Classification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Built-in Data Types Breakdown</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              Python's built-in data types are categorized based on their structure and mutability:
            </p>

            <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-8">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Numeric Types</td>
                    <td className="px-6 py-4">Used to store numerical values (integers, decimals, complex numbers).</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">int, float, complex</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Sequence Types</td>
                    <td className="px-6 py-4">Ordered collections of items.</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">str, list, tuple, range</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Mapping & Sets</td>
                    <td className="px-6 py-4">Unordered collections of key-value pairs or unique elements.</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">dict, set, frozenset</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Boolean & None</td>
                    <td className="px-6 py-4">Represents truth values or the absence of a value.</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">bool, NoneType</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Core Types Deep Dive */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Core Built-in Data Types</h2>
            <ul className="space-y-4 text-neutral-300 list-disc ml-6 text-[17px]">
              <li><strong className="text-red-500">int:</strong> Whole numbers of unlimited length (e.g., <code className="text-blue-300">count = 42</code>).</li>
              <li><strong className="text-red-500">float:</strong> Floating-point numbers with decimals (e.g., <code className="text-blue-300">pi = 3.14159</code>).</li>
              <li><strong className="text-red-500">str:</strong> Text sequence wrapped in single or double quotes (e.g., <code className="text-blue-300">name = "Alice"</code>).</li>
              <li><strong className="text-red-500">bool:</strong> Logical value holding either <code className="text-blue-300">True</code> or <code className="text-blue-300">False</code>.</li>
              <li><strong className="text-red-500">list:</strong> Mutable, ordered collection of items (e.g., <code className="text-blue-300">[1, 2, 3]</code>).</li>
              <li><strong className="text-red-500">tuple:</strong> Immutable, ordered collection of items (e.g., <code className="text-blue-300">(1, 2, 3)</code>).</li>
              <li><strong className="text-red-500">dict:</strong> Key-value store for fast lookups (e.g., <code className="text-blue-300">&#123;"user": "dev"&#125;</code>).</li>

              <div className="bg-red-900/10 border-l-4 border-red-600 p-6 mt-8">
                <h4 className="text-white font-bold mb-2">The "Why" of Mutability in Python</h4>
                <p className="text-neutral-400 leading-relaxed">
                  Understanding <strong>mutable</strong> (List, Dict, Set) vs <strong>immutable</strong> (Int, Float, String, Tuple) objects is crucial in Python. Passing a mutable list into a function allows the function to modify the original object in memory, while immutable objects create modified copies. Mastering this distinction prevents tricky reference bugs during Data Structures & Algorithms practice!
                </p>
              </div>
            </ul>
          </section>

          {/* Section 4: Dynamic Typing & Casting */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Dynamic Type Reassignment</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">
                A variable can change its data type on the fly simply by assigning a new value to it.
              </p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm leading-6">
                x = <span className="text-blue-400">100</span> <span className="text-neutral-500"># x is an int</span><br />
                x = <span className="text-orange-400">"Python"</span> <span className="text-neutral-500"># x is now a str</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Explicit Type Casting</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">
                Convert between data types using constructor functions like <code className="text-red-500 font-bold">int()</code>, <code className="text-red-500 font-bold">str()</code>, or <code className="text-red-500 font-bold">float()</code>.
              </p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm leading-6">
                num_str = <span className="text-orange-400">"25"</span><br />
                num_int = <span className="text-red-500 font-bold">int</span>(num_str) <span className="text-neutral-500"># Converts to 25</span>
              </div>
            </div>
          </section>

          {/* Section 5: Implementation Example */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Python Implementation Example</h2>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-neutral-500"># Variable Declaration & Data Types</span><br />
              age = <span className="text-blue-400">21</span><br />
              price = <span className="text-blue-400">99.99</span><br />
              grade = <span className="text-orange-400">'A'</span><br />
              is_python_fun = <span className="text-blue-400">True</span><br />
              msg = <span className="text-orange-400">"Hello Python"</span><br />
              skills = [<span className="text-orange-400">"Python"</span>, <span className="text-orange-400">"Django"</span>, <span className="text-orange-400">"FastAPI"</span>]<br /><br />

              <span className="text-neutral-500"># Output using formatted f-strings</span><br />
              print(<span className="text-orange-400">f"Age: &#123;age&#125;"</span>)<br />
              print(<span className="text-orange-400">f"Price: &#123;price&#125;"</span>)<br />
              print(<span className="text-orange-400">f"Grade: &#123;grade&#125;"</span>)<br />
              print(<span className="text-orange-400">f"Message: &#123;msg&#125;"</span>)<br />
              print(<span className="text-orange-400">f"First Skill: &#123;skills[0]&#125;"</span>)<br />
              print(<span className="text-orange-400">f"Type of age: &#123;type(age)&#125;"</span>)
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1">Console Output</h4>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300">
                Age: 21<br />
                Price: 99.99<br />
                Grade: A<br />
                Message: Hello Python<br />
                First Skill: Python<br />
                Type of age: &lt;class 'int'&gt;
              </div>
            </div>
          </section>
        </article>

        {/* Next Lesson Button */}
        <div className="mt-20 flex justify-end border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase1/io">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Input & Output in Python
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors border border-red-500/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}