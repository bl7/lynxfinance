import type { Metadata } from "next";
import { Suspense } from "react";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | LYNX Finance Consulting",
  description:
    "Transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation. Choose the right plan and get a tailored quote.",
  alternates: { canonical: "https://lynxfinance.vercel.app/pricing" },
  openGraph: {
    title: "Pricing | LYNX Finance Consulting",
    description:
      "Transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation.",
    url: "https://lynxfinance.vercel.app/pricing",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | LYNX Finance Consulting",
    description:
      "Transparent pricing for bookkeeping, tax compliance, virtual CFO, and US company formation.",
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
