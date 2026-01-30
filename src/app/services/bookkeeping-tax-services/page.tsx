import type { Metadata } from "next";
import Script from "next/script";
import { BookkeepingTaxServicesContent } from "./BookkeepingTaxServicesContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Bookkeeping & Tax Services",
  "bookkeeping-tax-services",
  "Combined bookkeeping and tax services for comprehensive financial management. We handle your day-to-day accounting and ensure timely, accurate tax compliance."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bookkeeping & Tax Services",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Combined bookkeeping and tax services for comprehensive financial management. We handle your day-to-day accounting and ensure timely, accurate tax compliance.",
};

export default function BookkeepingTaxServicesPage() {
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
      <BookkeepingTaxServicesContent />
    </>
  );
}
