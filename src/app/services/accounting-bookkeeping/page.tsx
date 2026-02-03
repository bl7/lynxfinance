import type { Metadata } from "next";
import Script from "next/script";
import { AccountingBookkeepingContent } from "./AccountingBookkeepingContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides professional accounting and bookkeeping services for businesses. We handle monthly close, bank reconciliations, AR/AP management, and provide clear financial reporting for leadership, lenders, and investors.",
  keywords: [
    "accounting services",
    "bookkeeping services",
    "LYNX Finance Consulting accounting",
    "professional bookkeeping",
    "monthly accounting close",
    "bank reconciliation",
    "accounts receivable management",
    "accounts payable management",
    "financial reporting",
    "accounting firm",
    "bookkeeping firm",
    "small business accounting",
    "startup accounting",
    "business accounting services",
    "accounting and bookkeeping",
    "financial statement preparation",
    "chart of accounts setup",
    "general ledger maintenance",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/accounting-bookkeeping",
  },
  openGraph: {
    title: "Accounting & Bookkeeping Services | LYNX Finance Consulting",
    description:
      "Professional accounting and bookkeeping services for businesses. We handle monthly close, bank reconciliations, AR/AP management, and financial reporting.",
    url: "https://www.lynxfinanceconsulting.com/services/accounting-bookkeeping",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Accounting & Bookkeeping Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting & Bookkeeping Services | LYNX Finance Consulting",
    description:
      "Professional accounting and bookkeeping services for businesses. Monthly close, reconciliations, AR/AP management, and financial reporting.",
  },
};

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
