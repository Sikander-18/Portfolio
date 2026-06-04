"use client";

import { useState } from "react";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as LinkedIn } from "@/components/icons";
import { clsx } from "clsx";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success banner after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col justify-between py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      {/* Spacer */}
      <div />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* Left Side (Headline & Links - 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 justify-center select-none">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Connection Hub"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight leading-[0.95]">
              LET&apos;S BUILD<br />SOMETHING<br />MEANINGFUL.
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-sm">
            Whether you want to recruit an intern, discuss systems architecture, AI reasoning, or just collaborate on a project — my inbox is always open.
          </p>

          {/* Social button links */}
          <div className="flex flex-col gap-3 max-w-xs mt-2">
            <a
              href="mailto:sikanderprajapati1567@gmail.com"
              className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-all duration-300 hover:translate-x-1"
              data-cursor="CONNECT"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Email Me</span>
            </a>

            <a
              href="https://linkedin.com/in/sikanderprajapati"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-all duration-300 hover:translate-x-1"
              data-cursor="CONNECT"
            >
              <LinkedIn className="w-4 h-4 text-primary" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Sikander-18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-all duration-300 hover:translate-x-1"
              data-cursor="BUILD"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub Profile</span>
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-all duration-300 hover:translate-x-1"
              data-cursor="READ"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side (Contact Form - 7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md relative overflow-hidden">
            
            {/* Header control line */}
            <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-6 select-none pointer-events-none">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Secure Transmission socket
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Success overlay state */}
            {isSuccess && (
              <div className="mb-6 p-4 rounded-xl border border-success/20 bg-success/5 text-success text-xs font-mono flex items-start gap-2.5 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider block mb-1">Transmission Sent!</span>
                  <span>Your message has been successfully broadcasted. I will get back to you shortly.</span>
                </div>
              </div>
            )}

            {/* Core Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3.5 bg-zinc-900 border border-zinc-850 focus:border-accent rounded-xl text-sm text-white placeholder-transparent focus:outline-none focus:ring-0 transition-colors pointer-events-auto"
                />
                <label
                  htmlFor="form-name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-zinc-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:text-accent peer-focus:scale-95 origin-[0] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  FULL NAME
                </label>
              </div>

              {/* Email Field */}
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3.5 bg-zinc-900 border border-zinc-850 focus:border-accent rounded-xl text-sm text-white placeholder-transparent focus:outline-none focus:ring-0 transition-colors pointer-events-auto"
                />
                <label
                  htmlFor="form-email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-zinc-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:text-accent peer-focus:scale-95 origin-[0] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  EMAIL ADDRESS
                </label>
              </div>

              {/* Message Field */}
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="form-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-3.5 bg-zinc-900 border border-zinc-850 focus:border-accent rounded-xl text-sm text-white placeholder-transparent focus:outline-none focus:ring-0 transition-colors resize-none pointer-events-auto"
                />
                <label
                  htmlFor="form-message"
                  className="absolute left-4 top-4 font-mono text-xs text-zinc-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent peer-focus:scale-95 origin-[0] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  MESSAGE BLUEPRINT
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary rounded-xl text-xs font-mono font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.15)] pointer-events-auto"
                data-cursor="CONNECT"
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                <Send className={clsx("w-3.5 h-3.5 transition-transform", isSubmitting && "animate-pulse", !isSubmitting && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5")} />
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* Footer quote closing */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-zinc-900/50 pt-6 mt-12 font-mono text-[9px] text-zinc-600 uppercase tracking-widest select-none gap-4">
        <div>&copy; 2026 Sikander Prajapati &bull; All Systems Active</div>
        <div className="text-zinc-500 font-bold tracking-[0.18em]">
          &ldquo;There are still more ideas than time.&rdquo;
        </div>
      </div>
    </section>
  );
}
