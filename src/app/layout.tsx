import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LYNX Finance Consulting | Global Financial & Accounting Services",
  description:
    "LYNX Finance Consulting is a global financial services firm delivering Accounting, Tax, and Virtual CFO services for high-growth businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-1 pt-20 lg:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

