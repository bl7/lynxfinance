import type { Metadata } from "next";
import Script from "next/script";
import { BudgetingFinancialServicesContent } from "./BudgetingFinancialServicesContent";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Budgeting & Financial Planning Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides comprehensive budgeting and financial planning services. We help you create annual budgets, reforecasts, variance analysis, and financial planning to guide strategic decision-making.",
  keywords: [
    "budgeting services",
    "financial planning services",
    "LYNX Finance Consulting budgeting",
    "annual budgeting",
    "budget planning",
    "financial forecasting",
    "variance analysis",
    "budget reforecast",
    "financial planning",
    "strategic financial planning",
    "budget management",
    "financial planning consulting",
    "budget preparation",
    "financial analysis",
    "budget forecasting",
  ],
  alternates: {
    canonical: "https://www.lynxfinanceconsulting.com/services/budgeting-financial-services",
  },
  openGraph: {
    title: "Budgeting & Financial Planning Services | LYNX Finance Consulting",
    description:
      "Comprehensive budgeting and financial planning services. We help you create annual budgets, reforecasts, variance analysis, and financial planning to guide strategic decision-making.",
    url: "https://www.lynxfinanceconsulting.com/services/budgeting-financial-services",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Budgeting & Financial Planning Services - LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budgeting & Financial Planning Services | LYNX Finance Consulting",
    description:
      "Comprehensive budgeting and financial planning services: annual budgets, reforecasts, variance analysis, and strategic financial planning.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Budgeting and Financial Services",
  provider: {
    "@type": "AccountingService",
    name: "LYNX Finance Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  description:
    "Comprehensive budgeting and financial planning services. We help you create annual budgets, reforecasts, variance analysis, and financial planning to guide strategic decision-making.",
};

export default function BudgetingFinancialServicesPage() {
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
      <BudgetingFinancialServicesContent />
    </>
  );
}
