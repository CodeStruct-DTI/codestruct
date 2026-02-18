"use client";

import styles from "../register/register.module.css";
// Added Code2 for a tech-centric look; Lucide icons are great for this
import { Globe, ChevronLeft, Code2, Terminal, Cpu } from "lucide-react"; 
import { motion } from "framer-motion";
import Link from "next/link"; 
import { FeatureCard } from "../page";

export default function LanguageOptionPage() {
    return (
        <div className={styles.container}>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] -z-10" />
            
            {/* Top Navigation */}
            <Link href="/">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="fixed top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
                >
                    <ChevronLeft className="w-4 h-4 text-red-600 group-hover:text-red-500 transition-colors"/>
                    <span className="text-xl font-black tracking-tighter text-red-600 uppercase group-hover:text-red-500 transition-colors">
                        Codestruct_
                    </span>
                </motion.div>
            </Link>

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-32 text-center">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-[23px] md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                        CHOOSE YOUR PREFERRED <span className="text-red-600">LANGUAGE</span>
                    </h1>
                </motion.div>

                {/* Language Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <FeatureCard 
                        icon={<Terminal className="w-10 h-10 text-red-600" />}
                        title="C++(Recommended)"
                        desc="The gold standard for Competitive Programming. Master STL, memory management, and high-speed execution."
                        href="/roadmap/cpp"
                    />
                    
                    <FeatureCard 
                        icon={<Cpu className="w-10 h-10 text-red-600" />}
                        title="Java(Recommended)"
                        desc="The backbone of enterprise software. Master OOPs, the Collections Framework, and robust system design."
                        href="/roadmap/java"
                    />
                    
                    <FeatureCard 
                        icon={<Code2 className="w-10 h-10 text-red-600" />}
                        title="Python"
                        desc="Rapid prototyping and clean syntax. Focus on algorithmic logic with powerful built-in data structures."
                        href="/roadmap/python"
                    />
                </div>
            </main>
        </div>
    );
}