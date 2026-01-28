import Link from "next/link";
import Image from "next/image";
import { MapPin, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 pb-6 lg:px-6 lg:pb-8">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Col 1: Logo + text (logo left, text right) */}
          <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center">
            <Image
              src="/logo_2.png"
              alt="LYNX Finance Consulting"
              width={330}
              height={96}
              className="h-16 w-auto flex-shrink-0 object-contain sm:h-20"
            />
            <div className="space-y-1.5 text-xs leading-relaxed text-slate-600">
              <p>
                LYNX Finance Consulting provides bookkeeping, tax, virtual CFO,
                and US formation support for founders and finance teams
                operating across time zones.
              </p>
              <p className="font-medium text-slate-700">
                Clean books, on‑time filings, and a finance partner that moves
                as fast as your business.
              </p>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
              Company
            </h3>
            <div className="mt-2 flex flex-col gap-2 text-xs text-slate-600">
              <Link href="/about" className="hover:text-slate-900">
                About Us
              </Link>
              <Link href="/industries" className="hover:text-slate-900">
                Industries
              </Link>
              <Link href="/pricing" className="hover:text-slate-900">
                Pricing
              </Link>
              <Link href="/faq" className="hover:text-slate-900">
                FAQ
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Col 3: US Office */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
              US Office
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-slate-900" />
              <p>Texas, USA</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <PhoneCall className="h-3.5 w-3.5 text-slate-900" />
              <span>+1 (817) 966-0481</span>
            </div>
            <div className="mt-3 flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-slate-900" />
              <p>Virginia, USA</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <PhoneCall className="h-3.5 w-3.5 text-slate-900" />
              <span>+1 (757) 338-3452</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-[11px] text-slate-500 lg:px-6">
          <p>
            © {new Date().getFullYear()} LYNX Finance Consulting. All rights
            reserved.
          </p>
          <p className="hidden md:block">
            Built for globally distributed finance teams across time zones.
          </p>
        </div>
      </div>
    </footer>
  );
}
