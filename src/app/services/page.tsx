import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | LYNX Finance Consulting",
  description:
    "Explore accounting, tax compliance, virtual CFO, US formation, banking setup, and process automation services tailored for modern businesses.",
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/services" },
  openGraph: {
    title: "Services | LYNX Finance Consulting",
    description:
      "Accounting, tax compliance, virtual CFO, US formation, banking setup, and process automation services for modern businesses.",
    url: "https://www.lynxfinanceconsulting.com/services",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | LYNX Finance Consulting",
    description:
      "Accounting, tax compliance, virtual CFO, US formation, banking setup, and process automation services for modern businesses.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
