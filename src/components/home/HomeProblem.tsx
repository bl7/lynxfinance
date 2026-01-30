"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function HomeProblem() {
  const problems = [
    "Financial records you can't fully rely on.",
    "Compliance obligations that are easy to miss.",
    "Decisions made without accurate, timely reporting.",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/servicesbg.jpg"
          alt="Services background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          className="max-w-3xl"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Content */}
          <div>
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              The real challenge isn&apos;t execution, it&apos;s clarity.
            </h3>

            <ul className="mt-8 space-y-5">
              {problems.map((problem, i) => (
                <motion.li
                  key={problem}
                  variants={itemFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  className="flex gap-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
                  <p className="text-base leading-7 text-white/90 sm:text-lg">
                    {problem}
                  </p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={itemFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              className="mt-8 flex gap-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
              <p className="text-base font-semibold leading-relaxed text-white sm:text-lg">
                Lynx delivers disciplined systems, financial visibility, and
                accountability at every stage
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
