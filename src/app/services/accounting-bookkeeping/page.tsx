import { Metadata } from "next";
import { FileText, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | LYNX Finance Consulting",
  description:
    "Monthly close, reconciliations, and audit-ready bookkeeping for growing organizations.",
};

export default function AccountingBookkeepingPage() {
  const items = [
    "Structured chart of accounts aligned with your business model",
    "Daily, weekly, and monthly transaction processing",
    "Bank, credit card, and balance sheet reconciliations",
    "AR and AP aging reviews with vendor and customer follow-up",
    "Month-end close checklists and variance analysis",
    "Standardized management reporting and commentary",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Accounting & Bookkeeping"
        title="Accounting & Bookkeeping"
        subtitle={
          <>
            We build and operate a disciplined monthly close so that your
            leadership, lenders, and investors can rely on your numbers. Our
            team handles the day-to-day ledger work while giving you clear
            visibility into performance.
          </>
        }
      />
      <div className="mx-auto max-w-4xl px-4 pt-10 lg:px-6">
        <div className="glass-panel rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
              <FileText className="h-4 w-4 text-amber-300" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                What&apos;s included
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                A dedicated pod manages your books on a defined cadence with
                documented processes so that you always know the status of your
                close.
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


