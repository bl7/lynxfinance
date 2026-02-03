import type { Metadata } from "next";
import Script from "next/script";
import { AnnualComplianceStateFilingsContent } from "./AnnualComplianceStateFilingsContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Annual Compliance & State Filings Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides annual compliance and state filing services to keep your business in good standing. We handle annual reports, franchise tax, and state-specific compliance requirements.",
  keywords: [
    "annual compliance",
    "state filings",
    "annual reports",
    "LYNX Finance Consulting compliance",
    "franchate tax",
    "state compliance",
    "annual report filing",
    "business compliance",
    "state filing services",
    "compliance filing",
    "annual report",
    "state tax filing",
    "business compliance services",
    "state registration",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/annual-compliance-state-filings",
  },
  openGraph: {
    title: "Annual Compliance & State Filings Services | LYNX Finance Consulting",
    description:
      "Annual compliance and state filing services to keep your business in good standing. We handle annual reports, franchise tax, and state-specific compliance requirements.",
    url: "https://www.lynxfinanceconsulting.com/services/annual-compliance-state-filings",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Annual Compliance & State Filings Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Compliance & State Filings Services | LYNX Finance Consulting",
    description:
      "Annual compliance and state filing services: annual reports, franchise tax, and state-specific compliance requirements to keep your business in good standing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Annual Compliance & State Filings",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Annual compliance and state filing services to keep your business in good standing. We handle annual reports, franchise tax, and state-specific compliance requirements.",
};

export default function AnnualComplianceStateFilingsPage() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AnnualComplianceStateFilingsContent />
    </>
  );
}
