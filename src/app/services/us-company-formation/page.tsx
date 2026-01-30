import type { Metadata } from "next";
import Script from "next/script";
import { USCompanyFormationContent } from "./USCompanyFormationContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "US Company Formation",
  "us-company-formation",
  "Complete US company incorporation services. We guide you through entity formation, registration, EIN application, and ongoing compliance requirements to set up your business correctly."
);

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
