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
    items: [
      "Online Stores",
      "Wholesale Distributors",
      "Cross-border E-commerce Sellers",
    ],
  },
  {
    icon: Wallet,
    name: "Financial Services",
    items: [
      "Digital Wallets / PSPs / PSOs",
      "Remittance Companies",
      "Investment & Wealth Management Firms",
    ],
  },
  {
    icon: Home,
    name: "Construction & Real Estate",
    items: ["Real Estate Developers", "Contractors & Builders"],
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    items: [
      "Clinics & Diagnostic Labs",
      "Pharmacies",
      "Fitness Centers & Gyms",
    ],
  },
  {
    icon: Plane,
    name: "Media, Tourism & Entertainment",
    items: [
      "Travel Agencies & Tour Operators",
      "Hotels",
      "Homestays, and Hospitality Chains",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    items: [
      "Educational Institutions",
      "Training Centers",
      "Professional Development Organizations",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Infrastructure",
    items: [
      "Energy Companies",
      "Infrastructure Development",
      "Utilities & Power Generation",
    ],
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function IndustriesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Industries served"
        title="Industries Served"
        subtitle={
          <>
            LYNX Finance Consulting provides tailored financial and accounting
            solutions across a wide range of industries. From professional services
            to retail, healthcare to hospitality, we deliver expertise that
            matches your sector&apos;s unique needs.
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 lg:px-6">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="glass-panel rounded-2xl border border-amber-300/20 bg-slate-950/85 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/40"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                    <Icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <h2 className="text-base font-semibold text-slate-50">
                    {industry.name}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
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


