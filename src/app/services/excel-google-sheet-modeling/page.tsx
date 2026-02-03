import type { Metadata } from "next";
import Script from "next/script";
import { ExcelGoogleSheetModelingContent } from "./ExcelGoogleSheetModelingContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Excel & Google Sheet Modeling Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides custom financial models and spreadsheet solutions built in Excel and Google Sheets. We create forecasting models, budgeting templates, and analytical tools tailored to your business needs.",
  keywords: [
    "Excel modeling",
    "Google Sheets modeling",
    "spreadsheet modeling",
    "LYNX Finance Consulting Excel",
    "financial spreadsheet models",
    "Excel financial models",
    "Google Sheets financial models",
    "forecasting models",
    "budgeting templates",
    "Excel templates",
    "spreadsheet solutions",
    "financial modeling Excel",
    "Excel business models",
    "Google Sheets templates",
    "custom spreadsheet models",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/excel-google-sheet-modeling",
  },
  openGraph: {
    title: "Excel & Google Sheet Modeling Services | LYNX Finance Consulting",
    description:
      "Custom financial models and spreadsheet solutions built in Excel and Google Sheets. We create forecasting models, budgeting templates, and analytical tools tailored to your business needs.",
    url: "https://www.lynxfinanceconsulting.com/services/excel-google-sheet-modeling",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel & Google Sheet Modeling Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel & Google Sheet Modeling Services | LYNX Finance Consulting",
    description:
      "Custom financial models and spreadsheet solutions in Excel and Google Sheets: forecasting models, budgeting templates, and analytical tools.",
  },
};

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
