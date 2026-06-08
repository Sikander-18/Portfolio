"use client";

import { useState } from "react";
import Loader from "../components/ui/Loader";
import Hero from "../components/hero/Hero";
import CurrentExperiments from "../components/building/CurrentExperiments";
import ContactForm from "../components/contact/ContactForm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Sandbox Research Section (Current Experiments Teaser) */}
      <section id="experiments" className="py-28 relative overflow-hidden bg-transparent">
        {/* Background blurs */}
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-electric-cyan/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-primary-purple/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10 flex flex-col gap-16">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold">
              R&D Sandbox
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight uppercase">
              Current Experiments
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
            <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed font-medium">
              Active engineering pipelines and algorithmic research explorations, representing constant, sandbox iterations.
            </p>
          </div>

          {/* Current Experiments Grid */}
          <CurrentExperiments />
        </div>
      </section>

      {/* 3. Contact Channel Section */}
      <ContactForm />
    </div>
  );
}
