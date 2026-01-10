"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Globe2, Building2 } from "lucide-react";

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

export function HomePersonas() {
  const personas = [
    {
      icon: TrendingUp,
      title: "Growing businesses that need clean books",
      description:
        "You're scaling and need reliable bookkeeping and reporting without the overhead of a full finance team.",
    },
    {
      icon: Shield,
      title: "Founders who want predictable compliance",
      description:
        "You want to stay compliant and avoid surprises, with clear processes and deadline tracking.",
    },
    {
      icon: Globe2,
      title: "Cross-border teams that need reporting clarity",
      description:
        "You operate across jurisdictions and need consolidated reporting and multi-jurisdictional tax support.",
    },
    {
      icon: Building2,
      title: "Teams expanding into the US (optional)",
      description:
        "You're entering the US market and need company formation, ongoing compliance, plus accounting and tax support.",
    },
  ];

  return (
    <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Who it&apos;s for
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Whether you&apos;re a solo founder or scaling a team, we help you
            maintain clean books, stay compliant, and make informed decisions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <h3 className="text-base font-semibold text-slate-50">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {persona.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

