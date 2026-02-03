import type { Metadata } from "next";
import Script from "next/script";
import { USCompanyFormationContent } from "./USCompanyFormationContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "US Company Formation Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides complete US company incorporation services. We guide you through entity formation, registration, EIN application, and ongoing compliance requirements to set up your business correctly.",
  keywords: [
    "US company formation",
    "US company incorporation",
    "LYNX Finance Consulting company formation",
    "incorporate US business",
    "form US company",
    "US entity formation",
    "LLC formation",
    "corporation formation",
    "US business registration",
    "company incorporation services",
    "US business setup",
    "incorporate business USA",
    "form LLC",
    "form corporation",
    "business formation services",
    "US company registration",
    "start US business",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/us-company-formation",
  },
  openGraph: {
    title: "US Company Formation Services | LYNX Finance Consulting",
    description:
      "Complete US company incorporation services. We guide you through entity formation, registration, EIN application, and ongoing compliance requirements.",
    url: "https://www.lynxfinanceconsulting.com/services/us-company-formation",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "US Company Formation Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Company Formation Services | LYNX Finance Consulting",
    description:
      "Complete US company incorporation services: entity formation, registration, EIN application, and ongoing compliance requirements.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "US Company Formation",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Complete US company incorporation services. We guide you through entity formation, registration, EIN application, and ongoing compliance requirements.",
};

export default function USCompanyFormationPage() {
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
      <USCompanyFormationContent />
    </>
  );
}
