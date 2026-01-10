"use client";

import { PageHero } from "@/components/PageHero";
import { MessageCircle, Plus, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with a diverse range of businesses—from early-stage startups to mature enterprises, as well as nonprofit organizations. Our clients include e-commerce platforms, real estate developers, IT firms, health and wellness companies, education providers, financial service firms, and more. We understand that each business is unique, and we tailor our services to fit their size, complexity, and industry regulations.",
  },
  {
    q: "Do you offer services globally?",
    a: "Yes. LYNX Finance Consulting is equipped to support clients across the globe, with a primary focus on businesses operating in or dealing with the U.S., UK, Australia, and Nepal. Our team structure allows us to provide continuous service coverage across time zones, and we specialize in managing cross-border tax compliance, financial consolidation, and international regulatory frameworks.",
  },
  {
    q: "Can you help migrate from Excel to a cloud system?",
    a: "Absolutely. Transitioning from manual or spreadsheet-based accounting to a cloud-based platform like QuickBooks Online, Xero, or Zoho Books is one of our most requested services. We guide you through every step—from selecting the right software, to setting up your chart of accounts, migrating data, configuring user roles, and providing training to your internal team.",
  },
  {
    q: "Do you offer catch-up bookkeeping?",
    a: "Yes. Many clients come to us with backlogged or incomplete books. We specialize in cleaning up outdated records, reconciling transactions, correcting categorization errors, and preparing financials that meet audit or investor standards. Whether you're months or years behind, we can help bring your financials current and compliant.",
  },
  {
    q: "Can you help with IRS issues or tax notices?",
    a: "Definitely. Our U.S.-based tax consultants are experienced in IRS communications, audits, penalty negotiations, and installment agreements. We take over communication with tax authorities, analyze your exposure, and formulate a response plan to resolve issues quickly and favorably. Whether it's a CP2000 notice, audit request, or late filing concern, we're here to advocate for you.",
  },
  {
    q: "Do you assist with individual tax planning?",
    a: "Yes. We provide personalized tax planning services for individuals, especially freelancers, remote workers, consultants, and high-net-worth individuals. Our advisors help you reduce liabilities through smart use of deductions, credits, income deferral strategies, retirement contributions, and charitable giving—all aligned with your long-term financial goals.",
  },
  {
    q: "How do you price your services?",
    a: "We offer flexible pricing models depending on the type of service and engagement level. This includes fixed monthly retainers for ongoing services (like bookkeeping or CFO support), hourly billing for advisory or consulting, and flat rates for one-time projects such as tax filings or audit preparation. We provide a clear, customized quote after your initial consultation.",
  },
  {
    q: "Do I need to commit long term?",
    a: "No long-term contract is required. However, for services like outsourced accounting or virtual CFO, we recommend a minimum engagement of 3–6 months to ensure measurable results. For ad-hoc projects, such as financial modeling or tax return filing, we work on a project basis with defined timelines and deliverables.",
  },
  {
    q: "Can you work with fully remote businesses?",
    a: "Yes. In fact, a majority of our clients operate remotely. Our workflows are fully cloud-enabled, meaning we can collaborate securely and efficiently regardless of your location. We use encrypted file-sharing platforms, video conferencing, and cloud accounting software to ensure seamless delivery and data protection.",
  },
  {
    q: "Do you offer support during off hours?",
    a: "Yes. With teams in the U.S. and Nepal, we cover a wide range of time zones to provide extended service availability. This setup allows us to respond faster and continue work on your financials overnight if needed, particularly useful for urgent tax deadlines or time-sensitive reconciliations.",
  },
];

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
