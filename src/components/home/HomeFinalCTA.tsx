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
    <section className="border-y border-slate-200 bg-[#002147] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to get your finance and compliance sorted?
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200">
            We&apos;ll recommend the right setup based on your business and
            location.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-[#FFC72C] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-[#FFD54F]"
            >
              Book a free assessment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
