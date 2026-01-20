"use client";

export function HomeProofBar() {
  const items = [
    "Cross-border compliance experience",
    "Structured reporting and documentation",
    "Secure handling of sensitive documents",
    "Support across time zones",
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-900 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-center"
            >
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
