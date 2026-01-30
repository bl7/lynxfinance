import type { Metadata } from "next";
import Script from "next/script";
import { AccountingBookkeepingContent } from "./AccountingBookkeepingContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Accounting & Bookkeeping",
  "accounting-bookkeeping",
  "Professional accounting and bookkeeping services for businesses. We handle monthly close, reconciliations, AR/AP management, and provide clear financial reporting for leadership, lenders, and investors."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Accounting & Bookkeeping",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Professional accounting and bookkeeping services including monthly close, bank reconciliations, AR/AP management, and financial reporting.",
};

export default function AccountingBookkeepingPage() {
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
      <AccountingBookkeepingContent />
    </>
  );
}
