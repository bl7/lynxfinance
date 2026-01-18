"use client";

export function HomeProofBar() {
  const items = [
    "Cross-border compliance experience",
    "Structured reporting and documentation",
    "Secure handling of sensitive documents",
    "Support across time zones",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-6">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-600 sm:gap-x-12">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-x-4 text-[#002147]">
              {item}
              {i < items.length - 1 && (
                <span className="hidden text-slate-400 sm:inline">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
