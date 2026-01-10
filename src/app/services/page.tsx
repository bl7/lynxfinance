"use client";

import Link from "next/link";
import {
  FileText,
  Receipt,
  LineChart,
  Building2,
  Shield,
  CreditCard,
  UserCircle,
  Banknote,
  FileCheck,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

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

const services = [
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    icon: FileText,
    summary:
      "End-to-end bookkeeping, reconciliations, and monthly close so that your leadership team always has trusted numbers.",
    bullets: [
      "Full-cycle bookkeeping with clean, structured ledgers",
      "Bank, credit card, and balance sheet reconciliations",
      "AR / AP management and vendor workflows",
      "Monthly close packages and management reporting",
    ],
  },
  {
    slug: "tax-compliance",
    name: "Tax Compliance",
    icon: Receipt,
    summary:
      "Pragmatic, forward-looking tax support across federal, state, and cross-border requirements.",
    bullets: [
      "US Federal and State income tax returns",
      "Sales, payroll, and other indirect tax coordination",
      "Nexus, residency, and multi-state planning",
      "Quarterly estimates and year-end planning support",
    ],
  },
  {
    slug: "virtual-cfo",
    name: "Virtual CFO",
    icon: LineChart,
    summary:
      "Executive-level financial leadership without the full-time cost of a CFO.",
    bullets: [
      "Cash flow forecasting and runway analysis",
      "KPI design, reporting, and performance reviews",
      "Board and investor-ready reporting packs",
      "Capital planning and scenario modeling",
    ],
  },
  {
    slug: "us-company-formation",
    name: "US Company Formation",
    icon: Building2,
    summary:
      "Simplify the US company incorporation journey from start to scale. Our experienced incorporation and compliance specialists guide you through every stage.",
    bullets: [
      "Entity formation and registration",
      "Ongoing regulatory requirements",
      "Compliant and future-ready setup",
      "Support regardless of location or industry",
    ],
  },
  {
    slug: "registered-agent-services",
    name: "Registered Agent Services",
    icon: Shield,
    summary:
      "Every US corporation or LLC is legally required to appoint a Registered Agent. Lynx provides reliable Registered Agent services across all states.",
    bullets: [
      "Registered Agent services in all US states",
      "Secure digitization of official correspondence",
      "Easy tracking and record-keeping",
      "Legal, tax, and state correspondence management",
    ],
  },
  {
    slug: "ein",
    name: "EIN (Employer Identification Number)",
    icon: CreditCard,
    summary:
      "An EIN is a unique 9-digit tax identification number issued by the IRS, essential for banking, taxation, hiring, and regulatory filings.",
    bullets: [
      "Complete EIN application process management",
      "Your company's financial identity",
      "Essential for banking and taxation",
      "Required for hiring and regulatory filings",
    ],
  },
  {
    slug: "itin",
    name: "ITIN (Individual Taxpayer Identification Number)",
    icon: UserCircle,
    summary:
      "For individuals required to file US taxes but not eligible for a Social Security Number, Lynx assists in obtaining an ITIN.",
    bullets: [
      "Complete documentation and filing process",
      "Accuracy and timely issuance ensured",
      "For individuals filing US taxes",
      "Alternative to Social Security Number",
    ],
  },
  {
    slug: "us-business-bank-account",
    name: "US Business Bank Account",
    icon: Banknote,
    summary:
      "Opening a dedicated US business bank account is critical after incorporation. Lynx helps establish compliant banking relationships.",
    bullets: [
      "Separate personal and business finances",
      "Reduce liability",
      "Streamline accounting and tax reporting",
      "Compliant banking relationship setup",
    ],
  },
  {
    slug: "annual-compliance-state-filings",
    name: "Annual Compliance & State Filings",
    icon: FileCheck,
    summary:
      "Lynx supports your business with ongoing annual compliance requirements, including state filings and reporting obligations.",
    bullets: [
      "Ongoing annual compliance requirements",
      "State filings and reporting obligations",
      "Keep company in good standing",
      "Avoid penalties and protect reputation",
    ],
  },
  {
    slug: "bookkeeping-tax-services",
    name: "Bookkeeping & Tax Services",
    icon: BookOpen,
    summary:
      "Lynx delivers end-to-end bookkeeping and tax compliance solutions for US businesses, including federal and state tax filings.",
    bullets: [
      "Federal and state tax filings",
      "Forms 5472, 1120, 1065, and 1040-NR support",
      "Expert oversight and structured reporting",
      "Accuracy, compliance, and peace of mind",
    ],
  },
  {
    slug: "boi-filing",
    name: "BOI (Beneficial Ownership Information) Filing",
    icon: Users,
    summary:
      "Lynx simplifies BOI reporting to FinCEN by managing the disclosure of required ownership and control information.",
    bullets: [
      "BOI reporting to FinCEN",
      "Ownership and control information disclosure",
      "Timely and compliant filings",
      "Meet regulatory obligations efficiently",
    ],
  },
  {
    slug: "migrate-company",
    name: "Migrate Your Company to Lynx",
    icon: ArrowRight,
    summary:
      "Transitioning your company to Lynx means gaining a single, trusted partner for incorporation, compliance, and tax management.",
    bullets: [
      "Seamless onboarding of existing entity",
      "Structured support for operations",
      "Stay compliant at every stage",
      "Single trusted partner for all needs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Our Services"
        title="One partner for your accounting, tax, and strategic finance needs."
        subtitle={
          <>
            We support fast-growing businesses and global organizations with
            offerings that span daily bookkeeping to board-level strategy. Each
            engagement is calibrated to your current stage while keeping future
            complexity in view.
          </>
        }
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-6">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                className="glass-panel flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/85 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <h2 className="text-base font-semibold text-slate-50">
                  {service.name}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {service.summary}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-400">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 text-xs font-semibold text-amber-200 transition-colors hover:text-amber-100"
                >
                  Learn more →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
