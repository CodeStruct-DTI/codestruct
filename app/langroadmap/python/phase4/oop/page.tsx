"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, ShieldCheck, GitFork } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonOOPLesson() {
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
          href="/langroadmap/python"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Python Roadmap
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Object-Oriented <span className="text-red-600">Programming_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master OOP paradigms in Python. Explore class declarations, constructors, property encapsulation, inheritance hierarchies, and magic methods.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Classes and Instantiation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Box className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Classes &amp; Constructors</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Classes serve as blueprints for objects. The <code>__init__</code> initializer method configures instance attributes upon object creation, binding parameters to the instance using <code>self</code>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">class</span> <span className="text-yellow-400">BankAccount</span>:<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-red-500">self</span>, owner: <span className="text-yellow-400">str</span>, balance: <span className="text-yellow-400">float</span> = <span className="text-blue-400">0.0</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>.owner = owner<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>.balance = balance<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">deposit</span>(<span className="text-red-500">self</span>, amount: <span className="text-yellow-400">float</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>.balance += amount<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-red-500">self</span>.balance<br/><br/>

              <span className="text-neutral-500"># Instantiation</span><br/>
              account = BankAccount(<span className="text-orange-400">&quot;Alice&quot;</span>, <span className="text-blue-400">100.0</span>)<br/>
              account.deposit(<span className="text-blue-400">50.0</span>) <span className="text-neutral-500"># Balance becomes 150.0</span>
            </div>
          </section>

          {/* 2. Encapsulation & Properties */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Encapsulation &amp; @property</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python uses leading underscores (e.g., <code>_protected</code> or <code>__private</code>) by convention to signal internal state. The <code>@property</code> decorator allows getter and setter methods to be accessed cleanly as attributes.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">class</span> <span className="text-yellow-400">User</span>:<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-red-500">self</span>, email: <span className="text-yellow-400">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>._email = email  <span className="text-neutral-500"># Convention for internal attribute</span><br/><br/>

              &nbsp;&nbsp;<span className="text-yellow-400">@property</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">email</span>(<span className="text-red-500">self</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-red-500">self</span>._email<br/><br/>

              &nbsp;&nbsp;<span className="text-yellow-400">@email.setter</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">email</span>(<span className="text-red-500">self</span>, new_email: <span className="text-yellow-400">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> <span className="text-orange-400">&quot;@&quot;</span> <span className="text-red-500">not in</span> new_email:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">raise</span> <span className="text-yellow-400">ValueError</span>(<span className="text-orange-400">&quot;Invalid email format&quot;</span>)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>._email = new_email
            </div>
          </section>

          {/* 3. Inheritance & Polymorphism */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <GitFork className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Inheritance &amp; super()</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Subclasses inherit methods and attributes from parent classes. The <code>super()</code> function allows child classes to invoke methods from their parent class, enabling clean method overriding.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-red-500">class</span> <span className="text-yellow-400">Animal</span>:<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-red-500">self</span>, name: <span className="text-yellow-400">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>.name = name<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">speak</span>(<span className="text-red-500">self</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-orange-400">&quot;Generic animal sound&quot;</span><br/><br/>

              <span className="text-red-500">class</span> <span className="text-yellow-400">Dog</span>(Animal):<br/>
              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-red-500">self</span>, name: <span className="text-yellow-400">str</span>, breed: <span className="text-yellow-400">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">super</span>().__init__(name)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">self</span>.breed = breed<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">def</span> <span className="text-yellow-400">speak</span>(<span className="text-red-500">self</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-orange-400">&quot;Woof!&quot;</span>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Constructors &amp; Instances:</span> Classes define structure; <code>__init__</code> initializes instance attributes using explicit <code>self</code> parameters.</li>
                 <li><span className="text-red-500 font-bold">Encapsulation:</span> Use property getters/setters (<code>@property</code>) for validation and controlled attribute access.</li>
                 <li><span className="text-red-500 font-bold">Inheritance:</span> Derive specialized behavior using standard subclassing and <code>super()</code> calls.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase3/sorting" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Sorting in Python</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase4/exception-handling" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Exception Handling</span>
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