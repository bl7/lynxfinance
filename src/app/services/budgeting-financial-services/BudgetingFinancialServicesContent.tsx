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

export function BudgetingFinancialServicesContent() {
  const items = [
    "Comprehensive financial assessment and benchmarking",
    "Strategic budget planning and forecasting",
    "Cost management and performance tracking",
    "Financial risk assessment and mitigation",
    "Stakeholder alignment and communication",
    "Scenario planning and agile financial management",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Budgeting and Financial Services"
        title="Budgeting and Financial Services"
        subtitle={
          <>
            Elevate your financial management with our comprehensive Budgeting
            and Financial Services. We recognize that effective budgeting is
            critical to organizational success. Our team works closely with you
            to develop strategies that align financial goals with your broader
            business objectives, ensuring every dollar drives value and supports
            sustainable growth.
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
              viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Elevate your financial management with our comprehensive
                Budgeting and Financial Services. We recognize that effective
                budgeting is critical to organizational success. Our team works
                closely with you to develop strategies that align financial
                goals with your broader business objectives, ensuring every
                dollar drives value and supports sustainable growth.
              </p>
            </motion.section>

            {/* What You Can Expect Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                What You Can Expect
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We start with a detailed analysis of your financial processes,
                resource allocation, and performance metrics. From there, we
                create tailored solutions designed to:
              </p>
              <ul className="space-y-3 text-base text-slate-700 sm:text-lg">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.05, margin: "-50px" }}
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
              viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Key Focus Areas
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                With our services, budgeting becomes a strategic tool that
                drives efficiency, accountability, and long-term financial
                health, empowering your organization to achieve its objectives
                with confidence.
              </p>
              <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                <div>
                  <p className="font-semibold text-slate-900">
                    Comprehensive Financial Assessment & Benchmarking:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Evaluate current financial performance and identify
                    opportunities for improvement.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Strategic Budget Planning & Forecasting:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Develop forward-looking plans that align resources with
                    organizational priorities.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Cost Management & Performance Tracking:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Implement robust controls to monitor expenditures and
                    measure outcomes.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Financial Risk Assessment & Mitigation:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Anticipate challenges and safeguard your organization
                    against potential financial disruptions.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Stakeholder Alignment & Communication:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Ensure transparency and foster collaboration across teams to
                    drive accountability and informed decision-making.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Scenario Planning & Agile Financial Management:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Enable flexibility and responsiveness to market changes,
                    ensuring resilience in an evolving financial landscape.
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

