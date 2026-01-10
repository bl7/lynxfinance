"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Globe2,
  Building2,
  FileCheck,
  CreditCard,
  Banknote,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  Briefcase,
  Store,
  Zap,
  Receipt,
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
      {/* 1. Hero Section */}
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
              Form your US company and stay compliant,{" "}
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                end-to-end
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              We handle formation, Registered Agent, EIN, BOI, annual filings,
              plus bookkeeping and US tax reporting—all in one streamlined
              process.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,197,110,0.7)] transition hover:brightness-110"
              >
                Start US Company
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
              >
                Book a free assessment
              </Link>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span className="text-xs text-slate-300">
                  Secure document digitization
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-2">
                <FileCheck className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-slate-300">
                  Compliance + tax support
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <section className="border-y border-slate-800/70 bg-slate-950/95 py-6">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 sm:gap-12">
            <span className="text-slate-300">
              Multi-entity accounting support
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-300">5472 + 1120 support</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-300">
              Cross-border compliance experience
            </span>
          </div>
        </div>
      </section>

      {/* 3. Problem + Promise */}
      <section className="bg-slate-950/95 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h2 className="text-balance text-3xl font-semibold text-slate-50 sm:text-4xl">
                US compliance is not optional, it&apos;s easy to get wrong
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                Penalties for missed filings can add up fast. Banking delays
                from incomplete documentation slow down operations. State
                requirements vary, and deadlines are easy to miss without a
                system.
              </p>
              <p>
                Lynx simplifies it: we handle formation, ongoing compliance,
                annual filings, and tax reporting through streamlined processes,
                so you can focus on building your business instead of navigating
                regulations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works - 5-Step Stepper */}
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
              How it works
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Building2,
                step: "1",
                title: "Choose entity + state",
                description:
                  "We help you select the right structure and jurisdiction for your business needs.",
              },
              {
                icon: FileCheck,
                step: "2",
                title: "Form the company",
                description:
                  "We handle all paperwork and filings to establish your US entity.",
              },
              {
                icon: CreditCard,
                step: "3",
                title: "Get EIN (and ITIN if needed)",
                description:
                  "We manage the EIN application process and assist with ITIN when required.",
              },
              {
                icon: Banknote,
                step: "4",
                title: "Banking support",
                description:
                  "We help you establish compliant banking relationships for your business.",
              },
              {
                icon: FileText,
                step: "5",
                title: "Compliance + bookkeeping + tax",
                description:
                  "Ongoing support for annual filings, bookkeeping, and US tax reporting.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                  className="relative"
                >
                  <div className="glass-panel flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30">
                    <div className="mb-4 flex justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-amber-300/30">
                        <Icon className="h-6 w-6 text-amber-300" />
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-slate-950">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4a. Comprehensive Financial Support */}
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
              Comprehensive{" "}
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                Financial Support
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
              Beyond company formation, we provide end-to-end financial services
              to keep your business compliant, informed, and ready for growth.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Financial Management & Accounting",
                icon: FileText,
                description:
                  "We provide complete financial stewardship, from daily transactions to executive reporting:",
                bullets: [
                  "Outsourced bookkeeping and full-cycle accounting",
                  "Journal entries, ledger maintenance, bank reconciliations",
                  "Month-end and year-end closing",
                  "Management reporting packs",
                ],
                link: "/services/accounting-bookkeeping",
                color: "sky",
              },
              {
                title: "Tax Compliance & Planning",
                icon: Receipt,
                description:
                  "We ensure you stay compliant while optimizing your tax position:",
                bullets: [
                  "Federal and state tax return preparation (business & individual)",
                  "Year-round tax planning to reduce effective tax rates",
                  "Multi-jurisdictional tax strategy and treaty analysis",
                  "Quarterly estimates & planning cadence",
                ],
                link: "/services/tax-compliance",
                color: "amber",
              },
              {
                title: "Strategic Advisory & Virtual CFO",
                icon: Briefcase,
                description:
                  "Our experienced consultants provide forward-looking financial leadership:",
                bullets: [
                  "Virtual CFO services for growing companies",
                  "Cash flow forecasting and budgeting",
                  "KPI design and performance tracking",
                  "Board and investor-ready reporting packs",
                ],
                link: "/services/virtual-cfo",
                color: "emerald",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              const colorClasses = {
                sky: "text-sky-300",
                amber: "text-amber-300",
                emerald: "text-emerald-300",
              };
              return (
                <motion.div
                  key={service.title}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                  className="glass-panel flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                    <Icon
                      className={`h-6 w-6 ${
                        colorClasses[service.color as keyof typeof colorClasses]
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="mt-6 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Packages - 3 Cards */}
      <section className="bg-slate-950/95 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Choose your package
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              Start with formation, add compliance support, or get full
              accounting and tax services—all available individually or bundled.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Start a US Company",
                icon: Building2,
                bullets: [
                  "Formation (LLC/C-Corp)",
                  "Registered Agent",
                  "EIN",
                  "BOI filing",
                  "Document management",
                ],
                cta: "Start US Company",
                ctaHref: "/contact",
                highlight: false,
              },
              {
                title: "Stay Compliant",
                icon: ShieldCheck,
                bullets: [
                  "Annual state filings",
                  "Registered Agent renewal",
                  "Deadline reminders",
                  "Document vault",
                ],
                cta: "Talk to compliance",
                ctaHref: "/contact",
                highlight: true,
              },
              {
                title: "Accounting and Tax",
                icon: FileText,
                bullets: [
                  "Bookkeeping",
                  "Federal/state filings",
                  "5472/1120/1065/1040-NR",
                  "Advisory option",
                ],
                cta: "Get accounting support",
                ctaHref: "/contact",
                highlight: false,
              },
            ].map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.title}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                  className={`glass-panel flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    pkg.highlight
                      ? "border-amber-300/50 bg-slate-950/90"
                      : "border-slate-800/80 bg-slate-950/85"
                  }`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                    <Icon
                      className={`h-6 w-6 ${
                        pkg.highlight ? "text-amber-300" : "text-sky-300"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {pkg.title}
                  </h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pkg.ctaHref}
                    className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                      pkg.highlight
                        ? "bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-[0_0_24px_rgba(245,197,110,0.6)] hover:brightness-110"
                        : "border border-slate-600/70 bg-slate-900/70 text-slate-100 hover:border-amber-300/70 hover:bg-slate-900"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Who It's For - Persona Cards */}
      <section className="bg-slate-950/95 py-20">
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
              form and maintain your US entity with confidence.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe2,
                title: "Non-US founders",
                description:
                  "Launch your US business without navigating complex regulations alone.",
              },
              {
                icon: Briefcase,
                title: "Agencies forming companies for clients",
                description:
                  "White-label support for agencies helping clients expand to the US.",
              },
              {
                icon: Store,
                title: "E-commerce and SaaS teams",
                description:
                  "Expand to the US market with compliant entity setup and ongoing support.",
              },
              {
                icon: Users,
                title: "Remote teams needing clean compliance",
                description:
                  "Keep your distributed team compliant across jurisdictions.",
              },
            ].map((persona, i) => {
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

      {/* 8. Why Lynx */}
      <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
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
                We combine formation expertise with ongoing compliance and tax
                support, so you don&apos;t have to juggle multiple vendors or
                worry about missed deadlines.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    text: "Clear checklists and automated reminders keep you ahead of deadlines",
                  },
                  {
                    icon: FileText,
                    text: "Secure document digitization and storage for all compliance paperwork",
                  },
                  {
                    icon: Clock,
                    text: "Extended time zone coverage with US and Nepal teams",
                  },
                  {
                    icon: TrendingUp,
                    text: "Integrated approach to formation, compliance, and accounting needs",
                  },
                ].map((item, i) => {
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
              {/* Team preview placeholder - can be replaced with actual team component */}
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8a. Dual-hemisphere expertise */}
      <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              US and Nepal teams working in concert for your finance function
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
              Teams in the United States and Kathmandu, Nepal deliver extended
              hours of support for US and international clients. You gain the
              proximity and context of a local strategic partner, paired with
              the efficiency and depth of a specialized offshore team that
              strengthens your finance operations around the clock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials / Outcomes */}
      <section className="bg-slate-950/95 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Typical outcomes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              What clients achieve when they work with Lynx for US company
              formation and compliance.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Faster time to market",
                description:
                  "Complete formation and EIN within days, not weeks. Get your business operational quickly.",
              },
              {
                title: "Zero missed deadlines",
                description:
                  "Automated reminders and expert oversight ensure all filings are submitted on time.",
              },
              {
                title: "Clean financial records",
                description:
                  "Ongoing bookkeeping and tax compliance keep your records audit-ready year-round.",
              },
            ].map((outcome, i) => (
              <motion.div
                key={outcome.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                  <Zap className="h-5 w-5 text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA Band */}
      <section className="border-y border-slate-800/70 bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Ready to form your US company?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
              Not sure what you need? Book a free assessment and we&apos;ll
              recommend the right setup for your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,197,110,0.7)] transition hover:brightness-110"
              >
                Start US Company
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
              >
                Book a free assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
