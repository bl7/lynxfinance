import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "LYNX Finance Consulting | Accounting, Tax, and CFO for modern businesses",
  description:
    "Full-stack finance partner for startups and global teams: bookkeeping, tax compliance, virtual CFO, and US formation. Get clarity, compliance, and investor-ready reporting.",
  alternates: { canonical: "https://lynxfinance.vercel.app/" },
  openGraph: {
    title:
      "LYNX Finance Consulting | Accounting, Tax, and CFO for modern businesses",
    description:
      "End-to-end finance: bookkeeping, tax compliance, virtual CFO, and US formation—built for modern businesses.",
    url: "https://lynxfinance.vercel.app/",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LYNX Finance Consulting | Accounting, Tax, and CFO",
    description:
      "End-to-end finance: bookkeeping, tax compliance, virtual CFO, and US formation—built for modern businesses.",
  },
};

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
