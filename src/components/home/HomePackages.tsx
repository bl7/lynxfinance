"use client";

import { motion } from "framer-motion";
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

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export function HomePackages() {
  const packages = [
    {
      title: "Monthly Bookkeeping",
      icon: FileText,
      bestFor: "Growing businesses that need clean, reliable records",
      outcomes: [
        "Always-on bookkeeping with monthly close",
        "Clean financial statements ready for tax time",
        "Management reports that support decision-making",
      ],
      cta: "Start bookkeeping",
      href: "/services/accounting-bookkeeping",
      highlight: false,
    },
    {
      title: "Tax and Compliance Support",
      icon: Receipt,
      bestFor: "Teams that want to stay ahead of deadlines",
      outcomes: [
        "Proactive tax planning throughout the year",
        "Timely filing of federal and state returns",
        "Compliance support to avoid penalties",
      ],
      cta: "Get compliance support",
      href: "/services/tax-compliance",
      highlight: true,
    },
    {
      title: "Advisory and Virtual CFO",
      icon: Briefcase,
      bestFor: "Companies scaling and making strategic decisions",
      outcomes: [
        "Strategic financial guidance without a full-time CFO",
        "Cash flow forecasting and budgeting support",
        "KPI frameworks and performance tracking",
      ],
      cta: "Explore advisory",
      href: "/services/virtual-cfo",
      highlight: false,
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Engagements
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Flexible engagement models to match your business needs and stage.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05, margin: "-50px" }}
                custom={i}
                className={`glass-panel flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30 hover:shadow-xl ${
                  pkg.highlight ? "border-[#FFC72C]/50" : ""
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <Icon className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-sm text-slate-900">
                  Best for: {pkg.bestFor}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={`mt-6 inline-flex items-center justify-center rounded px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                    pkg.highlight
                      ? "bg-[#FFC72C] text-slate-900 hover:bg-[#FFD54F]"
                      : "border border-[#002147] bg-transparent text-slate-900 hover:bg-[#002147] hover:text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* US Setup add-on */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          custom={3}
          className="mt-8"
        >
          <div className="glass-panel rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <Building2 className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    US Company Setup
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    One-time formation or add-on service. LLC/C-Corp formation,
                    EIN, BOI, Registered Agent, and ongoing compliance.
                  </p>
                </div>
              </div>
              <Link
                href="/services/us-company-formation"
                className="shrink-0 rounded border border-[#002147] bg-transparent px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-[#002147] hover:text-white"
              >
                Explore US setup
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
