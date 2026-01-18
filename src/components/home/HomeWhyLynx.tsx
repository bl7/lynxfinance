"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";

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

export function HomeWhyLynx() {
  const benefits = [
    {
      icon: ShieldCheck,
      text: "Clear checklists and documented process",
    },
    {
      icon: FileText,
      text: "Secure document vault and audit-ready records",
    },
    {
      icon: Clock,
      text: "Dedicated specialists across time zones",
    },
    {
      icon: TrendingUp,
      text: "One partner across bookkeeping, tax, compliance, and setup",
    },
  ];

  const personas = [
    {
      title: "Growing businesses",
      description:
        "Clean books and reliable reporting without building a full finance team.",
    },
    {
      title: "Founders who want predictable compliance",
      description: "No surprises, missed deadlines, or last-minute scrambles.",
    },
    {
      title: "Cross-border teams",
      description: "Consolidated reporting and multi-jurisdiction support.",
    },
    {
      title: "Teams expanding into the US (Optional)",
      description:
        "Company formation, compliance, accounting, and tax — handled together.",
    },
  ];

  return (
    <section className="my-12 px-4 sm:px-12 lg:mx-auto lg:max-w-6xl">
      <div
        className="rounded-2xl p-8 sm:p-12 lg:p-16"
        style={{ backgroundColor: "#E5EAF1" }}
      >
        {/* Header */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[#002147] sm:text-5xl lg:text-6xl">
            Why Lynx
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            We combine expertise across bookkeeping, tax, compliance, and
            company setup, so you don&apos;t have to juggle multiple vendors or
            worry about missed deadlines.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Benefits */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="mb-8 text-2xl font-bold text-[#002147] sm:text-3xl">
              What we deliver
            </h3>
            <ul className="space-y-6">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={i}
                    variants={cardFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    custom={i}
                    className="flex items-start gap-5"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/15">
                      <Icon className="h-5 w-5 text-[#FFC72C]" />
                    </div>
                    <span className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Team Box */}
            <div className="mt-10 w-full rounded-2xl border border-slate-200/50 bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-[#002147]">
                  Experienced team
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  60+ years of combined experience across US tax, compliance,
                  and accounting
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-slate-100 bg-slate-50 shadow-sm"
                  >
                    <Image
                      src="/person.png"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">
                US and Nepal delivery teams working across time zones
              </p>
            </div>
          </motion.div>

          {/* Right Column - Who It's For */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="mb-4 text-2xl font-bold text-[#002147] sm:text-3xl">
              Who it&apos;s for
            </h3>
            <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
              We support businesses at every stage.
            </p>

            {/* Personas List */}
            <div className="flex flex-col gap-6">
              {personas.map((persona, i) => (
                <motion.div
                  key={persona.title}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <h4 className="text-lg font-bold text-[#002147] sm:text-xl">
                    {persona.title}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {persona.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
