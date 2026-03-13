"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

export default function ControlFlow() {
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

                        {/* Variants Content */}
                        <div className="mt-10 space-y-12">
                            {/* 1. if Statement */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">1. Simple if Statement</h4>
                                <p className="text-neutral-400 mb-4">Used to execute a block of code only if a condition is true.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        if(condition) &#123;<br/>
                                        &nbsp;&nbsp;// Code to execute if condition is true<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> num = <span className="text-blue-400">10</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">if</span>(num &gt; <span className="text-blue-400">0</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Number is positive."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Number is positive.
                                </div>
                            </div>

                            {/* 2. if...else Statement */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">2. if-else Statement</h4>
                                <p className="text-neutral-400 mb-4">Executes one block if the condition is true, otherwise executes another block.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        if(condition) &#123;<br/>
                                        &nbsp;&nbsp;// Code if condition is true<br/>
                                        &#125; else &#123;<br/>
                                        &nbsp;&nbsp;// Code if condition is false<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> num = -<span className="text-blue-400">5</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">if</span>(num &gt; <span className="text-blue-400">0</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Positive number."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125; <span className="text-red-500">else</span> &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Negative number."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Negative number.
                                </div>
                            </div>

                            {/* 3. if...else if...else Statement */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">3. if-else-if ladder</h4>
                                <p className="text-neutral-400 mb-4">Used to check multiple conditions sequentially. You can have infinite else if blocks.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        if(condition) &#123;<br/>
                                        &nbsp;&nbsp;// Code if condition is true<br/>
                                        &#125; else if(condition) &#123;<br/>
                                        &nbsp;&nbsp;// Code if above condition is false but this condition is true<br/>
                                        &#125; else &#123;<br/>
                                        &nbsp;&nbsp;// Code if all conditions mentioned above are false<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> num = <span className="text-blue-400">0</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">if</span>(num &gt; <span className="text-blue-400">0</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Positive number."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125; <span className="text-red-500">else if</span>(num &lt; <span className="text-blue-400">0</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Negative number."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125; <span className="text-red-500">else</span> &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Number is zero."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Number is zero.
                                </div>
                            </div>

                            {/* 3. Nested if Statement */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">4. Nested if statement</h4>
                                <p className="text-neutral-400 mb-4">An if statement inside another if statement. This is used when you need to check a secondary condition only if the first one is met.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        if(condition1) &#123;<br/>
                                        &nbsp;&nbsp;if(condition2) &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// Code executes if both conditions are true<br/>
                                        &nbsp;&nbsp;&#125;<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">bool</span> hasLicense = <span className="text-red-500">true</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">if</span>(age &gt;= <span className="text-blue-400">18</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span>(hasLicense) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"You are allowed to drive."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-red-500">else</span> &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"You need a license to drive."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                    &nbsp;&nbsp;&#125; <span className="text-red-500">else</span> &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"You are too young to drive."</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    You are allowed to drive.
                                </div>
                            </div>

                            {/* B. switch Statement */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">B. switch Statement</h4>
                                <p className="text-neutral-400 mb-4">Used to execute one case out of multiple cases based on a variable's value.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        switch(variable) &#123;<br/>
                                        &nbsp;&nbsp;case value1:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// Code if variable equals value1<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">break</span>;<br/>
                                        &nbsp;&nbsp;case value2:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// Code if variable equals value2<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">break</span>;<br/>
                                        &nbsp;&nbsp;default:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// Code if variable doesn't match any case<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// typing break is necessary because without it, the code will continue to the next case even when the previous case is true<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> day = <span className="text-blue-400">3</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">switch</span>(day) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">case</span> <span className="text-blue-400">1</span>:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Monday"</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">break</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">case</span> <span className="text-blue-400">2</span>:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Tuesday"</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">break</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">case</span> <span className="text-blue-400">3</span>:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Wednesday"</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">break</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">default</span>:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Invalid day"</span> &lt;&lt; endl;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Wednesday
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Iteration Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Iteration Statements in C++ (Loops)</h2>
                        <p className="text-neutral-300 leading-8 text-[18px] mb-8">
                            Iteration statements, also known as loops, allow executing a block of code multiple times until a condition is met. C++ provides three types of loops.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 mb-8 gap-4">
                            {[
                                "1. for Loop", "2. while Loop", "3. do...while Loop"
                            ].map((type) => (
                                <div key={type} className="p-3 md:p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-1xl text-neutral-300 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-12">
                            {/* for Loop */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">1. for Loop</h3>
                                <p className="text-neutral-400 mb-4">Used when the number of iterations is known beforehand.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        for (initialization; condition; increment/decrement/any change you need) &#123;<br/>
                                        &nbsp;&nbsp;// Code<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    1 2 3 4 5
                                </div>
                            </div>

                            {/* while Loop */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">2. while Loop</h3>
                                <p className="text-neutral-400 mb-4">Used when the number of iterations is not known in advance but depends on a condition.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        while (condition) &#123;<br/>
                                        &nbsp;&nbsp;// Code runs as long as the condition is true<br/>
                                        &#125;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">while</span>(i &lt;= <span className="text-blue-400">5</span>) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    1 2 3 4 5
                                </div>
                            </div>

                            {/* do while */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">3. do...while Loop</h3>
                                <p className="text-neutral-400 mb-4">Executes the loop body at least once, then checks the condition.</p>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        do &#123;<br/>
                                        &nbsp;&nbsp;// Code runs at least once and then checks the condition<br/>
                                        &#125; while (condition);
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">do</span> &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                                    &nbsp;&nbsp;&#125; <span className="text-red-500">while</span>(i &lt;= <span className="text-blue-400">5</span>);<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    1 2 3 4 5
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Jump Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Jump Statements in C++</h2>
                        <p className="text-neutral-300 mb-6">Jump statements in C++ are used to transfer control from one part of the program to another. The four types of jump statements are:</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 mb-8 gap-4">
                            {[
                                "1. break Statement", "2. continue Statement", "3. goto Statement", "4. return Statement"
                            ].map((type) => (
                                <div key={type} className="p-3 md:p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-1xl text-neutral-300 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-16">
                            {/* Break */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">1. break Statement</h3>
                                <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                                    <li>Used to exit a loop or switch case immediately</li>
                                    <li>Control moves to the statement after the loop or switch</li>
                                </ul>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        break;
                                    </div>
                                </div>
                                <p className="text-red-500 font-bold text-sm mb-4 uppercase">Example: Using break in a loop</p>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">10</span>; i++) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span>(i == <span className="text-blue-400">5</span>) <span className="text-red-500">break</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    1 2 3 4
                                </div>
                            </div>

                            {/* Continue */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">2. continue Statement</h3>
                                <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                                    <li>Skips the current iteration of a loop and moves to the next iteration</li>
                                    <li>Does not exit the loop</li>
                                </ul>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        continue;
                                    </div>
                                </div>
                                <p className="text-red-500 font-bold text-sm mb-4 uppercase">Example: Using continue in a loop</p>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span>(i == <span className="text-blue-400">3</span>) <span className="text-red-500">continue</span>;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                                    &nbsp;&nbsp;&#125;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    1 2 4 5
                                </div>
                            </div>

                            {/* Goto */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">3. goto Statement</h3>
                                <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                                    <li>Transfers control to a labeled statement in the program</li>
                                    <li className="text-red-400 italic font-bold">Avoid using goto because it makes programs difficult to debug</li>
                                </ul>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        goto label;
                                    </div>
                                </div>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">int</span> num = <span className="text-blue-400">2</span>;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">if</span>(num == <span className="text-blue-400">2</span>) <span className="text-red-500">goto</span> later;<br/>
                                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"This will not be printed."</span> &lt;&lt; endl;<br/><br/>
                                    &nbsp;&nbsp;later:<br/>
                                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Jumped using goto."</span> &lt;&lt; endl;<br/><br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Jumped using goto.
                                </div>
                            </div>

                            {/* Return */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">4. return Statement</h3>
                                <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-1">
                                    <li>Used to exit a function and return a value</li>
                                    <li>If used in main(), it terminates the program</li>
                                </ul>
                                <div className="mb-4">
                                    <h5 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h5>
                                    <div className="bg-neutral-900/80 p-4 rounded-lg font-mono text-sm text-blue-400 border border-neutral-800">
                                        return value;
                                    </div>
                                </div>
                                <p className="text-red-500 font-bold text-sm mb-4 uppercase">Example: Using return in main()</p>
                                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-1xl leading-7 shadow-2xl overflow-x-auto">
                                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
                                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Hello "</span>;<br/>
                                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"World!"</span>;<br/>
                                    &#125;
                                </div>
                                <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                                    <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                                    Hello
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                <Link href="/langroadmap/cpp/phase1/operators">
                    <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="text-left">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Operators & Expressions</span>
                    </div>
                    </motion.div>
                </Link>

                <Link href="/langroadmap/cpp/phase2">
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Phase-2 in C++</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-red-500" />
                    </div>
                    </motion.div>
                </Link>
                </div>
            </main>

            {/* Back to Top */}
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={goToTop}
                        className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}