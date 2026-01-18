"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, X, ChevronRight } from "lucide-react";
import {
  bookkeepingPlans,
  formationPlans,
  formationFeatures,
  freeServices,
  taxServices,
  addOnServices,
  otherFees,
  pricingFAQs,
} from "@/data/pricing";
import { useSearchParams, useRouter } from "next/navigation";

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

type TabId = "bookkeeping" | "formation" | "tax" | "addons";

const tabs: { id: TabId; label: string }[] = [
  { id: "bookkeeping", label: "Bookkeeping (Monthly)" },
  { id: "formation", label: "US Company Formation" },
  { id: "tax", label: "Tax Filing & Compliance" },
  { id: "addons", label: "Add-ons & Other Fees" },
];

export function PricingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>("bookkeeping");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(
    "Company Setup & Core Docs"
  );

  useEffect(() => {
    const tabParam = searchParams.get("tab") as TabId;
    if (tabParam && tabs.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    router.push(`/pricing?tab=${tabId}`, { scroll: false });
  };

  const getFeatureDisplay = (feature: string) => {
    if (feature === "Included") {
      return (
        <span className="flex items-center justify-center gap-1 text-sm font-medium text-green-600">
          <span>✔</span>
          <span>Included</span>
        </span>
      );
    }
    if (feature === "Not included") {
      return (
        <span className="flex items-center justify-center gap-1 text-sm text-slate-400">
          <span>✕</span>
          <span>Not included</span>
        </span>
      );
    }
    return <span className="text-sm text-slate-600">{feature}</span>;
  };

  const categories = Array.from(
    new Set(formationFeatures.map((f) => f.category))
  );

  return (
    <>
      <PageHero
        eyebrow="PRICING"
        title="Simple, transparent pricing"
        subtitle="Choose a plan, or book a free consultation to get a tailored quote."
      />

      {/* Hero CTAs */}
      <div className="mx-auto max-w-5xl px-4 pt-8 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC72C] px-8 py-3 text-sm font-semibold text-[#002147] transition hover:bg-[#FFD54F]"
          >
            Book free assessment
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#002147] bg-transparent px-8 py-3 text-sm font-semibold text-[#002147] transition hover:bg-[#002147] hover:text-white"
          >
            Talk to sales
          </Link>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mx-auto mt-12 max-w-7xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-b border-slate-200"
        >
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-[#FFC72C] text-[#002147]"
                    : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Bookkeeping Tab */}
          {activeTab === "bookkeeping" && (
            <motion.div
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {bookkeepingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className={`rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${
                    plan.highlight
                      ? "border-[#FFC72C] bg-slate-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#002147]">
                      {plan.name}
                    </h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#002147]">
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-600">/month</span>
                    </div>
                  </div>
                  <p className="mb-6 text-sm text-slate-600">
                    {plan.idealFor}
                  </p>
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Transactions:</span>
                      <span className="font-medium text-[#002147]">
                        {plan.transactions}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Accounts:</span>
                      <span className="font-medium text-[#002147]">
                        {plan.accounts}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Strategy Review:</span>
                      <span className="font-medium text-[#002147]">
                        {plan.strategyReview}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 block w-full rounded-lg bg-[#002147] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#002147]/90"
                  >
                    Get started
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Formation Tab */}
          {activeTab === "formation" && (
            <motion.div
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Header */}
              <h2 className="mb-8 text-3xl font-bold text-[#002147] sm:text-4xl">
                Pick Your Plan: Fast, Flexible, Full-Service
              </h2>

              {/* Free Services Card */}
              <motion.div
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
                className="mb-8 rounded-2xl border-2 border-[#FFC72C] bg-[#FFC72C]/10 p-6"
              >
                <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FFC72C]">
                  FREE SERVICES
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#002147]">
                  {freeServices.name}
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  {freeServices.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-[#002147]">Fee:</span>
                  <span className="text-slate-600">{freeServices.fee}</span>
                </div>
              </motion.div>

              {/* Formation Plans */}
              <div className="mb-12 grid gap-6 sm:grid-cols-3">
                {formationPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    variants={cardFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
                  >
                    <h3 className="mb-2 text-xl font-bold text-[#002147]">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#002147]">
                        {plan.price}
                      </span>
                      <span className="ml-2 text-sm text-slate-600">
                        + State Fees
                      </span>
                    </div>
                    <p className="mb-2 text-sm font-semibold text-slate-700">
                      {plan.whoItsFor}
                    </p>
                    <p className="mb-6 text-sm text-slate-600">
                      {plan.whatYouGet}
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full rounded-lg bg-[#002147] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#002147]/90"
                    >
                      Choose plan
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="mb-8 text-center text-sm text-slate-600">
                State fees vary depending on the state. We confirm the exact
                amount before filing.
              </p>

              {/* Feature Comparison */}
              <div className="space-y-4">
                {categories.map((category) => {
                  const categoryFeatures = formationFeatures.filter(
                    (f) => f.category === category
                  );
                  const isOpen = openCategory === category;
                  return (
                    <div
                      key={category}
                      className="rounded-xl border border-slate-200 bg-white"
                    >
                      <button
                        onClick={() =>
                          setOpenCategory(isOpen ? null : category)
                        }
                        className="w-full px-6 py-4 text-left text-base font-semibold text-[#002147] transition hover:bg-slate-50"
                      >
                        {category}
                      </button>
                      {isOpen && (
                        <div className="border-t border-slate-200 px-6 py-4">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-200">
                                  <th className="pb-3 text-left font-semibold text-slate-700">
                                    Feature
                                  </th>
                                  <th className="pb-3 text-center font-semibold text-slate-700">
                                    Ignite
                                  </th>
                                  <th className="pb-3 text-center font-semibold text-slate-700">
                                    Elevate
                                  </th>
                                  <th className="pb-3 text-center font-semibold text-slate-700">
                                    Propel
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {categoryFeatures.map((feature, idx) => (
                                  <tr
                                    key={idx}
                                    className="border-b border-slate-100 last:border-0"
                                  >
                                    <td className="py-3 text-slate-700">
                                      {feature.feature}
                                    </td>
                                    <td className="py-3 text-center">
                                      {getFeatureDisplay(feature.ignite)}
                                    </td>
                                    <td className="py-3 text-center">
                                      {getFeatureDisplay(feature.elevate)}
                                    </td>
                                    <td className="py-3 text-center">
                                      {getFeatureDisplay(feature.propel)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Tax Tab */}
          {activeTab === "tax" && (
            <motion.div
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {taxServices.map((service, i) => (
                <motion.div
                  key={`${service.name}-${i}`}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#002147]">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {service.bestFor}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#002147]">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  {service.included.length > 0 && (
                    <div className="border-t border-slate-200 pt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Included Features:
                      </p>
                      <ul className="space-y-1">
                        {service.included.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Add-ons Tab */}
          {activeTab === "addons" && (
            <motion.div
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Add-on Services */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-[#002147]">
                  Add-on Services & Pricing
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#002147]">
                          Add-on Service
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#002147]">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#002147]">
                          Fee
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[#002147]">
                          Recommended Plan
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {addOnServices.map((addon, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-100 transition hover:bg-slate-50"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-[#002147]">
                            {addon.service}
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-600">
                            {addon.description}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-[#002147]">
                            {addon.fee}
                          </td>
                          <td className="px-4 py-4 text-sm text-slate-600">
                            {addon.recommendedPlan}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Fees */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#002147]">
                  Other Fees
                </h2>
                <p className="mb-6 text-sm italic text-slate-600">
                  Fees may vary depending upon needs
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {otherFees.map((fee, i) => (
                    <motion.div
                      key={i}
                      variants={cardFade}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={i}
                      className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <h3 className="mb-2 text-base font-semibold text-[#002147]">
                        {fee.service}
                      </h3>
                      <p className="mb-3 text-sm text-slate-600">
                        {fee.description}
                      </p>
                      <p className="text-sm font-medium text-[#002147]">
                        {fee.fee}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Plan Finder */}
      <div className="mx-auto mt-16 max-w-4xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-[#FFC72C] bg-slate-50 p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-[#002147]">
            Not sure what you need?
          </h2>
          <p className="mb-6 text-base text-slate-600">
            Answer 3 questions and we recommend a plan
          </p>
          <PlanFinder />
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-16 max-w-4xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-[#002147]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {pricingFAQs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <h3 className="flex-1 text-base font-semibold text-[#002147]">
                      {faq.q}
                    </h3>
                    <span className="shrink-0 text-slate-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm leading-relaxed text-slate-600"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-lg lg:hidden">
        <Link
          href="/contact"
          className="block w-full rounded-lg bg-[#FFC72C] px-4 py-3 text-center text-sm font-semibold text-[#002147] transition hover:bg-[#FFD54F]"
        >
          Book free assessment
        </Link>
      </div>
    </>
  );
}

// Plan Finder Component
function PlanFinder() {
  const [stage, setStage] = useState("");
  const [need, setNeed] = useState("");
  const [volume, setVolume] = useState("");
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleRecommendation = () => {
    // Simple deterministic logic
    if (need === "Formation only") {
      setRecommendation("Ignite");
    } else if (need === "Formation + compliance") {
      if (volume === "High") {
        setRecommendation("Propel");
      } else {
        setRecommendation("Elevate");
      }
    } else if (need === "Full finance support") {
      if (volume === "High") {
        setRecommendation("Enterprise (Bookkeeping) + Propel (Formation)");
      } else if (volume === "Medium") {
        setRecommendation("Growth (Bookkeeping) + Elevate (Formation)");
      } else {
        setRecommendation("Essential (Bookkeeping) + Ignite (Formation)");
      }
    } else {
      setRecommendation("Please select all options");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-[#002147]">
          Stage
        </label>
        <select
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-[#002147] focus:border-[#FFC72C] focus:outline-none focus:ring-2 focus:ring-[#FFC72C]/20"
        >
          <option value="">Select stage</option>
          <option value="Just starting">Just starting</option>
          <option value="Growing">Growing</option>
          <option value="Scaling">Scaling</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-[#002147]">
          Need
        </label>
        <select
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-[#002147] focus:border-[#FFC72C] focus:outline-none focus:ring-2 focus:ring-[#FFC72C]/20"
        >
          <option value="">Select need</option>
          <option value="Formation only">Formation only</option>
          <option value="Formation + compliance">Formation + compliance</option>
          <option value="Full finance support">Full finance support</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-[#002147]">
          Volume
        </label>
        <select
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-[#002147] focus:border-[#FFC72C] focus:outline-none focus:ring-2 focus:ring-[#FFC72C]/20"
        >
          <option value="">Select volume</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button
        onClick={handleRecommendation}
        className="w-full rounded-lg bg-[#002147] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#002147]/90"
      >
        Get Recommendation
      </button>
      {recommendation && (
        <div className="mt-4 rounded-lg border-2 border-[#FFC72C] bg-[#FFC72C]/10 p-4">
          <p className="text-sm font-semibold text-[#002147]">
            Recommended Plan:
          </p>
          <p className="mt-1 text-base font-bold text-[#002147]">
            {recommendation}
          </p>
        </div>
      )}
      <Link
        href="/contact"
        className="mt-4 block w-full rounded-lg bg-[#FFC72C] px-4 py-2.5 text-center text-sm font-semibold text-[#002147] transition hover:bg-[#FFD54F]"
      >
        Book free assessment
      </Link>
    </div>
  );
}

