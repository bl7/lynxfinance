import type { Metadata } from "next";
import Script from "next/script";
import { ExcelGoogleSheetModelingContent } from "./ExcelGoogleSheetModelingContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Excel and Google Sheet Modeling",
  "excel-google-sheet-modeling",
  "Custom financial models and spreadsheet solutions built in Excel and Google Sheets. We create forecasting models, budgeting templates, and analytical tools tailored to your business needs."
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Excel and Google Sheet Modeling",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Custom financial models and spreadsheet solutions built in Excel and Google Sheets. We create forecasting models, budgeting templates, and analytical tools tailored to your business needs.",
};

export default function ExcelGoogleSheetModelingPage() {
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
      <ExcelGoogleSheetModelingContent />
    </>
  );
}
