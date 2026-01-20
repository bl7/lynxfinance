"use client";

import { FileText, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function AccountingBookkeepingPage() {
  const items = [
    "Structured chart of accounts aligned with your business model",
    "Daily, weekly, and monthly transaction processing",
    "Bank, credit card, and balance sheet reconciliations",
    "AR and AP aging reviews with vendor and customer follow-up",
    "Month-end close checklists and variance analysis",
    "Standardized management reporting and commentary",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Accounting & Bookkeeping"
        title="Accounting & Bookkeeping"
        subtitle={
          <>
            We build and operate a disciplined monthly close so that your
            leadership, lenders, and investors can rely on your numbers. Our
            team handles the day-to-day ledger work while giving you clear
            visibility into performance.
          </>
        }
      />
      <div className="mx-auto max-w-4xl px-4 pt-10 lg:px-6">
        <motion.div
          className="glass-panel rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/30"
          variants={cardFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFC72C]/10">
              <FileText className="h-4 w-4 text-[#FFC72C]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                What&apos;s included
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                A dedicated pod manages your books on a defined cadence with
                documented processes so that you always know the status of your
                close.
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-[#FFC72C]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
