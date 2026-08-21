"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, FileText, HardDrive, FolderKanban } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PythonFileHandlingLesson() {
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
            File <span className="text-red-600">Handling_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Interact with the file system safely. Master reading and writing text files using context managers, structured data manipulation, and modern path operations using <code>pathlib</code>.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. File I/O & Context Managers */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Reading &amp; Writing Files</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Always use the <code>with</code> statement (context manager) when performing file operations. It guarantees that file descriptors are automatically closed upon block completion, even if exceptions occur.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500"># 1. Writing text to a file (&quot;w&quot; overwrites, &quot;a&quot; appends)</span><br/>
              <span className="text-red-500">with</span> <span className="text-yellow-400">open</span>(<span className="text-orange-400">&quot;example.txt&quot;</span>, <span className="text-orange-400">&quot;w&quot;</span>, encoding=<span className="text-orange-400">&quot;utf-8&quot;</span>) <span className="text-red-500">as</span> file:<br/>
              &nbsp;&nbsp;file.write(<span className="text-orange-400">&quot;Hello, CodeStruct!\nLine 2 data.&quot;</span>)<br/><br/>

              <span className="text-neutral-500"># 2. Reading files line-by-line (Memory Efficient)</span><br/>
              <span className="text-red-500">with</span> <span className="text-yellow-400">open</span>(<span className="text-orange-400">&quot;example.txt&quot;</span>, <span className="text-orange-400">&quot;r&quot;</span>, encoding=<span className="text-orange-400">&quot;utf-8&quot;</span>) <span className="text-red-500">as</span> file:<br/>
              &nbsp;&nbsp;<span className="text-red-500">for</span> line <span className="text-red-500">in</span> file:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">print</span>(line.strip())
            </div>
          </section>

          {/* 2. Structured Data: JSON & CSV */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <HardDrive className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Working with JSON</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Python&apos;s standard <code>json</code> module serializes native data types like dictionaries and lists to JSON strings and deserializes JSON formatted files back into native objects.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-red-500">import</span> json<br/><br/>

              data = &#123;<span className="text-orange-400">&quot;user&quot;</span>: <span className="text-orange-400">&quot;Dev&quot;</span>, <span className="text-orange-400">&quot;active&quot;</span>: <span className="text-red-500">True</span>, <span className="text-orange-400">&quot;roles&quot;</span>: [<span className="text-orange-400">&quot;admin&quot;</span>]&#125;<br/><br/>

              <span className="text-neutral-500"># Dump object directly to JSON file</span><br/>
              <span className="text-red-500">with</span> <span className="text-yellow-400">open</span>(<span className="text-orange-400">&quot;user.json&quot;</span>, <span className="text-orange-400">&quot;w&quot;</span>) <span className="text-red-500">as</span> f:<br/>
              &nbsp;&nbsp;json.dump(data, f, indent=<span className="text-blue-400">2</span>)<br/><br/>

              <span className="text-neutral-500"># Load JSON file into Python dictionary</span><br/>
              <span className="text-red-500">with</span> <span className="text-yellow-400">open</span>(<span className="text-orange-400">&quot;user.json&quot;</span>, <span className="text-orange-400">&quot;r&quot;</span>) <span className="text-red-500">as</span> f:<br/>
              &nbsp;&nbsp;loaded_data = json.load(f)<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">print</span>(loaded_data[<span className="text-orange-400">&quot;user&quot;</span>]) <span className="text-neutral-500"># Output: Dev</span>
            </div>
          </section>

          {/* 3. Modern Path Operations: pathlib */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FolderKanban className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Modern Paths with pathlib</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <code>pathlib</code> module offers an object-oriented approach to handling file system paths across platforms, replacing traditional <code>os.path</code> functions.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl my-6">
              <span className="text-red-500">from</span> pathlib <span className="text-red-500">import</span> Path<br/><br/>

              <span className="text-neutral-500"># Path construction and properties</span><br/>
              config_path = Path(<span className="text-orange-400">&quot;configs&quot;</span>) / <span className="text-orange-400">&quot;settings.json&quot;</span><br/><br/>

              <span className="text-neutral-500"># Check existence &amp; create directory structure</span><br/>
              config_path.parent.mkdir(parents=<span className="text-red-500">True</span>, exist_ok=<span className="text-red-500">True</span>)<br/><br/>

              <span className="text-neutral-500"># Quick read/write text operations</span><br/>
              config_path.write_text(<span className="text-orange-400">&apos;&#123;&quot;theme&quot;: &quot;dark&quot;&#125;&apos;</span>)<br/>
              content = config_path.read_text()<br/>
              <span className="text-yellow-400">print</span>(config_path.exists()) <span className="text-neutral-500"># Output: True</span>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Context Managers:</span> Always utilize <code>with open(...)</code> to prevent unclosed file handle leaks.</li>
                 <li><span className="text-red-500 font-bold">Encoding:</span> Explicitly specify <code>encoding="utf-8"</code> to prevent cross-platform character decoding issues.</li>
                 <li><span className="text-red-500 font-bold">pathlib:</span> Prefer <code>Path</code> objects over string manipulations or legacy <code>os.path</code> routines for cleaner, platform-agnostic file paths.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/python/phase4/comprehensions-lambda" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Comprehensions &amp; Lambda</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/python/phase4/decorators-generators" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Decorators &amp; Generators</span>
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