"use client"; // Enables client-side features like Framer Motion and React hooks in Next.js.

import { motion } from "framer-motion"; // Imports the animation library for smooth transitions and hover effects.
import Link from "next/link"; // Imports the Next.js component for fast, client-side navigation between pages.
import { Terminal, Cpu, Code2, ArrowRight } from "lucide-react"; // Imports specialized SVG icons for the UI components.

export default function LandingPage() { // Defines and exports the main component for the home page.
  return ( // Returns the JSX structure to be rendered in the browser.
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden"> {/* Root wrapper: black background, white text, red highlight color, and prevents side-scrolling. */}
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] -z-10" /> {/* Decorative element: creates a faint red glowing aura behind the main content. */}

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md"> {/* Header bar: stays at top, semi-transparent black with a blur effect and bottom border. */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto"> {/* Navigation container: spaces out logo and links, centers content within a maximum width. */}
          <motion.div // Animated container for the brand logo.
            initial={{ opacity: 0, x: -20 }} // Animation start: invisible and shifted 20 pixels to the left.
            animate={{ opacity: 1, x: 0 }} // Animation end: fully visible and at its natural position.
            className="text-2xl font-black tracking-tighter text-red-600" // Logo styling: bold, tight lettering, and brand-specific red color.
          >
            CODESTRUCT_ {/* The brand name text with a terminal-style underscore. */}
          </motion.div>
          <div className="flex gap-8 items-center text-sm font-medium text-neutral-400"> {/* Container for nav links: greyish text, medium weight, and spaced apart. */}
            <Link href="/login" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Login</Link> {/* Link to login page: turns white on hover with a smooth transition. */}
            <Link href="/register" className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] text-xs font-bold uppercase tracking-tighter"> {/* Link to register: styled as a glowing red button with rounded corners. */}
              Register {/* The button label text. */}
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-32 text-center"> {/* Main content area: centers text, applies padding for the fixed header, and limits width. */}
        {/* Hero Section */}
        <motion.div // Animated container for the hero text and main button.
          initial={{ opacity: 0, y: 30 }} // Animation start: invisible and shifted 30 pixels down.
          animate={{ opacity: 1, y: 0 }} // Animation end: fully visible and slides up into place.
          transition={{ duration: 0.8 }} // Sets the animation to last 0.8 seconds.
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight"> {/* Large headline: bold, massive scale on desktop, and tight line spacing. */}
            Learn the <span className="text-red-600">Syntax</span>,<br /> {/* Heading text with 'Syntax' highlighted in red and a line break. */}
            Solve the <span className="text-neutral-500">Problem.</span> {/* Heading text with 'Problem' in grey and italics for emphasis. */}
          </h1>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-10"> {/* Subheadline: muted grey text, centered, with a limited width for readability. */}
            From your first line of code to mastering complex Data Structures. 
            The only command center built for the complete engineering journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* Button container: stacks on mobile, side-by-side on larger screens. */}
            <Link href="/register"> {/* Wraps the button in a link to the registration page. */}
              <motion.button // Animated button for the Call to Action.
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }} // Hover effect: grows slightly and increases red glow intensity.
                whileTap={{ scale: 0.95 }} // Click effect: shrinks slightly to feel like a physical press.
                className="px-8 py-4 bg-red-600 rounded-xl font-bold text-lg flex items-center gap-2" // Button styling: large, red, rounded corners, uses Flexbox for icon alignment.
              >
                Begin Journey <ArrowRight className="w-5 h-5" /> {/* Button text with a right-facing arrow icon. */}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Clickable Feature Grid */}
        <motion.div // Animated container for the feature cards grid.
          initial={{ opacity: 0, y: 50 }} // Animation start: invisible and shifted 50 pixels down.
          whileInView={{ opacity: 1, y: 0 }} // Animation trigger: fades in and slides up when the user scrolls to it.
          viewport={{ once: true }} // Ensures the animation only plays the first time it is seen.
          transition={{ delay: 0.4, duration: 0.8 }} // Waits 0.4 seconds before starting the 0.8s animation.
          className="grid md:grid-cols-3 gap-8 mt-32" // Grid layout: 3 columns on desktop, 1 on mobile, with spacing.
        >
          {/* Link to Language Selection (To be built) */}
          <FeatureCard // Custom card component for the Roadmap feature.
            icon={<Code2 className="text-red-500 w-10 h-10" />} // Passes a red Code icon as a prop.
            title="Language Roadmaps" // Passes the card title as a prop.
            desc="Structured paths to master Java, C++, or Python from scratch before diving into DSA." // Passes the description text as a prop.
            href="/languageoptions" // Sets the destination URL for the card.
          />
          {/* Link to DSA Path (To be built) */}
          <FeatureCard // Custom card component for the Pattern feature.
            icon={<Cpu className="text-red-500 w-10 h-10" />} // Passes a red CPU icon as a prop.
            title="Pattern Roadmaps" // Passes the card title.
            desc="Once you know the syntax, master the logic with visual paths through core DSA patterns." // Passes the description text.
            href="/dsa" // Sets the destination URL.
          />
          {/* Link to your newly created Unified Dashboard */}
          <FeatureCard // Custom card component for the Dashboard feature.
            icon={<Terminal className="text-red-500 w-10 h-10" />} // Passes a red Terminal icon as a prop.
            title="Unified Dashboard" // Passes the card title.
            desc="A centralized view of your progress across LeetCode, Codeforces, and your roadmap goals." // Passes the description text.
            href="/unidashboard" // Sets the destination URL.
          />
        </motion.div>
      </main>
    </div>
  );
}

/* FeatureCard with Link wrapper and Hover animations */
export function FeatureCard({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) { // Defines a reusable card component with specific data types.
  return (
    <Link href={href} className="block"> {/* Wrapper: makes the entire card clickable and navigates to the 'href'. */}
      <motion.div // The animated card container.
        whileHover={{ // Effects triggered when mouse enters the card area.
          y: -10, // Slides the card 10 pixels upward.
          borderColor: "rgba(220, 38, 38, 0.5)", // Brightens the border to a semi-transparent red.
          backgroundColor: "rgba(10, 10, 10, 1)" // Darkens the card background slightly for contrast.
        }}
        className="p-8 bg-neutral-950 border border-neutral-900 rounded-2xl text-left transition-all relative group cursor-pointer h-full" // Card styling: padding, dark grey border, rounded corners, and smooth transitions.
      >
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-between items-start"> {/* Icon container: grows slightly on hover, spaces icon and arrow apart. */}
          {icon} {/* Renders the specific icon passed from the parent. */}
          {/* Subtle indicator that card is clickable */}
          <ArrowRight className="w-5 h-5 text-neutral-800 group-hover:text-red-500 transition-colors" /> {/* Small arrow: turns red when the card is hovered. */}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{title}</h3> {/* Card title: large, bold, and all-caps. */}
        <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-400 transition-colors">{desc}</p> {/* Card description: muted grey text that brightens slightly on hover. */}
        
        {/* Decorative glow line at the bottom of the card */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500 rounded-b-2xl" /> {/* Visual flair: a red line that grows from 0% to 100% width on hover. */}
      </motion.div>
    </Link>
  );
}