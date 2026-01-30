import type { Metadata } from "next";
import Script from "next/script";
import { FinancialModelingContent } from "./FinancialModelingContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Financial Modeling",
  "financial-modeling",
  "Professional financial modeling services for startups and growing businesses. Build investor-ready models, scenario planning, valuation models, and strategic financial projections."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Financial Modeling",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Professional financial modeling services for startups and growing businesses. Build investor-ready models, scenario planning, valuation models, and strategic financial projections.",
};

export default function FinancialModelingPage() {
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
      <FinancialModelingContent />
    </>
  );
}
