import type { Metadata } from "next";
import Script from "next/script";
import { MigrateCompanyContent } from "./MigrateCompanyContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Migrate Your Company to LYNX Finance Consulting | Accounting Migration Services",
  description:
    "LYNX Finance Consulting helps you seamlessly transition your accounting and finance operations. We handle data migration, process setup, and ensure continuity of your financial operations.",
  keywords: [
    "accounting migration",
    "migrate accounting",
    "switch accounting firms",
    "LYNX Finance Consulting migration",
    "accounting transition",
    "finance migration",
    "accounting data migration",
    "change accounting firm",
    "accounting firm transition",
    "bookkeeping migration",
    "accounting services migration",
    "transfer accounting",
    "accounting setup",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/migrate-company",
  },
  openGraph: {
    title: "Migrate Your Company to LYNX Finance Consulting | Accounting Migration Services",
    description:
      "Seamlessly transition your accounting and finance operations to LYNX Finance Consulting. We handle data migration, process setup, and ensure continuity of your financial operations.",
    url: "https://www.lynxfinanceconsulting.com/services/migrate-company",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Migrate Your Company to LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Migrate Your Company to LYNX Finance Consulting",
    description:
      "Seamlessly transition your accounting and finance operations. We handle data migration, process setup, and ensure continuity of your financial operations.",
  },
};

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
