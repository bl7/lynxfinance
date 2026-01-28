import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | LYNX Finance Consulting",
  description:
    "Learn about LYNX Finance Consulting: global finance experts delivering accounting, tax compliance, virtual CFO, and automation for modern businesses.",
  alternates: { canonical: "https://lynxfinance.vercel.app/about" },
  openGraph: {
    title: "About | LYNX Finance Consulting",
    description:
      "Global finance experts delivering accounting, tax, virtual CFO, and automation.",
    url: "https://lynxfinance.vercel.app/about",
    siteName: "LYNX Finance Consulting",
    type: "website",
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

