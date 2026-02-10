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
    "LYNX Finance Consulting - Accounting, Tax, and CFO Services for Modern Businesses",
  description:
    "LYNX Finance Consulting is your full-stack finance partner for startups and global teams. We provide bookkeeping, tax compliance, virtual CFO, and US formation services. Get clarity, compliance, and investor-ready reporting.",
  keywords: [
    "LYNX Finance Consulting",
    "accounting services",
    "bookkeeping services",
    "tax compliance",
    "virtual CFO",
    "US company formation",
    "financial consulting",
    "accounting firm",
    "bookkeeping firm",
    "tax preparation",
    "financial modeling",
    "process automation",
    "business accounting",
    "small business accounting",
    "startup accounting",
    "international tax",
    "cross-border accounting",
    "US business formation",
    "EIN application",
    "business bank account",
    "registered agent",
    "ITIN application",
    "annual compliance",
    "state filings",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/" },
  openGraph: {
    title:
      "LYNX Finance Consulting - Accounting, Tax, and CFO Services for Modern Businesses",
    description:
      "LYNX Finance Consulting provides end-to-end finance services: bookkeeping, tax compliance, virtual CFO, and US formation—built for modern businesses.",
    url: "https://www.lynxfinanceconsulting.com/",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting - Accounting, Tax, and CFO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LYNX Finance Consulting - Accounting, Tax, and CFO Services",
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
