import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-16 sm:pb-12 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_65%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-4 px-4 lg:px-6">
        {eyebrow ? (
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200 shadow-[0_0_18px_rgba(250,204,21,0.35)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}


