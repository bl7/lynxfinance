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

export function VirtualCFOContent() {
  const items = [
    "Forward-looking cash flow forecasting and runway analysis",
    "Design and tracking of KPIs aligned to your operating model",
    "Monthly and quarterly performance reviews with leadership",
    "Board and investor-ready reporting and presentations",
    "Budgeting, reforecasting, and scenario planning",
    "Support for funding rounds, debt, and capital allocation",
  ];

  return (
    <div>
      <PageHero
        eyebrow="Services · Virtual CFO"
        title="Virtual CFO"
        subtitle={
          <>
            You may not be ready for a full-time CFO, but you still need clear
            financial narratives for your board, investors, and team. Our
            Virtual CFO engagements provide executive-level guidance on a
            flexible schedule.
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
                You may not be ready for a full-time CFO, but you still need
                clear financial narratives for your board, investors, and team.
                Our Virtual CFO engagements provide executive-level guidance on
                a flexible schedule.
              </p>
            </motion.section>

            {/* What's Included Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: "-50px" }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                What&apos;s included
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We partner with your leadership team to translate financial data
                into clear decisions, tradeoffs, and action plans.
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

