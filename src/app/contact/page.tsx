"use client";

import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

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

export default function ContactPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Contact"
        title="Schedule time with LYNX Finance Consulting."
        subtitle="Share a few details about your organization and the type of support you are looking for, and we’ll follow up with available times for an initial conversation."
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-6">
        <motion.form
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-900 shadow-lg transition-all duration-300 hover:border-[#FFC72C]/30"
          variants={cardFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-[#002147]">
                Name
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#002147]">
                Email
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-[#002147]">
                Phone
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20"
                placeholder="+1 (817) 966-0481"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#002147]">
                Country
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20"
                placeholder="Country where you operate"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#002147]">
              Service interest
            </label>
            <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20">
              <option>Accounting &amp; Bookkeeping</option>
              <option>Tax Compliance</option>
              <option>Virtual CFO</option>
              <option>Multiple / Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#002147]">
              Tell us briefly about your organization
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-[#002147] outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20"
              placeholder="Size of your team, industry, current finance setup, and what you'd like help with."
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FFC72C] px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#002147] transition hover:bg-[#FFD54F]"
          >
            Submit inquiry
          </button>
        </motion.form>

        <motion.div
          className="space-y-5 text-xs text-slate-600"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002147]">
              USA Branch
            </h2>
            <p className="mt-2 text-slate-600">Texas, USA</p>
            <p className="mt-2 text-slate-600">Phone: +1 (817) 966-0481</p>
            <p className="mt-3 text-slate-600">Virginia, USA</p>
            <p className="mt-2 text-slate-600">Phone: +1 (757) 338-3452</p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
          >
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002147]">
              Nepal Branch
            </h2>
            <p className="mt-2 text-slate-600">Kathmandu, Nepal</p>
            <p className="mt-2 text-slate-600">Phone: +977-9861888856</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
