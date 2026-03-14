"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function VariablesLesson() {
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
        {/* Direct Home Navigation - Consistent with Register Page */}
        <Link href="/">
          <motion.div
            className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
          >
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
            C++ Variables & Data Types
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to understanding how memory is allocated and managed in C++ using primitive types.
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: Definition */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Understanding Variables</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In C++, a <strong>variable</strong> is a symbolic name assigned to a specific memory location used to store data. Think of it as a container that holds a value which can be manipulated or changed during program execution. Variables are the fundamental building blocks that allow programmers to store and retrieve information from RAM(Random Access Memory). Each variable has a specific <strong>data type</strong> that defines the kind of data it can hold, such as integers, characters, or floating-point numbers etc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h4>
                <code className="text-blue-400 font-mono text-sm">data_type variable_name;</code>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Example</h4>
                <code className="text-blue-400 font-mono text-sm">int age = 20;</code>
              </div>
            </div>
          </section>

          {/* Section 2: Data Type Classification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Classification of Data Types</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              Data types specify the nature of data a variable can store. In C++, these are broadly classified into three categories:
            </p>

            <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-8">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Type Category</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Primitive</td>
                    <td className="px-6 py-4">Built-in types for simple values</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">int, char, float, double</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Derived</td>
                    <td className="px-6 py-4">Built from primitive types</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">array, pointer, function</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">User-Defined</td>
                    <td className="px-6 py-4">Created by the programmer</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">struct, class, enum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Primitive Deep Dive */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Basic (Primitive) Data Types</h2>
            <ul className="space-y-4 text-neutral-300 list-disc ml-6 text-[17px]">
              <li><strong className="text-red-500">int:</strong> Stores integer numbers(including negative values). Values from <strong>-2,147,483,648 to 2,147,483,647</strong> can be stored.(e.g., <code className="text-blue-300">int age = 20;</code> or <code className="text-blue-300">int score = -5;</code>)</li>
              <li><strong className="text-red-500">short:</strong> Stores small integer numbers. Values from <strong>-32,768 to 32,767</strong> can be stored(e.g., <code className="text-blue-300">short count = 100;</code>)</li>
              <li><strong className="text-red-500">long:</strong> Stores larger integer numbers. Values from <strong>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</strong> can be stored(e.g., <code className="text-blue-300">long population = 1000000;</code>)</li>
              <li><strong className="text-red-500">long long:</strong> Stores even larger integer numbers. Values from <strong>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</strong> can be stored(e.g., <code className="text-blue-300">long long bigNumber = 1000000000;</code>)</li>
              <li><strong className="text-red-500">float:</strong> Stores decimal numbers up to 7-digits of accuracy. Values from <strong>±1.2 x 10⁻³⁸ to ±3.4 x 10³⁸</strong> can be stored(e.g., <code className="text-blue-300">float price = 10.5;</code>)</li>
              <li><strong className="text-red-500">double:</strong> Stores large decimals up to 15-17 digits of accuracy. Preferred for more accuracy. Values from <strong>±2.3 x 10⁻³⁰⁸ to ±1.7 x 10³⁰⁸</strong> can be stored(e.g., <code className="text-blue-300">double pi = 3.14159;</code>)</li>
              <li><strong className="text-red-500">char:</strong> Stores a single character. We use Single Quotes ' '. (e.g., <code className="text-blue-300">char grade = 'A';</code>)</li>
              <li><strong className="text-red-500">void:</strong> Represents the absence of a value; primarily used in function return types.</li>
              <li><strong className="text-red-500">bool:</strong> Stores a boolean value (true or false). (e.g., <code className="text-blue-300">bool isHappy = true;</code>)</li>

              <p><strong>Point to Note: <br />So, you might get the doubt that "Why even use int/short when we can just always use long long because it covers more numbers that we can use?"</strong>. <br />Before understanding why, let's understand how much memory space is being used when these data types are used:</p>
              <ul className="space-y-4 text-neutral-300 list-disc ml-6 text-[17px] mt-4">
                <li><strong className="text-red-500">int:</strong> Uses 4 bytes (32 bits) of memory.</li>
                <li><strong className="text-red-500">short:</strong> Uses 2 bytes (16 bits) of memory.</li>
                <li><strong className="text-red-500">long:</strong> Usually uses 4 or 8 bytes (depends on the operating system).</li>
                <li><strong className="text-red-500">long long:</strong> Uses 8 bytes (64 bits) of memory.</li>
                <li><strong className="text-red-500">float:</strong> Uses 4 bytes (32 bits) of memory.</li>
                <li><strong className="text-red-500">double:</strong> Uses 8 bytes (64 bits) of memory.</li>
                <li><strong className="text-red-500">char:</strong> Uses 1 byte (8 bits) of memory.</li>
                <li><strong className="text-red-500">void:</strong> Does not occupy memory space.</li>
                <li><strong className="text-red-500">bool:</strong> Uses 1 byte (8 bits) of memory.</li>
              </ul>
              <br />
              So, if we use <code className="text-blue-300">long long</code> for every integer variable, we would be using 8 bytes of memory for each variable, even if we only need to store a small number that could fit in an <code className="text-blue-300">int</code> (which uses only 4 bytes). <br />Imagine using long long for a number like 7(like <code className="text-blue-300">long long num = 7;</code>), you're wasting so much memory space of long long when you could have just used int/short for numbers that small like 7, 10, 10,000 etc. <br />This can lead to inefficient memory usage, especially in large programs or when dealing with many variables. <br /><br /><strong>So as good programmers, we always use the appropriate data type based on the expected range of values, we can optimize memory usage and improve the performance of our programs.</strong>
            </ul>
          </section>

          {/* Section 4: Derived & User Defined */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Derived Types</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">Derived from primitives to handle complex structures like collections or memory addresses. <span className="text-red-500 font-bold italic">(You'll learn more about this in future phases)</span>.</p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-1xl leading-6">
                <span className="text-red-500 font-bold">int</span> arr[<span className="text-blue-400">5</span>]; <span className="text-neutral-500">// Array</span><br />
                <span className="text-red-500 font-bold">int</span> *ptr; <span className="text-neutral-500">// Pointer</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Defined</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">Custom structures defined by the programmer to model real-world entities. <span className="text-red-500 font-bold italic">(You'll learn more about this in future phases)</span>.</p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-1xl leading-6">
                <span className="text-red-500 font-bold">struct</span> Student &#123;<br />
                &nbsp;&nbsp;<span className="text-red-500">int</span> id;<br />
                &nbsp;&nbsp;<span className="text-red-500">char</span> name[<span className="text-blue-400">20</span>];<br />
                &#125;;
              </div>
            </div>
          </section>

          {/* Section 5: Implementation Example */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Example Implementation</h2>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span> <span className="text-neutral-500 pl-4">// Header library to import input and output like cin and cout</span><br />
              <span className="text-red-500">using namespace</span> std; <span className="text-neutral-500 pl-4">// Use standard objects (like cout) without prefixing. Without this, we would have to write "std::cout" all the time</span><br /><br />

              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123; <span className="text-neutral-500 pl-4">// The entry point where program execution begins</span><br />
              &nbsp;&nbsp;<span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br />
              &nbsp;&nbsp;<span className="text-red-500">float</span> price = <span className="text-blue-400">50.5</span>;<br />
              &nbsp;&nbsp;<span className="text-red-500">char</span> grade = <span className="text-blue-400">'A'</span>;<br />
              &nbsp;&nbsp;<span className="text-red-500">double</span> salary = <span className="text-blue-400">25000.75</span>;<br /><br />

              &nbsp;&nbsp;<span className="text-neutral-500">// Printing values to the console</span><br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Age: "</span> &lt;&lt; age &lt;&lt; endl; <span className="text-neutral-500 pl-4">// cout displays text; endl moves to a new line</span><br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Price: "</span> &lt;&lt; price &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Grade: "</span> &lt;&lt; grade &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Salary: "</span> &lt;&lt; salary &lt;&lt; endl;<br /><br />

              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>; <span className="text-neutral-500 pl-4">// Signals that the program finished successfully</span><br />
              &#125;
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1">Output</h4>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300">
                Age: 20<br />
                Price: 50.5<br />
                Grade: A<br />
                Salary: 25000.75
              </div>
            </div>
          </section>
        </article>

        {/* Next Lesson Button */}
        <div className="mt-20 flex justify-end border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase1/io">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Input & Output in C++
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