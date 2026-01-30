import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AssessmentModalProvider } from "@/components/AssessmentModalProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lynxfinanceconsulting.com"),
  title: {
    default: "LYNX Finance Consulting | Global Financial & Accounting Services",
    template: "%s | LYNX Finance Consulting",
  },
  description:
    "LYNX Finance Consulting is a global financial services firm delivering Accounting, Tax, Virtual CFO, and US Company Formation services for high-growth businesses.",
  keywords: [
    "accounting services",
    "bookkeeping",
    "tax compliance",
    "virtual CFO",
    "US company formation",
    "financial consulting",
    "tax preparation",
    "financial modeling",
    "process automation",
    "business accounting",
    "small business accounting",
    "startup accounting",
    "international tax",
    "cross-border accounting",
  ],
  authors: [{ name: "LYNX Finance Consulting" }],
  creator: "LYNX Finance Consulting",
  publisher: "LYNX Finance Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lynxfinanceconsulting.com",
    siteName: "LYNX Finance Consulting",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LYNX Finance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LYNX Finance Consulting",
    description:
      "Global financial services firm delivering Accounting, Tax, Virtual CFO, and US Company Formation services.",
    images: ["/logo.png"],
  },
  verification: {
    // Add Google Search Console verification when available
    // google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // Add other verification codes as needed
    // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
  other: {
    "sitemap": "https://www.lynxfinanceconsulting.com/sitemap.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-white text-slate-900 antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <ToastProvider>
          <AssessmentModalProvider>
            <div className="flex min-h-screen flex-col bg-white">
              <Header />
              <main className="flex-1 pt-20 lg:pt-24">{children}</main>
              <Footer />
            </div>
          </AssessmentModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
