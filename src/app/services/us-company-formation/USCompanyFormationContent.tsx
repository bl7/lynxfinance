"use client";

import { CheckCircle2, Plus, X, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceCTA } from "@/components/ServiceCTA";
import { ExploreServices } from "@/components/ExploreServices";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

type CompanyType = "llc" | "s-corp" | "c-corp" | "non-profit";

type CompanyDetail = {
  title: string;
  description: string;
};

type CompanyTypeData = {
  id: CompanyType;
  name: string;
  details: CompanyDetail[];
};

const companyTypeTabs = [
  { id: "llc" as CompanyType, label: "LLC" },
  { id: "s-corp" as CompanyType, label: "S-Corp" },
  { id: "c-corp" as CompanyType, label: "C-Corp" },
  { id: "non-profit" as CompanyType, label: "Non-Profit" },
];

const companyTypes: CompanyTypeData[] = [
  {
    id: "llc",
    name: "Limited Liability Companies (LLCs)",
    details: [
      {
        title: "Flexibility & Operational Ease",
        description:
          "Unmatched in flexibility and simplicity, ideal for entrepreneurs who prefer an easy setup and minimal bureaucracy.",
      },
      {
        title: "Ownership & Management",
        description:
          "No limit on owners; flexible management options allow for tailored operational control, suitable for diverse business models.",
      },
      {
        title: "Taxation Advantages",
        description:
          "Benefits from pass-through taxation, with an option for corporate taxation, offering tax flexibility to members.",
      },
      {
        title: "Liability Protection",
        description:
          "Provides strong protection of personal assets from business liabilities, crucial for businesses with substantial risk.",
      },
      {
        title: "Compliance Requirements",
        description:
          "Moderate, with the potential need for reformation upon membership changes, depending on state laws.",
      },
      {
        title: "Financing Options",
        description:
          "Suited for funding through member contributions and bank loans, though may face challenges in attracting external investors.",
      },
      {
        title: "Great Choice For",
        description:
          "Entrepreneurs and startups seeking operational flexibility, personal liability protection, and tax options, especially in high-risk sectors.",
      },
    ],
  },
  {
    id: "s-corp",
    name: "S-Corporations (S-Corps)",
    details: [
      {
        title: "Flexibility & Operational Ease",
        description:
          "Balances corporate structure with operational flexibility, subject to certain formalities for tax status maintenance.",
      },
      {
        title: "Ownership & Management",
        description:
          "Capped at 100 shareholders who must be U.S. residents, introducing limitations on investment diversity and scale.",
      },
      {
        title: "Taxation Advantages",
        description:
          "Offers pass-through taxation to avoid double taxation, with benefits for salary and dividend tax planning.",
      },
      {
        title: "Liability Protection",
        description:
          "Ensures shareholders' personal assets are protected from company liabilities, providing a safeguard for personal wealth.",
      },
      {
        title: "Compliance Requirements",
        description:
          "Strict IRS criteria for S-Corp status, including operational guidelines and reporting standards.",
      },
      {
        title: "Financing Options",
        description:
          "Access to capital through a single class of stock and loans, with some limitations compared to C-Corps.",
      },
      {
        title: "Great Choice For",
        description:
          "Small to medium businesses that meet the IRS requirements, looking for tax advantages without the complexity of a C-Corp.",
      },
    ],
  },
  {
    id: "c-corp",
    name: "C-Corporations (C-Corps)",
    details: [
      {
        title: "Flexibility & Operational Ease",
        description:
          "Faces the highest level of regulatory and operational requirements, ideal for those able to navigate complex structures.",
      },
      {
        title: "Ownership & Management",
        description:
          "Unlimited ownership with no nationality restrictions, allowing for global investment opportunities.",
      },
      {
        title: "Taxation Advantages",
        description:
          "Encounters corporate taxation and potential double taxation on dividends, offset by a wider range of deductible business expenses.",
      },
      {
        title: "Liability Protection",
        description:
          "Offers maximum protection for owners from personal liability, a critical factor for businesses with significant risk exposure.",
      },
      {
        title: "Compliance Requirements",
        description:
          "Demands extensive record-keeping, governance standards, and shareholder meetings, suited for large-scale operations.",
      },
      {
        title: "Financing Options",
        description:
          "Extensive, through public and private stock offerings, ideal for raising significant capital.",
      },
      {
        title: "Great Choice For",
        description:
          "Larger companies or those planning to go public, seeking to maximize capital raising opportunities and benefit from the corporate structure.",
      },
    ],
  },
  {
    id: "non-profit",
    name: "Non-Profit Organizations",
    details: [
      {
        title: "Flexibility & Operational Ease",
        description:
          "Governed by strict regulations aimed at non-profit goals, limiting operational flexibility in favor of mission fulfillment.",
      },
      {
        title: "Ownership & Management",
        description:
          "Operates without traditional owners, managed by a board focused on the non-profit's mission, emphasizing charitable activities over profit.",
      },
      {
        title: "Taxation Advantages",
        description:
          "Can achieve tax-exempt status, avoiding many forms of taxation and enhancing the ability to receive tax-deductible donations.",
      },
      {
        title: "Liability Protection",
        description:
          "Offers protection similar to corporations, separating personal and organizational liabilities, especially important for entities engaging in widespread charitable activities.",
      },
      {
        title: "Compliance Requirements",
        description:
          "Subject to non-profit-specific regulations and reporting, ensuring operational transparency and accountability.",
      },
      {
        title: "Financing Options",
        description:
          "Reliant on donations, grants, and fundraising efforts, focusing on supporting the mission rather than generating profit.",
      },
      {
        title: "Great Choice For",
        description:
          "Organizations dedicated to charitable, educational, religious, or scientific missions seeking tax advantages and societal impact over profit.",
      },
    ],
  },
];

