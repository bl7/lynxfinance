import type { Metadata } from "next";
import Script from "next/script";
import { BudgetingFinancialServicesContent } from "./BudgetingFinancialServicesContent";
import { createServiceMetadata, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = createServiceMetadata(
  "Budgeting and Financial Services",
  "budgeting-financial-services",
  "Comprehensive budgeting and financial planning services. We help you create annual budgets, reforecasts, variance analysis, and financial planning to guide strategic decision-making."
);

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
