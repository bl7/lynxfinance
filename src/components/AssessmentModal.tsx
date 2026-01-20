"use client";

import { useState } from "react";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { useToast } from "@/components/ToastProvider";

type AssessmentModalProps = {
  open: boolean;
  onClose: () => void;
  initialService?: string | null;
};

const SERVICES = [
  "Accounting & Bookkeeping",
  "Tax Compliance",
  "Excel and Google sheet modeling",
  "Financial modeling",
  "Budgeting and Financial Services",
  "Process Automation Services",
  "Virtual CFO",
  "US Company Formation",
  "EIN (Employer Identification Number)",
  "US Business Bank Account",
  "Registered Agent Services",
  "ITIN (Individual Taxpayer Identification Number)",
  "Bookkeeping & Tax Services",
  "Annual Compliance & State Filings",
  "Migrate Your Company to Lynx",
  "Multiple / Not sure yet",
];

const COUNTRIES = ["US", "Nepal", "Others"];
const STAGES = ["Just starting", "Growing", "Scaling"] as const;
const TIMEFRAMES = ["This week", "This month", "Next 1–3 months"] as const;

export function AssessmentModal({
  open,
  onClose,
  initialService = null,
}: AssessmentModalProps) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [companyWebsite, setCompanyWebsite] = useState("");

  if (!open) return null;

  const validateEmail = (email: string) => {
    const value = email.trim();
    if (!value) throw new Error("Email is required");
    if (value.length > 120) throw new Error("Email is too long");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      throw new Error("Please enter a valid email address");
    }
    return value;
  };

  const validatePhone = (phone: string) => {
    const value = phone.trim();
    if (!value) return "";
    if (value.length > 30) throw new Error("Phone number is too long");
    if (!/^[0-9+\-().\s]{7,30}$/.test(value)) {
      throw new Error("Please enter a valid phone number");
    }
    return value;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setSubmitError(null);
    setIsSuccess(false);
    setReferenceId(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(formEl);
      const name = (formData.get("name") as string)?.trim();
      const email = validateEmail(formData.get("email") as string);
      const phone = validatePhone((formData.get("phone") as string) || "");
      const country = (formData.get("country") as string)?.trim();
      const service = (formData.get("service") as string)?.trim();
      const stage = ((formData.get("stage") as string) || "").trim();
      const timeframe = ((formData.get("timeframe") as string) || "").trim();
      const message = ((formData.get("message") as string) || "").trim();

      if (!name || name.length < 2 || name.length > 80) {
        throw new Error("Name must be between 2 and 80 characters");
      }
      if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(name)) {
        throw new Error("Name contains invalid characters");
      }
      if (!country || !COUNTRIES.includes(country)) {
        throw new Error("Please select a valid country");
      }
      if (!service || !SERVICES.includes(service)) {
        throw new Error("Please select a valid service");
      }
      if (!stage || !STAGES.includes(stage as any)) {
        throw new Error("Please select your stage");
      }
      if (!timeframe || !TIMEFRAMES.includes(timeframe as any)) {
        throw new Error("Please select a timeframe");
      }
      if (message && message.length > 1500) {
        throw new Error("Message is too long (max 1500 characters)");
      }

      const messageParts: string[] = [];
      messageParts.push(`Stage: ${stage}`);
      messageParts.push(`Timeframe: ${timeframe}`);
      if (message) messageParts.push(`Notes: ${message}`);

      const result = await submitEnquiry({
        name,
        email,
        phone: phone || undefined,
        country,
        service,
        message: messageParts.join("\n"),
        companyWebsite,
      });

      setIsSuccess(true);
      if (result.id && result.id !== "SPAM") {
        setReferenceId(result.id);
      }
      showToast({
        type: "success",
        title: "Assessment request received",
        message:
          result.id && result.id !== "SPAM"
            ? `Reference ID: ${result.id}`
            : "Thanks — we’ve received your request.",
      });
      onClose();

      formEl.reset();
      setCompanyWebsite("");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An error occurred"
      );
      showToast({
        type: "error",
        title: "Submission failed",
        message: error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const title =
    initialService && SERVICES.includes(initialService)
      ? `Free assessment · ${initialService}`
      : "Free assessment";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          className="absolute right-3 top-3 text-sm text-slate-500 hover:text-slate-700"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h3 className="mb-1 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm text-slate-600">
          Tell us a bit about your situation. We&apos;ll review and reply with
          tailored next steps.
        </p>

        <div className="mb-4 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800">
            {initialService && SERVICES.includes(initialService)
              ? initialService
              : "Any service"}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800">
            Curated plan & timeline
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800">
            One follow-up max
          </span>
        </div>

        <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                placeholder="+1 (817) 966-0481"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Country
              </label>
              <select
                name="country"
                required
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                defaultValue=""
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Stage
              </label>
              <select
                name="stage"
                required
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                defaultValue=""
              >
                <option value="">Select stage</option>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-900">
                Timeframe
              </label>
              <select
                name="timeframe"
                required
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                defaultValue=""
              >
                <option value="">Select timeframe</option>
                {TIMEFRAMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-900">
              Service interest
            </label>
            <select
              name="service"
              required
              disabled={isSubmitting}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
              defaultValue={
                initialService && SERVICES.includes(initialService)
                  ? initialService
                  : ""
              }
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-900">
              Notes (optional)
            </label>
            <textarea
              name="message"
              rows={3}
              disabled={isSubmitting}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
              placeholder="Anything we should know before we reach out?"
            />
          </div>
          {/* Honeypot field */}
          <input
            type="text"
            name="companyWebsite"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          />
          {/* Toast notifications handle success/error feedback */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#FFC72C] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-[#FFD54F] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting…" : "Request assessment"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
