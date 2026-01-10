"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HomeProblem() {
  return (
    <section className="bg-slate-950/95 py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            The hardest part is not the work, it&apos;s the uncertainty
          </h2>
        </motion.div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 space-y-4"
        >
          <div className="flex gap-4 text-left">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <p className="text-base text-slate-300">
              Books that are hard to trust
            </p>
          </div>
          <div className="flex gap-4 text-left">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <p className="text-base text-slate-300">
              Filings that are easy to miss
            </p>
          </div>
          <div className="flex gap-4 text-left">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <p className="text-base text-slate-300">
              Decisions made without clear reporting
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex gap-4"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
          <p className="text-base font-medium text-slate-100">
            We bring structure, visibility, and accountability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
