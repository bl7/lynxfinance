"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const companies = [
  { filename: "crsolutions.JPG", name: "CR Solutions" },
  { filename: "gracerecruitmentpartners.WEBP", name: "Grace Recruitment Partners" },
  { filename: "issr.PNG", name: "ISSR" },
  { filename: "janinifertilityclinic.JPG", name: "Janini Fertility Clinic" },
  { filename: "pavilionmediagroup.PNG", name: "Pavilion Media Group" },
  { filename: "hamropatro.png", name: "HamroPatro" },
];

export function HomeTrustedBy() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate companies array for seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="border-y border-slate-200 bg-white py-12 overflow-hidden">
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
          
          {/* Single rotating carousel row */}
          <div 
            className="w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div 
                className={`flex gap-12 items-center animate-scroll-horizontal ${isPaused ? 'animate-scroll-horizontal-paused' : ''}`}
                style={{ width: 'max-content' }}
              >
                {duplicatedCompanies.map((company, i) => (
                  <div
                    key={`logo-${i}`}
                    className="group relative flex items-center justify-center shrink-0"
                  >
                    <Image
                      src={`/companies/${company.filename}`}
                      alt={company.name}
                      width={180}
                      height={72}
                      className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-16"
                      title={company.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
