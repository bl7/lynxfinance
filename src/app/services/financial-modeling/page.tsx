import type { Metadata } from "next";
import Script from "next/script";
import { FinancialModelingContent } from "./FinancialModelingContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Financial Modeling Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides professional financial modeling services for startups and growing businesses. Build investor-ready models, scenario planning, valuation models, and strategic financial projections.",
  keywords: [
    "financial modeling",
    "financial modeling services",
    "LYNX Finance Consulting financial modeling",
    "financial models",
    "investor-ready models",
    "scenario planning",
    "valuation models",
    "financial projections",
    "financial forecasting",
    "business financial modeling",
    "startup financial modeling",
    "financial model building",
    "financial analysis",
    "financial planning models",
    "three-statement model",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/financial-modeling",
  },
  openGraph: {
    title: "Financial Modeling Services | LYNX Finance Consulting",
    description:
      "Professional financial modeling services for startups and growing businesses. Build investor-ready models, scenario planning, valuation models, and strategic financial projections.",
    url: "https://www.lynxfinanceconsulting.com/services/financial-modeling",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Financial Modeling Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Modeling Services | LYNX Finance Consulting",
    description:
      "Professional financial modeling services: investor-ready models, scenario planning, valuation models, and strategic financial projections.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Financial Modeling",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Professional financial modeling services for startups and growing businesses. Build investor-ready models, scenario planning, valuation models, and strategic financial projections.",
};

export default function FinancialModelingPage() {
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
      <FinancialModelingContent />
    </>
  );
}
