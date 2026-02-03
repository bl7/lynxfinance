import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | LYNX Finance Consulting",
  description:
    "Learn about LYNX Finance Consulting: global finance experts delivering accounting, tax compliance, virtual CFO, and automation for modern businesses. Our team of experienced professionals helps startups and growing companies achieve financial clarity.",
  keywords: [
    "LYNX Finance Consulting",
    "about LYNX Finance",
    "accounting firm",
    "finance consulting firm",
    "accounting team",
    "finance experts",
    "accounting professionals",
    "tax experts",
    "CFO services",
    "financial advisors",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/about" },
  openGraph: {
    title: "About | LYNX Finance Consulting",
    description:
      "Learn about LYNX Finance Consulting: global finance experts delivering accounting, tax compliance, virtual CFO, and automation for modern businesses.",
    url: "https://www.lynxfinanceconsulting.com/about",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "About LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | LYNX Finance Consulting",
    description:
      "Learn about LYNX Finance Consulting: global finance experts delivering accounting, tax compliance, virtual CFO, and automation.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

