"use client";

import PersonalJourney from "../../components/about/PersonalJourney";
import Mindset from "../../components/about/Mindset";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent pt-12">
      <PersonalJourney />
      <Mindset />
    </div>
  );
}
