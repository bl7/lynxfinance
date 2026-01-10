"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export function HomeHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,250,252,0.12),transparent_60%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.95),transparent_65%)]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center px-4 py-20 lg:px-6 lg:py-24">
        <motion.div
          className="relative z-10 w-full max-w-4xl"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.07 }}
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Finance, tax, and compliance support for{" "}
            <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
              modern businesses
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Clean bookkeeping, confident filings, and clear reporting, plus US
            company setup when you need it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
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
          </motion.div>

          {/* Service chips */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {[
              "Bookkeeping",
              "Tax filings",
              "Compliance support",
              "Advisory",
              "US company setup",
            ].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3 py-1.5"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs text-slate-300">{chip}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust line */}
          <motion.p variants={fadeUp} className="mt-6 text-sm text-slate-400">
            Secure document handling, cross-border support, US and Nepal
            delivery team
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
