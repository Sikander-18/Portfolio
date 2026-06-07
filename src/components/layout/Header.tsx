"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Mission", href: "/mission" },
  { name: "Workspace", href: "/workspace" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-[95] select-none pointer-events-auto">
      {/* Top Glass Dock bar */}
      <div className="flex justify-between items-center px-6 py-3.5 glass-panel rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md">
        
        {/* Mobile Logo / Title */}
        <Link 
          href="/"
          onClick={() => {
            setMobileMenuOpen(false);
            window.dispatchEvent(new CustomEvent("logo-click-event"));
          }}
          className="font-display font-extrabold text-sm tracking-wide text-text-dark uppercase pointer-events-auto"
        >
          SIKANDER
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 mx-auto font-sans text-[11px] font-bold text-muted-text">
          {LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 cursor-pointer ${
                  active ? "text-primary-purple font-extrabold" : "hover:text-text-dark"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2 border-b border-white/5 transition-colors ${
                  active ? "text-primary-purple font-bold" : "hover:text-text-dark"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}

    </header>
  );
}
