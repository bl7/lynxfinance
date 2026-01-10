"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText,
  Receipt,
  Briefcase,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const tabFade = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function HomeServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      label: "Accounting and Bookkeeping",
      icon: FileText,
      bullets: [
        "Outsourced bookkeeping and full-cycle accounting",
        "Journal entries, ledger maintenance, bank reconciliations",
        "Month-end and year-end closing",
        "Management reporting packs",
        "Clean, structured financial records",
        "AR and AP management",
      ],
      cta: "Get bookkeeping support",
      href: "/services/accounting-bookkeeping",
    },
    {
      label: "Tax and Compliance",
      icon: Receipt,
      bullets: [
        "Federal and state tax return preparation (business & individual)",
        "Year-round tax planning to reduce effective tax rates",
        "Multi-jurisdictional tax strategy and treaty analysis",
        "Quarterly estimates and planning cadence",
        "Sales, payroll, and other indirect tax coordination",
        "Nexus analysis and entity structuring",
      ],
      cta: "Talk to a tax specialist",
      href: "/services/tax-compliance",
    },
    {
      label: "Advisory and Virtual CFO",
      icon: Briefcase,
      bullets: [
        "Virtual CFO services for growing companies",
        "Cash flow forecasting and budgeting",
        "KPI design, reporting, and performance reviews",
        "Board and investor-ready reporting packs",
        "Capital planning and scenario modeling",
        "Strategic financial guidance",
      ],
      cta: "Explore advisory services",
      href: "/services/virtual-cfo",
    },
    {
      label: "US Setup (optional)",
      icon: Building2,
      bullets: [
        "LLC or C-Corp formation",
        "EIN and ITIN assistance",
        "BOI filing support",
        "Registered Agent services",
        "Banking support guidance",
        "Annual compliance and state filings",
      ],
      cta: "Explore US setup",
      href: "/services/us-company-formation",
    },
  ];

  return (
    <section className="bg-slate-950/95 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Services, built to fit your stage
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-slate-800/80">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 rounded-t-lg border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "border-amber-300 text-amber-300"
                    : "border-transparent text-slate-400 hover:text-slate-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{service.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          variants={tabFade}
          initial="hidden"
          animate="show"
          className="mt-8"
        >
          <div className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-8">
            <ul className="space-y-3">
              {services[activeTab].bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-slate-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={services[activeTab].href}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_24px_rgba(245,197,110,0.6)] transition hover:brightness-110"
            >
              {services[activeTab].cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
