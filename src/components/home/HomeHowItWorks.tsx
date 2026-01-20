"use client";

import { motion } from "framer-motion";
import { Search, FileText, FileCheck, TrendingUp } from "lucide-react";
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

export function HomeHowItWorks() {
  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Discovery & setup",
      description:
        "We understand your business, current systems, and goals to design the right engagement.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Systemized bookkeeping & reporting",
      description:
        "We clean records, establish workflows, and deliver reliable monthly reporting.",
    },
    {
      icon: FileCheck,
      step: "3",
      title: "Filing & compliance management",
      description:
        "We manage tax filings, state requirements, and keep you ahead of deadlines.",
    },
    {
      icon: TrendingUp,
      step: "4",
      title: "Ongoing advisory as you scale",
      description:
        "Strategic guidance on growth, cash flow, and compliance planning.",
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            HOW IT WORKS
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            A simple, disciplined approach
          </h3>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="relative"
              >
                <div className="glass-panel flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30 hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-[#FFC72C]/30">
                      <Icon className="h-6 w-6 text-slate-900" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC72C] text-xs font-bold text-slate-900">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-center text-sm text-slate-600"
        >
          Need US setup?{" "}
          <Link
            href="/services/us-company-formation"
            className="font-medium text-slate-900 hover:text-slate-700"
          >
            We can form your company and keep it compliant.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
