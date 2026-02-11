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

export function ExcelGoogleSheetModelingContent() {
  const items = [
    "Advanced spreadsheet modeling with complex calculations",
    "Data analysis and visualization",
    "Formula optimization and automation",
    "Collaborative solutions for real-time teamwork",
    "Scenario planning and forecasting",
    "Stakeholder reporting and insights",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Excel and Google Sheets Modelling"
        title="Excel and Google Sheets Modelling"
        subtitle={
          <>
            Unlock the full potential of your data with our Excel & Google
            Sheets Modelling services. We specialize in creating dynamic,
            high-impact spreadsheet models that empower data-driven
            decision-making. Whether for complex financial analysis, interactive
            dashboards, or collaborative workflows, we help you transform raw
            data into actionable insights efficiently and accurately.
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 pt-16 lg:px-6">
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
                Unlock the full potential of your data with our Excel & Google
                Sheets Modelling services. We specialize in creating dynamic,
                high-impact spreadsheet models that empower data-driven
                decision-making. Whether for complex financial analysis,
                interactive dashboards, or collaborative workflows, we help you
                transform raw data into actionable insights efficiently and
                accurately.
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
                We begin with a thorough review of your data processes and
                reporting requirements. From there, we design tailored solutions
                to:
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
                With our services, spreadsheets evolve from static tools into
                powerful engines for efficiency, insight, and strategic
                decision-making, giving your organization the clarity and
                agility it needs to succeed.
              </p>
              <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                <div>
                  <p className="font-semibold text-slate-900">
                    Advanced Spreadsheet Modelling:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Build robust and scalable models that handle complex
                    calculations and scenarios.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Data Analysis & Visualization:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Transform data into intuitive charts, graphs, and dashboards
                    for meaningful insights.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Formula Optimization & Automation:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Reduce manual effort, minimize errors, and improve
                    calculation speed.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Collaborative Solutions:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Enable seamless teamwork with shared spreadsheets and
                    cloud-based tools.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Scenario Planning & Forecasting:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Test assumptions, project outcomes, and plan strategically
                    using predictive models.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Stakeholder Reporting & Insights:
                  </p>
                  <p className="mt-1 text-slate-600">
                    Present data clearly to guide informed decisions and align
                    teams around business objectives.
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

