"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

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
  { slug: "virtual-cfo", name: "Virtual CFO" },
  { slug: "us-company-formation", name: "US Company Formation" },
  { slug: "ein", name: "EIN (Employer Identification Number)" },
];

export function ExploreServices() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-4 py-16 lg:px-6"
      variants={cardFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "-50px" }}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            (Core Services)
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore <span className="italic">Services</span>
          </h2>
        </div>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded bg-[#002147] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002147]/90 sm:inline-flex"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:border-[#FFC72C]/50 hover:bg-[#FFC72C]/5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {service.name}
            </h3>
            <ArrowRight className="h-5 w-5 text-slate-400 opacity-0 transition group-hover:translate-x-1 group-hover:text-[#FFC72C] group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
