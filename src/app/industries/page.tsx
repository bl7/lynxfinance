import { Metadata } from "next";
import { Building2, HeartHandshake, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries Served | LYNX Finance Consulting",
  description:
    "Learn how LYNX Finance Consulting supports small businesses, nonprofits, and international corporations.",
};

const industries = [
  {
    icon: Building2,
    name: "Small & Growing Businesses",
    body: "Owner-led and founder-led companies rely on LYNX for structure around bookkeeping, cash flow visibility, and lender-ready reporting without the overhead of a full finance department.",
  },
  {
    icon: HeartHandshake,
    name: "Nonprofits & Mission-Driven Organizations",
    body: "We understand board governance, restricted funds, and grant reporting. Our teams help nonprofits demonstrate stewardship to donors while staying audit-ready.",
  },
  {
    icon: Globe2,
    name: "International & Multi-Entity Groups",
    body: "For organizations operating across borders, we coordinate accounting, consolidation, and tax support across entities and jurisdictions so leadership sees a single, coherent picture.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Industries served"
        title="Built for organizations that outgrow basic bookkeeping."
        subtitle={
          <>
            Whether you&apos;re a small business, a mission-driven nonprofit, or
            an international group with multiple entities, LYNX Finance
            Consulting tailors its approach to the realities of your operating
            model and stakeholders.
          </>
        }
      />
      <div className="mx-auto max-w-5xl px-4 pt-10 lg:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="glass-panel rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-slate-700"
              >
                <Icon className="h-5 w-5 text-amber-300" />
                <h2 className="mt-3 text-sm font-semibold text-slate-50">
                  {item.name}
                </h2>
                <p className="mt-2 text-xs text-slate-300">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


