import type { Metadata } from "next";
import Script from "next/script";
import { AnnualComplianceStateFilingsContent } from "./AnnualComplianceStateFilingsContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Annual Compliance & State Filings",
  "annual-compliance-state-filings",
  "Annual compliance and state filing services to keep your business in good standing. We handle annual reports, franchise tax, and state-specific compliance requirements."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Annual Compliance & State Filings",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Annual compliance and state filing services to keep your business in good standing. We handle annual reports, franchise tax, and state-specific compliance requirements.",
};

export default function AnnualComplianceStateFilingsPage() {
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
      <AnnualComplianceStateFilingsContent />
    </>
  );
}
