import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting offers comprehensive financial services: accounting, bookkeeping, tax compliance, virtual CFO, US company formation, EIN application, business bank account setup, registered agent services, financial modeling, and process automation for modern businesses.",
  keywords: [
    "LYNX Finance Consulting services",
    "accounting services",
    "bookkeeping services",
    "tax compliance services",
    "virtual CFO services",
    "US company formation",
    "EIN application service",
    "business bank account",
    "registered agent services",
    "financial modeling",
    "process automation",
    "tax preparation services",
    "bookkeeping and tax services",
    "annual compliance",
    "state filings",
    "ITIN application",
    "US business formation",
    "financial planning",
    "budgeting services",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/services" },
  openGraph: {
    title: "Services | LYNX Finance Consulting",
    description:
      "LYNX Finance Consulting offers comprehensive financial services: accounting, tax compliance, virtual CFO, US formation, banking setup, and process automation for modern businesses.",
    url: "https://www.lynxfinanceconsulting.com/services",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | LYNX Finance Consulting",
    description:
      "Comprehensive financial services: accounting, tax compliance, virtual CFO, US formation, and process automation.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
