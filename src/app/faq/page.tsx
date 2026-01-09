import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const faqs = [
  {
    q: "What types of clients does LYNX Finance Consulting typically work with?",
    a: "We partner with small and mid-sized businesses, nonprofits, and international groups that value structured finance and clear reporting but do not yet have a large in-house finance team.",
  },
  {
    q: "How does onboarding with LYNX work?",
    a: "Onboarding generally includes a discovery session, systems and document review, a clean-up or catch-up phase if needed, and then a move into a defined monthly or quarterly cadence for deliverables.",
  },
  {
    q: "Which accounting systems do you support?",
    a: "We most commonly work with cloud-based general ledgers such as QuickBooks Online and Xero, along with common payroll and expense tools. During scoping, we confirm whether your current stack is a fit or if changes are recommended.",
  },
  {
    q: "Do you replace our existing bookkeeper or work alongside them?",
    a: "It depends on your needs. In some cases, we fully own the accounting process; in others, we provide oversight, review, and higher-level support while your internal team handles daily transactions.",
  },
  {
    q: "How do you price your services?",
    a: "Most engagements are structured on a fixed monthly retainer based on scope and complexity. Project-based work is scoped separately with a clear estimate before we begin.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | LYNX Finance Consulting",
  description:
    "Answers to common questions about working with LYNX Finance Consulting, onboarding, pricing, and systems.",
};

export default function FaqPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions about working with LYNX."
        subtitle="If you don’t see your question here, our team is happy to walk through details specific to your organization and industry."
      />
      <div className="mx-auto max-w-4xl px-4 pt-10 lg:px-6">
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left font-medium text-slate-50">
                <span>{item.q}</span>
                <span className="text-xs text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-slate-400 group-open:inline">
                  &minus;
                </span>
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}


