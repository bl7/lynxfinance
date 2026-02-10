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
  { filename: "environmentsolutionstexas.png", name: "Environment Solutions Texas" },
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
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
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
            <div className="overflow-hidden pb-8">
              <div 
                className={`flex gap-12 items-center animate-scroll-horizontal ${isPaused ? 'animate-scroll-horizontal-paused' : ''}`}
                style={{ width: 'max-content' }}
              >
                {duplicatedCompanies.map((company, i) => (
                  <div
                    key={`logo-${i}`}
                    className="group relative flex flex-col items-center justify-center shrink-0"
                  >
                    <Image
                      src={`/companies/${company.filename}`}
                      alt={company.name}
                      width={180}
                      height={72}
                      className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-125 sm:h-16"
                      title={company.name}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-slate-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      {company.name}
                    </span>
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
