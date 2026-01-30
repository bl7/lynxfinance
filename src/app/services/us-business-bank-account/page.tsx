import type { Metadata } from "next";
import Script from "next/script";
import { USBusinessBankAccountContent } from "./USBusinessBankAccountContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "US Business Bank Account",
  "us-business-bank-account",
  "Assistance with opening US business bank accounts. We guide you through the requirements, documentation, and process to establish banking relationships for your US entity."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "US Business Bank Account",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Assistance with opening US business bank accounts. We guide you through the requirements, documentation, and process to establish banking relationships for your US entity.",
};

export default function USBusinessBankAccountPage() {
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
      <USBusinessBankAccountContent />
    </>
  );
}
