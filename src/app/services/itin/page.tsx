import type { Metadata } from "next";
import Script from "next/script";
import { ITINContent } from "./ITINContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ITIN Application Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides ITIN (Individual Taxpayer Identification Number) application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN. Essential for non-resident business owners.",
  keywords: [
    "ITIN application",
    "ITIN number",
    "individual taxpayer identification number",
    "LYNX Finance Consulting ITIN",
    "apply for ITIN",
    "ITIN application service",
    "ITIN renewal",
    "get ITIN",
    "ITIN for non-resident",
    "ITIN application help",
    "ITIN for business owners",
    "non-resident ITIN",
    "ITIN tax ID",
    "ITIN application process",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/itin",
  },
  openGraph: {
    title: "ITIN Application Services | LYNX Finance Consulting",
    description:
      "ITIN application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN. Essential for non-resident business owners.",
    url: "https://www.lynxfinanceconsulting.com/services/itin",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ITIN Application Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIN Application Services | LYNX Finance Consulting",
    description:
      "ITIN application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ITIN (Individual Taxpayer Identification Number)",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "ITIN application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN. Essential for non-resident business owners.",
};

export default function ITINPage() {
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
      <ITINContent />
    </>
  );
}
