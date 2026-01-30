import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | LYNX Finance Consulting",
  description:
    "Learn about LYNX Finance Consulting: global finance experts delivering accounting, tax compliance, virtual CFO, and automation for modern businesses.",
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/about" },
  openGraph: {
    title: "About | LYNX Finance Consulting",
    description:
      "Global finance experts delivering accounting, tax, virtual CFO, and automation.",
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
      "Global finance experts delivering accounting, tax, virtual CFO, and automation.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

