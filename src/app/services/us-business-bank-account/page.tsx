import type { Metadata } from "next";
import Script from "next/script";
import { USBusinessBankAccountContent } from "./USBusinessBankAccountContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "US Business Bank Account Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides assistance with opening US business bank accounts. We guide you through the requirements, documentation, and process to establish banking relationships for your US entity.",
  keywords: [
    "US business bank account",
    "open business bank account",
    "business bank account USA",
    "LYNX Finance Consulting bank account",
    "US business banking",
    "business bank account setup",
    "open US bank account",
    "business account opening",
    "US banking services",
    "business banking assistance",
    "US entity bank account",
    "corporate bank account",
    "LLC bank account",
    "business account requirements",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/us-business-bank-account",
  },
  openGraph: {
    title: "US Business Bank Account Services | LYNX Finance Consulting",
    description:
      "Assistance with opening US business bank accounts. We guide you through the requirements, documentation, and process to establish banking relationships for your US entity.",
    url: "https://www.lynxfinanceconsulting.com/services/us-business-bank-account",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "US Business Bank Account Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Business Bank Account Services | LYNX Finance Consulting",
    description:
      "Assistance with opening US business bank accounts. We guide you through requirements, documentation, and process to establish banking relationships.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "US Business Bank Account",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Assistance with opening US business bank accounts. We guide you through the requirements, documentation, and process to establish banking relationships for your US entity.",
};

export default function USBusinessBankAccountPage() {
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
      <USBusinessBankAccountContent />
    </>
  );
}