export function USCompanyFormationContent() {
  const [selectedTab, setSelectedTab] = useState<CompanyType>("llc");
  const [openDetails, setOpenDetails] = useState<
    Record<CompanyType, string | null>
  >({
    "llc": null,
    "s-corp": null,
    "c-corp": null,
    "non-profit": null,
  });

  const items = [
    "Entity formation and registration",
    "Ongoing regulatory requirements",
    "Compliant and future-ready setup",
    "Support regardless of location or industry",
  ];

  const handleDetailToggle = (type: CompanyType, detailTitle: string) => {
    setOpenDetails((prev) => ({
      ...prev,
      [type]: prev[type] === detailTitle ? null : detailTitle,
    }));
  };

  const selectedCompanyType = companyTypes.find(
    (type) => type.id === selectedTab
  );

  return (
    <div>
      <PageHero
        eyebrow="Services · US Company Formation"
        title="US Company Formation"
        subtitle={
          <>
            Simplify the US company incorporation journey from start to scale.
            Our experienced incorporation and compliance specialists guide you
            through every stage.
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
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Simplify the US company incorporation journey from start to
                scale. Our experienced incorporation and compliance specialists
                guide you through every stage of the process, from entity
                selection to ongoing compliance management.
              </p>
            </motion.section>

            {/* What's Included Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                What&apos;s included
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We handle the complete incorporation process, ensuring your
                business is set up correctly and remains compliant from day one.
              </p>
              <ul className="space-y-3 text-base text-slate-700 sm:text-lg">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#FFC72C]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Find the Entity Section */}
            <motion.section
              className="mb-16"
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Find the Entity That&apos;s Right For You
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We will guide you through the process. Use our resources to
                select a business formation type.
              </p>

              {/* Info Callout */}
              <div className="mb-8 flex items-start gap-3 rounded-lg bg-orange-50 border border-orange-200 p-4">
                <Lightbulb className="h-5 w-5 shrink-0 text-orange-600 mt-0.5" />
                <p className="text-sm text-slate-700 sm:text-base">
                  Did you know LLCs are the most popular choice for startups?
                </p>
              </div>

              {/* Company Type Tabs */}
              <div className="mb-6 flex flex-wrap gap-3">
                {companyTypeTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                      selectedTab === tab.id
                        ? "bg-[#FFC72C] text-slate-900 shadow-md"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Grid with Image */}
              <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
                {/* Accordions */}
                <div>
                  {selectedCompanyType && (
                    <motion.div
                      key={selectedTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {selectedCompanyType.name}
                      </h3>
                      <div className="space-y-3">
                        {selectedCompanyType.details.map((detail) => {
                          const isDetailOpen =
                            openDetails[selectedTab] === detail.title;
                          return (
                            <div
                              key={detail.title}
                              className={`rounded-lg border border-slate-200 bg-white transition-all duration-200 ${
                                isDetailOpen
                                  ? "border-[#FFC72C]/40 bg-slate-50"
                                  : "hover:border-slate-300"
                              }`}
                            >
                              <div
                                className="cursor-pointer p-4"
                                onClick={() =>
                                  handleDetailToggle(selectedTab, detail.title)
                                }
                              >
                                <div className="flex items-center justify-between gap-4">
                                  <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                                    {detail.title}
                                  </h4>
                                  <button
                                    className="shrink-0 text-slate-400 transition-colors hover:text-[#FFC72C]"
                                    aria-label={
                                      isDetailOpen ? "Collapse" : "Expand"
                                    }
                                    type="button"
                                  >
                                    {isDetailOpen ? (
                                      <X className="h-5 w-5" />
                                    ) : (
                                      <Plus className="h-5 w-5" />
                                    )}
                                  </button>
                                </div>
                              </div>
                              {isDetailOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="border-t border-slate-200 px-4 pb-4 pt-3"
                                >
                                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                                    {detail.description}
                                  </p>
                                </motion.div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Image Sidebar */}
                <div className="hidden lg:block">
                  <motion.div
                    variants={cardFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="sticky top-24"
                  >
                    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                      <Image
                        src="/staffs/formation.png"
                        alt="Business formation consultation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 0vw, 400px"
                      />
                    </div>
                  </motion.div>
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

