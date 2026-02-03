import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | LYNX Finance Consulting",
  description:
    "Frequently asked questions about LYNX Finance Consulting services: accounting, bookkeeping, tax compliance, virtual CFO, US company formation, EIN application, and process automation. Get answers to common questions about our services and processes.",
  keywords: [
    "LYNX Finance Consulting FAQ",
    "accounting services FAQ",
    "bookkeeping questions",
    "tax compliance FAQ",
    "virtual CFO questions",
    "US company formation FAQ",
    "EIN application questions",
    "accounting firm FAQ",
    "finance consulting questions",
    "tax services FAQ",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/faq" },
  openGraph: {
    title: "FAQ | LYNX Finance Consulting",
    description:
      "Frequently asked questions about accounting, tax compliance, virtual CFO, US formation, and automation with LYNX Finance Consulting.",
    url: "https://www.lynxfinanceconsulting.com/faq",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | LYNX Finance Consulting",
    description:
      "Frequently asked questions about accounting, tax compliance, virtual CFO, US formation, and automation with LYNX Finance Consulting.",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
