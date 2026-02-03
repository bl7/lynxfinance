import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | LYNX Finance Consulting",
  description:
    "Contact LYNX Finance Consulting for accounting, tax compliance, virtual CFO, US company formation, and process automation services. Get a free consultation and quote for your business needs.",
  keywords: [
    "contact LYNX Finance Consulting",
    "LYNX Finance contact",
    "accounting consultation",
    "finance consulting contact",
    "tax services contact",
    "CFO services consultation",
    "US company formation consultation",
    "bookkeeping services contact",
    "get quote",
    "free consultation",
  ],
  alternates: { canonical: "https://www.lynxfinanceconsulting.com/contact" },
  openGraph: {
    title: "Contact | LYNX Finance Consulting",
    description:
      "Contact LYNX Finance Consulting for accounting, tax compliance, virtual CFO, US formation, and process automation services. Get a free consultation.",
    url: "https://www.lynxfinanceconsulting.com/contact",
    siteName: "LYNX Finance Consulting",
    type: "website",
    images: [
      {
        url: "https://www.lynxfinanceconsulting.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | LYNX Finance Consulting",
    description:
      "Contact LYNX Finance Consulting for accounting, tax compliance, virtual CFO, US formation, and automation services.",
  },
};
export default function ContactPage() {
  return <ContactClient />;
}
