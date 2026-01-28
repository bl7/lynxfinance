import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | LYNX Finance Consulting",
  description:
    "Talk to LYNX Finance Consulting about accounting, tax compliance, virtual CFO, US formation, and process automation. Share your details and we’ll respond with next steps.",
  alternates: { canonical: "https://lynxfinance.vercel.app/contact" },
  openGraph: {
    title: "Contact | LYNX Finance Consulting",
    description:
      "Talk to LYNX Finance Consulting about accounting, tax, CFO, US formation, and automation.",
    url: "https://lynxfinance.vercel.app/contact",
    siteName: "LYNX Finance Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | LYNX Finance Consulting",
    description:
      "Talk to LYNX Finance Consulting about accounting, tax, CFO, US formation, and automation.",
  },
};
export default function ContactPage() {
  return <ContactClient />;
}
