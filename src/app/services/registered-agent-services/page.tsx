import type { Metadata } from "next";
import Script from "next/script";
import { RegisteredAgentServicesContent } from "./RegisteredAgentServicesContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Registered Agent Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides professional registered agent services for your US business. We provide a registered office address and handle important legal and tax documents on your behalf.",
  keywords: [
    "registered agent services",
    "registered agent",
    "business registered agent",
    "LYNX Finance Consulting registered agent",
    "registered office address",
    "US registered agent",
    "registered agent for LLC",
    "registered agent for corporation",
    "compliance registered agent",
    "registered agent service",
    "statutory agent",
    "agent for service of process",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/registered-agent-services",
  },
  openGraph: {
    title: "Registered Agent Services | LYNX Finance Consulting",
    description:
      "Professional registered agent services for your US business. We provide a registered office address and handle important legal and tax documents on your behalf.",
    url: "https://www.lynxfinanceconsulting.com/services/registered-agent-services",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Registered Agent Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registered Agent Services | LYNX Finance Consulting",
    description:
      "Professional registered agent services: registered office address and handling of important legal and tax documents for your US business.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Registered Agent Services",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Professional registered agent services for your US business. We provide a registered office address and handle important legal and tax documents on your behalf.",
};

export default function RegisteredAgentServicesPage() {
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
      <RegisteredAgentServicesContent />
    </>
  );
}
