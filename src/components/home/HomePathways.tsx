"use client";

import { motion } from "framer-motion";
import { FileText, Receipt, Building2, CheckCircle2 } from "lucide-react";
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

export function HomePathways() {
  const pathways = [
    {
      title: "Accounting and Bookkeeping",
      icon: FileText,
      bullets: [
        "Monthly bookkeeping",
        "Management reports",
        "Clean close process",
      ],
      cta: "Get bookkeeping support",
      href: "/services/accounting-bookkeeping",
      color: "sky",
    },
    {
      title: "Tax and Compliance",
      icon: Receipt,
      bullets: [
        "Federal and state filings",
        "Ongoing compliance support",
        "Deadline tracking",
      ],
      cta: "Talk to a specialist",
      href: "/services/tax-compliance",
      color: "amber",
    },
    {
      title: "US Company Setup (optional)",
      icon: Building2,
      bullets: [
        "LLC or C-Corp formation",
        "EIN, BOI, Registered Agent",
        "Banking support guidance",
      ],
      cta: "Explore US setup",
      href: "/services/us-company-formation",
      color: "emerald",
    },
  ];

  const colorClasses = {
    sky: "text-sky-300",
    amber: "text-amber-300",
    emerald: "text-emerald-300",
  };

  return (
    <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Choose what you need
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pathways.map((pathway, i) => {
            const Icon = pathway.icon;
            return (
              <motion.div
                key={pathway.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                  <Icon
                    className={`h-6 w-6 ${
                      colorClasses[pathway.color as keyof typeof colorClasses]
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {pathway.title}
                </h3>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pathway.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pathway.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
                >
                  {pathway.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
