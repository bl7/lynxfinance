"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function ServiceCTA() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      <motion.section
        className="relative overflow-hidden rounded-lg bg-[#002147] py-16"
        variants={cardFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147] to-[#003366]" />
        <div className="relative px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Contact Lynx to achieve your financial goals fast and smart
              </h2>
              <ul className="mb-6 space-y-3 text-base text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
                  <span>Schedule a free consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
                  <span>Discover custom solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC72C]" />
                  <span>Start building your competitive advantage</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-base font-semibold text-[#002147] transition hover:bg-white/90"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative hidden h-64 overflow-hidden rounded-lg lg:block lg:h-80">
              <Image
                src="/bookkeeping.jpg"
                alt="Bookkeeping services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
