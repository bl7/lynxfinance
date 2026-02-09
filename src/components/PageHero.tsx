import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pt-36">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 lg:px-6">
        {eyebrow ? (
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#002147]/20 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#002147]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-[#002147] sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
