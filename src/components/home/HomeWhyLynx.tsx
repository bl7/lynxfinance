"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  Clock,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { useAssessmentModal } from "../AssessmentModalProvider";

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

const valuePillars = [
  {
    icon: ShieldCheck,
    headline: "Clean, predictable delivery",
    description: "No surprises",
    proof: "On-time, every time",
  },
  {
    icon: FileText,
    headline: "Audit-ready records",
    description: "Always prepared",
    proof: "Documented workflows",
  },
  {
    icon: Clock,
    headline: "Time-zone coverage",
    description: "Fast responses",
    proof: "Multi-time-zone team",
  },
  {
    icon: TrendingUp,
    headline: "One partner end-to-end",
    description: "Less vendor juggling",
    proof: "Bookkeeping to compliance",
  },
];

const personas = [
  {
    id: "growing-businesses",
    label: "Growing businesses",
    headline: "Scale with confidence",
    outcomes: [
      "Reliable monthly close and reporting",
      "Cash flow visibility for decision-making",
      "Clean records ready for investors or lenders",
    ],
    engagement: "Typical engagement: Monthly bookkeeping + quarterly tax planning",
  },
  {
    id: "founders",
    label: "Founders",
    headline: "Focus on growth, not finance",
    outcomes: [
      "Never miss a deadline or filing",
      "Predictable compliance without surprises",
      "Clean records that support fundraising",
    ],
    engagement: "Typical engagement: Full-service accounting + tax compliance",
  },
  {
    id: "cross-border",
    label: "Cross-border teams",
    headline: "Unified financial operations",
    outcomes: [
      "Consolidated reporting across jurisdictions",
      "Multi-jurisdiction tax coordination",
      "Documented processes for global teams",
    ],
    engagement: "Typical engagement: Multi-entity accounting + international tax",
  },
];

const credibilityStats = [
  {
    value: "60+",
    label: "Years combined experience",
  },
  {
    value: "Multi-time-zone",
    label: "Team coverage",
  },
  {
    value: "Audit-ready",
    label: "Workflows",
  },
  {
    value: "Clear",
    label: "Onboarding process",
  },
];

export function HomeWhyLynx() {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);
  const { openAssessment } = useAssessmentModal();

  const activePersona = personas.find((p) => p.id === selectedPersona)!;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Lynx
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            One partner for bookkeeping, tax, compliance, and company setup—so
            you can focus on growth.
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            60+ years combined experience • Multi-time-zone team • Audit-ready
            workflows
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Value Pillars */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {valuePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.headline}
                    variants={cardFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05, margin: "-50px" }}
                    custom={i}
                    className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#FFC72C]/40 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFC72C]/10 transition-colors group-hover:bg-[#FFC72C]/20">
                      <Icon className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                    <h3 className="mb-1.5 text-base font-semibold leading-tight text-slate-900 sm:text-lg">
                      {pillar.headline}
                    </h3>
                    <p className="mb-2 text-sm text-slate-600">
                      {pillar.description}
                    </p>
                    <span className="inline-block rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {pillar.proof}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Persona Selector */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            className="flex flex-col"
          >
            {/* Tabs */}
            <div className="mb-6 flex gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1.5">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    selectedPersona === persona.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {persona.label}
                </button>
              ))}
            </div>

            {/* Persona Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPersona}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {activePersona.headline}
                </h3>
                <ul className="mb-6 space-y-3">
                  {activePersona.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
                      <span className="text-base leading-relaxed text-slate-700">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 text-sm font-medium text-slate-600">
                  {activePersona.engagement}
                </p>
                <button
                  type="button"
                  onClick={() => openAssessment()}
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#FFC72C] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition-colors hover:bg-[#FFD54F]"
                >
                  Get started
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          className="border-t border-slate-200 pt-12"
        >
          {/* Stats Grid */}
          <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {credibilityStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05, margin: "-50px" }}
                custom={i}
                className="text-center"
              >
                <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            custom={4}
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-8"
          >
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 sm:text-xl">
                Experienced team
              </h3>
              <p className="mb-6 text-sm text-slate-600">
                60+ years of combined experience across US tax, compliance, and
                accounting
              </p>
              <div className="flex items-center justify-center gap-4">
                {[
                  {
                    src: "/staffs/DilipGyawali.jpeg",
                    alt: "Dilip Gyawali",
                  },
                  { src: "/staffs/SagarKandel.jpeg", alt: "Sagar Kandel" },
                  {
                    src: "/staffs/ShisirPokharel.jpeg",
                    alt: "Shisir Pokharel",
                  },
                ].map((member, i) => (
                  <div
                    key={member.alt}
                    className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm ring-1 ring-slate-200 transition-transform hover:scale-105 sm:h-20 sm:w-20"
                  >
                    <Image
                      src={member.src}
                      alt={member.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                US and Nepal delivery teams working across time zones
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
