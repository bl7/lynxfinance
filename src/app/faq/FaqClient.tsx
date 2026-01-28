"use client";

import { PageHero } from "@/components/PageHero";
import { MessageCircle, Plus, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with a diverse range of businesses, from early-stage startups to mature enterprises, as well as nonprofit organizations. Our clients include e-commerce platforms, real estate developers, IT firms, health and wellness companies, education providers, financial service firms, and more. We tailor our services to each business’ size, complexity, and industry requirements.",
  },
  {
    q: "Do you offer services globally?",
    a: "Yes. We support clients globally, with a focus on businesses operating in or dealing with the U.S., UK, Australia, and Nepal. We specialize in cross-border tax compliance, consolidation, and multi-entity reporting.",
  },
  {
    q: "Can you help migrate from Excel to a cloud system?",
    a: "Absolutely. We help you move from spreadsheets to cloud accounting (e.g., QuickBooks Online, Xero, Zoho Books): chart of accounts setup, data migration, controls, role-based access, and team training.",
  },
  {
    q: "Do you offer catch-up bookkeeping?",
    a: "Yes. We can clean up and reconcile historical records, fix categorization, and bring your books current—whether you’re months or years behind.",
  },
  {
    q: "Can you help with IRS issues or tax notices?",
    a: "Yes. We assist with IRS notices, audits, penalty negotiations, and response planning. We’ll help you understand exposure, prepare documentation, and coordinate communication.",
  },
  {
    q: "Do you assist with individual tax planning?",
    a: "Yes. We support individuals (freelancers, consultants, remote workers) with planning around deductions, credits, quarterly estimates, and long-term tax strategy.",
  },
  {
    q: "How do you price your services?",
    a: "Pricing depends on scope and complexity. We offer monthly retainers for ongoing work, fixed-fee project pricing, and hourly advisory. We’ll confirm pricing after understanding your needs.",
  },
  {
    q: "Do I need to commit long term?",
    a: "No long-term contract is required. For ongoing services, we typically recommend 3–6 months to see measurable outcomes. One-off projects are scoped with clear timelines.",
  },
  {
    q: "Can you work with fully remote businesses?",
    a: "Yes. Most of our clients are remote. We operate with cloud workflows, secure file sharing, and clear review/approval loops so delivery is smooth across time zones.",
  },
  {
    q: "Do you offer support during off hours?",
    a: "Yes. With teams across time zones, we can support urgent deadlines and provide extended coverage when needed.",
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

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqJsonLd = useMemo(() => {
    const entities = faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entities,
    };
  }, []);

  return (
    <div className="pb-16">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
                    className={`glass-panel group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 ${
                      isOpen
                        ? "border-[#FFC72C]/40 bg-slate-50"
                        : "hover:border-slate-300"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-base font-semibold text-slate-900 sm:text-lg">
                        {item.q}
                      </h3>
                      <button
                        className="mt-0.5 shrink-0 text-slate-400 transition-colors hover:text-[#FFC72C]"
                        aria-label={isOpen ? "Collapse" : "Expand"}
                        type="button"
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
                        className="mt-4 text-sm leading-relaxed text-slate-600"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="lg:sticky lg:top-24"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={faqs.length}
          >
            <div className="glass-panel rounded-2xl border border-[#FFC72C]/20 bg-white p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC72C]/20 border border-[#FFC72C]/30">
                  <MessageCircle className="h-8 w-8 text-[#FFC72C]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                Can&apos;t find an answer?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Reach out and we&apos;ll help you get clarity on scope, pricing,
                and next steps.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC72C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-[#FFD54F]"
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
