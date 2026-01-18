"use client";

import {
  HomeHero,
  HomeTrustedBy,
  HomeServicesOverview,
  HomeProofBar,
  HomeProblem,
  HomeHowItWorks,
  HomePackages,
  HomeWhyLynx,
  HomeOutcomes,
  HomeFinalCTA,
} from "@/components/home";

export default function Home() {
  return (
    <div className="relative -mt-20 lg:-mt-24">
      {/* 1. Hero - broad positioning */}
      <HomeHero />

      {/* 2. Trusted By */}
      <HomeTrustedBy />

      {/* 3. Services Overview */}
      <HomeServicesOverview />

      {/* 4. Proof Bar - credibility points */}
      <HomeProofBar />

      {/* 4. Problem - broad pains */}
      <HomeProblem />

      {/* 5. How It Works - generic 4-step process */}
      <HomeHowItWorks />

      {/* 6. Packages - renamed to Engagements */}
      <HomePackages />

      {/* 8. Why Lynx - trust + team + delivery model + Who It's For */}
      <HomeWhyLynx />

      {/* 10. Outcomes */}
      <HomeOutcomes />

      {/* 11. Final CTA - broad */}
      <HomeFinalCTA />
    </div>
  );
}
