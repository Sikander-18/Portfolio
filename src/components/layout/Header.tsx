"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Missions", id: "missions" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of LINKS) {
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
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-6 right-6 z-[95] select-none pointer-events-auto w-[calc(100%-3rem)] max-w-5xl left-1/2 -translate-x-1/2">
      {/* Top Glass Dock bar */}
      <div className="flex justify-between items-center px-6 py-3.5 glass-panel rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md">
        
        {/* Mobile Logo / Title */}
        <button 
          onClick={() => {
            handleScrollTo("hero");
            window.dispatchEvent(new CustomEvent("logo-click-event"));
          }}
          className="xl:hidden font-display font-extrabold text-sm tracking-wide text-text-dark uppercase"
        >
          SIKANDER
        </button>

        {/* Desktop Links (Visible up to xl, hidden beyond to let LeftNav handle it, or visible on md/lg) */}
        <nav className="hidden md:flex items-center gap-8 mx-auto font-sans text-xs font-semibold text-muted-text">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-primary-purple font-bold" : "hover:text-text-dark"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <a href="/resume" className="hover:text-text-dark transition-colors">Resume</a>
          <a href="/workshop" className="hover:text-text-dark transition-colors">Workshop</a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-white/20 text-text-dark transition-colors pointer-events-auto cursor-pointer"
            title="Toggle theme"
            data-cursor="CONNECT"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/20 text-text-dark transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 glass-panel rounded-3xl flex flex-col gap-4 font-sans text-sm font-semibold text-muted-text shadow-xl animate-in fade-in slide-in-from-top-3 duration-300">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-left py-2 border-b border-white/5 transition-colors ${
                  isActive ? "text-primary-purple font-bold" : "hover:text-text-dark"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <a href="/resume" className="py-2 border-b border-white/5 hover:text-text-dark">Resume</a>
          <a href="/workshop" className="py-2 border-b border-white/5 hover:text-text-dark">Workshop</a>
        </div>
      )}

    </header>
  );
}
