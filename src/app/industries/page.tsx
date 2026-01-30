import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries | LYNX Finance Consulting",
  description:
    "Finance, accounting, and tax solutions for professional services, retail & e-commerce, fintech, construction, health, media, education, and energy.",
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/industries" },
  openGraph: {
    title: "Industries | LYNX Finance Consulting",
    description:
      "Finance, accounting, and tax solutions for services, retail, fintech, construction, health, media, education, and energy.",
    url: "https://www.lynxfinanceconsulting.com/industries",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | LYNX Finance Consulting",
    description:
      "Finance, accounting, and tax solutions for services, retail, fintech, construction, health, media, education, and energy.",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
