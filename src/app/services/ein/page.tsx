import type { Metadata } from "next";
import Script from "next/script";
import { EINContent } from "./EINContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "EIN (Employer Identification Number)",
  "ein",
  "Get your EIN quickly and correctly. We handle the EIN application process for your US business, ensuring proper registration with the IRS for tax and banking purposes."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "EIN (Employer Identification Number)",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Get your EIN quickly and correctly. We handle the EIN application process for your US business, ensuring proper registration with the IRS for tax and banking purposes.",
};

export default function EINPage() {
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
      <EINContent />
    </>
  );
}
