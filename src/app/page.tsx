"use client";

import { useState } from "react";
import Loader from "../components/ui/Loader";
import Hero from "../components/hero/Hero";
import OriginStory from "../components/about/OriginStory";
import Mindset from "../components/about/Mindset";
import SkillsNetwork from "../components/skills/SkillsNetwork";
import MissionsSection from "../components/missions/MissionsSection";
import CurrentExperiments from "../components/building/CurrentExperiments";
import DigitalWorkshop from "../components/workshop/DigitalWorkshop";
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

      {/* 2. Origin Story Section */}
      <OriginStory />

      {/* 3. Mindset Loop Section */}
      <Mindset />

      {/* 4. Skills Node Cluster Section */}
      <SkillsNetwork />

      {/* 5. Classified Missions dossier Section */}
      <MissionsSection />

      {/* 6. Engineering Pipeline (Currently Building & Workshop) */}
      <section id="workshop" className="py-24 relative overflow-hidden">
        {/* Background blurs */}
        <div className="absolute top-[40%] left-[-10%] w-[380px] h-[380px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] bg-soft-pink/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10 flex flex-col gap-16">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
              Engineering Logs
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
              Digital Workshop
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
            <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed">
              Real-time snapshot of what I am currently engineering, learning metrics, and my GitHub contributions telemetry.
            </p>
          </div>

          {/* Current Experiments Sub-component */}
          <CurrentExperiments />

          {/* Digital Workshop Sub-component */}
          <DigitalWorkshop />
        </div>
      </section>

      {/* 7. Contact Channel Section */}
      <ContactForm />
    </div>
  );
}
