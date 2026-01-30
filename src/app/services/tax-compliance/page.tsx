import type { Metadata } from "next";
import Script from "next/script";
import { TaxComplianceContent } from "./TaxComplianceContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Tax Compliance",
  "tax-compliance",
  "Comprehensive tax compliance services including US Federal and State tax returns, sales tax, payroll tax, nexus analysis, and international tax considerations. Stay compliant across all jurisdictions."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tax Compliance",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Comprehensive tax compliance services including US Federal and State tax returns, sales tax, payroll tax, nexus analysis, and international tax considerations.",
};

export default function TaxCompliancePage() {
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
      <TaxComplianceContent />
    </>
  );
}
