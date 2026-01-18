import Link from "next/link";
import Image from "next/image";
import { MapPin, PhoneCall, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 text-slate-700">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
              USA Branch
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-[#002147]" />
              <p>Texas, USA</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <PhoneCall className="h-3.5 w-3.5 text-[#002147]" />
              <span>+1 (817) 966-0481</span>
            </div>
            <div className="mt-3 flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-[#002147]" />
              <p>Virginia, USA</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <PhoneCall className="h-3.5 w-3.5 text-[#002147]" />
              <span>+1 (757) 338-3452</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
              Nepal Branch
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-[#002147]" />
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <PhoneCall className="h-3.5 w-3.5 text-[#002147]" />
              <span>+977-9861888856</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#002147]">
              Links
            </h3>
            <div className="mt-2 flex flex-col gap-2 text-xs text-slate-600">
              <Link href="/privacy" className="hover:text-[#002147]">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#002147]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-3">
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
