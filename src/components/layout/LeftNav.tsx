"use client";

import { Home, Folder, Cpu, User, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", id: "hero", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Mindset", id: "mindset", icon: Cpu },
  { name: "Missions", id: "missions", icon: Folder },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function LeftNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed top-6 left-6 bottom-6 w-[240px] z-[90] hidden xl:flex flex-col justify-between p-6 glass-panel rounded-3xl select-none">
      
      {/* Top Section: Logo & Info */}
      <div className="flex flex-col gap-6">
        {/* Glowing Logo */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => {
              handleScrollTo("hero");
              window.dispatchEvent(new CustomEvent("logo-click-event"));
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-purple to-soft-pink flex items-center justify-center font-display font-extrabold text-white text-xl cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-105 active:scale-95 transition-all duration-200"
            data-cursor="CONNECT"
          >
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs text-text-dark tracking-wide leading-none">SIKANDER</span>
            <span className="font-mono text-[9px] text-muted-text mt-0.5 uppercase tracking-wider">AI Engineer</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex flex-col gap-1.5 mt-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium transition-all duration-300 pointer-events-auto ${
                  isActive 
                    ? "clay-button-active translate-x-1.5 text-white" 
                    : "text-muted-text hover:text-text-dark hover:bg-white/10"
                }`}
                data-cursor="OPEN"
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-muted-text"}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
          {/* Subpage routes */}
          <a
            href="/resume"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium text-muted-text hover:text-text-dark hover:bg-white/10 transition-all duration-300 pointer-events-auto mt-2 border-t border-white/10 pt-4"
            data-cursor="READ"
          >
            <FileText className="w-4 h-4 text-muted-text" />
            <span>View Resume</span>
          </a>
        </nav>
      </div>

      {/* Bottom Section: Bio & Socials */}
      <div className="flex flex-col gap-5">
        {/* Simple Bio Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] text-muted-text leading-relaxed font-sans">
          Exploring ideas, building scalable systems, and solving real-world AI challenges from Mumbai, India.
        </div>

        {/* Social connections */}
        <div className="flex items-center justify-between px-2 pt-2 border-t border-white/10">
          <span className="font-mono text-[8px] text-muted-text uppercase tracking-widest">Connect</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Sikander-18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted-text hover:text-primary-purple hover:bg-white/20 transition-all pointer-events-auto"
              data-cursor="BUILD"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted-text hover:text-primary-purple hover:bg-white/20 transition-all pointer-events-auto"
              data-cursor="CONNECT"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </aside>
  );
}
