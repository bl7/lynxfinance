import type { Metadata } from "next";
import { Suspense } from "react";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting offers transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation services. View our pricing plans and get a tailored quote for your business needs.",
  keywords: [
    "LYNX Finance Consulting pricing",
    "accounting services pricing",
    "bookkeeping pricing",
    "tax compliance pricing",
    "virtual CFO pricing",
    "US company formation cost",
    "accounting firm pricing",
    "bookkeeping services cost",
    "tax preparation pricing",
    "CFO services pricing",
    "affordable accounting services",
    "accounting service rates",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/pricing" },
  openGraph: {
    title: "Pricing | LYNX Finance Consulting",
    description:
      "Transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation. Get a tailored quote for your business.",
    url: "https://www.lynxfinanceconsulting.com/pricing",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | LYNX Finance Consulting",
    description:
      "Transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation services.",
  },
};

export default function PricingPage() {
  return (
    <div className="pb-16">
      <Suspense fallback={<div className="min-h-screen" />}>
        <PricingContent />
      </Suspense>
    </div>
  );
}
