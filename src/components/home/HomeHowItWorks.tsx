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
      title: "Discovery and setup",
      description:
        "We learn your business, current setup, and goals to design the right approach.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Systemize bookkeeping and reporting",
      description:
        "Clean up records, establish workflows, and create reliable monthly reporting.",
    },
    {
      icon: FileCheck,
      step: "3",
      title: "Filing and compliance support",
      description:
        "Handle tax filings, state requirements, and keep you ahead of deadlines.",
    },
    {
      icon: TrendingUp,
      step: "4",
      title: "Ongoing advisory as you scale",
      description:
        "Strategic guidance for growth decisions, cash flow, and compliance planning.",
    },
  ];

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
            How it works
          </h2>
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
                <div className="glass-panel flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30">
                  <div className="mb-4 flex justify-center">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-amber-300/30">
                      <Icon className="h-6 w-6 text-amber-300" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-slate-950">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
          className="mt-8 text-center text-sm text-slate-400"
        >
          Need US setup?{" "}
          <Link
            href="/services/us-company-formation"
            className="font-medium text-amber-300 hover:text-amber-200"
          >
            We can form your company and keep it compliant.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
