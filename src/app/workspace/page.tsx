"use client";

import CurrentExperiments from "../../components/building/CurrentExperiments";
import DigitalWorkshop from "../../components/workshop/DigitalWorkshop";

export default function WorkshopPage() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-32 pb-24 flex flex-col gap-20">
      
      {/* 1. R&D Sandbox / Current Experiments */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Developer Lab // Sandbox Research
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight uppercase">
            Current Experiments
          </h1>
          <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
            Active prototyping pipelines and exploratory models research representing my continuous learning loops.
          </p>
        </div>

        {/* Current experiments grid */}
        <CurrentExperiments />
      </div>

      <hr className="border-white/10 w-full max-w-[1200px] mx-auto px-8" />

      {/* 2. Operations / Builder's Workshop */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-10 text-left">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            System Operations // Telemetry
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight uppercase">
            The Builder's Workshop
          </h2>
          <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
            Live local models training telemetry, compilation terminals output, compile tickers, and primary coding language statistics.
          </p>
        </div>

        {/* Workshop widgets grid */}
        <DigitalWorkshop />
      </div>

    </div>
  );
}
