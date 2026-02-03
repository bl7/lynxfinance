import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries | LYNX Finance Consulting",
  description:
    "LYNX Finance Consulting provides finance, accounting, and tax solutions for professional services, retail & e-commerce, fintech, construction, healthcare, media, education, and energy industries. Industry-specific expertise for your business.",
  keywords: [
    "LYNX Finance Consulting industries",
    "accounting for professional services",
    "retail accounting services",
    "e-commerce accounting",
    "fintech accounting",
    "construction accounting",
    "healthcare accounting",
    "media accounting",
    "education accounting",
    "energy accounting",
    "industry-specific accounting",
    "sector accounting services",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/industries" },
  openGraph: {
    title: "Industries | LYNX Finance Consulting",
    description:
      "LYNX Finance Consulting provides finance, accounting, and tax solutions for professional services, retail, fintech, construction, healthcare, media, education, and energy industries.",
    url: "https://www.lynxfinanceconsulting.com/industries",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | LYNX Finance Consulting",
    description:
      "Finance, accounting, and tax solutions for professional services, retail, fintech, construction, healthcare, media, education, and energy industries.",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
