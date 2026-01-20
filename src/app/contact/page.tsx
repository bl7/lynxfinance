"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { submitEnquiry } from "@/lib/submitEnquiry";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const validateEmailField = (value: string) => {
    const email = value.trim();
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (email.length > 120) {
      setEmailError("Email is too long");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePhoneField = (value: string) => {
    const phone = value.trim();
    if (!phone) {
      // Optional field – no error if empty
      setPhoneError(null);
      return true;
    }
    if (phone.length > 30) {
      setPhoneError("Phone number is too long");
      return false;
    }
    if (!/^[0-9+\-().\s]{7,30}$/.test(phone)) {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setSubmitError(null);
    setIsSuccess(false);
    setReferenceId(null);
    setEmailError(null);
    setPhoneError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(formEl);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const country = formData.get("country") as string;
      const service = formData.get("service") as string;
      const message = formData.get("message") as string;

      // Validation
      if (!name || name.trim() === "") {
        throw new Error("Name is required");
      }

      if (!email || !email.includes("@")) {
        throw new Error("Valid email is required");
      }

      if (!service || service.trim() === "") {
        throw new Error("Service interest is required");
      }

      const normalizedName = name.trim();
      const normalizedEmail = email.trim();
      const normalizedPhone = phone?.trim();
      const normalizedCountry = country?.trim();
      const normalizedService = service.trim();
      const normalizedMessage = message?.trim();

      if (normalizedName.length < 2 || normalizedName.length > 80) {
        throw new Error("Name must be between 2 and 80 characters");
      }
      if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(normalizedName)) {
        throw new Error("Name contains invalid characters");
      }
      if (normalizedEmail.length > 120) {
        throw new Error("Email is too long");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        throw new Error("Please enter a valid email address");
      }
      if (normalizedPhone && normalizedPhone.length > 30) {
        throw new Error("Phone number is too long");
      }
      if (normalizedPhone && !/^[0-9+\-().\s]{7,30}$/.test(normalizedPhone)) {
        throw new Error("Please enter a valid phone number");
      }
      if (
        !normalizedCountry ||
        (normalizedCountry !== "US" &&
          normalizedCountry !== "Nepal" &&
          normalizedCountry !== "Others")
      ) {
        throw new Error("Please select a valid country");
      }
      if (normalizedMessage && normalizedMessage.length > 1500) {
        throw new Error("Message is too long (max 1500 characters)");
      }

      const result = await submitEnquiry({
        name: normalizedName,
        email: normalizedEmail,
        phone: normalizedPhone || undefined,
        country: normalizedCountry || undefined,
        service: normalizedService,
        message: normalizedMessage || undefined,
        companyWebsite,
      });

      setIsSuccess(true);
      if (result.id && result.id !== "SPAM") {
        setReferenceId(result.id);
      }

      // Reset form fields
      formEl.reset();
      setCompanyWebsite("");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Contact"
        title="Schedule time with LYNX Finance Consulting."
        subtitle="Share a few details about your organization and the type of support you are looking for, and we'll follow up with available times for an initial conversation."
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-6">
        <motion.form
          className="relative space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-900 shadow-lg transition-all duration-300 hover:border-[#FFC72C]/30"
          variants={cardFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
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
                onChange={(e) => validateEmailField(e.target.value)}
                onBlur={(e) => validateEmailField(e.target.value)}
              />
              {emailError && (
                <p className="mt-1 text-[11px] text-red-600">{emailError}</p>
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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
                onChange={(e) => validatePhoneField(e.target.value)}
                onBlur={(e) => validatePhoneField(e.target.value)}
              />
              {phoneError && (
                <p className="mt-1 text-[11px] text-red-600">{phoneError}</p>
              )}
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
                <option value="US">US</option>
                <option value="Nepal">Nepal</option>
                <option value="Others">Others</option>
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
            >
              <option value="">Select a service</option>
              <option>Accounting &amp; Bookkeeping</option>
              <option>Tax Compliance</option>
              <option>Excel and Google sheet modeling</option>
              <option>Financial modeling</option>
              <option>Budgeting and Financial Services</option>
              <option>Process Automation Services</option>
              <option>Virtual CFO</option>
              <option>US Company Formation</option>
              <option>EIN (Employer Identification Number)</option>
              <option>US Business Bank Account</option>
              <option>Registered Agent Services</option>
              <option>ITIN (Individual Taxpayer Identification Number)</option>
              <option>Bookkeeping &amp; Tax Services</option>
              <option>Annual Compliance &amp; State Filings</option>
              <option>Migrate Your Company to Lynx</option>
              <option>Multiple / Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-900">
              Tell us briefly about your organization
            </label>
            <textarea
              name="message"
              rows={4}
              disabled={isSubmitting}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
              placeholder="Size of your team, industry, current finance setup, and what you'd like help with."
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
          {submitError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
              {submitError}
            </div>
          )}
          {isSuccess && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-xs">
              <h3 className="mb-2 font-semibold text-green-900">
                Inquiry received
              </h3>
              <p className="text-green-800">
                Thanks, we've received your inquiry. Our team will reach out
                shortly.
              </p>
              {referenceId && (
                <p className="mt-2 font-medium text-green-900">
                  Reference ID: {referenceId}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FFC72C] px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-[#FFD54F] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting…" : "Submit inquiry"}
          </button>
        </motion.form>

        <motion.div
          className="space-y-5 text-xs text-slate-600"
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              US Office
            </h3>
            <p className="mt-2 text-slate-600">Texas, USA</p>
            <p className="mt-2 text-slate-600">Phone: +1 (817) 966-0481</p>
            <p className="mt-3 text-slate-600">Virginia, USA</p>
            <p className="mt-2 text-slate-600">Phone: +1 (757) 338-3452</p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC72C]/30"
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              Nepal Office
            </h3>
            <p className="mt-2 text-slate-600">Kathmandu, Nepal</p>
            <p className="mt-2 text-slate-600">Phone: +977-9861888856</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
