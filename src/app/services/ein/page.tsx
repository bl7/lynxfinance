import type { Metadata } from "next";
import Script from "next/script";
import { EINContent } from "./EINContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EIN Application Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting helps you get your EIN (Employer Identification Number) quickly and correctly. We handle the EIN application process for your US business, ensuring proper registration with the IRS for tax and banking purposes.",
  keywords: [
    "EIN application",
    "EIN number",
    "employer identification number",
    "LYNX Finance Consulting EIN",
    "get EIN",
    "apply for EIN",
    "EIN application service",
    "IRS EIN application",
    "business EIN",
    "EIN registration",
    "federal tax ID",
    "tax ID number",
    "EIN for business",
    "apply EIN online",
    "EIN application help",
    "get federal tax ID",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/ein",
  },
  openGraph: {
    title: "EIN Application Services | LYNX Finance Consulting",
    description:
      "Get your EIN quickly and correctly. We handle the EIN application process for your US business, ensuring proper registration with the IRS.",
    url: "https://www.lynxfinanceconsulting.com/services/ein",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "EIN Application Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIN Application Services | LYNX Finance Consulting",
    description:
      "Get your EIN quickly and correctly. We handle the EIN application process for your US business with proper IRS registration.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "EIN (Employer Identification Number)",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Get your EIN quickly and correctly. We handle the EIN application process for your US business, ensuring proper registration with the IRS for tax and banking purposes.",
};

export default function EINPage() {
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
      <EINContent />
    </>
  );
}
