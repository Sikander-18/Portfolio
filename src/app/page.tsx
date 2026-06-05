"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import Mindset from "@/components/Mindset";
import SkillsNetwork from "@/components/SkillsNetwork";
import MissionsSection from "@/components/MissionsSection";
import Mathematics from "@/components/Mathematics";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import DigitalWorkshop from "@/components/DigitalWorkshop";
import ContactForm from "@/components/ContactForm";
import TextRoll from "@/components/TextRoll";
import { Terminal, ShieldAlert } from "lucide-react";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleLogoClick = () => {
    const nextClicks = logoClicks + 1;
    setLogoClicks(nextClicks);
    if (nextClicks >= 5) {
      setShowEasterEgg(true);
      setLogoClicks(0);
      
      // Auto-hide easter egg after 5s
      setTimeout(() => {
        setShowEasterEgg(false);
      }, 5000);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasLoaded && (
          <Loader key="loader" onComplete={() => setHasLoaded(true)} />
        )}
      </AnimatePresence>

      {hasLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen w-full bg-background"
        >
          {/* Floating Navigation Header */}
          <header className="fixed top-6 left-6 right-6 z-[9980] flex justify-between items-center px-6 py-3.5 bg-zinc-950/80 border border-zinc-900 rounded-2xl backdrop-blur-md max-w-5xl mx-auto select-none pointer-events-auto shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            
            {/* Logo with Click x5 Easter Egg */}
            <button
              onClick={handleLogoClick}
              className="font-display font-black text-sm tracking-widest text-white hover:text-accent transition-colors duration-300 pointer-events-auto uppercase group/btn"
              data-cursor="CONNECT"
            >
              <TextRoll text="Sikander" groupClassName="group/btn" />
            </button>

            {/* Nav link coordinates */}
            <nav className="hidden md:flex items-center gap-6 font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
              <button onClick={() => handleScrollTo("origin")} className="transition-colors group/link pointer-events-auto">
                <TextRoll text="Origin" />
              </button>
              <button onClick={() => handleScrollTo("missions")} className="transition-colors group/link pointer-events-auto">
                <TextRoll text="Missions" />
              </button>
              <button onClick={() => handleScrollTo("contact")} className="transition-colors group/link pointer-events-auto">
                <TextRoll text="Contact" />
              </button>
              <a href="/missions" className="transition-colors group/link pointer-events-auto">
                <TextRoll text="All Files" />
              </a>
              <a href="/resume" className="transition-colors group/link pointer-events-auto">
                <TextRoll text="Resume" />
              </a>
            </nav>

            {/* Quick terminal key reminder */}
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 uppercase tracking-widest border-l border-zinc-900 pl-4">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Press &ldquo;~&rdquo; for console</span>
              <span className="sm:hidden">&ldquo;~&rdquo;</span>
            </div>

          </header>

          {/* Logo click easter egg message */}
          <AnimatePresence>
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="fixed top-24 left-1/2 -translate-x-1/2 z-[9985] p-4 bg-zinc-900 border border-primary/50 text-white rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.2)] max-w-sm flex items-center gap-3 font-mono text-xs select-none"
              >
                <ShieldAlert className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <span className="text-accent font-bold block mb-0.5">UNLOCKED STAGGER</span>
                  <span>There are still more ideas than time.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sections Layout Stack */}
          <main className="w-full flex flex-col items-center">
            <Hero />
            <OriginStory />
            <Mindset />
            <SkillsNetwork />
            <MissionsSection />
            <Mathematics />
            <CurrentlyBuilding />
            <DigitalWorkshop />
            <ContactForm />
          </main>

        </motion.div>
      )}
    </>
  );
}
