"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { clsx } from "clsx";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "info";
}

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "SIKANDER.EXE [Version 1.0.0]", type: "info" },
    { text: "(c) 2026 Digital Workshop. All systems active.", type: "info" },
    { text: "Type 'help' to view available commands, or press '~' to close.", type: "info" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Toggle terminal on keypress (~ / ` key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (cmdStr: string) => {
    const command = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { text: `guest@sikander-dev:~$ ${cmdStr}`, type: "input" as const }];

    if (!command) {
      setHistory(newHistory);
      return;
    }

    switch (command) {
      case "help":
        newHistory.push({
          text: "Available commands:\n  whoami   - Displays brief profile info\n  missions - Lists all portfolio missions\n  skills   - Lists technical system credentials\n  resume   - Opens the PDF resume in a new tab\n  contact  - Shows contact channels\n  clear    - Clears the console logs\n  help     - Shows this guide panel",
          type: "info"
        });
        break;

      case "whoami":
        newHistory.push({
          text: "Profile: Sikander Prajapati\nRole: Computer Science Student / AI-ML Engineer / Software Builder\nAcademics: Thakur Shyamnarayan Engineering College (Grad 2028)\nHackathon Achievements:\n  - National Grand Finale Qualifier: Hackareana 2.0 Delhi (Top 10 Mumbai Zone)\n  - Top 5 Finish: Ignite IT 7.0 Hackathon (24-hour prototype build)\n  - Idea Shortlisted: Google Hackathon Selection Round",
          type: "info"
        });
        break;

      case "missions":
      case "projects":
        newHistory.push({
          text: "System Missions:\n  [01] VitalGuard   - Healthcare + AI (Active Development)\n  [02] Offline RAG  - Private Document Q&A (Prototype)\n  [03] EventSphere  - Event management ecosystem (Active Development)\n  [04] Rx-Plain     - Asynchronous Medical Analyzer (Prototype)\n  [05] Heimdall     - Socket network threat sniffer (R&D)\n  [06] SkipQ        - Smart Queue scheduler (Prototype)\n  [07] Trust AI     - Hallucination evaluator (Concept & Research)",
          type: "info"
        });
        break;

      case "skills":
        newHistory.push({
          text: "Technical Stack Credentials:\n  Languages: Python, Java, JavaScript, C/C++, SQL, HTML, CSS\n  AI / ML: LangGraph, ChromaDB, Ollama, Mistral-7B, Vector Embeddings\n  Backend: FastAPI, Node.js, Express, Spring Boot, REST APIs\n  Frontend: React, Next.js 15, Tailwind CSS, Framer Motion\n  Tools: Git, Docker, GitHub, Twilio, n8n Automation",
          type: "info"
        });
        break;

      case "resume":
        newHistory.push({ text: "Opening Resume.pdf in browser tab...", type: "info" });
        window.open("/Resume.pdf", "_blank");
        break;

      case "contact":
        newHistory.push({
          text: "Contact channels:\n  Email:    sikanderprajapati1567@gmail.com\n  GitHub:   github.com/Sikander-18\n  LinkedIn: linkedin.com/in/sikanderprajapati\n  Phone:    +91 8767424644",
          type: "info"
        });
        break;

      case "clear":
        setHistory([]);
        setInputValue("");
        return;

      default:
        newHistory.push({
          text: `Command not found: '${command}'. Type 'help' to review available operations.`,
          type: "error"
        });
        break;
    }

    setHistory(newHistory);
    setInputValue("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md p-6 font-mono pointer-events-auto text-[11px] md:text-xs text-accent"
        >
          {/* Header bar */}
          <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4 select-none">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-white font-bold tracking-wider">SIKANDER_SYSTEM_SHELL v1.0.0</span>
            </div>
            <div className="text-zinc-500 text-[9px] uppercase tracking-widest">
              Press &ldquo;~&rdquo; or Esc key to close shell
            </div>
          </div>

          {/* Console logs area */}
          <div className="flex-1 overflow-y-auto pr-2 no-scrollbar flex flex-col gap-2 font-mono whitespace-pre-wrap">
            {history.map((line, index) => (
              <div
                key={index}
                className={clsx(
                  "leading-relaxed",
                  line.type === "input" && "text-white font-bold",
                  line.type === "error" && "text-red-400 font-semibold",
                  line.type === "info" && "text-zinc-300",
                  line.type === "output" && "text-accent"
                )}
              >
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Form input line */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 border-t border-zinc-900 pt-4 mt-2">
            <span className="text-primary font-bold shrink-0">guest@sikander-dev:~$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-white font-mono caret-accent"
              placeholder="Enter command..."
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
