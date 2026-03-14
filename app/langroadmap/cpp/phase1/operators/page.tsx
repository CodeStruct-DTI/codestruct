"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

export default function OperatorsLesson() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Navigation */}
        <Link href="/">
            <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600"/>
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">CodeStruct_</span>
            </motion.div>
        </Link>

        <Link href="/langroadmap/cpp" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Operators & Expressions in C++</h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A deep dive into the symbols that drive logic and mathematical operations within C++.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* Section: Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Operators</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              Operators in C++ are symbols that perform operations on variables and values. They can be classified into different categories based on their functionality.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Operators in C++</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Arithmetic Operators", "Relational (Comparison) Operators", "Logical Operators", 
                "Bitwise Operators", "Assignment Operators", "Unary Operators", 
                "Ternary Operator (?:)", "Comma Operator (,)", "Sizeof Operator (sizeof)", "Pointer Operators (& and *)"
              ].map((type) => (
                <div key={type} className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                </div>
              ))}
            </div>
          </section>

          {/* 1. Arithmetic Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">1. Arithmetic Operators</h2>
            <h3 className="text-neutral-400 mb-6">Used for mathematical calculations.</h3>
            
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=10, b=3)</th>
                    <th className="px-6 py-4">Results for below program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">+</td><td className="px-6 py-4">Addition</td><td className="px-6 py-4 font-mono text-1xl">a + b</td><td className="px-6 py-4">10 + 3 = 13</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">-</td><td className="px-6 py-4">Subtraction</td><td className="px-6 py-4 font-mono text-1xl">a - b</td><td className="px-6 py-4">10 - 3 = 7</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">*</td><td className="px-6 py-4">Multiplication</td><td className="px-6 py-4 font-mono text-1xl">a * b</td><td className="px-6 py-4">10 * 3 = 30</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">/</td><td className="px-6 py-4">Division</td><td className="px-6 py-4 font-mono text-1xl">a / b</td><td className="px-6 py-4">10 / 3 = 3 (integer division)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">%</td><td className="px-6 py-4">Modulus (Remainder)</td><td className="px-6 py-4 font-mono text-1xl">a % b</td><td className="px-6 py-4">10 % 3 = 1</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>, b = <span className="text-blue-400">3</span>;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Addition (+)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Addition: "</span> &lt;&lt; a + b &lt;&lt; endl; <span className="text-neutral-600">// Output: 13 (10 + 3)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Subtraction (-)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Subtraction: "</span> &lt;&lt; a - b &lt;&lt; endl; <span className="text-neutral-600">// Output: 7 (10 - 3)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Multiplication (*)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Multiplication: "</span> &lt;&lt; a * b &lt;&lt; endl; <span className="text-neutral-600">// Output: 30 (10 * 3)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 4. Division (/)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Note: Since both 'a' and 'b' are integers, the result is truncated (integer division).</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Division: "</span> &lt;&lt; a / b &lt;&lt; endl; <span className="text-neutral-600">// Output: 3 (not 3.333..., to get 3.333... convert one operand to float like 10.0/3 or 10/3.0 or 10.0/3.0)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 5. Modulus (%)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Returns the remainder of the division.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Modulus: "</span> &lt;&lt; a % b &lt;&lt; endl; <span className="text-neutral-600">// Output: 1 (10 / 3 gives remainder 1)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 2. Relational Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">2. Relational (Comparison) Operators</h2>
            <p className="text-neutral-400 mb-6">Used to compare values and return 1 (true) or 0 (false).</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=5, b=10)</th>
                    <th className="px-6 py-4">Results for below program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">==</td><td className="px-6 py-4">Equal to</td><td className="px-6 py-4 font-mono text-1xl">a == b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">!=</td><td className="px-6 py-4">Not equal to</td><td className="px-6 py-4 font-mono text-1xl">a != b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&gt;</td><td className="px-6 py-4">Greater than</td><td className="px-6 py-4 font-mono text-1xl">a &gt; b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&lt;</td><td className="px-6 py-4">Less than</td><td className="px-6 py-4 font-mono text-1xl">a &lt; b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&gt;=</td><td className="px-6 py-4">Greater than or equal to</td><td className="px-6 py-4 font-mono text-1xl">a &gt;= b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&lt;=</td><td className="px-6 py-4">Less than or equal to</td><td className="px-6 py-4 font-mono text-1xl">a &lt;= b</td><td className="px-6 py-4">1 (true)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">10</span>;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Equal to (==)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Note: This returns 0 because 5 is not equal to 10.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a == b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 0 (false)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Not equal to (!=)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// This returns 1 because 5 is indeed different from 10.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a != b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 1 (true)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Greater than (&gt;)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &gt; b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 0 (false)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 4. Less than (&lt;)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &lt; b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 1 (true)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 5. Greater than or equal to (&gt;=)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &gt;= b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 0 (false)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 6. Less than or equal to (&lt;=)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &lt;= b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 1 (true)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 3. Logical Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">3. Logical Operators</h2>
            <p className="text-neutral-400 mb-6">Used to perform logical operations (AND, OR, NOT).</p>
            <div className="overflow-x-auto rounded-1xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=1, b=0)</th>
                    <th className="px-6 py-4">Results for below program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&&</td><td className="px-6 py-4">Logical AND</td><td className="px-6 py-4 font-mono text-1xl">a && b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">||</td><td className="px-6 py-4">Logical OR</td><td className="px-6 py-4 font-mono text-1xl">a || b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">!</td><td className="px-6 py-4">Logical NOT</td><td className="px-6 py-4 font-mono text-1xl">!a</td><td className="px-6 py-4">0 (false)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">1</span>, b = <span className="text-blue-400">0</span>; <span className="text-neutral-500">// 1 is true, 0 is false</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Logical AND (&&)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Returns 1 only if BOTH are true. (1 && 0 is false)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &amp;&amp; b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 0</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Logical OR (||)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Returns 1 if AT LEAST ONE is true. (1 || 0 is true)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a || b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 1</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Logical NOT (!)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Reverses the state: true becomes false, false becomes true.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (!a) &lt;&lt; endl; <span className="text-neutral-600">// Output: 0 (since !1 is 0)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 4. Bitwise Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">4. Bitwise Operators</h2>
            <p className="text-neutral-400 mb-6">Perform bitwise operations on integers.</p>
            <div className="overflow-x-auto rounded-1xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=5 (0101), b=3 (0011))</th>
                    <th className="px-6 py-4">Results for below program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300 text-1xl">
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&</td><td className="px-6 py-4">Bitwise AND</td><td className="px-6 py-4 font-mono text-1xl">a & b</td><td className="px-6 py-4">1 (0001)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">|</td><td className="px-6 py-4">Bitwise OR</td><td className="px-6 py-4 font-mono text-1xl">a | b</td><td className="px-6 py-4">7 (0111)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">^</td><td className="px-6 py-4">Bitwise XOR</td><td className="px-6 py-4 font-mono text-1xl">a ^ b</td><td className="px-6 py-4">6 (0110)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&lt;&lt;</td><td className="px-6 py-4">Left shift</td><td className="px-6 py-4 font-mono text-1xl">a &lt;&lt; 1</td><td className="px-6 py-4">10 (1010)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&gt;&gt;</td><td className="px-6 py-4">Right shift</td><td className="px-6 py-4 font-mono text-1xl">a &gt;&gt; 1</td><td className="px-6 py-4">2 (0010)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">~</td><td className="px-6 py-4">Bitwise NOT</td><td className="px-6 py=4 font-mono text-1xl">~a</td><td className="px-6 py-4">-6 (2's complement)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>; <span className="text-neutral-500">// a = 0101, b = 0011 in binary</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Bitwise AND (&)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 0101 & 0011 = 0001</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &amp; b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 1</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Bitwise OR (|)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 0101 | 0011 = 0111</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a | b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 7</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Bitwise XOR (^)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 0101 ^ 0011 = 0110 (1 if bits are different)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a ^ b) &lt;&lt; endl; <span className="text-neutral-600">// Output: 6</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 4. Left Shift (&lt;&lt;)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 0101 shifted left by 1 = 1010</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &lt;&lt; <span className="text-blue-400">1</span>) &lt;&lt; endl; <span className="text-neutral-600">// Output: 10 (Effectively multiplies by 2)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 5. Right Shift (&gt;&gt;)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 0101 shifted right by 1 = 0010</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &gt;&gt; <span className="text-blue-400">1</span>) &lt;&lt; endl; <span className="text-neutral-600">// Output: 2 (Effectively divides by 2)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 6. Bitwise NOT (~)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Flips all bits (Inverting 0101 involves 2's complement logic)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; (~a) &lt;&lt; endl; <span className="text-neutral-600">// Output: -6</span><br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 5. Assignment Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">5. Assignment Operators</h2>
            <p className="text-neutral-400 mb-6">Used to assign values to variables.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6 text-1xl">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr><th className="px-6 py-4">Operator</th><th className="px-6 py-4">Example (a = 10)</th><th className="px-6 py-4">Equivalent To</th></tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300 font-mono">
                  <tr><td className="px-6 py-4 text-red-400">=</td ><td className="px-6 py-4">a = 10</td><td className="px-6 py-4">a = 10</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">+=</td><td className="px-6 py-4">a += 5</td><td className="px-6 py-4">a = a + 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">-=</td><td className="px-6 py-4">a -= 5</td><td className="px-6 py-4">a = a - 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">*=</td><td className="px-6 py-4">a *= 5</td><td className="px-6 py-4">a = a * 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">/=</td><td className="px-6 py-4">a /= 5</td><td className="px-6 py-4">a = a / 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">%=</td><td className="px-6 py-4">a %= 5</td><td className="px-6 py-4">a = a % 5</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>; <span className="text-neutral-500">// 1. Basic Assignment (=)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Initial value: "</span> &lt;&lt; a &lt;&lt; endl;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Addition Assignment (+=)</span><br/>
              &nbsp;&nbsp;a += <span className="text-blue-400">5</span>; <span className="text-neutral-600">// Same as: a = a + 5 (10 + 5)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After += 5: "</span> &lt;&lt; a &lt;&lt; endl; <span className="text-neutral-600">// Output: 15</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Subtraction Assignment (-=)</span><br/>
              &nbsp;&nbsp;a -= <span className="text-blue-400">3</span>; <span className="text-neutral-600">// Same as: a = a - 3 (15 - 3)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After -= 3: "</span> &lt;&lt; a &lt;&lt; endl; <span className="text-neutral-600">// Output: 12</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 4. Multiplication Assignment (*=)</span><br/>
              &nbsp;&nbsp;a *= <span className="text-blue-400">2</span>; <span className="text-neutral-600">// Same as: a = a * 2 (12 * 2)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After *= 2: "</span> &lt;&lt; a &lt;&lt; endl; <span className="text-neutral-600">// Output: 24</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 5. Division Assignment (/=)</span><br/>
              &nbsp;&nbsp;a /= <span className="text-blue-400">4</span>; <span className="text-neutral-600">// Same as: a = a / 4 (24 / 4)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After /= 4: "</span> &lt;&lt; a &lt;&lt; endl; <span className="text-neutral-600">// Output: 6</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 6. Modulus Assignment (%=)</span><br/>
              &nbsp;&nbsp;a %= <span className="text-blue-400">4</span>; <span className="text-neutral-600">// Same as: a = a % 4 (Remainder of 6 / 4)</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After %= 4: "</span> &lt;&lt; a &lt;&lt; endl; <span className="text-neutral-600">// Output: 2</span><br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 6. Unary Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">6. Unary Operators</h2>
            <p className="text-neutral-400 mb-6">Operate on a single operand.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6 text-1xl">
              <table className="w-full text-left text-1xl">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Action on Variable</th>
                    <th className="px-6 py-4">Effect on Expression</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  {/* Increment Group */}
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">a++</td>
                    <td className="px-6 py-4">Post-Increment</td>
                    <td className="px-6 py-4">Increases by 1</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Uses OLD value then updates</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">++a</td>
                    <td className="px-6 py-4">Pre-Increment</td>
                    <td className="px-6 py-4">Increases by 1</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Updates then uses NEW value</td>
                  </tr>
                  
                  {/* Decrement Group */}
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">a--</td>
                    <td className="px-6 py-4">Post-Decrement</td>
                    <td className="px-6 py-4">Decreases by 1</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Uses OLD value then updates</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">--a</td>
                    <td className="px-6 py-4">Pre-Decrement</td>
                    <td className="px-6 py-4">Decreases by 1</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Updates then uses NEW value</td>
                  </tr>

                  {/* Unary Plus/Minus Group */}
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">-a</td>
                    <td className="px-6 py-4">Unary Minus</td>
                    <td className="px-6 py-4 text-neutral-500">No change in memory</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Returns negated value</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-red-400 font-mono font-bold">+a</td>
                    <td className="px-6 py-4">Unary Plus</td>
                    <td className="px-6 py-4 text-neutral-500">No change in memory</td>
                    <td className="px-6 py-4 italic text-neutral-500 text-xs">Returns value as-is</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> result;<br/><br/>

              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"--- INCREMENT / DECREMENT ---"</span> &lt;&lt; endl;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 1. Post-Increment (a++)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Logic: Use current value first, then increment.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Post-Increment: "</span> &lt;&lt; a++ &lt;&lt; endl; <span className="text-neutral-600">// Output: 10 (Memory becomes 11 AFTER)</span><br/><br/>
              
              &nbsp;&nbsp;<span className="text-neutral-500">// 2. Pre-Increment (++a)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Logic: Increment first, then use the new value.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Pre-Increment:  "</span> &lt;&lt; ++a &lt;&lt; endl; <span className="text-neutral-600">// Output: 12 (Memory was 11, becomes 12 BEFORE)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 3. Post-Decrement (a--)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Logic: Use current value first, then decrement.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Post-Decrement: "</span> &lt;&lt; a-- &lt;&lt; endl; <span className="text-neutral-600">// Output: 12 (Memory becomes 11 AFTER)</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 4. Pre-Decrement (--a)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Logic: Decrement first, then use the new value.</span><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Pre-Decrement:  "</span> &lt;&lt; --a &lt;&lt; endl; <span className="text-neutral-600">// Output: 10 (Memory was 11, becomes 10 BEFORE)</span><br/><br/>

              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\n--- UNARY PLUS / MINUS ---"</span> &lt;&lt; endl;<br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// Note: These do NOT change the value of 'a' in memory.</span><br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 5. Unary Minus (-)</span><br/>
              &nbsp;&nbsp;result = -a;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Unary Minus:    "</span> &lt;&lt; result &lt;&lt; <span className="text-orange-400">" (a is still "</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">")"</span> &lt;&lt; endl;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// 6. Unary Plus (+)</span><br/>
              &nbsp;&nbsp;result = +a;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Unary Plus:     "</span> &lt;&lt; result &lt;&lt; <span className="text-orange-400">" (a is still "</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">")"</span> &lt;&lt; endl;<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 7. Ternary Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">7. Ternary Operator (?:)</h2>
            <p className="text-neutral-400 mb-4 italic text-1xl">A shorthand for if-else conditions.</p>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl mb-4 font-mono text-blue-400 text-1xl">
              condition ? expression1(if condition true) : expression2(if condition false);
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br/><br/>

              &nbsp;&nbsp;<span className="text-neutral-500">// Ternary Operator (Condition ? Expression_If_True : Expression_If_False)</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 1. (age &gt;= 18) is the condition (True in this case).</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 2. cout &lt;&lt; "Adult" executes because the condition is True.</span><br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 3. If age was 15, "Minor" would have been printed instead.</span><br/>
              &nbsp;&nbsp;(age &gt;= <span className="text-blue-400">18</span>) ? cout &lt;&lt; <span className="text-orange-400">"Adult"</span> : cout &lt;&lt; <span className="text-orange-400">"Minor"</span>;<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 8. Comma Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">8. Comma Operator (,)</h2>
            <ul className="list-disc ml-6 text-neutral-300 space-y-2 text-base leading-6 mb-4">
              <li>Used to separate expressions</li>
            </ul>
            <code className="text-blue-400 bg-black/40 p-2 rounded block w-fit border border-neutral-800 text-1xl">int a, b, c;</code>
          </section>

          {/* 9. Sizeof Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">9. Sizeof Operator</h2>
            <p className="text-neutral-300 text-1xl leading-6 mb-6">
              The <code className="text-red-400 bg-neutral-900 px-1.5 py-0.5 rounded">sizeof</code> operator is a compile-time operator that returns the size (in bytes) of a data type or a specific variable. This is crucial for writing programs that work across different hardware.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-red-500">int</span> x = <span className="text-blue-400">10</span>;<br/>
              <span className="text-red-500">double</span> y = <span className="text-blue-400">5.5</span>;<br/>
              <span className="text-red-500">char</span> z = <span className="text-orange-400">'A'</span>;<br/><br/>

              <span className="text-neutral-500">// 1. Getting size of specific data types</span><br/>
              cout &lt;&lt; <span className="text-orange-400">"Size of int: "</span> &lt;&lt; <span className="text-red-500">sizeof</span>(<span className="text-red-500">int</span>) &lt;&lt; <span className="text-orange-400">" bytes"</span> &lt;&lt; endl; <span className="text-neutral-600">// Output: Size of int: 4 bytes</span><br/><br/>

              <span className="text-neutral-500">// 2. Getting size of variables</span><br/>
              cout &lt;&lt; <span className="text-orange-400">"Size of char variable: "</span> &lt;&lt; <span className="text-red-500">sizeof</span>(z) &lt;&lt; <span className="text-orange-400">" byte"</span> &lt;&lt; endl; <span className="text-neutral-600">// Output: Size of char variable: 1 byte</span><br/><br/>

              <span className="text-neutral-500">// 3. Larger data types take more space</span><br/>
              cout &lt;&lt; <span className="text-orange-400">"Size of double: "</span> &lt;&lt; <span className="text-red-500">sizeof</span>(y) &lt;&lt; <span className="text-orange-400">" bytes"</span> &lt;&lt; endl; <span className="text-neutral-600">// Output: Size of double: 8 bytes</span>
            </div>
          </section>

          {/* 10. Pointer Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">10. Pointer Operators (& and *)</h2>
            <div className="space-y-4 mb-6">
              <p className="text-neutral-300 text-1xl leading-6">
                Pointers allow you to work directly with Memory Addresses. In C++, every variable is stored at a specific "spot" in your computer's RAM.
              </p>
              <ul className="list-disc ml-6 text-neutral-300 space-y-2 text-1xl leading-6">
                <li><span className="text-red-500 font-bold">& (Address-of):</span> This operator "looks up" the memory address where a variable is hidden.</li>
                <li><span className="text-red-500 font-bold">* (Dereference):</span> This operator "goes to" that address and gets the actual value stored there.</li>
              </ul>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
              <span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>; <span className="text-neutral-500">// A normal variable holding the value 10</span><br/>
              <span className="text-red-500">int</span> *ptr = &amp;a; <span className="text-neutral-500">// 'ptr' stores the ADDRESS of 'a' (e.g., 0x7ffd...)</span><br/><br/>

              <span className="text-neutral-500">// 1. Printing the Address of 'a'</span><br/>
              <span className="text-neutral-500">// This will output a weird-looking hexadecimal code like 0x61ff08.</span><br/>
              cout &lt;&lt; &amp;a &lt;&lt; endl;<br/><br/>

              <span className="text-neutral-500">// 2. Printing the Address stored in 'ptr'</span><br/>
              <span className="text-neutral-500">// This is identical to &amp;a because 'ptr' points to 'a'.</span><br/>
              cout &lt;&lt; ptr &lt;&lt; endl;<br/><br/>

              <span className="text-neutral-500">// 3. Dereferencing (*)</span><br/>
              <span className="text-neutral-500">// This tells C++: "Go to the address inside 'ptr' and show me what's there."</span><br/>
              cout &lt;&lt; *ptr &lt;&lt; endl; <span className="text-neutral-600">// Output: 10</span>
            </div>
          </section>

          <hr className="border-neutral-800 my-20" />

          {/* SECTION: EXPRESSIONS */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Expressions in C++</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In C++, an expression is a combination of variables, constants, operators, and function calls that evaluates to a single value. Expressions are used to perform operations and calculate values in C++ programs.
            </p>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Expressions in C++</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Arithmetic Expressions", "Relational Expressions", "Logical Expressions", 
                "Bitwise Expressions", "Assignment Expressions", "Unary Expressions", 
                "Conditional (Ternary) Expressions", "Comma Expressions"
              ].map((type) => (
                <div key={type} className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                </div>
              ))}
            </div>
          </section>

          {/* Expression Details 1-8 */}
          <section className="space-y-12">
          {/* 1. Arithmetic Expressions */}
            <section>
              <h1 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">1. Arithmetic Expressions</h1>
              <p className="text-neutral-400 text-1xl mb-4 leading-6">
                Arithmetic expressions combine variables and constants using mathematical operators. C++ follows the BODMAS/PEMDAS rule, meaning multiplication and division happen before addition and subtraction.
              </p>

              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7 shadow-xl overflow-x-auto">
                <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/><br/>
                
                <span className="text-neutral-500">// The expression is evaluated as: 5 + (3 * 2)</span><br/>
                <span className="text-red-500">int</span> result = a + b * <span className="text-blue-400">2</span>;<br/><br/>
                
                cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;<br/>
                <span className="text-neutral-600">// Output: Result: 11</span>
              </div>

              <div className="p-4 bg-neutral-900/50 border-l-4 border-red-500 rounded-r-lg">
                <h5 className="text-white text-1xl font-bold uppercase tracking-wider mb-2">Step-by-Step Execution:</h5>
                <ol className="list-decimal ml-5 text-1xl text-neutral-400 space-y-1">
                  <li><span className="text-white font-semibold italic">Multiplication first:</span> <code className="text-blue-400">b * 2</code> (3 * 2) = <span className="text-green-500">6</span></li>
                  <li><span className="text-white font-semibold italic">Addition second:</span> <code className="text-blue-400">a + 6</code> (5 + 6) = <span className="text-green-500">11</span></li>
                  <li>The final value <span className="text-white font-bold">11</span> is assigned to the variable <code className="text-red-400">result</code>.</li>
                </ol>
              </div>
            </section>

            {/* 2. Relational Expressions */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">2. Relational Expressions</h4>
              <p className="text-neutral-400 text-1xl mb-4">
                Used to compare two values. The result is always a boolean (1 for true, 0 for false).
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[15px] font-mono text-red-400 bg-neutral-900/30 p-4 rounded-lg border border-neutral-800 mb-4">
                <span>== (Equal to)</span><span>!= (Not equal)</span><span>&gt; (Greater than)</span>
                <span>&lt; (Less than)</span><span>&gt;= (Greater or Equal)</span><span>&lt;= (Less or Equal)</span>
              </div>
            </div>

            {/* 3. Logical Expressions */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">3. Logical Expressions</h4>
              <p className="text-neutral-400 text-1xl mb-4">Combines multiple relational expressions to make complex decisions.</p>
              <div className="grid grid-cols-3 gap-2 text-[15px] font-mono text-red-400 bg-neutral-900/30 p-4 rounded-lg border border-neutral-800">
                <span>&& (AND)</span><span>|| (OR)</span><span>! (NOT)</span>
              </div>
            </div>

            {/* 4. Bitwise Expressions */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">4. Bitwise Expressions</h4>
              <p className="text-neutral-400 text-1xl mb-4 leading-6">These expressions manipulate data at the "bit" level (0s and 1s), which is much faster for the CPU.</p>
              <div className="grid grid-cols-3 gap-2 text-[15px] font-mono text-red-400 mb-6">
                <span>& (AND)</span><span>| (OR)</span><span>^ (XOR)</span>
                <span>&lt;&lt; (Left Shift)</span><span>&gt;&gt; (Right Shift)</span><span>~ (NOT)</span>
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>; <span className="text-neutral-500">// a=0101, b=0011</span><br/>
                 <span className="text-neutral-500">// Bitwise AND compares each bit: Only 1 & 1 = 1</span><br/>
                 <span className="text-red-500">int</span> result = a &amp; b; <span className="text-neutral-500">// Result: 0001 (Decimal 1)</span><br/>
                 cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-1xl font-mono mb-2 text-neutral-300">Output: Result: 1</div>
            </div>

            {/* 5. Assignment Expressions */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">5. Assignment Expressions</h4>
              <p className="text-neutral-400 text-1xl mb-4">Assigns the value on the right to the variable on the left.</p>
              <div className="flex flex-wrap gap-4 text-[15px] font-mono text-red-500 mb-6">
                {["=", "+=", "-=", "*=", "/=", "%="].map(op => <span className="bg-neutral-900 px-2 py-1 rounded" key={op}>{op}</span>)}
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>;<br/>
                 <span className="text-neutral-500">// a stores 5.</span><br/>
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-1xl font-mono mb-2 text-neutral-300">Output: a = 5</div>
            </div>

            {/* 6. Unary Expressions */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">6. Unary Expressions</h4>
              <p className="text-neutral-400 text-1xl mb-4">Expressions that only need one variable to work.</p>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>;<br/>
                 <span className="text-neutral-500">// ++a increments 'a' to 6 FIRST, then assigns it to 'result'</span><br/>
                 <span className="text-red-500">int</span> result = ++a;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-1xl font-mono mb-2 text-neutral-300">Output: Result: 6</div>
            </div>

            {/* 7. Conditional (Ternary) Expression */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">7. Conditional (Ternary) Expression</h4>
              <p className="text-neutral-400 text-1xl mb-4">A powerful one-line shortcut for an if-else statement.</p>
              <code className="block mb-4 p-3 bg-neutral-900/50 border border-neutral-800 text-blue-400 text-xs rounded font-mono">
                (condition) ? value_if_true : value_if_false;
              </code>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7 shadow-xl">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/>
                 <span className="text-neutral-500">// If a &gt; b is true, pick 'a'. Otherwise, pick 'b'.</span><br/>
                 <span className="text-red-500">int</span> result = (a &gt; b) ? a : b;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"The larger value is: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-1xl font-mono mb-2 text-neutral-300">Output: The larger value is: 5</div>
            </div>

            {/* 8. Comma Expression */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">8. Comma Expression</h4>
              <p className="text-neutral-400 text-1xl mb-4">Runs multiple pieces of code in one line but only "saves" the last result.</p>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl mb-4 leading-7">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">1</span>, b = <span className="text-blue-400">2</span>, c = <span className="text-blue-400">3</span>;<br/>
                 <span className="text-neutral-500">// 1. a becomes 2, b becomes 3, c becomes 4.</span><br/>
                 <span className="text-neutral-500">// 2. The value of 'result' is the OLD value of c (3) because of post-increment.</span><br/>
                 <span className="text-red-500">int</span> result = (a++, b++, c++);<br/><br/>
                 cout &lt;&lt; <span className="text-orange-400">"a="</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">" b="</span> &lt;&lt; b &lt;&lt; <span className="text-orange-400">" c="</span> &lt;&lt; c &lt;&lt; endl;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"result = "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-1xl font-mono mb-2 text-neutral-300">
                Output: a = 2 b = 3 c = 4<br/>
                result = 3
              </div>
            </div>
          </section>
        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase1/io">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Input and Output</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/phase1/control-flow">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Control Flow(If/Else, Loops)</span>
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