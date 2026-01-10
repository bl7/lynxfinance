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

  return (
    <section className="bg-slate-950/95 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Why Lynx
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              We combine expertise across bookkeeping, tax, compliance, and
              company setup, so you don&apos;t have to juggle multiple vendors
              or worry about missed deadlines.
            </p>
            <ul className="mt-8 space-y-4">
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
                    className="flex gap-3"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <span className="text-base text-slate-300">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <div className="relative">
            {/* Team preview - TODO: Replace with actual team component if available */}
            <div className="glass-panel rounded-3xl border border-slate-800/80 bg-slate-950/85 p-8">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-slate-50">
                  Experienced team
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  60+ years of combined experience across US tax, compliance,
                  and accounting
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber-300/30 bg-slate-900"
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
              <p className="mt-6 text-center text-xs text-slate-500">
                {/* TODO: Add real team member names and titles here */}
                US and Nepal delivery teams working across time zones
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
