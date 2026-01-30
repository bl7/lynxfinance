import type { Metadata } from "next";
import Script from "next/script";
import { ITINContent } from "./ITINContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "ITIN (Individual Taxpayer Identification Number)",
  "itin",
  "ITIN application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN. Essential for non-resident business owners."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ITIN (Individual Taxpayer Identification Number)",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "ITIN application and renewal services for individuals who need a US tax identification number but don't qualify for an SSN. Essential for non-resident business owners.",
};

export default function ITINPage() {
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
      <ITINContent />
    </>
  );
}
