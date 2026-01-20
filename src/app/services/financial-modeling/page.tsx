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

export default function FinancialModelingPage() {
  const items = [
    "Strategic decision-making with accurate projections",
    "Investment opportunities and capital allocation evaluation",
    "Financial structures and operational efficiency optimization",
    "Forecasting accuracy enhancement for better planning",
    "Risk assessment and scenario modeling",
    "Clear, actionable insights for stakeholders and management",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Financial Modelling"
        title="Financial Modelling"
        subtitle={
          <>
            Our Financial Modelling services provide businesses with precise,
            actionable insights to drive strategic decisions. We specialize in
            developing dynamic financial models that support scenario analysis,
            investment evaluation, and long-term planning, ensuring your
            organization can navigate complex financial landscapes with
            confidence.
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
                Our Financial Modelling services provide businesses with
                precise, actionable insights to drive strategic decisions. We
                specialize in developing dynamic financial models that support
                scenario analysis, investment evaluation, and long-term
                planning, ensuring your organization can navigate complex
                financial landscapes with confidence.
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
                We start with an in-depth review of your financial data and
                objectives. From there, we design tailored models to:
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
                With our Financial Modelling services, your organization gains
                clarity, confidence, and strategic foresight, transforming
                complex financial data into a reliable tool for growth and value
                creation.
              </p>
              <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                <div>
                  <p className="font-semibold text-slate-900">
                    Dynamic Financial Modelling:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Build flexible, scalable models that adapt to changing
                    business conditions.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Scenario Planning & Analysis:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Test assumptions, forecast outcomes, and anticipate
                    financial impacts.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Investment & Capital Evaluation:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Assess opportunities, funding strategies, and ROI
                    effectively.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Forecasting & Budget Alignment:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Improve accuracy and alignment between financial planning
                    and business goals.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Risk Assessment & Mitigation:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Identify financial risks and model strategies to minimize
                    exposure.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Stakeholder Reporting & Decision Support:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Deliver clear insights that facilitate informed
                    decision-making and alignment across teams.
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
