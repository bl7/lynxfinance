import type { Metadata } from "next";
import Script from "next/script";
import { BookkeepingTaxServicesContent } from "./BookkeepingTaxServicesContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bookkeeping & Tax Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides combined bookkeeping and tax services for comprehensive financial management. We handle your day-to-day accounting and ensure timely, accurate tax compliance.",
  keywords: [
    "bookkeeping and tax services",
    "bookkeeping tax services",
    "LYNX Finance Consulting bookkeeping tax",
    "combined accounting tax services",
    "bookkeeping tax preparation",
    "accounting tax services",
    "full-service bookkeeping",
    "bookkeeping tax compliance",
    "accounting and tax firm",
    "bookkeeping tax filing",
    "comprehensive bookkeeping",
    "bookkeeping tax planning",
    "accounting tax preparation",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/bookkeeping-tax-services",
  },
  openGraph: {
    title: "Bookkeeping & Tax Services | LYNX Finance Consulting",
    description:
      "Combined bookkeeping and tax services for comprehensive financial management. We handle your day-to-day accounting and ensure timely, accurate tax compliance.",
    url: "https://www.lynxfinanceconsulting.com/services/bookkeeping-tax-services",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Bookkeeping & Tax Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookkeeping & Tax Services | LYNX Finance Consulting",
    description:
      "Combined bookkeeping and tax services for comprehensive financial management and tax compliance.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bookkeeping & Tax Services",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Combined bookkeeping and tax services for comprehensive financial management. We handle your day-to-day accounting and ensure timely, accurate tax compliance.",
};

export default function BookkeepingTaxServicesPage() {
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
      <BookkeepingTaxServicesContent />
    </>
  );
}
