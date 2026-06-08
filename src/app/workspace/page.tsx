"use client";

import SkillsNetwork from "../../components/skills/SkillsNetwork";
import MissionsSection from "../../components/missions/MissionsSection";
import DigitalWorkshop from "../../components/workshop/DigitalWorkshop";

export default function WorkshopPage() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-32 pb-24 flex flex-col gap-20">
      
      {/* 1. Interactive Systems Network Console */}
      <div className="w-full flex flex-col gap-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-3 text-left">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Interactive Control Center
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight uppercase">
            Systems Console
          </h1>
          <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
            An interactive look into my key development fields, branching out into core system concepts, mathematics details, and active pipelines.
          </p>
        </div>

        {/* Skills Network node cluster component */}
        <SkillsNetwork />
      </div>

      <hr className="border-white/10 w-full max-w-[1200px] mx-auto px-8" />

      {/* 2. Production Architectures List */}
      <div className="w-full">
        {/* MissionsSection component */}
        <MissionsSection />
      </div>

      <hr className="border-white/10 w-full max-w-[1200px] mx-auto px-8" />

      {/* 3. Live Telemetry Console */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Live Telemetry Pipeline
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight uppercase">
            The Builder's Workshop
          </h2>
          <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
            Live local models training parameters, active compiler terminal logs, recent git pushes ticker, and language stats metrics.
          </p>
        </div>

        {/* Workshop telemetry widgets console component */}
        <DigitalWorkshop />
      </div>

    </div>
  );
}
