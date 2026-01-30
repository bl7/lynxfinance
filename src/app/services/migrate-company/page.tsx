import type { Metadata } from "next";
import Script from "next/script";
import { MigrateCompanyContent } from "./MigrateCompanyContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Migrate Your Company to Lynx",
  "migrate-company",
  "Seamlessly transition your accounting and finance operations to LYNX Finance Consulting. We handle data migration, process setup, and ensure continuity of your financial operations."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Migrate Your Company to Lynx",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Seamlessly transition your accounting and finance operations to LYNX Finance Consulting. We handle data migration, process setup, and ensure continuity of your financial operations.",
};

export default function MigrateCompanyPage() {
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
      <MigrateCompanyContent />
    </>
  );
}
