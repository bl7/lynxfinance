import { Metadata } from "next";
import { Users, Globe2, ShieldCheck, Clock3 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | LYNX Finance Consulting",
  description:
    "Discover LYNX Finance Consulting's collective 60+ years of experience and dual-hemisphere delivery model spanning the US and Nepal.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="About LYNX"
        title="Collective excellence, delivered across hemispheres."
        subtitle={
          <>
            LYNX Finance Consulting was founded by senior finance leaders who
            have spent their careers inside high-growth companies, public
            accounting firms, and cross-border groups. We bring together{" "}
            <span className="font-semibold text-slate-100">
              more than six decades of combined experience
            </span>{" "}
            across audit, tax, controllership, and FP&amp;A to build finance
            functions that are as strategic as they are compliant.
          </>
        }
      />
      <div className="mx-auto max-w-5xl px-4 pt-10 lg:px-6">

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
                <Users className="h-4 w-4 text-emerald-300" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-50">
                  60+ years of shared experience
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Our partners and leads have sat in the seats of controllers,
                  CFOs, and Big Four managers. We know what your auditors,
                  lenders, and investors expect—and how to deliver it without
                  slowing your growth.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900">
                <Globe2 className="h-4 w-4 text-sky-300" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-50">
                  Dual-hemisphere delivery model
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  With teams in the United States and Nepal, we operate in
                  complementary time zones. Your US-based client lead speaks the
                  language of your stakeholders while our Nepal delivery team
                  ensures that work continues while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="glass-panel rounded-2xl p-4">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Governance you can trust
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              We architect processes with strong internal controls, documented
              workflows, and repeatable close routines so that your finance
              function can scale without gaps.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-4">
            <Clock3 className="h-5 w-5 text-amber-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Around-the-clock coverage
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Our dual-hemisphere model gives you extended workdays and quicker
              turnarounds on time-sensitive projects, monthly close, and
              reporting cycles.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-4">
            <Users className="h-5 w-5 text-sky-300" />
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Embedded with your team
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              We operate as an extension of your finance function, aligning
              cadence, tooling, and communication with the way your business and
              leadership team already works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


