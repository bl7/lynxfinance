"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Shield } from "lucide-react";

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

export function HomeOutcomes() {
  // TODO: Replace with real testimonials if available in code/data
  // For now, showing outcome cards without quotes or names
  const outcomes = [
    {
      icon: CheckCircle2,
      title: "Clean, trusted financial records",
      description:
        "Books that are always up-to-date and ready for tax time, audits, or investor reviews.",
    },
    {
      icon: Shield,
      title: "Zero missed deadlines",
      description:
        "Automated reminders and expert oversight ensure all filings are submitted on time.",
    },
    {
      icon: TrendingUp,
      title: "Better decision-making",
      description:
        "Clear reporting and advisory support help you make informed financial decisions as you scale.",
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
            Typical outcomes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            {/* TODO: Replace with real testimonials section if available */}
            What businesses achieve when they work with Lynx for finance,
            compliance, and accounting support.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={outcome.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {outcome.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

