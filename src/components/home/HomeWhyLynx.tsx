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
    transition: { duration: 0.5, delay: i * 0.1 },
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
      title: "Teams expanding into the US",
      description:
        "Company formation, compliance, accounting, and tax, all handled together.",
    },
  ];

  return (
    <section className="my-16 px-4 sm:px-6 lg:mx-auto lg:max-w-7xl">
      <div
        className="rounded-3xl p-8 sm:p-12 lg:p-16"
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
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Lynx
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We combine expertise across bookkeeping, tax, compliance, and
            company setup, so you don&apos;t have to juggle multiple vendors or
            worry about missed deadlines.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Benefits */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="mb-8 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
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
                    <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/50">
                      <Icon className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                    <p className="pt-1.5 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                      {item.text}
                    </p>
                  </motion.li>
                );
              })}
            </ul>

            {/* Team Box */}
            <div className="mt-10 w-full rounded-2xl border-2 border-slate-200/60 bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  Experienced team
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  60+ years of combined experience across US tax, compliance,
                  and accounting
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {[
                  { src: "/staffs/DilipGyawali.jpeg", alt: "Dilip Gyawali" },
                  { src: "/staffs/SagarKandel.jpeg", alt: "Sagar Kandel" },
                  {
                    src: "/staffs/ShisirPokharel.jpeg",
                    alt: "Shisir Pokharel",
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-slate-50 shadow-md ring-2 ring-slate-100"
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
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-500">
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
            <div className="mb-8">
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Who it&apos;s for
              </h3>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                We support businesses at every stage.
              </p>
            </div>

            {/* Personas List */}
            <div className="flex flex-col gap-5">
              {personas.map((persona, i) => (
                <motion.div
                  key={persona.title}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                  className="group rounded-xl border-2 border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#FFC72C]/30 hover:shadow-md"
                >
                  <h4 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-slate-700 sm:text-xl">
                    {persona.title}
                  </h4>
                  <p className="mt-2.5 text-base leading-relaxed text-slate-600 sm:text-base">
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
