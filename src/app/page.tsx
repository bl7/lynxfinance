"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  BarChart3,
  Globe2,
  LineChart,
  Building2,
  BadgeCheck,
  FileText,
  Receipt,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

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

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for subtlety */}
        <div className="absolute inset-0 bg-slate-950/80" />
        {/* Gradient overlays for text visibility */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_65%)]" />
        <div className="relative mx-auto flex h-[85vh] max-w-5xl items-center px-4 py-20 lg:px-6 lg:py-24">
          <motion.div
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.35)]"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
              Strategic Partner for Global Finance Teams
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Climb higher with{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                LYNX Finance Consulting
              </span>
              <br />
              Strategic financial solutions for
              <br />
              your next stage.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              In today&apos;s rapidly changing financial environment, clarity
              and strategy are everything. LYNX Finance Consulting delivers
              tailored financial and accounting solutions that help businesses
              and nonprofits achieve{" "}
              <span className="font-semibold text-slate-100">
                clarity, compliance, and sustainable growth
              </span>
              . We are not just your service provider&mdash;we are your
              strategic partner for long-term financial success.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,197,110,0.7)] transition hover:brightness-110"
              >
                <BadgeCheck className="h-3.5 w-3.5" />
                <span>Our Services</span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-5 py-2 text-xs font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
              >
                <LineChart className="h-4 w-4 text-sky-300" />
                <span>Explore our service tiers</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why LYNX / partner section */}
      <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
        <motion.div
          className="mx-auto max-w-6xl px-4 lg:px-8"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/85 sm:text-sm">
              Why LYNX?
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex-[1.1] space-y-5">
              <h2 className="text-balance text-2xl font-semibold text-slate-50 sm:text-[1.85rem] lg:text-[2.1rem]">
                Your partner for long-term financial success.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                We do more than provide services—we operate as your finance
                partner. With decades of combined experience in US and
                international markets, we deliver tailored solutions for
                sustainable growth.
              </p>
              <div className="mt-7 space-y-5 text-sm text-slate-300">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-amber-300" />
                  <div>
                    <p className="text-base font-semibold text-slate-50">
                      Deep industry knowledge
                    </p>
                    <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                      Backgrounds across US GAAP, IFRS, and complex
                      multi-jurisdiction structures, shaped in both public
                      accounting and in-house roles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="mt-1 h-5 w-5 text-emerald-300" />
                  <div>
                    <p className="text-base font-semibold text-slate-50">
                      Client-first approach
                    </p>
                    <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                      Dedicated pods that feel like an extension of your team,
                      with a clear point of contact who understands your board,
                      donors, and investors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="mt-1 h-5 w-5 text-sky-300" />
                  <div>
                    <p className="text-base font-semibold text-slate-50">
                      Scalable solutions
                    </p>
                    <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                      From start-up bookkeeping to multi-entity advisory, we
                      right-size processes, controls, and reporting as your
                      organization grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[0.9]">
              <div className="glass-panel relative mx-auto max-w-md overflow-hidden rounded-3xl">
                <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-80">
                  <Image
                    src="/graph.jpg"
                    alt="Finance dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <div className="max-w-[12rem] text-xs text-white sm:text-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                        YOUR FINANCE COMMAND CENTER
                      </p>
                      <p className="mt-2 text-[11px] leading-relaxed text-white sm:text-xs">
                        Consolidated dashboards, close status, and key KPIs in
                        one place, reviewed with you on a regular cadence.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <div className="rounded-2xl bg-slate-950/90 px-5 py-3 text-right text-[11px] text-slate-100 shadow-lg shadow-slate-900/80">
                        <p className="text-base font-semibold text-amber-300">
                          60+ years
                        </p>
                        <p className="text-xs text-slate-300 sm:text-[13px]">
                          of collective excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Financial support / services summary */}
      <section
        id="services"
        className="bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.85),_transparent_55%)] py-14"
      >
        <motion.div
          className="mx-auto max-w-6xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center text-slate-50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300/80">
              Our services
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold sm:text-[1.9rem]">
              Comprehensive{" "}
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                financial support
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-sm">
              From daily transactions to executive reporting, LYNX Finance
              Consulting provides an integrated set of services that keep you
              compliant, informed, and ready for your next move.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div
              className="glass-panel relative flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-sky-400/70"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sky-300">
                <FileText className="h-4 w-4" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Accounting & Bookkeeping
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-50">
                Always-on, audit-ready financial backbone.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Monthly close and reconciliations</li>
                <li>• Ledger maintenance and clean-up</li>
                <li>• AR / AP workflows and vendor management</li>
                <li>• Management reporting packs</li>
              </ul>
              <Link
                href="/services/accounting-bookkeeping"
                className="mt-4 text-xs font-semibold text-sky-300 hover:text-sky-200"
              >
                Learn more about Accounting →
              </Link>
            </motion.div>

            <motion.div
              className="glass-panel relative flex h-full flex-col rounded-3xl border border-amber-300/70 bg-slate-950/90 p-6 transition-transform duration-200 hover:-translate-y-1.5 hover:border-amber-200"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-amber-200">
                <Receipt className="h-4 w-4" />
              </div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                Tax Compliance
                <span className="rounded-full bg-amber-300/15 px-2 py-0.5 text-[10px] text-amber-200">
                  High demand
                </span>
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-50">
                Proactive, multi-jurisdictional tax planning.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-200">
                <li>• US Federal & State returns</li>
                <li>• International and cross-border considerations</li>
                <li>• Nexus analysis and entity structuring</li>
                <li>• Quarterly estimates & planning cadence</li>
              </ul>
              <Link
                href="/services/tax-compliance"
                className="mt-4 text-xs font-semibold text-amber-200 hover:text-amber-100"
              >
                Learn more about Tax →
              </Link>
            </motion.div>

            <motion.div
              className="glass-panel relative flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-300/70"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={2}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-emerald-300">
                <Briefcase className="h-4 w-4" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Virtual CFO
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-50">
                Strategic finance without the full-time overhead.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Cash flow forecasting and scenario modeling</li>
                <li>• Board and investor reporting packs</li>
                <li>• KPI frameworks and dashboarding</li>
                <li>• Strategic capital allocation guidance</li>
              </ul>
              <Link
                href="/services/virtual-cfo"
                className="mt-4 text-xs font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Learn more about Virtual CFO →
              </Link>
            </motion.div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-slate-950/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200 hover:border-amber-200 hover:text-amber-100"
            >
              Explore all services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Dual-hemisphere expertise */}
      <section className="bg-slate-950/95 py-12">
        <motion.div
          className="mx-auto max-w-6xl px-4 text-slate-50 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
              Dual-hemisphere expertise
            </p>
            <h2 className="mt-2 text-balance text-xl font-semibold sm:text-2xl">
              US and Nepal teams working in concert for your finance function.
            </h2>
            <p className="mt-3 text-xs text-slate-300 sm:text-sm">
              Teams in the United States and Kathmandu, Nepal deliver extended
              hours of support for US and international clients. You gain the
              proximity and context of a local strategic partner, paired with
              the efficiency and depth of a specialized offshore team.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900/90 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center text-slate-50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
              Client stories
            </p>
            <h2 className="mt-2 text-balance text-xl font-semibold sm:text-2xl">
              Check our testimonials.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “LYNX came in when we were outgrowing basic bookkeeping. They
                rebuilt our close process, cleaned up prior years, and gave us
                board-ready reporting every month.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                Founder, SaaS company
              </p>
            </motion.div>
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “Our nonprofit needed stronger controls and clearer grant
                reporting. LYNX gave us structure without slowing our programs
                down.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                Executive Director, Nonprofit
              </p>
            </motion.div>
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={2}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “The Virtual CFO team at LYNX helped us understand our runway,
                pricing, and expansion options in a way that made board
                conversations far more productive.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                CEO, International services firm
              </p>
            </motion.div>
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={3}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “Having LYNX manage our monthly close freed me to focus on
                growth instead of chasing numbers and reconciliations.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                Owner, Professional services firm
              </p>
            </motion.div>
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={4}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “Their tax team anticipated issues we hadn’t even considered and
                helped us expand into new states with confidence.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                Co-founder, Multi-state retailer
              </p>
            </motion.div>
            <motion.div
              className="glass-panel flex h-full flex-col rounded-2xl p-4 text-xs text-slate-200 transition-transform duration-200 hover:-translate-y-1"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={5}
            >
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-2 text-slate-200">
                “LYNX feels like an internal finance team that happens to be
                remote. Responsive, detail-oriented, and easy to work with.”
              </p>
              <p className="mt-3 font-semibold text-slate-100">
                Managing Director, International NGO
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="bg-slate-950 py-10">
        <motion.div
          className="mx-auto max-w-5xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass-panel rounded-3xl px-6 py-7 text-center text-slate-50">
            <h2 className="text-balance text-lg font-semibold sm:text-xl">
              Let LYNX Finance Consulting be the partner behind your growth.
            </h2>
            <p className="mt-3 text-xs text-slate-300 sm:text-sm">
              We provide more than numbers—we offer clarity, confidence, and a
              team that scales with you.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_22px_rgba(245,197,110,0.65)]"
            >
              Contact us to get a financial assessment
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
