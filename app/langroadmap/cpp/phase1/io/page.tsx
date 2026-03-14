"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function InputOutput() {
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
                <Link href="/">
                    <motion.div
                    className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
                    >
                    <ChevronLeft className="w-4 h-4 text-red-600"/>
                    <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
                        CodeStruct_
                    </span>
                    </motion.div>
                </Link>

                <Link 
                    href="/langroadmap/cpp" 
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
                </Link>

                <header className="mb-12 border-b border-neutral-800 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        C++ Input & Output(cin & cout)
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        A comprehensive guide to understanding how to perform input and output operations in C++ using the standard library features. This section covers the basics of using <code className="bg-neutral-800 px-1 rounded">cin</code> for input and <code className="bg-neutral-800 px-1 rounded">cout</code> for output, along with examples and best practices to help you get started with C++ programming.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-12">
                    {/* Section 6: Input and Output in C++ */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">Input and Output</h2>
                        <p className="text-neutral-300 leading-8 text-[18px]">
                        In C++, input and output (I/O) are the mechanisms used to communicate with the user. This is handled by the <strong>iostream</strong> library. Think of it as a "stream" of data flowing into or out of your program.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Output explanation */}
                        <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                            <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 font-bold">out</div>
                                <h3 className="text-xl font-semibold text-white">cout (Output)</h3>
                            </div>
                            <p className="text-neutral-400 text-sm mb-4">Used to display information on the screen. It uses the <strong>Insertion Operator</strong> (<code>&lt;&lt;</code>) to "insert" data into the output stream.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl">
                            <span className="text-red-500">cout</span> &lt;&lt; <span className="text-orange-400">"Hello World"</span>;
                            </div>
                        </div>

                        {/* Input explanation */}
                        <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                            <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">in</div>
                                <h3 className="text-xl font-semibold text-white">cin (Input)</h3>
                            </div>
                            <p className="text-neutral-400 text-sm mb-4">Used to read data from the keyboard. It uses the <strong>Extraction Operator</strong> (<code>&gt;&gt;</code>) to "extract" data from the input stream.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl">
                            <span className="text-red-500">cin</span> &gt;&gt; age;
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Section 7: Combined I/O Example */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">I/O Implementation Example</h2>
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                        <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                        <span className="text-red-500">using namespace</span> std;<br/><br/>
                        
                        <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                        &nbsp;&nbsp;<span className="text-red-500">int</span> userAge;<br/><br/>
                        
                        &nbsp;&nbsp;<span className="text-neutral-500">// 1. Prompt the user for input</span><br/>
                        &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Enter your age: "</span>; <br/><br/>
                        
                        &nbsp;&nbsp;<span className="text-neutral-500">// 2. Take input from keyboard</span><br/>
                        &nbsp;&nbsp;cin &gt;&gt; userAge; <br/><br/>
                        
                        &nbsp;&nbsp;<span className="text-neutral-500">// 3. Display the input back to user</span><br/>
                        &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Your age is: "</span> &lt;&lt; userAge &lt;&lt; endl;<br/><br/>
                        
                        &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                        &#125;
                        </div>

                        {/* Simulated Terminal Output */}
                        <div className="mt-4">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Output
                        </h4>
                        <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm">
                            <span className="text-neutral-300 italic">Enter your age: </span><span className="text-white font-bold">25</span><br/>
                            <span className="text-neutral-300">Your age is: 25</span>
                        </div>
                        </div>
                    </section>

                    {/* Section 8: Memory Flow Visual */}
                    <section className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl text-center">
                        <h3 className="text-white font-semibold mb-6">The Data Flow Concept</h3>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="flex flex-col items-center">
                                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded text-blue-400 font-mono mb-2">cin &gt;&gt;</div>
                                <span className="text-xs text-neutral-500">Keyboard to Program</span>
                            </div>
                            <div className="hidden md:block text-neutral-700 text-3xl">⟷</div>
                            <div className="flex flex-col items-center">
                                <div className="px-4 py-2 bg-red-500/10 border border-red-500/50 rounded text-red-400 font-mono mb-2">cout &lt;&lt;</div>
                                <span className="text-xs text-neutral-500">Program to Screen</span>
                            </div>
                        </div>
                    </section>
                </article>
                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/cpp/phase1/variables">
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
                        Variables & Data Types
                        </span>
                    </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/cpp/phase1/operators">
                    <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer text-right"
                    >
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                        Operators & Expressions
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