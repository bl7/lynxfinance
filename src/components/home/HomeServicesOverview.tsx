"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    },
    {
      title: "Bookkeeping & accounting",
      href: "/services/accounting-bookkeeping",
    },
    {
      title: "Tax filings",
      href: "/services/tax-compliance",
    },
    {
      title: "Compliance oversight",
      href: "/services",
    },
    {
      title: "Advisory & Virtual CFO",
      href: "/services/virtual-cfo",
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#002147]">
            SERVICES OVERVIEW
          </h2>
          <h3 className="mt-4 text-3xl font-bold text-[#002147] sm:text-4xl lg:text-5xl">
            How we support your finance and compliance
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="group relative overflow-hidden rounded-2xl bg-[#002147] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/bookkeeping.jpg"
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>

              {/* Content */}
              <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h3>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-white/30 bg-white px-4 py-2.5 text-sm font-medium text-[#002147] transition hover:border-white/50 hover:bg-white/90"
                >
                  Learn More
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#002147] bg-[#002147]">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
