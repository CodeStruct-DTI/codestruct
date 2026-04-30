"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";

const dsaTopics = [



  {



    id: 1,



    title: "Basic Programming Concepts and Maths Concepts",



    patterns: ["Implementation Problems", "Mathematical Problems", "Number Theory", "Combinatorics", "Prime Numbers", "GCD and LCM", "Modular Arithmetic"],



  },



  {



    id: 2,



    title: "Arrays",



    patterns: ["Prefix Sum Pattern", "HashMap Pattern", "Two Pointer Pattern", "Sliding Window Pattern"],



  },



  {



    id: 3,



    title: "Strings",



    patterns: ["Two Pointer Pattern", "Sliding Window Pattern", "HashMap Pattern", "Advanced String Patterns(Rabin Karp, KMP etc.)"],



  },



  {



    id: 4,



    title: "Binary Search",



    patterns: ["BS on Answer", "BS on 1D Arrays", "BS on 2D Arrays"],



  },



  {



    id: 5,



    title: "Linked List",



    patterns: ["Slow and Fast Pointer Pattern", "Dummy Node Pattern", "In-place Reversal Pattern"],



  },



  {



    id: 6,



    title: "Stacks and Queues",



    patterns: ["Prefix/Postfix Evaluation", "Monotonic Stack Pattern", "Implementation Problems"],



  },



  {



    id: 7,



    title: "Bit Manipulation",



    patterns: ["Bitwise Operations", "Masking Techniques", "Implementation Problems"],



  },



  {



    id: 8,



    title: "Recursion and Backtracking",



    patterns: ["Recursion Pattern", "Backtracking Pattern", "Implementation Problems"],



  },



  {



    id: 9,



    title: "Greedy Algorithms",



    patterns: ["Implementation Problems"],



  },



  {



    id: 10,



    title: "Heaps and Priority Queues",



    patterns: ["Heap Operations", "Priority Queue Implementations", "Implementation Problems"],



  },



  {



    id: 11,



    title: "Trees",



    patterns: ["Tree Traversal", "Binary Tree Problems", "Binary Search Tree Problems", "Implementation Problems"],



  },



  {



    id: 12,



    title: "Graphs",



    patterns: ["Introduction", "BFS/DFS Algorithms", "Topo Sort Problems", "Shortest Path Problems", "Minimum Spanning Tree Problems", "Disjoint Set Problems", "Other Important Algorithms"],



  },



  {



    id: 13,



    title: "Dynamic Programming(DP)",



    patterns: ["1D DP", "DP ON GRIDS(2D/3D)", "DP ON SUBSEQUENCES", "DP ON STRINGS", "DP ON STOCKS", "DP ON LIS", "MCM DP | PARTITION DP", "DP ON TREES", "DP ON SQUARES", "DIGIT DP", "Other Important DP Problems"],



  },



  {



    id: 14,



    title: "Tries",



    patterns: ["Trie Construction", "Trie Search", "Implementation Problems"],



  },

];

export default function DSASheet() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [completedPatterns, setCompletedPatterns] = useState<string[]>([]);

  const togglePattern = (patternName: string) => {
    setCompletedPatterns((prev) =>
      prev.includes(patternName)
        ? prev.filter((p) => p !== patternName)
        : [...prev, patternName]
    );
  };

  const totalPatterns = dsaTopics.reduce((acc, topic) => acc + topic.patterns.length, 0);
  const progress = Math.round((completedPatterns.length / totalPatterns) * 100);

  // Helper function to create URL-friendly slugs
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/[\s_-]+/g, '-')  // Replace spaces/underscores with hyphens
      .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto w-full">
        <Link href="/" className="text-2xl font-black tracking-tighter text-red-600 uppercase">
          CodeStruct_
        </Link>
        <div className="flex gap-4 items-center">
           <div className="px-4 py-1 rounded-full border border-white/10 bg-neutral-900/50 text-xs font-mono">
              Progress: <span className="text-red-500">{progress}%</span>
           </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-16 border-l-4 border-red-600 pl-6">
          <h1 className="text-5xl font-black tracking-tighter mb-2">Master DSA</h1>
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
            Structured Learning Path / {completedPatterns.length} of {totalPatterns} Completed
          </p>
        </header>

        <div className="space-y-4">
          {dsaTopics.map((topic) => (
            <div key={topic.id} className="group">
              <button
                onClick={() => setExpanded(expanded === topic.id ? null : topic.id)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                  expanded === topic.id 
                  ? "bg-neutral-900 border-red-600/50" 
                  : "bg-neutral-900/30 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-3 rounded-xl ${expanded === topic.id ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-400"}`}>
                    <BookOpen size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold tracking-tight">{topic.title}</h3>
                    <p className="text-xs text-neutral-500 font-mono mt-1">
                      {topic.patterns.length} Patterns Found
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === topic.id ? 180 : 0 }}
                  className="text-neutral-500"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === topic.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 mt-2 space-y-2">
                      {topic.patterns.map((pattern, idx) => {
                        const isCompleted = completedPatterns.includes(pattern);
                        const topicSlug = createSlug(topic.title);
                        const patternSlug = createSlug(pattern);
                        const href = `/dsa-sheet/${topicSlug}/${patternSlug}`;

                        return (
                          <div 
                            key={idx}
                            className={`flex items-center justify-between p-4 border rounded-xl transition-all ${
                              isCompleted 
                              ? "bg-red-500/5 border-red-500/20" 
                              : "bg-neutral-900/20 border-white/5"
                            } hover:bg-neutral-800/40 group/item`}
                          >
                            <div className="flex items-center gap-4 flex-1">
                              {/* Checkbox - we use e.preventDefault to stop navigation when clicking the tick */}
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  togglePattern(pattern);
                                }}
                                className="transition-transform active:scale-90 z-10"
                              >
                                {isCompleted ? (
                                  <CheckCircle2 size={20} className="text-red-500" />
                                ) : (
                                  <Circle size={20} className="text-neutral-700 group-hover/item:text-red-500" />
                                )}
                              </button>

                              {/* Main Link Wrapper for the Title */}
                              <Link href={href} className="flex-1">
                                <span className={`transition-colors block ${isCompleted ? "text-white" : "text-neutral-300"} group-hover/item:text-red-400`}>
                                  {pattern}
                                </span>
                              </Link>
                            </div>

                            {/* Practice Button Link */}
                            <Link href={href}>
                              <button className="text-[10px] font-black uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors">
                                Practice 
                              </button>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}