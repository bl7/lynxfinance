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

export function AboutContent() {
  const teamMembers = [
    {
      name: "Dilip Gyawali",
      title: "MBA, Director of Business Development",
      location: "Based in Texas",
      description:
        "Dilip is a seasoned leader focused on client acquisition, relationship management, and market expansion. With over two decades in strategic sales and partnership building, he is key to expanding LYNX Finance Consulting's client base and building lasting relationships. His deep understanding of client needs, combined with a consultative approach, ensures customized service solutions.",
      image: "/staffs/DilipGyawali.jpeg",
      experienceBadge: null,
    },
    {
      name: "Sagar Kandel",
      title:
        "Enrolled Agent | CA | MBS, Senior Tax Consultant & Business Relation",
      location: "Based in Virginia",
      description:
        "Sagar is an experienced tax strategist and compliance expert in U.S. and international tax systems. As a Chartered Accountant and Enrolled Agent, he navigates complex tax codes and structures transactions for optimal tax efficiency. His expertise includes tax planning, forensic accounting, and regulatory compliance, helping clients minimize liabilities and manage audits.",
      image: "/staffs/SagarKandel.jpeg",
      experienceBadge: null,
    },
    {
      name: "Sandhya G.C.",
      title: "CA | MBS, Audit Senior",
      location: "Based in Virginia",
      description:
        "Sandya is an accomplished audit professional specializing in internal controls, governance, and financial integrity. With a decade of experience in statutory and internal audits, she rigorously evaluates financial systems and ensures regulatory compliance. Her work enhances transparency and accountability by identifying control weaknesses and recommending process improvements.",
      image: "/staffs/sandhya.jpeg",
      experienceBadge: null,
    },
    {
      name: "Shisir Pokharel",
      title:
        "CA | CPA Australia Associate | MA Economics | DipIFRS, Senior Finance Consultant",
      location: "Based in Nepal",
      description:
        "Shisir is a senior finance consultant with expertise in financial analysis, budgeting, and cost management. His comprehensive background in accounting, economics, and international financial reporting standards enables him to deliver strategic financial insights and solutions that drive business performance and growth.",
      image: "/staffs/ShisirPokharel.jpeg",
      experienceBadge: null,
    },
    {
      name: "Nabin Dhaubanjar",
      title: "CA | MBA, Senior - Research & Financial Innovation",
      location: "Based in Nepal",
      description:
        "Nabin specializes in financial research, tools, and market trends. With his expertise in accounting and business administration, he drives innovation in financial processes and systems, helping clients leverage cutting-edge tools and methodologies to stay ahead in an evolving financial landscape.",
      image: "/staffs/NabinDhaubanjar.jpeg",
      experienceBadge: null,
    },
    {
      name: "Kriti Dhakal",
      title: "CA | MBA, Senior Strategy & Risk Advisor",
      location: "Based in Nepal",
      description:
        "Kriti brings a strategic mindset to risk management and operational scalability. With her strong foundation in accounting and business strategy, she helps organizations identify, assess, and mitigate risks while designing scalable operations that support sustainable growth and long-term success.",
      image: "/staffs/KritiDhakal.jpeg",
      experienceBadge: null,
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      description:
        "We act with unwavering honesty, confidentiality, and ethical conduct in every interaction. At LYNX, integrity is not just a value, it's a foundation. We honor our commitments, protect client confidentiality, and uphold the highest standards of professionalism, ensuring that our guidance and reporting can always be trusted.",
    },
    {
      title: "Precision",
      description:
        "We pride ourselves on detail, accuracy, and operational excellence. From reconciliations to regulatory filings, every number we report is triple-checked and purpose-driven. Our clients rely on us for insights that are not just accurate, but actionable, fueling better decisions and long-term growth.",
    },
    {
      title: "Client Commitment",
      description:
        "Your success is our success. We build enduring relationships rooted in responsiveness, reliability, and respect. Every client engagement is treated as a partnership, with dedicated advisors who learn your business, anticipate your needs, and remain available every step of the way.",
    },
    {
      title: "Innovation",
      description:
        "We embrace financial technology, industry evolution, and continuous improvement. Our solutions incorporate the latest tools and platforms, from AI-powered analytics to cloud-based systems, empowering clients to stay competitive, efficient, and future-ready.",
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
            <span className="font-semibold text-slate-900">
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
            className="glass-panel rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFC72C]/10">
                <Users className="h-4 w-4 text-[#FFC72C]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  60+ years of shared experience
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Our partners and leads have sat in the seats of controllers
                  and CFOs. We know what your auditors, lenders, and investors
                  expect, and how to deliver it without slowing your growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFC72C]/10">
                <Globe2 className="h-4 w-4 text-[#FFC72C]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Dual-hemisphere delivery model
                </h3>
                <p className="mt-1 text-xs text-slate-600">
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
            className="glass-panel rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
          >
            <ShieldCheck className="h-5 w-5 text-[#FFC72C]" />
            <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
              Governance you can trust
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              We architect processes with strong internal controls, documented
              workflows, and repeatable close routines so that your finance
              function can scale without gaps.
            </p>
          </motion.div>
          <motion.div
            className="glass-panel rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <Clock3 className="h-5 w-5 text-[#FFC72C]" />
            <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
              Around-the-clock coverage
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Our dual-hemisphere model gives you extended workdays and quicker
              turnarounds on time-sensitive projects, monthly close, and
              reporting cycles.
            </p>
          </motion.div>
          <motion.div
            className="glass-panel rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
          >
            <Users className="h-5 w-5 text-[#FFC72C]" />
            <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
              Embedded with your team
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              We operate as an extension of your finance function, aligning
              cadence, tooling, and communication with the way your business and
              leadership team already works.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission and Vision Section */}
      <section className="mt-16 border-t border-slate-200 bg-slate-50 py-16">
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
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC72C]/10">
                <TrendingUp className="h-6 w-6 text-[#FFC72C]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC72C]/10">
                <Lightbulb className="h-6 w-6 text-[#FFC72C]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Our Vision
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                To become the premier financial partner for purpose-driven
                businesses and nonprofits worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="border-t border-slate-200 bg-white py-16">
        <motion.div
          className="mx-auto max-w-4xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
              Our <span className="text-slate-900">Core Values</span>
            </h2>
          </div>

          <div className="relative mt-12">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-6 bottom-6 z-0 w-px bg-gradient-to-b from-[#FFC72C]/20 via-[#FFC72C]/30 to-[#FFC72C]/20" />

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
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC72C]/10 border-2 border-[#FFC72C]/30 transition-all duration-300 group-hover:bg-[#FFC72C] group-hover:border-[#FFC72C] group-hover:shadow-lg group-hover:shadow-[#FFC72C]/30">
                      <span className="text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <motion.div
          className="mx-auto max-w-6xl px-4 lg:px-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check Our <span className="text-slate-900">Expert Team</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FFC72C]/30 hover:shadow-lg"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                  <Image
                    src={member.image || "/person.png"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {member.experienceBadge && (
                    <div className="absolute bottom-4 right-4 rounded-full bg-[#FFC72C]/20 border border-[#FFC72C]/50 px-3.5 py-1.5 text-xs font-semibold text-slate-900 backdrop-blur-md shadow-lg shadow-[#FFC72C]/20">
                      {member.experienceBadge}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-700 sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-900">
                    {member.title}
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    {member.location}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
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


