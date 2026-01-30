"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Receipt,
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
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
          viewport={{ once: true, amount: 0.2 }}
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
            const highlightClasses = pkg.highlight
              ? "ring-1 ring-[#FFC72C]/40"
              : "";

            return (
              <motion.div
                key={pkg.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className={`group relative overflow-hidden rounded-3xl bg-[#020b2a] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 ${highlightClasses}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/bookkeeping.jpg"
                    alt={pkg.title}
                    fill
                    className="object-cover opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30"
                  />
                </div>
                {/* Gradient overlay for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/70 to-slate-950/95" />

                {/* Content */}
                <div className="relative flex h-full min-h-[380px] flex-col justify-between p-6 sm:p-7">
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC72C]/20 border border-[#FFC72C]/30">
                      <Icon className="h-5 w-5 text-[#FFC72C]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/90">
                        Best for: {pkg.bestFor}
                      </p>
                    </div>

                    <ul className="mt-3 space-y-3">
                      {pkg.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm leading-6 text-white/90"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
                          <span className="flex-1">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={pkg.href}
                    className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      pkg.highlight
                        ? "border-white bg-white text-slate-900 hover:bg-slate-100"
                        : "border-white/60 bg-white/10 text-white backdrop-blur-sm hover:border-white/80 hover:bg-white/20"
                    }`}
                  >
                    {pkg.cta}
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      pkg.highlight
                        ? "border-slate-900/20 bg-slate-900/5"
                        : "border-white/40 bg-white/10"
                    }`}>
                      <ArrowRight className={`h-3 w-3 ${pkg.highlight ? "text-slate-900" : "text-white"}`} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* US Setup add-on */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={3}
          className="mt-12 border-t border-slate-300/50 pt-8"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
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
                className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[#002147] bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-[#002147] hover:text-white"
              >
                Explore US setup
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
