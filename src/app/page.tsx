"use client";

import {
  HomeHero,
  HomePathways,
  HomeProofBar,
  HomeProblem,
  HomeHowItWorks,
  HomeServicesTabs,
  HomePackages,
  HomeWhyLynx,
  HomePersonas,
  HomeOutcomes,
  HomeFinalCTA,
} from "@/components/home";

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero - broad positioning */}
      <HomeHero />

      {/* 2. Pathways - primary conversion area */}
      <HomePathways />

      {/* 3. Proof Bar - credibility points */}
      <HomeProofBar />

      {/* 4. Problem - broad pains */}
      <HomeProblem />

      {/* 5. How It Works - generic 4-step process */}
      <HomeHowItWorks />

      {/* 6. Services Snapshot - tabs */}
      <HomeServicesTabs />

      {/* 7. Packages - renamed to Engagements */}
      <HomePackages />

      {/* 8. Why Lynx - trust + team + delivery model */}
      <HomeWhyLynx />

      {/* 9. Who It's For - broader personas */}
      <HomePersonas />

      {/* 10. Outcomes */}
      <HomeOutcomes />

      {/* 11. Final CTA - broad */}
      <HomeFinalCTA />
    </div>
  );
}
