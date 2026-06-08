"use client";

import { Download, Briefcase, GraduationCap, Award, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-32 pb-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-12 text-left">

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-text-dark">
            Sikander Prajapati
          </h1>
          <p className="font-mono text-xs text-primary-purple uppercase tracking-widest font-extrabold">
            AI & Machine Learning Engineer / Software Systems Builder
          </p>
          <span className="text-muted-text text-xs mt-1">Mumbai, India | sprajapati200424@gmail.com</span>
        </div>

        <a
          href="/Resume.pdf"
          download="Sikander_Prajapati_Resume.pdf"
          className="clay-button-active px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 pointer-events-auto w-full md:w-auto justify-center"
          data-cursor="READ"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Resume</span>
        </a>
      </div>

      {/* Main sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left main details: Experience / Education */}
        <div className="md:col-span-8 flex flex-col gap-10">
          
          {/* Education */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 border-b border-white/15 pb-2">
              <GraduationCap className="w-5 h-5 text-primary-purple" />
              <h2 className="font-display font-extrabold text-lg text-text-dark">Education</h2>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-sm text-text-dark">
                  Bachelor of Computer Science (B.Sc. CS)
                </h3>
                <span className="font-mono text-[10px] text-muted-text">Ongoing</span>
              </div>
              <span className="text-xs text-muted-text">Mumbai, India</span>
              <p className="text-muted-text text-xs leading-relaxed mt-2 font-sans font-medium">
                Specializing in Artificial Intelligence, Machine Learning pipelines, and Software System structures. Heavy coursework in Applied Linear Algebra, Probability, Algorithm Designs, and Database Management Systems.
              </p>
            </div>
          </div>

          {/* Featured Missions details */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 border-b border-white/15 pb-2">
              <Briefcase className="w-5 h-5 text-primary-purple" />
              <h2 className="font-display font-extrabold text-lg text-text-dark">Featured Engineering Missions</h2>
            </div>

            {/* VitalGuard */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h4 className="font-display font-bold text-sm text-text-dark">VitalGuard — Healthcare + AI Assistant</h4>
                <span className="font-mono text-[9px] text-primary-purple uppercase tracking-wider font-extrabold">Active Dev</span>
              </div>
              <p className="text-muted-text text-xs leading-relaxed font-sans font-medium">
                Engineered an AI thoracic classification web platform utilizing fine-tuned Convolutional Neural Networks (CNNs). Leveraged FastAPI async brokers to handle high-throughput radiological images, generating Grad-CAM heatmaps to flag diagnostic zones in &lt;1.5 seconds.
              </p>
            </div>

            {/* EventSphere */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h4 className="font-display font-bold text-sm text-text-dark">EventSphere — Event Ecosystem</h4>
                <span className="font-mono text-[9px] text-primary-purple uppercase tracking-wider font-extrabold">Active Dev</span>
              </div>
              <p className="text-muted-text text-xs leading-relaxed font-sans font-medium">
                Constructed a full-stack event ecosystem utilizing a transactional relational database schema. Implemented sub-second dashboard telemetry, QR-based secure check-in pipelines, and automated emailing checkouts.
              </p>
            </div>

            {/* Heimdall */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h4 className="font-display font-bold text-sm text-text-dark">Heimdall — Cybersecurity Agent</h4>
                <span className="font-mono text-[9px] text-muted-text uppercase tracking-wider font-bold">Research & Dev</span>
              </div>
              <p className="text-muted-text text-xs leading-relaxed font-sans font-medium">
                Researching light machine-learning classifiers (Random Forests) trained on packet headers to detect intrusions and network anomalies, dumping suspicious socket behaviors into local log files.
              </p>
            </div>
          </div>

        </div>

        {/* Right side details: Core skills */}
        <div className="md:col-span-4 flex flex-col gap-8">
          
          {/* Tech Grid stack */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Settings className="w-4 h-4 text-primary-purple" />
              <span className="font-mono text-[10px] text-text-dark uppercase font-extrabold tracking-wider">
                Skills Protocol
              </span>
            </div>

            {/* AI/ML */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="font-mono text-[8px] text-muted-text uppercase tracking-wider font-bold">Machine Learning</span>
              <span className="text-xs text-text-dark font-sans font-semibold">PyTorch, TensorFlow, Scikit-Learn, CNNs, OpenCV</span>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="font-mono text-[8px] text-muted-text uppercase tracking-wider font-bold">Languages</span>
              <span className="text-xs text-text-dark font-sans font-semibold">Python, Java, JavaScript, SQL, C++</span>
            </div>

            {/* Web */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="font-mono text-[8px] text-muted-text uppercase tracking-wider font-bold">Web Frameworks</span>
              <span className="text-xs text-text-dark font-sans font-semibold">Next.js, React, FastAPI, Node.js, Express, Tailwind</span>
            </div>

            {/* Core Tools */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="font-mono text-[8px] text-muted-text uppercase tracking-wider font-bold">Infrastructure</span>
              <span className="text-xs text-text-dark font-sans font-semibold">Git, Docker, Linux Command Line, GitHub Actions</span>
            </div>
          </div>

          {/* Cognitive values */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 shadow-lg flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Award className="w-4 h-4 text-primary-purple" />
              <span className="font-mono text-[10px] text-text-dark uppercase font-extrabold tracking-wider">
                Philosophy
              </span>
            </div>
            <p className="text-muted-text text-[11px] leading-relaxed font-sans font-medium">
              A curious builder who observes pain points, learns core underlying principles, builds reliable modular codebases, profiles and optimizes performance, and repeats the cycle for continuous growth.
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
  );
}
