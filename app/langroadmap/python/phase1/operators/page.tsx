"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function PythonOperators() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Navigation Logo */}
        <Link href="/">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
              CodeStruct_
            </span>
          </motion.div>
        </Link>

        {/* Back Link */}
        <Link
          href="/langroadmap/python"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Python Roadmap
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Python Operators & Expressions
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A deep dive into the symbols that drive logic and mathematical operations within Python. Unlike C++ or Java, Python features explicit readable keywords (<code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">and</code>, <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">or</code>, <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">not</code>), unique operators like floor division (<code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">//</code>) and exponentiation (<code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">**</code>), and excludes unary increment/decrement (<code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">++</code>, <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">--</code>).
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Operators</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              Operators in Python are special symbols used to perform operations on variables and values. Python categorizes operators into distinct groups based on their specific evaluations.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Arithmetic", "Relational", "Logical", "Bitwise", "Assignment", "Identity", "Membership"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* 1. Arithmetic Operators */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Arithmetic Operators</h2>
            <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Result (a=10, b=3)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-500 font-bold">+</td><td className="px-6 py-4">Addition</td><td className="px-6 py-4">13</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">-</td><td className="px-6 py-4">Subtraction</td><td className="px-6 py-4">7</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">*</td><td className="px-6 py-4">Multiplication</td><td className="px-6 py-4">30</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">/</td><td className="px-6 py-4">Float Division</td><td className="px-6 py-4">3.3333...</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">//</td><td className="px-6 py-4">Floor Division (Integer)</td><td className="px-6 py-4">3</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">%</td><td className="px-6 py-4">Modulus (Remainder)</td><td className="px-6 py-4">1</td></tr>
                  <tr><td className="px-6 py-4 text-red-500 font-bold">**</td><td className="px-6 py-4">Exponentiation ($a^b$)</td><td className="px-6 py-4">1000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              a, b = <span className="text-blue-400">10</span>, <span className="text-blue-400">3</span><br />
              print(<span className="text-orange-400">"Float Div:"</span>, a / b)  <span className="text-neutral-500"># 3.3333333333333335</span><br />
              print(<span className="text-orange-400">"Floor Div:"</span>, a // b) <span className="text-neutral-500"># 3</span><br />
              print(<span className="text-orange-400">"Power:"</span>, a ** b)     <span className="text-neutral-500"># 1000</span>
            </div>
          </section>

          {/* 2. Relational Operators */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Relational (Comparison) Operators</h2>
            <p className="text-neutral-400 mb-4">In Python, comparison operators return dynamic <code className="text-blue-400">bool</code> instances (<code className="text-blue-400">True</code> or <code className="text-blue-400">False</code>). Chained comparisons are also natively supported.</p>
            
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              x, y, z = <span className="text-blue-400">5</span>, <span className="text-blue-400">10</span>, <span className="text-blue-400">15</span><br />
              print(x == y)      <span className="text-neutral-500"># False</span><br />
              print(x != y)      <span className="text-neutral-500"># True</span><br />
              print(x &lt; y &lt; z)   <span className="text-neutral-500"># True (Chained comparison)</span>
            </div>
          </section>

          {/* 3. Logical Operators */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Logical Operators</h2>
            <p className="text-neutral-400 mb-4 text-sm">Python uses English keywords (<code className="text-red-400">and</code>, <code className="text-red-400">or</code>, <code className="text-red-400">not</code>) instead of symbols (<code className="text-neutral-500">&&, ||, !</code>). Short-circuit evaluation is applied.</p>
            
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              a, b = <span className="text-blue-400">True</span>, <span className="text-blue-400">False</span><br />
              print(a <span className="text-red-500">and</span> b) <span className="text-neutral-500"># False</span><br />
              print(a <span className="text-red-500">or</span> b)  <span className="text-neutral-500"># True</span><br />
              print(<span className="text-red-500">not</span> a)    <span className="text-neutral-500"># False</span>
            </div>
          </section>

          {/* 4. Bitwise Operators */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Bitwise Operators</h2>
            <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 mb-6">
              <p className="text-sm text-neutral-400">Bitwise operators operate on integers at the binary level using bitwise AND (<code className="text-red-400">&</code>), OR (<code className="text-red-400">|</code>), XOR (<code className="text-red-400">^</code>), NOT (<code className="text-red-400">~</code>), and bit shifts (<code className="text-red-400">&lt;&lt;</code>, <code className="text-red-400">&gt;&gt;</code>).</p>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              a = <span className="text-blue-400">5</span> <span className="text-neutral-500"># Binary: 0101</span><br />
              print(a &lt;&lt; <span className="text-blue-400">1</span>) <span className="text-neutral-500"># 10 (1010) - Left shift</span><br />
              print(a &gt;&gt; <span className="text-blue-400">1</span>) <span className="text-neutral-500"># 2  (0010) - Right shift</span><br />
              print(a ^ <span className="text-blue-400">3</span>)  <span className="text-neutral-500"># 6  (0110) - Bitwise XOR</span>
            </div>
          </section>

          {/* 5. Assignment & Identity */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Assignment & Special Python Operators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Assignment Shorthand</h4>
                <p className="text-xs text-neutral-400 mb-3">Python lacks <code className="text-red-400">++</code> / <code className="text-red-400">--</code>. Use augmented assignment instead.</p>
                <code className="text-sm">
                  x = 5<br />
                  x += 10 # x is now 15<br />
                  x *= 2  # x is now 30
                </code>
              </div>
              <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Identity & Membership</h4>
                <p className="text-xs text-neutral-400 mb-3">Test memory reference (<code className="text-red-400">is</code>) or presence in collections (<code className="text-red-400">in</code>).</p>
                <code className="text-sm">
                  nums = [1, 2, 3]<br />
                  print(1 in nums) # True<br />
                  print(x is None) # True/False
                </code>
              </div>
            </div>
          </section>

          {/* 6. Ternary Expression */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Conditional Expression (Ternary)</h2>
            <p className="text-neutral-400 mb-4 italic">Python uses a readable inline syntax for conditional evaluations.</p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              age = <span className="text-blue-400">20</span><br />
              status = <span className="text-orange-400">"Adult"</span> <span className="text-red-500">if</span> age &gt;= <span className="text-blue-400">18</span> <span className="text-red-500">else</span> <span className="text-orange-400">"Minor"</span><br />
              print(status) <span className="text-neutral-500"># Output: Adult</span>
            </div>
          </section>

          {/* Expressions Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Expressions</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              An expression is any legal combination of literals, variables, and operators that evaluates to a single value. Python follows standard <strong>Operator Precedence</strong> (PEMDAS). Parentheses take the highest priority.
            </p>
            <div className="mt-6 bg-[#111] border border-neutral-800 rounded-lg p-5">
              <code className="text-sm text-neutral-300">
                result = <span className="text-blue-400">10</span> + <span className="text-blue-400">5</span> * <span className="text-blue-400">2</span> <span className="text-neutral-500"># Evaluates to 20</span>
              </code>
            </div>
          </section>
        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase1/io">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">
                  Previous Lesson
                </span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Python Input & Output (input & print)
                </span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase1/control-flow">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-right"
            >
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">
                  Next Lesson
                </span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Control Flow in Python
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}