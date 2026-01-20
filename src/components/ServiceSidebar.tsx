"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useAssessmentModal } from "./AssessmentModalProvider";

const services = [
  { slug: "accounting-bookkeeping", name: "Accounting & Bookkeeping" },
  { slug: "tax-compliance", name: "Tax Compliance" },
  {
    slug: "excel-google-sheet-modeling",
    name: "Excel and Google sheet modeling",
  },
  { slug: "financial-modeling", name: "Financial modeling" },
  {
    slug: "budgeting-financial-services",
    name: "Budgeting and Financial Services",
  },
  { slug: "virtual-cfo", name: "Virtual CFO" },
  { slug: "us-company-formation", name: "US Company Formation" },
  { slug: "ein", name: "EIN (Employer Identification Number)" },
  { slug: "us-business-bank-account", name: "US Business Bank Account" },
  { slug: "registered-agent-services", name: "Registered Agent Services" },
  { slug: "itin", name: "ITIN (Individual Taxpayer Identification Number)" },
  { slug: "bookkeeping-tax-services", name: "Bookkeeping & Tax Services" },
  {
    slug: "annual-compliance-state-filings",
    name: "Annual Compliance & State Filings",
  },
  { slug: "migrate-company", name: "Migrate Your Company to Lynx" },
];

export function ServiceSidebar() {
  const pathname = usePathname();
  const currentService = pathname?.split("/").pop() || "";
  const { openAssessment } = useAssessmentModal();

  const serviceDisplay = services.find((s) => s.slug === currentService)?.name;

  return (
    <aside className="sticky top-24 hidden lg:block">
      <div className="w-64 space-y-6">
        {/* Get Started Today */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            Get Started Today
          </h3>
          <p className="mb-4 text-sm text-slate-600">
            Let&apos;s build something great together
          </p>
          <div className="mb-4 space-y-3 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
              <span>Average response rate 1 hour</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
              <span>Proven track of results</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC72C]" />
              <span>Dedicated and honest team</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openAssessment(serviceDisplay)}
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#002147] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#002147]/90"
          >
            Book a free assessment
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Services */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">
            Services
          </h3>
          <p className="mb-4 text-xs text-slate-600">
            Check out our other services
          </p>
          <ul className="space-y-2">
            {services.slice(0, 5).map((service) => {
              const isActive = currentService === service.slug;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-[#FFC72C]/10 font-semibold text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-slate-400">&gt;</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
