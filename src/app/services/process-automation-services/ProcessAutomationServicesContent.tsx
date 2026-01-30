"use client";

import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceCTA } from "@/components/ServiceCTA";
import { ExploreServices } from "@/components/ExploreServices";
import { motion } from "framer-motion";

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function ProcessAutomationServicesContent() {
  const items = [
    "Improve operational efficiency and reduce waste",
    "Enhance cross-functional collaboration and alignment",
    "Support sustainable growth through strategic market entry and expansion",
    "Drive innovation and optimize business models for maximum value",
    "Anticipate and mitigate risks through thorough scenario planning",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Process Automation Services"
        title="Process Automation Services"
        subtitle={
          <>
            Our process automation services help businesses streamline repetitive
            tasks, reduce manual errors, and boost overall efficiency. Beyond
            automation, we take a holistic approach—analyzing workflows, resource
            allocation, and performance metrics—to design solutions that eliminate
            bottlenecks, optimize collaboration, and create measurable value.
          </>
        }
      />
      <div className="mx-auto max-w-7xl px-4 pt-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_16rem]">
          <div>
            {/* Overview Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Our process automation services help businesses streamline
                repetitive tasks, reduce manual errors, and boost overall
                efficiency. Beyond automation, we take a holistic approach—analyzing
                workflows, resource allocation, and performance metrics—to design
                solutions that eliminate bottlenecks, optimize collaboration, and
                create measurable value.
              </p>
            </motion.section>

            {/* What You Can Expect Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                What You Can Expect
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We begin with a comprehensive assessment of your business processes
                and competitive positioning to identify gaps and opportunities. From
                there, we develop tailored strategies to:
              </p>
              <ul className="space-y-3 text-base text-slate-700 sm:text-lg">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#FFC72C]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Key Focus Areas Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Key Focus Areas
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                With our approach, automation becomes more than a tool—it becomes a
                strategic lever for improving operations, fostering collaboration,
                and positioning your business for future success.
              </p>
              <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                <div>
                  <p className="font-semibold text-slate-900">
                    Comprehensive Business Assessment & Benchmarking:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Identify performance gaps and uncover opportunities for
                    improvement.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Collaborative Goal & Strategic Planning:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Align teams and define clear objectives to achieve long-term
                    success.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Market Entry & Expansion Strategies:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Tailored approaches that support sustainable growth and
                    competitive advantage.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Business Model Innovation & Optimization:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Enhance value creation and operational efficiency.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Risk Assessment & Mitigation Planning:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Proactively manage potential threats and uncertainties.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Stakeholder Alignment & Change Enablement:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Ensure all stakeholders are aligned with the strategic vision,
                    fostering buy-in and momentum for lasting organizational change.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Scenario Planning & Risk Management:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Prepare for uncertainties with actionable insights, enabling
                    agile decision-making and business resilience.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <ServiceSidebar />
        </div>
      </div>

      {/* Explore Services Section */}
      <ExploreServices />

      {/* CTA Section */}
      <ServiceCTA />
    </div>
  );
}

