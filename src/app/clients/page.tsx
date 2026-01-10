"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

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

export default function ClientsPage() {
  // TODO: Replace with real client data
  // Structure supports: name, industry, description, location
  const usClients = [
    {
      name: "Example US Client 1",
      industry: "Technology",
      description:
        "SaaS company providing financial management tools. We handle their monthly bookkeeping, tax compliance, and ongoing advisory services.",
      location: "California, USA",
    },
    {
      name: "Example US Client 2",
      industry: "E-commerce",
      description:
        "Cross-border e-commerce platform. We manage their US company formation, compliance, and multi-state tax filings.",
      location: "Texas, USA",
    },
    {
      name: "Example US Client 3",
      industry: "Professional Services",
      description:
        "Consulting firm expanding operations. We provide virtual CFO services, cash flow forecasting, and strategic financial guidance.",
      location: "New York, USA",
    },
  ];

  const nepaliClients = [
    {
      name: "Example Nepal Client 1",
      industry: "IT Services",
      description:
        "Software development company with US operations. We handle their US entity setup, bookkeeping, and tax compliance.",
      location: "Kathmandu, Nepal",
    },
    {
      name: "Example Nepal Client 2",
      industry: "Manufacturing",
      description:
        "Manufacturing business expanding to US market. We provide company formation, ongoing compliance, and cross-border tax support.",
      location: "Pokhara, Nepal",
    },
    {
      name: "Example Nepal Client 3",
      industry: "Education",
      description:
        "Educational institution with international programs. We manage their US reporting requirements and compliance needs.",
      location: "Lalitpur, Nepal",
    },
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by businesses across the US and Nepal"
        subtitle={
          <>
            We work with diverse businesses, from startups to established
            enterprises, helping them navigate finance, tax, and compliance
            challenges across borders.
          </>
        }
      />

      {/* US Clients Section */}
      <section className="border-y border-slate-800/70 bg-slate-950/95 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl">
                🇺🇸
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                  US Clients
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Businesses across the United States
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {usClients.map((client, i) => (
              <motion.div
                key={client.name}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-amber-300/80">
                      {client.industry}
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-amber-300" />
                  <span>{client.location}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* TODO: Add more US clients here as data becomes available */}
          {usClients.length === 0 && (
            <p className="text-center text-sm text-slate-400">
              Client information coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Nepal Clients Section */}
      <section className="bg-slate-950/95 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl">
                🇳🇵
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                  Nepali Clients
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Businesses based in Nepal with US operations or expansion
                  plans
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nepaliClients.map((client, i) => (
              <motion.div
                key={client.name}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-300/80">
                      {client.industry}
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-emerald-300" />
                  <span>{client.location}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* TODO: Add more Nepali clients here as data becomes available */}
          {nepaliClients.length === 0 && (
            <p className="text-center text-sm text-slate-400">
              Client information coming soon.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800/70 bg-slate-950/95 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Ready to join our client roster?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              Whether you&apos;re in the US, Nepal, or expanding across borders,
              we can help you manage your finance, tax, and compliance needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,197,110,0.7)] transition hover:brightness-110"
              >
                Book a free assessment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-300/70 hover:bg-slate-900"
              >
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
