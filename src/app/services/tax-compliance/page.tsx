import type { Metadata } from "next";
import Script from "next/script";
import { TaxComplianceContent } from "./TaxComplianceContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tax Compliance Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides comprehensive tax compliance services including US Federal and State tax returns, sales tax, payroll tax, nexus analysis, and international tax considerations. Stay compliant across all jurisdictions.",
  keywords: [
    "tax compliance services",
    "tax preparation",
    "LYNX Finance Consulting tax",
    "US tax returns",
    "federal tax returns",
    "state tax returns",
    "sales tax compliance",
    "payroll tax",
    "tax nexus analysis",
    "international tax",
    "tax compliance",
    "tax filing services",
    "business tax preparation",
    "corporate tax returns",
    "tax planning",
    "tax consulting",
    "multi-state tax compliance",
    "cross-border tax",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/tax-compliance",
  },
  openGraph: {
    title: "Tax Compliance Services | LYNX Finance Consulting",
    description:
      "Comprehensive tax compliance services including US Federal and State tax returns, sales tax, payroll tax, nexus analysis, and international tax considerations.",
    url: "https://www.lynxfinanceconsulting.com/services/tax-compliance",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Tax Compliance Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Compliance Services | LYNX Finance Consulting",
    description:
      "Comprehensive tax compliance services: US Federal and State tax returns, sales tax, payroll tax, and international tax considerations.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tax Compliance",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Comprehensive tax compliance services including US Federal and State tax returns, sales tax, payroll tax, nexus analysis, and international tax considerations.",
};

export default function TaxCompliancePage() {
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
      <TaxComplianceContent />
    </>
  );
}
