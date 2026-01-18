"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HomeTrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            TRUSTED BY TEAMS AT
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/hamropatro.png"
                  alt="HamroPatro"
                  width={150}
                  height={60}
                  className="h-10 w-auto object-contain opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:h-12"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
