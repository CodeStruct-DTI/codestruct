"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Home, BookOpen, Link as LinkIcon, Building2, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const TABS = ["Article", "Problems", "Companies"];

const PREFIX_SUM_CONTENT = {
  article: {
    title: "Understanding Prefix Sum",
    content: `The Prefix Sum pattern involves pre-calculating the cumulative sum of an array to allow O(1) range sum queries. 
    If we have an array A, the prefix sum array P is defined as P[i] = A[0] + A[1] + ... + A[i].`,
    formula: "Sum(i, j) = P[j] - P[i-1]",
    steps: [
      "Initialize an empty prefix array or modify the existing one.",
      "Iterate through the array, adding the current element to the sum of all previous elements.",
      "Use the pre-calculated values to answer range sum queries instantly."
    ]
  },
  problems: [
    { title: "Running Sum of 1d Array", difficulty: "Easy", link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
    { title: "Find Pivot Index", difficulty: "Easy", link: "https://leetcode.com/problems/find-pivot-index/" },
    { title: "Range Sum Query - Immutable", difficulty: "Easy", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
    { title: "Subarray Sum Equals K", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
    { title: "Contiguous Array", difficulty: "Medium", link: "https://leetcode.com/problems/contiguous-array/" },
    { title: "Subarray Sums Divisible by K", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
    { title: "Car Pooling", difficulty: "Medium", link: "https://leetcode.com/problems/car-pooling/" },
    { title: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
    { title: "Corporate Flight Bookings", difficulty: "Medium", link: "https://leetcode.com/problems/corporate-flight-bookings/" },
    { title: "Maximum Sum of Two Non-Overlapping Subarrays", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" },
  ],
  companies: [
    { 
      name: "Google", 
      frequency: "High",
      questions: [
        { title: "Car Pooling", link: "https://leetcode.com/problems/car-pooling/" },
        { title: "Describe the Painting", link: "https://leetcode.com/problems/describe-the-painting/" }
      ]
    },
    { 
      name: "Amazon", 
      frequency: "High",
      questions: [
        { title: "Range Sum Query 2D", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
        { title: "Maximum Sum of Two Non-Overlapping Subarrays", link: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" }
      ]
    },
    { 
      name: "Meta", 
      frequency: "Medium",
      questions: [
        { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { title: "Continuous Subarray Sum", link: "https://leetcode.com/problems/continuous-subarray-sum/" }
      ]
    },
    { 
      name: "Microsoft", 
      frequency: "Medium",
      questions: [
        { title: "Find Pivot Index", link: "https://leetcode.com/problems/find-pivot-index/" },
        { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/" }
      ]
    },
    { 
      name: "Uber", 
      frequency: "Low",
      questions: [
        { title: "Corporate Flight Bookings", link: "https://leetcode.com/problems/corporate-flight-bookings/" }
      ]
    },
  ]
};

export default function PrefixSumPage() {
  const [activeTab, setActiveTab] = useState("Article");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans">
      {/* Top Navigation Bar */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase cursor-pointer hover:opacity-80 transition-opacity">
              CodeStruct_
            </span>
          </Link>
          <Link href="/dsa-sheet">
            <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest">
              <ChevronLeft size={16} /> Back to DSA Sheet
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-12">
          <h2 className="text-red-500 font-mono text-sm mb-2 uppercase tracking-[0.3em]">Array Pattern</h2>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic">Prefix Sum Pattern</h1>
        </header>

        {/* Sliding Tab Bar */}
        <div className="flex gap-2 p-1 bg-neutral-900/50 rounded-2xl border border-white/5 mb-8 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "Article" && (
                <div className="space-y-8 bg-neutral-900/20 p-8 rounded-3xl border border-white/5">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-neutral-300 leading-relaxed">{PREFIX_SUM_CONTENT.article.content}</p>
                    <div className="my-8 p-6 bg-red-600/10 border-l-4 border-red-600 rounded-r-xl">
                      <code className="text-red-400 font-mono text-lg">{PREFIX_SUM_CONTENT.article.formula}</code>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Code2 className="text-red-500" /> Implementation Steps
                    </h3>
                    <ul className="space-y-4">
                      {PREFIX_SUM_CONTENT.article.steps.map((step, i) => (
                        <li key={i} className="flex gap-4 text-neutral-400">
                          <span className="text-red-500 font-mono font-bold">0{i+1}.</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "Problems" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PREFIX_SUM_CONTENT.problems.map((prob, i) => (
                    <a 
                      href={prob.link} 
                      target="_blank" 
                      key={i} 
                      className="group p-6 bg-neutral-900/30 border border-white/5 rounded-2xl flex justify-between items-center hover:border-red-600/50 transition-all"
                    >
                      <div>
                        <h4 className="font-bold group-hover:text-red-500 transition-colors">{prob.title}</h4>
                        <span className={`text-[10px] uppercase tracking-widest font-black ${
                          prob.difficulty === "Easy" ? "text-green-500" : "text-yellow-500"
                        }`}>{prob.difficulty}</span>
                      </div>
                      <ExternalLink size={18} className="text-neutral-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              )}

              {activeTab === "Companies" && (
  <div className="bg-neutral-900/20 rounded-3xl border border-white/5 overflow-hidden">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-white/5 bg-white/5">
          <th className="p-6 font-mono text-xs uppercase tracking-widest text-neutral-500">Company</th>
          <th className="p-6 font-mono text-xs uppercase tracking-widest text-neutral-500">Targeted Questions</th>
          <th className="p-6 font-mono text-xs uppercase tracking-widest text-neutral-500 text-right">Frequency</th>
        </tr>
      </thead>
      <tbody>
        {PREFIX_SUM_CONTENT.companies.map((co, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors align-top">
            <td className="p-6 font-bold flex items-center gap-3">
              <Building2 size={18} className="text-red-500" /> {co.name}
            </td>
            <td className="p-6">
              <div className="flex flex-col gap-3">
                {co.questions.map((q, idx) => (
                  <a 
                    key={idx} 
                    href={q.link} 
                    target="_blank" 
                    className="text-sm text-neutral-400 hover:text-red-400 flex items-center gap-2 group/link w-fit transition-colors"
                  >
                    <LinkIcon size={12} className="text-neutral-600 group-hover/link:text-red-500" />
                    {q.title}
                  </a>
                ))}
              </div>
            </td>
            <td className="p-6 text-right">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                co.frequency === "High" ? "bg-red-500/20 text-red-500" : "bg-neutral-800 text-neutral-400"
              }`}>
                {co.frequency}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}