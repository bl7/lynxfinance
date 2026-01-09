import { Metadata } from "next";
import { LineChart, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Virtual CFO Services | LYNX Finance Consulting",
  description:
    "Fractional CFO support for cash flow forecasting, KPI design, and board-level financial strategy.",
};

export default function VirtualCFOPage() {
  const items = [
    "Forward-looking cash flow forecasting and runway analysis",
    "Design and tracking of KPIs aligned to your operating model",
    "Monthly and quarterly performance reviews with leadership",
    "Board and investor-ready reporting and presentations",
    "Budgeting, reforecasting, and scenario planning",
    "Support for funding rounds, debt, and capital allocation",
  ];

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Services · Virtual CFO"
        title="Virtual CFO"
        subtitle={
          <>
            You may not be ready for a full-time CFO, but you still need clear
            financial narratives for your board, investors, and team. Our
            Virtual CFO engagements provide executive-level guidance on a
            flexible schedule.
          </>
        }
      />
      <div className="mx-auto max-w-4xl px-4 pt-10 lg:px-6">
        <div className="glass-panel rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
              <LineChart className="h-4 w-4 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                What&apos;s included
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                We partner with your leadership team to translate financial data
                into clear decisions, tradeoffs, and action plans.
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


