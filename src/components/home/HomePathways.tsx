"use client";

import { motion } from "framer-motion";
import { FileText, Receipt, Briefcase, ArrowRight } from "lucide-react";
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
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function HomePathways() {
  const pathways = [
    {
      title: "Accounting and Bookkeeping",
      icon: FileText,
      description:
        "We handle the day-to-day details of your business finances, from accurate bookkeeping to organizing your records for tax preparation and strategic planning. Our goal is to provide clear, reliable financial insights so you can focus on running and growing your business with confidence.",
      cta: "Learn More",
      href: "/services/accounting-bookkeeping",
    },
    {
      title: "Tax and Compliance",
      icon: Receipt,
      description:
        "We make tax preparation simple, combining precise filings with strategic planning to maximize savings and ensure full compliance. Our experienced team works to minimize liabilities while providing clarity and peace of mind, so you can focus on growing your wealth.",
      cta: "Learn More",
      href: "/services/tax-compliance",
    },
    {
      title: "US Company Setup (optional)",
      icon: Briefcase,
      description:
        "Start your US business without leaving your location. We guide you through the right entity and state, complete the formation workflow, and support essentials like Registered Agent and EIN. Everything stays trackable, documented, and compliance ready from day one.",
      cta: "Learn More",
      href: "/services/us-company-formation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/servicesbg.jpg"
          alt="Services background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header Section */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 bg-blue-400" />
            <span className="text-sm font-medium text-white/80">
              How we can help
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Choose what you need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            We uncover opportunities that others miss, from optimizing entity
            structures to unlocking hidden deductions. Our proactive strategies
            help startups, growing companies, and global teams maximize savings,
            protect income, and build lasting wealth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
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
                className="group rounded-2xl bg-white p-8 shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <Icon className="h-6 w-6 text-[#002147]" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-[#002147] sm:text-2xl">
                  {pathway.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-base leading-relaxed text-slate-600">
                  {pathway.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={pathway.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#002147] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#003366]"
                >
                  {pathway.cta}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/20">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
