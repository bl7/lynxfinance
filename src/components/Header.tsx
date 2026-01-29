"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  { slug: "accounting-bookkeeping", name: "Accounting & Bookkeeping" },
  { slug: "tax-compliance", name: "Tax Compliance" },
  {
    slug: "excel-google-sheet-modeling",
    name: "Excel and Google sheet modeling",
  },
  { slug: "financial-modeling", name: "Financial modeling" },
  {
    slug: "budgeting-financial-services",
    name: "Budgeting and Financial Services",
  },
  {
    slug: "process-automation-services",
    name: "Process Automation Services",
  },
  { slug: "virtual-cfo", name: "Virtual CFO" },
  { slug: "us-company-formation", name: "US Company Formation" },
  { slug: "ein", name: "EIN (Employer Identification Number)" },
  { slug: "us-business-bank-account", name: "US Business Bank Account" },
  { slug: "registered-agent-services", name: "Registered Agent Services" },
  { slug: "itin", name: "ITIN (Individual Taxpayer Identification Number)" },
  { slug: "bookkeeping-tax-services", name: "Bookkeeping & Tax Services" },
  {
    slug: "annual-compliance-state-filings",
    name: "Annual Compliance & State Filings",
  },
  { slug: "migrate-company", name: "Migrate Your Company to Lynx" },
];

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1 lg:px-6 lg:py-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="LYNX Finance Consulting logo"
            width={370}
            height={76}
            className="h-16 w-auto -translate-y-px object-contain sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-1 transition-colors hover:text-white/80"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#FFC72C] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-white/20 bg-slate-950/95 backdrop-blur-md shadow-xl py-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block border-t border-white/20 px-4 py-2 text-sm font-semibold text-[#FFC72C] transition-colors hover:bg-white/10"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>
          {/* Other nav items */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-white/80"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#FFC72C] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18179660481"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:border-white/50 hover:bg-white/20"
          >
            <PhoneCall className="h-3.5 w-3.5 text-white" />
            <span>+1 (817) 966-0481</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white shadow-sm transition hover:border-white/50 hover:bg-white/20 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/20 bg-slate-950/95 backdrop-blur-md px-4 pb-4 pt-2 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-white">
            {/* Services as simple link on mobile */}
            <Link
              href="/services"
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            {/* Other nav items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
