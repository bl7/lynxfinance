import type { Metadata } from "next";
import Script from "next/script";
import { VirtualCFOContent } from "./VirtualCFOContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Virtual CFO",
  "virtual-cfo",
  "Executive-level financial guidance on a flexible schedule. Get cash flow forecasting, KPI tracking, board reporting, budgeting, and strategic financial planning without a full-time CFO."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Virtual CFO",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Executive-level financial guidance on a flexible schedule. Get cash flow forecasting, KPI tracking, board reporting, budgeting, and strategic financial planning without a full-time CFO.",
};

export default function VirtualCFOPage() {
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
      <VirtualCFOContent />
    </>
  );
}
