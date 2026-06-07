"use client";

import { useEffect, useRef, useState } from "react";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandLog {
  input?: string;
  output: string;
}

const INITIAL_LOGS: CommandLog[] = [
  { output: "SIKANDER.EXE CONSOLE CORE [v1.0.4]" },
  { output: "Type 'help' to display available commands, or 'exit' to quit." },
];

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>(INITIAL_LOGS);
  const inputRef = useRef<HTMLInputElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Toggle terminal on tilde key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "~" || e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on log update
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = "";

    switch (trimmed) {
      case "help":
        response = `Available Commands:
  - whoami   : Print user profile info
  - missions : List classified builder missions
  - skills   : Print systems architecture skill grid
  - resume   : Launch resume PDF file
  - contact  : Display communication endpoints
  - clear    : Clear console output buffer
  - exit     : Close console session`;
        break;
      case "whoami":
        response = `Sikander Prajapati. CS Student, Systems Builder & AI Enthusiast.
Exploring mathematics, software engineering, and AI pipelines.
Location: Mumbai, India.
Goal: Transform complex conceptual ideas into production-ready software systems.`;
        break;
      case "missions":
      case "projects":
        response = `ACTIVE CLASSIFIED MISSIONS:
  1. VitalGuard  - AI Medical Vision Diagnostic [Active Dev]
  2. EventSphere - Decentralized Event Organiser App [Active Dev]
  3. Heimdall    - Network Monitoring & SIEM [R&D Stage]
  4. SkipQ       - Real-time Smart Retail Queue System [Prototype]
  5. Trust AI    - Verification Pipeline for Generative Models [Concept]`;
        break;
      case "skills":
        response = `SYSTEMS ARCHITECTURE GRID:
  - Programming Languages : Python, Java, JavaScript, SQL
  - Machine Learning & AI: PyTorch, TensorFlow, Scikit-Learn, OpenCV
  - Full-stack Web Core   : Next.js, React, Tailwind, FastAPI, Node.js
  - Infrastructure/DevOps: Git, Docker, Linux Shell, GitHub Pipelines`;
        break;
      case "resume":
        response = "Initiating Resume PDF loader... Redirecting now.";
        setTimeout(() => {
          window.open("/Resume.pdf", "_blank");
        }, 1000);
        break;
      case "contact":
        response = `COMMUNICATION ROUTINGS:
  - Email: sprajapati200424@gmail.com
  - GitHub: GitHub.com/Sikander-18
  - LinkedIn: LinkedIn.com/in/sikander-prajapati-128b12282`;
        break;
      case "clear":
        setLogs([]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      case "":
        return;
      default:
        response = `Command not recognized: '${trimmed}'. Type 'help' for instructions.`;
        break;
    }

    setLogs((prev) => [...prev, { input: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background-primary/60 backdrop-blur-md font-mono"
        >
          {/* Main Console Box */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-[640px] h-[400px] rounded-[24px] glass-panel flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header controls bar */}
            <div className="flex justify-between items-center px-6 py-3 border-b border-white/10 bg-white/5 select-none">
              <div className="flex items-center gap-2 text-text-dark/80">
                <TerminalIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">SIKANDER@CORE:~</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-muted-text hover:text-text-dark hover:bg-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Logs Window */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 text-xs leading-relaxed text-text-dark/90 select-text no-scrollbar">
              {logs.map((log, index) => (
                <div key={index} className="flex flex-col gap-1">
                  {log.input && (
                    <div className="flex items-center gap-2 font-bold text-primary-purple">
                      <span>$</span>
                      <span>{log.input}</span>
                    </div>
                  )}
                  <pre className="whitespace-pre-wrap font-mono font-medium opacity-90 pl-3 border-l-2 border-primary-purple/10">
                    {log.output}
                  </pre>
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>

            {/* Input Console Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 px-6 py-4 border-t border-white/10 bg-white/5"
            >
              <span className="text-xs font-extrabold text-primary-purple select-none">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-text-dark caret-primary-purple placeholder-muted-text/50"
                placeholder="Type command here..."
                autoFocus
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
