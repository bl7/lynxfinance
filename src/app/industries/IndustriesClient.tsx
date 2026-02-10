"use client";

import {
  Briefcase,
  ShoppingCart,
  Wallet,
  Home,
  Heart,
  Plane,
  GraduationCap,
  Zap,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Briefcase,
    name: "Professional Services",
    items: [
      "Consulting Agencies",
      "Legal Firms",
      "Marketing & Creative Agencies",
      "IT & Software Companies",
      "Freelancers & Independent Contractors",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    items: ["Online Stores", "Wholesale Distributors", "Cross-border Sellers"],
  },
  {
    icon: Wallet,
    name: "Financial Services",
    items: ["Digital Wallets / PSPs / PSOs", "Remittance", "Wealth Management"],
  },
  {
    icon: Home,
    name: "Construction & Real Estate",
    items: ["Real Estate Developers", "Contractors & Builders"],
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    items: ["Clinics & Diagnostic Labs", "Pharmacies", "Fitness & Gyms"],
  },
  {
    icon: Plane,
    name: "Media, Tourism & Entertainment",
    items: ["Travel Agencies", "Hotels", "Hospitality Chains"],
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    items: [
      "Educational Institutions",
      "Training Centers",
      "Professional Development",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Infrastructure",
    items: [
      "Energy Companies",
      "Infrastructure Development",
      "Utilities & Power",
    ],
  },
];

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

export default function IndustriesClient() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Industries"
        title="Industry-aware finance support."
        subtitle="We tailor accounting, tax, and compliance workflows to your operating model and regulatory environment."
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 lg:px-6">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="glass-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05, margin: "-50px" }}
                custom={i}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC72C]/10">
                  <Icon className="h-5 w-5 text-[#FFC72C]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  {industry.name}
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
