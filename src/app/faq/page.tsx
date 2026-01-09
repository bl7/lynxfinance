"use client";

import { PageHero } from "@/components/PageHero";
import { MessageCircle, Plus, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with a diverse range of businesses, from early-stage startups to mature enterprises and nonprofits. This includes e-commerce platforms, real estate developers, IT firms, health and wellness companies, education providers, and financial service firms. We tailor our services to fit your size, complexity, and industry regulations.",
  },
  {
    q: "Do you offer services globally?",
    a: "Yes, LYNX Finance Consulting provides services globally. With teams in the United States and Nepal, we operate across time zones to deliver seamless support for international clients. Our dual-hemisphere model ensures extended coverage and faster turnaround times.",
  },
  {
    q: "Can you help migrate from Excel to a cloud system?",
    a: "Absolutely. We specialize in helping businesses transition from Excel-based accounting to modern cloud-based systems like QuickBooks Online and Xero. Our team handles data migration, system setup, training, and ensures a smooth transition with minimal disruption to your operations.",
  },
  {
    q: "Do you offer catch-up bookkeeping?",
    a: "Yes, we provide catch-up bookkeeping services to help businesses get their financial records up to date. Whether you're months or years behind, our team can organize your transactions, reconcile accounts, and prepare accurate financial statements to get you current and compliant.",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title={
          <>
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
              Questions
            </span>
          </>
        }
        subtitle="Find answers to common questions about our services, processes, and how we can help your business."
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 lg:px-6">
        <motion.div
          className="grid gap-8 lg:grid-cols-[1fr,400px]"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - FAQs */}
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                >
                  <div
                    className={`glass-panel group cursor-pointer rounded-xl border border-slate-800/80 bg-slate-950/85 p-5 transition-all duration-300 ${
                      isOpen
                        ? "border-amber-300/40 bg-slate-950/95"
                        : "hover:border-slate-700"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-sm font-semibold text-slate-50">
                        {item.q}
                      </h3>
                      <button
                        className="mt-0.5 shrink-0 text-slate-400 transition-colors hover:text-amber-300"
                        aria-label={isOpen ? "Collapse" : "Expand"}
                      >
                        {isOpen ? (
                          <X className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-sm leading-relaxed text-slate-300"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Contact Sidebar */}
          <motion.div
            className="lg:sticky lg:top-24"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={faqs.length}
          >
            <div className="glass-panel rounded-2xl border border-amber-300/20 bg-slate-950/90 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/20 border border-amber-300/30">
                  <MessageCircle className="h-8 w-8 text-amber-300" />
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-slate-50">
                Can&apos;t find answer to your question?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                Still have questions that aren&apos;t covered here? We&apos;re
                here to help. Whether you need a custom quote, have
                industry-specific concerns, or simply want to talk through your
                business goals, our experts are just a message away. Reach out
                anytime and let&apos;s have a conversation that moves your
                finances forward.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_22px_rgba(245,197,110,0.65)] transition hover:brightness-110"
              >
                <span>Contact Us</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


