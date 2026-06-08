"use client";

import CurrentlyBuilding from "../../components/building/CurrentlyBuilding";
import DigitalWorkshop from "../../components/workshop/DigitalWorkshop";

export default function WorkshopPage() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-32 pb-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] flex flex-col gap-12 text-left">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Developer Lab
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight">
            Digital Workshop
          </h1>
          <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
            A live look into my coding pipelines, active local systems under development, languages breakdown, and active logs.
          </p>
        </div>

        {/* Dev progress rings */}
        <CurrentlyBuilding />

        {/* Workshop widgets grid */}
        <DigitalWorkshop />
      </div>
    </div>
  );
}
