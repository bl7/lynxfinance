"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, FileText, Receipt, Shield, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
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
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function HomeServicesOverview() {
  const services = [
    {
      title: "US company setup from anywhere",
      href: "/services/us-company-formation",
      icon: Building2,
    },
    {
      title: "Bookkeeping & accounting",
      href: "/services/accounting-bookkeeping",
      icon: FileText,
    },
    {
      title: "Tax filings",
      href: "/services/tax-compliance",
      icon: Receipt,
    },
    {
      title: "Compliance oversight",
      href: "/services",
      icon: Shield,
    },
    {
      title: "Advisory & Virtual CFO",
      href: "/services/virtual-cfo",
      icon: Briefcase,
    },
  ];

  return (
    <Section spacing="md" className="border-y border-slate-200">
      <Container size="lg">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            SERVICES OVERVIEW
          </p>
          <h2 className="mt-4">
            How we support your finance and compliance
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <Card className="flex h-full min-h-[280px] flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC72C]/10">
                      <Icon className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:border-[#FFC72C] hover:bg-[#FFC72C]/10"
                  >
                    Learn More
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-slate-50">
                      <ArrowRight className="h-3 w-3 text-slate-900" />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
