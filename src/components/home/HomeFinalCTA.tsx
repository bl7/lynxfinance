"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HomeFinalCTA() {
  return (
    <section className="border-y border-slate-800/70 bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Ready to get your finance and compliance sorted?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            We&apos;ll recommend the right setup based on your business and
            location.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,197,110,0.7)] transition hover:brightness-110"
            >
              Book a free assessment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

