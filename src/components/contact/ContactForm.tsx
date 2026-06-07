"use client";

import { useState } from "react";
import { Mail, FileText, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success banner after 4s
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-[30%] left-[-5%] w-[420px] h-[420px] bg-soft-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
        </div>

        {/* Content split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Contact Specs & Animations */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-3xl glass-panel border border-white/40 shadow-xl relative overflow-hidden">
            
            {/* Embedded anim background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] blur-[2px]">
              <Image
                src="/animations/contact/contactsection.gif"
                alt="Digital Communications"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Top Info */}
            <div className="flex flex-col gap-5 z-10 relative text-left">
              <span className="font-mono text-[8px] text-primary-purple uppercase tracking-widest font-extrabold">
                Connection Channels
              </span>
              <p className="text-muted-text text-sm leading-relaxed font-sans font-medium">
                Have an internship opportunity, a project concept, or just want to chat about AI pipelines and systems architecture? Drop me a message or connect through my links.
              </p>

              {/* Direct email display */}
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="font-mono text-[8px] text-muted-text uppercase font-bold">Primary Endpoint</span>
                <a
                  href="mailto:sprajapati200424@gmail.com"
                  className="font-mono text-xs text-primary-purple font-bold hover:underline"
                >
                  sprajapati200424@gmail.com
                </a>
              </div>
            </div>

            {/* Bottom Channels List */}
            <div className="flex flex-col gap-4 mt-8 z-10 relative">
              <span className="font-mono text-[8px] text-muted-text uppercase font-bold text-left border-b border-white/10 pb-1">
                Linked Protocols
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Sikander-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-button py-3 px-4 rounded-xl text-[10px] font-bold flex items-center gap-2 pointer-events-auto"
                  data-cursor="BUILD"
                >
                  <FaGithub className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sikander-prajapati-128b12282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-button py-3 px-4 rounded-xl text-[10px] font-bold flex items-center gap-2 pointer-events-auto"
                  data-cursor="CONNECT"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                  <span>LinkedIn</span>
                </a>

                {/* Resume */}
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  className="clay-button py-3 px-4 rounded-xl text-[10px] font-bold flex items-center gap-2 pointer-events-auto"
                  data-cursor="READ"
                >
                  <FileText className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                  <span>Resume</span>
                </a>

                {/* Mail */}
                <a
                  href="mailto:sprajapati200424@gmail.com"
                  className="clay-button py-3 px-4 rounded-xl text-[10px] font-bold flex items-center gap-2 pointer-events-auto"
                  data-cursor="CONNECT"
                >
                  <Mail className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full rounded-3xl glass-panel border border-white/40 p-6 md:p-8 flex flex-col gap-5 shadow-xl text-left"
            >
              <span className="font-mono text-[8px] text-muted-text uppercase tracking-widest pl-1 font-bold">
                Message Interface
              </span>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-text-dark font-extrabold uppercase tracking-wide pl-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-xs text-text-dark outline-none font-sans font-medium placeholder-muted-text/50 transition-all focus:bg-white/45 focus:border-primary-purple/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-text-dark font-extrabold uppercase tracking-wide pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-xs text-text-dark outline-none font-sans font-medium placeholder-muted-text/50 transition-all focus:bg-white/45 focus:border-primary-purple/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-text-dark font-extrabold uppercase tracking-wide pl-1">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project concept, opportunities, or ideas..."
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-xs text-text-dark outline-none font-sans font-medium placeholder-muted-text/50 transition-all focus:bg-white/45 focus:border-primary-purple/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)] resize-none"
                />
              </div>

              {/* Status Display Messages */}
              <AnimatePresence mode="wait">
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/35 flex items-center gap-2 text-emerald-600 font-mono text-[10px] font-bold"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>TRANSMISSION SUCCESSFUL // I WILL REPLY SHORTLY.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="clay-button-active py-4 rounded-xl text-xs flex items-center justify-center gap-2 mt-2 transition-all disabled:opacity-50 pointer-events-auto"
                data-cursor="CONNECT"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
