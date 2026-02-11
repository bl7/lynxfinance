"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useAssessmentModal } from "../AssessmentModalProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function HomeHero() {
  const { openAssessment } = useAssessmentModal();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-20 lg:px-6 lg:pt-24">
        {/* Recognised By Section - Top Left */}
        <motion.div
          className="relative z-10 mb-auto pt-[10vh]"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        ></motion.div>

        {/* Main Content - Left Middle */}
        <div className="relative z-10 flex items-center flex-1">
          <motion.div
            className="flex max-w-2xl flex-col gap-6"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.07 }}
          >
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="relative inline-block border-b-2 border-[#FFC72C] pb-0.5">Finance</span>, tax, and compliance support for modern businesses
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl"
            >
              LYNX Finance Consulting helps startups, growing companies, and global teams simplify
              accounting, tax, and compliance, so you can scale with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => openAssessment()}
                className="inline-flex items-center justify-center rounded bg-[#FFC72C] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-[#FFD54F]"
              >
                Book a free assessment
              </button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Explore services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
