"use client";

import Link from "next/link";
import { ArrowLeft, Download, Mail, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";

export default function ResumePage() {
  return (
    <div className="min-h-screen w-full bg-background p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
      
      {/* Container */}
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">
        
        {/* Navigation header */}
        <div className="flex justify-between items-center select-none">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-widest font-bold transition-colors group"
            data-cursor="CONNECT"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Return Home</span>
          </Link>
          
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 hover:border-primary font-mono text-[10px] text-white transition-all uppercase pointer-events-auto"
            data-cursor="READ"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Dossier Header */}
        <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 select-none">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Professional Dossier"}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase">
              SIKANDER PRAJAPATI
            </h1>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mt-1">
              AI Engineer &bull; Software Developer &bull; System Builder
            </p>
          </div>

          <div className="flex flex-col gap-1 font-mono text-[10px] text-zinc-500 uppercase tracking-widest items-start md:items-end leading-relaxed">
            <span>Location: Mumbai, Maharashtra, India</span>
            <span>Tel: +91 8767424644</span>
            <span>Email: sikanderprajapati1567@gmail.com</span>
          </div>
        </div>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Stats/Education - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Contact quick links */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm flex flex-col gap-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest select-none border-b border-zinc-900 pb-2">
                Verification Links
              </span>
              
              <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400 pointer-events-auto">
                <a href="mailto:sikanderprajapati1567@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors" data-cursor="CONNECT">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>sikanderprajapati1567@gmail.com</span>
                </a>
                <a href="https://github.com/Sikander-18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors" data-cursor="BUILD">
                  <Github className="w-4 h-4 text-primary" />
                  <span>github.com/Sikander-18</span>
                </a>
                <a href="https://linkedin.com/in/sikanderprajapati" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors" data-cursor="CONNECT">
                  <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>in/sikanderprajapati</span>
                </a>
              </div>
            </div>

            {/* Education Box */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm flex flex-col gap-4 select-none">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                ACADEMIC CREDENTIALS
              </span>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold text-white leading-tight">
                    Bachelor of Engineering (B.E.)
                  </span>
                  <span className="font-mono text-[9px] text-accent leading-none">
                    AI & Machine Learning Specialization
                  </span>
                  <span className="font-sans text-[11px] text-zinc-400 mt-1">
                    Thakur Shyamnarayan Engineering College
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 mt-1 uppercase">
                    Expected Graduation: 2028
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 pt-3 border-t border-zinc-900/60">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                    Relevant Coursework
                  </span>
                  <ul className="list-disc list-inside font-sans text-xs text-zinc-400 flex flex-col gap-1">
                    <li>Data Structures & Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Machine Learning Fundamentals</li>
                    <li>Object-Oriented Programming</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Core Details - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Professional Summary */}
            <div className="flex flex-col gap-2.5 select-none">
              <h2 className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                Dossier Executive Summary
              </h2>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                Second-year B.E. student specializing in Artificial Intelligence and Machine Learning with practical hands-on experience building full-stack applications and AI-integrated systems. Proven ability to deliver functional prototypes under tight constraints, demonstrated by multiple hackathon achievements including qualifying for the Hackareana 2.0 National Grand Finale in Delhi, a Top 5 finish, and a Google Hackathon shortlisting.
              </p>
            </div>

            {/* Technical Skills Categorized */}
            <div className="flex flex-col gap-4 select-none">
              <h2 className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                SYSTEM TECHNICAL CREDENTIALS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
                  <span className="font-mono text-[8px] text-accent uppercase tracking-widest block mb-2">Languages & Shell</span>
                  <p className="font-sans text-xs text-zinc-300 leading-normal">
                    Python, Java, JavaScript, C, C++, HTML, CSS, SQL
                  </p>
                </div>
                
                <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
                  <span className="font-mono text-[8px] text-accent uppercase tracking-widest block mb-2">Frameworks & REST APIs</span>
                  <p className="font-sans text-xs text-zinc-300 leading-normal">
                    React, Node.js, FastAPI, Spring Boot, Streamlit, Express
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
                  <span className="font-mono text-[8px] text-accent uppercase tracking-widest block mb-2">AI Reasoning & Vector Stores</span>
                  <p className="font-sans text-xs text-zinc-300 leading-normal">
                    RAG systems, ChromaDB, LangGraph, LangChain, Scikit-learn, Ollama (Mistral-7B)
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
                  <span className="font-mono text-[8px] text-accent uppercase tracking-widest block mb-2">Infrastructure & DevOps</span>
                  <p className="font-sans text-xs text-zinc-300 leading-normal">
                    Docker, Git, GitHub, Twilio APIs, n8n Workflow Automation
                  </p>
                </div>
              </div>
            </div>

            {/* Hackathon Record dossier */}
            <div className="flex flex-col gap-4 select-none">
              <h2 className="font-mono text-[10px] text-success uppercase tracking-widest font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-success" />
                HACKATHON DEPLOYMENT HISTORY
              </h2>
              
              <div className="flex flex-col gap-4">
                {/* Hackareana */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-sans text-xs font-bold text-white">
                      Hackareana 2.0 &bull; National Grand Finale Qualifier
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">Delhi / Mumbai</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1">
                    Advanced to the National Grand Finale of Hackareana 2.0 in Delhi as Team Lead of &apos;Sudo Win&apos;. Placed Top 10 in the Mumbai Zone qualifying round out of competing regional teams across Maharashtra by building and pitching a health monitoring system.
                  </p>
                </div>

                {/* Health-Tech Hackathon */}
                <div className="flex flex-col gap-1 border-t border-zinc-900/60 pt-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-sans text-xs font-bold text-white">
                      Health-Tech Hackathon &bull; Top 10 in Health Track
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">Top 60 / 250 teams</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1">
                    Co-developed VitalGuard, translating a high-level health monitoring concept into a deployed software system handling simulated BLE sensor streams and automated emergency call alerts. Managed feature scoping and systematic Git version control workflows as core systems engineer.
                  </p>
                </div>

                {/* Ignite IT 7.0 */}
                <div className="flex flex-col gap-1 border-t border-zinc-900/60 pt-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-sans text-xs font-bold text-white">
                      Ignite IT 7.0 Hackathon &bull; Top 5 Finish
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">24-hour sprint</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1">
                    Collaborated within a 4-person team to architect, build, and deploy a completely working software prototype under a restrictive 24-hour deadline. Managed feature scoping and systematic Git version control workflows.
                  </p>
                </div>

                {/* Google Hackathon */}
                <div className="flex flex-col gap-1 border-t border-zinc-900/60 pt-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-sans text-xs font-bold text-white">
                      Google Hackathon &bull; Idea Shortlisted in Selection Round
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">Independent Ideator</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1">
                    Designed an innovative technical blueprint focusing on system architectural efficiency and complex problem resolution. Successfully cleared initial competitive filters, getting the idea shortlisted in the selection round.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full border-t border-zinc-900/50 pt-6 mt-16 font-mono text-[8px] text-zinc-650 flex justify-between items-center select-none uppercase tracking-widest">
        <div>Sikander Prajapati &bull; Resume Registry Dossier</div>
        <div>All details verified</div>
      </footer>

    </div>
  );
}
