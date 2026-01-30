import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#002147] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-[#FFC72C] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#FFD54F]"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}

