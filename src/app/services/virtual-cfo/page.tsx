import type { Metadata } from "next";
import Script from "next/script";
import { VirtualCFOContent } from "./VirtualCFOContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Virtual CFO Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides executive-level virtual CFO services on a flexible schedule. Get cash flow forecasting, KPI tracking, board reporting, budgeting, and strategic financial planning without a full-time CFO.",
  keywords: [
    "virtual CFO",
    "virtual CFO services",
    "LYNX Finance Consulting CFO",
    "fractional CFO",
    "part-time CFO",
    "CFO services",
    "cash flow forecasting",
    "KPI tracking",
    "board reporting",
    "financial planning",
    "strategic financial planning",
    "budgeting services",
    "financial strategy",
    "CFO consulting",
    "financial leadership",
    "executive financial guidance",
    "financial advisory",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/virtual-cfo",
  },
  openGraph: {
    title: "Virtual CFO Services | LYNX Finance Consulting",
    description:
      "Executive-level virtual CFO services: cash flow forecasting, KPI tracking, board reporting, budgeting, and strategic financial planning without a full-time CFO.",
    url: "https://www.lynxfinanceconsulting.com/services/virtual-cfo",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Virtual CFO Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual CFO Services | LYNX Finance Consulting",
    description:
      "Executive-level virtual CFO services: cash flow forecasting, KPI tracking, board reporting, and strategic financial planning.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Virtual CFO",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Executive-level financial guidance on a flexible schedule. Get cash flow forecasting, KPI tracking, board reporting, budgeting, and strategic financial planning without a full-time CFO.",
};

export default function VirtualCFOPage() {
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
      <VirtualCFOContent />
    </>
  );
}
