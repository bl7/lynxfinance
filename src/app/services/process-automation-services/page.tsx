import type { Metadata } from "next";
import Script from "next/script";
import { ProcessAutomationServicesContent } from "./ProcessAutomationServicesContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Process Automation Services",
  "process-automation-services",
  "Automate your finance and accounting processes to save time and reduce errors. We implement workflow automation, data integration, and process optimization for your finance function."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Process Automation Services",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Automate your finance and accounting processes to save time and reduce errors. We implement workflow automation, data integration, and process optimization for your finance function.",
};

export default function ProcessAutomationServicesPage() {
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
      <ProcessAutomationServicesContent />
    </>
  );
}

