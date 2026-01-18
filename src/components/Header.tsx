"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="LYNX Finance Consulting logo"
            width={220}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-white/80"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#FFC72C] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18179660481"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:border-white/50 hover:bg-white/20"
          >
            <PhoneCall className="h-3.5 w-3.5 text-white" />
            <span>+1 (817) 966-0481</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white shadow-sm transition hover:border-white/50 hover:bg-white/20 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/20 bg-slate-950/95 backdrop-blur-md px-4 pb-4 pt-2 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
