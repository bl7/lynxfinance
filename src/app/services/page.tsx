"use client";

import Link from "next/link";
import { FileText, Receipt, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const services = [
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    icon: FileText,
    summary:
      "End-to-end bookkeeping, reconciliations, and monthly close so that your leadership team always has trusted numbers.",
    bullets: [
      "Full-cycle bookkeeping with clean, structured ledgers",
      "Bank, credit card, and balance sheet reconciliations",
      "AR / AP management and vendor workflows",
      "Monthly close packages and management reporting",
    ],
  },
  {
    slug: "tax-compliance",
    name: "Tax Compliance",
    icon: Receipt,
    summary:
      "Pragmatic, forward-looking tax support across federal, state, and cross-border requirements.",
    bullets: [
      "US Federal and State income tax returns",
      "Sales, payroll, and other indirect tax coordination",
      "Nexus, residency, and multi-state planning",
      "Quarterly estimates and year-end planning support",
    ],
  },
  {
    slug: "virtual-cfo",
    name: "Virtual CFO",
    icon: LineChart,
    summary:
      "Executive-level financial leadership without the full-time cost of a CFO.",
    bullets: [
      "Cash flow forecasting and runway analysis",
      "KPI design, dashboards, and performance reviews",
      "Board and investor-ready reporting packs",
      "Capital planning and scenario modeling",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Our Services"
        title="One partner for your accounting, tax, and strategic finance needs."
        subtitle={
          <>
            We support fast-growing businesses and global organizations with
            offerings that span daily bookkeeping to board-level strategy. Each
            engagement is calibrated to your current stage while keeping future
            complexity in view.
          </>
        }
      />
      <div className="mx-auto max-w-5xl px-4 pt-10 lg:px-6">
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                className="glass-panel flex h-full flex-col rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <Icon className="h-5 w-5 text-amber-300" />
                <h2 className="mt-3 text-sm font-semibold text-slate-50">
                  {service.name}
                </h2>
                <p className="mt-2 text-xs text-slate-400">{service.summary}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {service.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 text-xs font-semibold text-amber-200 transition-colors hover:text-amber-100"
                >
                  View {service.name} details →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
