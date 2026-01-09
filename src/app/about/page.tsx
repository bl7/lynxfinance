"use client";

import {
  Users,
  Globe2,
  ShieldCheck,
  Clock3,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dilip Gyawali",
      title: "MBA, Director of Business Development",
      location: "Based in Texas",
      description:
        "Dilip is a seasoned leader focused on client acquisition, relationship management, and market expansion. With over two decades in strategic sales and partnership building, he is key to expanding LYNX Finance Consulting's client base and building lasting relationships. His deep understanding of client needs, combined with a consultative approach, ensures customized service solutions.",
      image: "/team/dilip-gyawali.jpg", // Placeholder path
      experienceBadge: null,
    },
    {
      name: "Sagar Kandel",
      title:
        "Enrolled Agent | CA | MBS, Senior Tax Consultant & Business Relation",
      location: "Based in Virginia",
      description:
        "Sagar is an experienced tax strategist and compliance expert in U.S. and international tax systems. As a Chartered Accountant and Enrolled Agent, he navigates complex tax codes and structures transactions for optimal tax efficiency. His expertise includes tax planning, forensic accounting, and regulatory compliance, helping clients minimize liabilities and manage audits.",
      image: "/team/sagar-kandel.jpg", // Placeholder path
      experienceBadge: "10+ Experience",
    },
    {
      name: "Sandhya G.C.",
      title: "CA | MBS, Audit Senior",
      location: "Based in Virginia",
      description:
        "Sandhya is an accomplished audit professional specializing in internal controls, governance, and financial integrity. With a decade of experience in statutory and internal audits, she rigorously evaluates financial systems and ensures regulatory compliance. Her work enhances transparency and accountability by identifying control weaknesses and recommending process improvements.",
      image: "/team/sandhya-gc.jpg", // Placeholder path
      experienceBadge: null,
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      description:
        "We act with unwavering honesty, confidentiality, and ethical conduct in every interaction. At LYNX, integrity is not just a value—it's a foundation. We honor our commitments, protect client confidentiality, and uphold the highest standards of professionalism, ensuring that our guidance and reporting can always be trusted.",
    },
    {
      title: "Precision",
      description:
        "We pride ourselves on detail, accuracy, and operational excellence. From reconciliations to regulatory filings, every number we report is triple-checked and purpose-driven. Our clients rely on us for insights that are not just accurate, but actionable—fueling better decisions and long-term growth.",
    },
    {
      title: "Client Commitment",
      description:
        "Your success is our success. We build enduring relationships rooted in responsiveness, reliability, and respect. Every client engagement is treated as a partnership, with dedicated advisors who learn your business, anticipate your needs, and remain available every step of the way.",
    },
    {
      title: "Innovation",
      description:
        "We embrace financial technology, industry evolution, and continuous improvement. Our solutions incorporate the latest tools and platforms—from AI-powered analytics to cloud-based systems—empowering clients to stay competitive, efficient, and future-ready.",
    },
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="About LYNX"
        title="Collective excellence, delivered across hemispheres."
        subtitle={
          <>
            LYNX Finance Consulting was founded by senior finance leaders who
            have spent their careers inside high-growth companies, public
            accounting firms, and cross-border groups. We bring together{" "}
            <span className="font-semibold text-slate-100">
              more than six decades of combined experience
            </span>{" "}
            across audit, tax, controllership, and FP&amp;A to build finance
            functions that are as strategic as they are compliant.
          </>
        }
      />
      <div className="mx-auto max-w-5xl px-4 pt-10 lg:px-6">
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="glass-panel rounded-2xl p-5 transition-transform hover:-translate-y-1"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
                <Users className="h-4 w-4 text-emerald-300" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-50">
                  60+ years of shared experience
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Our partners and leads have sat in the seats of controllers,
                  CFOs, and Big Four managers. We know what your auditors,
                  lenders, and investors expect—and how to deliver it without
                  slowing your growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-5 transition-transform hover:-translate-y-1"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
                <Globe2 className="h-4 w-4 text-sky-300" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-50">
                  Dual-hemisphere delivery model
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  With teams in the United States and Nepal, we operate in
                  complementary time zones. Your US-based client lead speaks the
                  language of your stakeholders while our Nepal delivery team
                  ensures that work continues while you sleep.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="glass-panel rounded-2xl p-4 transition-transform hover:-translate-y-1"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
          >
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Governance you can trust
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              We architect processes with strong internal controls, documented
              workflows, and repeatable close routines so that your finance
              function can scale without gaps.
            </p>
          </motion.div>
          <motion.div
            className="glass-panel rounded-2xl p-4 transition-transform hover:-translate-y-1"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <Clock3 className="h-5 w-5 text-amber-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Around-the-clock coverage
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Our dual-hemisphere model gives you extended workdays and quicker
              turnarounds on time-sensitive projects, monthly close, and
              reporting cycles.
            </p>
          </motion.div>
          <motion.div
            className="glass-panel rounded-2xl p-4 transition-transform hover:-translate-y-1"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
          >
            <Users className="h-5 w-5 text-sky-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Embedded with your team
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              We operate as an extension of your finance function, aligning
              cadence, tooling, and communication with the way your business and
              leadership team already works.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission and Vision Section */}
      <section className="mt-16 border-t border-slate-800/70 bg-slate-950/95 py-16">
        <motion.div
          className="mx-auto max-w-5xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="transition-opacity hover:opacity-90"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                <TrendingUp className="h-6 w-6 text-amber-300" />
              </div>
              <h2 className="text-lg font-semibold text-slate-50">
                Our Mission
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                To simplify finance and deliver sustainable growth through
                expertise, innovation, and partnership.
              </p>
            </motion.div>

            <motion.div
              className="transition-opacity hover:opacity-90"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                <Lightbulb className="h-6 w-6 text-amber-300" />
              </div>
              <h2 className="text-lg font-semibold text-slate-50">
                Our Vision
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                To become the premier financial partner for purpose-driven
                businesses and nonprofits worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="border-t border-slate-800/70 bg-slate-950/95 py-16">
        <motion.div
          className="mx-auto max-w-4xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
              Our{" "}
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
          </div>

          <div className="relative mt-12">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-6 bottom-6 z-0 w-px bg-gradient-to-b from-amber-300/40 via-amber-300/30 to-amber-300/20" />

            <div className="space-y-8">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  className="group relative flex gap-6 transition-opacity hover:opacity-90"
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={i}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/95 border border-amber-300/30 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(251,191,36,0.7)] group-hover:border-amber-300/60">
                      <span className="text-sm font-semibold text-amber-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expert Team Section */}
      <section className="border-t border-slate-800/70 bg-slate-950/95 py-16">
        <motion.div
          className="mx-auto max-w-6xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
              Check Our{" "}
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass-panel group relative flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-transform hover:-translate-y-1"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-900">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800/50">
                      <Users className="h-12 w-12 text-slate-600" />
                    </div>
                  )}
                  {member.experienceBadge && (
                    <div className="absolute bottom-3 right-3 rounded-full bg-amber-300/20 border border-amber-300/40 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                      {member.experienceBadge}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-300">
                  {member.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{member.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
