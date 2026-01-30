"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Clock, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

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

  const proofItems = [
    {
      title: "60+ years of combined experience",
      description:
        "Partners and leads across US tax, compliance, and accounting.",
      type: "team" as const,
    },
    {
      title: "Dual-hemisphere delivery model",
      description:
        "US and Nepal delivery teams working across time zones so work continues while you sleep.",
    },
    {
      title: "Compliance and reporting discipline",
      description:
        "Clear checklists, documented workflows, and audit-ready records.",
    },
  ];

  return (
    <Section spacing="md" background="gray" className="border-y border-slate-200/70">
      <Container size="lg">
        <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8">
          {/* Header */}
          <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why LYNX
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            We combine expertise across bookkeeping, tax, compliance, and
            company setup, so you don&apos;t have to juggle multiple vendors or
            worry about missed deadlines.
          </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10"
        >
          {/* Left Column - What we deliver */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                What we deliver
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The operating system behind clean books, compliant filings, and
                decision-ready reporting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    variants={cardFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    custom={i}
                  >
                    <Card variant="bordered" className="h-full min-h-[80px] bg-white p-4 transition-shadow duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFC72C]/10">
                          <Icon className="h-5 w-5 text-[#FFC72C]" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-slate-800 line-clamp-2">
                          {item.text}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Who it's for */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Who it&apos;s for
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We support businesses at every stage, from first hire to cross-border expansion.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {personas.map((persona, i) => (
                <motion.div
                  key={persona.title}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                >
                  <Card variant="bordered" className="flex h-full flex-col bg-white p-4 text-left transition-shadow duration-200 hover:shadow-md">
                    <h4 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                      {persona.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {persona.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          </motion.div>

          {/* Proof Row */}
          <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why teams trust us
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <Card variant="bordered" className="flex h-full flex-col border-l-2 border-l-[#FFC72C]/30 bg-slate-50/50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                  {item.type === "team" ? (
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[
                          { src: "/staffs/DilipGyawali.jpeg", alt: "Dilip Gyawali" },
                          { src: "/staffs/SagarKandel.jpeg", alt: "Sagar Kandel" },
                          {
                            src: "/staffs/ShisirPokharel.jpeg",
                            alt: "Shisir Pokharel",
                          },
                        ].map((member) => (
                          <div
                            key={member.alt}
                            className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-slate-100"
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
                      <p className="text-xs leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {item.description}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Micro CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-[#FFC72C]"
            >
              Book a free assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
