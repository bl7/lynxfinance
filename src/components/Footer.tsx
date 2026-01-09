import Link from "next/link";
import Image from "next/image";
import { MapPin, PhoneCall, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950 pt-10 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-6 lg:flex-row lg:px-6 lg:pb-8">
        <div className="flex items-start">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="LYNX Finance Consulting"
              width={330}
              height={96}
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 text-sm lg:flex-row">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              United States
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-amber-300" />
              <p>
                123 Financial District, Suite 1800
                <br />
                New York, NY 10005, USA
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <PhoneCall className="h-3.5 w-3.5 text-emerald-300" />
              <span>+1 (000) 000-0000</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              Nepal
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-amber-300" />
              <p>
                Level 6, Business Tower
                <br />
                Kathmandu, Bagmati, Nepal
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <PhoneCall className="h-3.5 w-3.5 text-emerald-300" />
              <span>+977-1-0000000</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              Contact
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="h-3.5 w-3.5 text-sky-300" />
              <span>hello@yourcompany.com</span>
            </div>
            <div className="mt-2 flex gap-4 text-xs text-slate-400">
              <Link href="/privacy" className="hover:text-slate-100">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-100">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/80 bg-slate-950/95 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-[11px] text-slate-500 lg:px-6">
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


