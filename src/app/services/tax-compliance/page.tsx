import { Metadata } from "next";
import { Receipt, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tax Compliance Services | LYNX Finance Consulting",
  description:
    "Coordinated support for US Federal, State, and multi-jurisdictional tax compliance with practical planning.",
};

export default function TaxCompliancePage() {
  const items = [
    "Preparation and review of US Federal and State income tax returns",
    "Coordination of sales, use, and payroll tax filings with local partners",
    "Nexus and residency analysis as you expand into new states",
    "Support for international and cross-border tax considerations",
    "Quarterly estimate calculations and safe harbor planning",
    "Year-end tax provision support in partnership with your auditors",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Tax Compliance"
        title="Tax Compliance"
        subtitle={
          <>
            As your footprint spans more jurisdictions, tax obligations become
            more complex. We help you stay current and compliant while building
            a planning rhythm that avoids year-end surprises.
          </>
        }
      />
      <div className="mx-auto max-w-4xl px-4 pt-10 lg:px-6">
        <div className="glass-panel rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-slate-700">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
              <Receipt className="h-4 w-4 text-amber-300" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                What&apos;s included
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Practical, coordinated support across your tax lifecycle—from
                registrations and filings to planning and audit responses.
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-200 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


