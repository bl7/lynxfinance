"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

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

// Simple Google G logo SVG component
const GoogleLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export function HomePersonas() {
  const personas = [
    {
      review:
        "We've been working with LYNX for over a year now, and they've been instrumental in helping us scale. Their bookkeeping is always on time, the financial reports are clear and actionable, and we never have to worry about compliance deadlines. The team is responsive, knowledgeable, and truly understands what growing businesses need.",
      quote: "Clear books, stay compliant, make informed decisions",
      name: "Sarah Chen",
      title: "Growing Business Owner",
      initial: "S",
      avatarColor: "bg-blue-500",
    },
    {
      review:
        "As a founder, compliance was always my biggest stress. LYNX changed that completely. They have clear processes for everything, proactive tax planning throughout the year, and they keep us ahead of deadlines. I can finally focus on growing the business instead of worrying about missed filings or compliance issues.",
      quote: "Predictable compliance, clear processes, proactive support",
      name: "Michael Rodriguez",
      title: "Founder & CEO",
      initial: "M",
      avatarColor: "bg-orange-500",
    },
    {
      review:
        "Our team operates across multiple countries, and LYNX has been essential for managing our consolidated reporting and multi-jurisdictional tax requirements. Their dual-hemisphere model means we get seamless service across time zones, and their expertise in cross-border compliance has saved us significant time and money.",
      quote: "Consolidated reporting, multi-jurisdictional support",
      name: "Priya Patel",
      title: "Cross-Border Operations Lead",
      initial: "P",
      avatarColor: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Who it&apos;s for
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Whether you&apos;re a solo founder or scaling a team, we help you
            maintain clean books, stay compliant, and make informed decisions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.name}
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: "-50px" }}
              custom={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Review Text */}
              <p className="mb-6 text-sm leading-relaxed text-white/90">
                {persona.review}
              </p>

              {/* Quote */}
              <p className="mb-8 text-lg font-bold text-white">
                &quot;{persona.quote}&quot;
              </p>

              {/* Reviewer Info */}
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${persona.avatarColor} text-lg font-bold text-white`}
                >
                  {persona.initial}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">
                    {persona.name}
                  </p>
                  <p className="text-xs text-white/70">{persona.title}</p>
                </div>
              </div>

              {/* Google Stars and Logo */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-[#FFC72C] text-[#FFC72C]"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <GoogleLogo />
                  <span>Posted on Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
