"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

export default function ControlFlow() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
            <main className="max-w-6xl mx-auto px-6 pt-16">
                <Link href="/">
                    <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
                        <ChevronLeft className="w-4 h-4 text-red-600"/>
                        <span className="text-xl font-black tracking-tighter text-red-600 uppercase">CodeStruct_</span>
                    </motion.div>
                </Link>
                <Link href="/langroadmap/cpp" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm">
                    <ArrowLeft className="w-4 h-4"/> Back to C++ Roadmap
                </Link>

                <header className="mb-12 border-b border-neutral-800 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Control Flow in C++</h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        A deep dive into the control statements that govern the flow of execution in C++. From conditionals to loops, and everything in between, this section covers the essential constructs that allow you to control how your programs execute. <br/>Whether you're a beginner looking to understand the basics or an experienced developer seeking a refresher, this guide will provide you with the knowledge and examples you need to master control flow in C++.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-16">
                    {/*Introduction*/}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">Control Statements</h2>
                        <p className="text-neutral-300 leading-8 text-[18px]">Control statements are an essential aspect of programming languages like C++, as they allow programmers to control the flow of execution of their programs.</p>
                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Control Statements in C++</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                "1. Selection Statements", 
                                "2. Iteration Statements", 
                                "3. Jump Statements"
                            ].map((type) => (
                                <div 
                                    key={type} 
                                    className="p-4 md:p-6 min-h-[80px] bg-neutral-900/50 border border-neutral-800 rounded-xl text-lg font-medium text-neutral-300 flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"/> 
                                    {type}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*1. Selection Statements*/}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">1.Selection Statements</h2>
                        <h3 className="text-lg text-neutral-400 mb-6">Selection statements in C++ allow the program to make decisions based on conditions. These include:</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "if-else Statements", "switch Statement"
                            ].map((type) => (
                                <div key={type} className="p-3 md:p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-1xl text-neutral-300 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-10 mb-4">A. if-else Statements</h3>
                        <p className="text-lg text-neutral-400 mb-6">The if-else statement in C++ is used to perform operations based on some specific condition. <br/>The operations specified in the if block are executed if and only if the condition is true.</p>
                        <p className="text-1xl font-bold italic text-red-500">These are the following variants of if statement in C++:</p>
                        <ol className="list-disc list-inside mt-4">
                            <li className="text-1xl font-bold text-white-500 mb-2">Simple if statement</li>
                            <li className="text-1xl font-bold text-white-500 mb-2">if-else statement</li>
                            <li className="text-1xl font-bold text-white-500 mb-2">if-else-if ladder</li>
                            <li className="text-1xl font-bold text-white-500 mb-2">Nested if statement</li>
                        </ol>

                        
                    </section>
                </article>
            </main>
        </div>
    );
}