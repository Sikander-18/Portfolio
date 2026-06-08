"use client";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactForm() {
  const lines = ["THERE ARE STILL", "MORE IDEAS", "THAN TIME."];
  
  const buttons = [
    { label: "GitHub", href: "https://github.com/Sikander-18", icon: FaGithub, cursor: "BUILD" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sikander-prajapati-128b12282", icon: FaLinkedin, cursor: "CONNECT" },
    { label: "Email", href: "mailto:sprajapati200424@gmail.com", icon: Mail, cursor: "CONNECT" },
    { label: "Resume", href: "/Resume.pdf", icon: FileText, cursor: "READ" }
  ];

  return (
    <section 
      id="contact" 
      className="h-screen min-h-[600px] md:min-h-[750px] w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent border-t border-white/10"
    >
      {/* Background Animated Gif as subtle cinematic backdrop noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08] mix-blend-overlay">
        <Image
          src="/animations/contact/contactsection.gif"
          alt="Ambient digital stream background"
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Ambient background glows/nebulae matching page styles */}
      <div className="absolute top-[25%] left-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-soft-pink/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Center Cinematic Content Area */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10 text-center select-none">
        
        {/* Sub-label/Intro Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-inner"
        >
          <span className="font-mono text-[9px] sm:text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Conclusion of the Journey
          </span>
        </motion.div>

        {/* Large Cinematic Typography */}
        <h2 className="flex flex-col items-center justify-center text-center font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9] text-text-dark gap-1 sm:gap-2">
          {lines.map((line, idx) => (
            <div key={idx} className="overflow-hidden py-1.5 flex items-center justify-center">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="block bg-gradient-to-b from-text-dark to-text-dark/80 dark:from-white dark:to-white/75 bg-clip-text text-transparent"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h2>

        {/* Action Prompt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-text text-base sm:text-lg md:text-xl lg:text-2xl font-sans mt-8 mb-10 max-w-xl text-center leading-relaxed font-semibold italic"
        >
          Let's build something meaningful.
        </motion.p>

        {/* Minimal Button row of Connection Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-2xl px-4"
        >
          {buttons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full glass-panel border border-white/40 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-text-dark hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/60 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-md shrink-0 select-none cursor-pointer"
                data-cursor={btn.cursor}
              >
                <Icon className="w-4 h-4 text-primary-purple shrink-0" />
                <span>{btn.label}</span>
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
