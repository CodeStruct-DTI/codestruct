"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function PythonControlFlow() {
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
                {/* Header Branding */}
                <Link href="/">
                    <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
                        <ChevronLeft className="w-4 h-4 text-red-600" />
                        <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
                            CodeStruct_
                        </span>
                    </motion.div>
                </Link>

                <Link 
                    href="/langroadmap/python" 
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Python Roadmap
                </Link>

                <header className="mb-12 border-b border-neutral-800 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Control Flow in Python
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Control statements dictate the order of code execution in Python. Using conditionals, loops, and control keywords, you can structure logic cleanly without braces or heavy boilerplate.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-12">
                    {/* Section 1: Selection Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">1. Selection Statements</h2>
                        <p className="text-neutral-300 leading-8 text-[18px] mb-6">
                            Selection statements allow Python programs to choose different paths of execution using indentation blocks rather than curly braces.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-4">A. The if-elif-else Ladder</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Simple if</h4>
                                <pre className="text-xs text-neutral-400">if age &gt; 18:</pre>
                            </div>
                            <div className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">elif Clause</h4>
                                <pre className="text-xs text-neutral-400">elif score &gt; 90:</pre>
                            </div>
                        </div>

                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            age = <span className="text-blue-400">20</span><br/>
                            has_license = <span className="text-blue-400">True</span><br/><br/>
                            <span className="text-red-500">if</span> age &gt;= <span className="text-blue-400">18</span>:<br/>
                            &nbsp;&nbsp;<span className="text-red-500">if</span> has_license:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-orange-400">"Can Drive"</span>)<br/>
                            &nbsp;&nbsp;<span className="text-red-500">else</span>:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-orange-400">"Needs License"</span>)
                        </div>
                    </section>

                    {/* Section 2: Iteration Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">2. Iteration (Loops)</h2>
                        <p className="text-neutral-300 mb-6">
                            Python provides clean loop structures for repeating execution based on sequences or conditions.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-neutral-900/20 border border-neutral-800 p-6 rounded-xl">
                                <h3 className="text-white font-bold mb-2">The for Loop</h3>
                                <p className="text-neutral-400 text-sm mb-4">Best used when iterating over collections or a <code className="text-red-500">range()</code> sequence.</p>
                                <div className="bg-black p-4 rounded-lg font-mono text-xs text-blue-400">
                                    <span className="text-red-500">for</span> i <span className="text-red-500">in</span> range(<span className="text-blue-400">1</span>, <span className="text-blue-400">6</span>):<br/>
                                    &nbsp;&nbsp;print(i, end=<span className="text-orange-400">" "</span>)
                                </div>
                            </div>

                            <div className="bg-neutral-900/20 border border-neutral-800 p-6 rounded-xl">
                                <h3 className="text-white font-bold mb-2">The while Loop</h3>
                                <p className="text-neutral-400 text-sm mb-4">Checks condition before executing the code block.</p>
                                <div className="bg-black p-4 rounded-lg font-mono text-xs text-blue-400">
                                    <span className="text-red-500">while</span> condition:<br/>
                                    &nbsp;&nbsp;<span className="text-neutral-500"># code...</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Jump Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">3. Jump Statements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <h3 className="text-lg font-bold text-white">break</h3>
                                </div>
                                <p className="text-sm text-neutral-400 leading-6">
                                    Terminates the current enclosing loop immediately. Control passes to the statement following the loop.
                                </p>
                            </div>

                            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <h3 className="text-lg font-bold text-white">continue</h3>
                                </div>
                                <p className="text-sm text-neutral-400 leading-6">
                                    Skips the remaining code in the current iteration and jumps to the condition check for the next pass.
                                </p>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                    <Link href="/langroadmap/python/phase1/operators">
                        <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
                            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <ChevronLeft className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="text-left">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Operators & Expressions
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/langroadmap/python/phase2/functions">
                        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
                            <div className="text-right">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Phase-2: Functions in Python
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <ArrowRight className="w-5 h-5 text-red-500" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </main>

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