import type { Metadata } from "next";
import Script from "next/script";
import { ProcessAutomationServicesContent } from "./ProcessAutomationServicesContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Process Automation Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting automates your finance and accounting processes to save time and reduce errors. We implement workflow automation, data integration, and process optimization for your finance function.",
  keywords: [
    "process automation",
    "accounting automation",
    "finance automation",
    "LYNX Finance Consulting automation",
    "workflow automation",
    "accounting process automation",
    "finance process automation",
    "data integration",
    "process optimization",
    "automation services",
    "accounting workflow automation",
    "financial process automation",
    "business process automation",
    "accounting software integration",
    "automated accounting",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/process-automation-services",
  },
  openGraph: {
    title: "Process Automation Services | LYNX Finance Consulting",
    description:
      "Automate your finance and accounting processes to save time and reduce errors. We implement workflow automation, data integration, and process optimization.",
    url: "https://www.lynxfinanceconsulting.com/services/process-automation-services",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Process Automation Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Process Automation Services | LYNX Finance Consulting",
    description:
      "Automate your finance and accounting processes: workflow automation, data integration, and process optimization for your finance function.",
  },
};

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

