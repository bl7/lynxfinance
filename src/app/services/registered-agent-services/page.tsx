import type { Metadata } from "next";
import Script from "next/script";
import { RegisteredAgentServicesContent } from "./RegisteredAgentServicesContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Registered Agent Services",
  "registered-agent-services",
  "Professional registered agent services for your US business. We provide a registered office address and handle important legal and tax documents on your behalf."
);

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
