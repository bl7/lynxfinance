import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | LYNX Finance Consulting",
  description:
    "Frequently asked questions about accounting, tax compliance, virtual CFO, US formation, and automation with LYNX Finance Consulting.",
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/faq" },
  openGraph: {
    title: "FAQ | LYNX Finance Consulting",
    description:
      "Questions about accounting, tax, CFO, US formation, and automation with LYNX Finance Consulting.",
    url: "https://www.lynxfinanceconsulting.com/faq",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | LYNX Finance Consulting",
    description:
      "Questions about accounting, tax, CFO, US formation, and automation with LYNX Finance Consulting.",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
