"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { useToast } from "@/components/ToastProvider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, MessageSquare, ArrowRight } from "lucide-react";

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

export default function ContactClient() {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

      if (!name || name.trim() === "") throw new Error("Name is required");
      if (!email || !email.includes("@"))
        throw new Error("Valid email is required");
      if (!service || service.trim() === "")
        throw new Error("Service interest is required");

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
      if (normalizedEmail.length > 120) throw new Error("Email is too long");
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
        country: normalizedCountry,
        service: normalizedService,
        message: normalizedMessage || undefined,
        companyWebsite,
      });

      showToast({
        type: "success",
        title: "Inquiry received",
        message:
          result.id && result.id !== "SPAM"
            ? `Reference ID: ${result.id}`
            : "Thanks, we’ve received your inquiry.",
      });

      formEl.reset();
      setCompanyWebsite("");
    } catch (error) {
      const msg = error instanceof Error ? error.message : "An error occurred";
      showToast({ type: "error", title: "Submission failed", message: msg });
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Contact"
        title="Schedule time with LYNX Finance Consulting."
        subtitle="Share a few details about your organization and the type of support you are looking for, and we’ll follow up with available times for an initial conversation."
      />
      <Container size="md" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <motion.form
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            onSubmit={handleSubmit}
          >
            <Card className="relative space-y-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="you@company.com"
                    onChange={(e) => validateEmailField(e.target.value)}
                    onBlur={(e) => validateEmailField(e.target.value)}
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-600">{emailError}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="+1 (817) 966-0481"
                    onChange={(e) => validatePhoneField(e.target.value)}
                    onBlur={(e) => validatePhoneField(e.target.value)}
                  />
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-600">{phoneError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
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
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Service interest
                </label>
                <select
                  name="service"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                  defaultValue=""
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
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Tell us briefly about your organization
                </label>
                <textarea
                  name="message"
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C]/20 disabled:bg-slate-50 disabled:text-slate-500"
                  placeholder="Size of your team, industry, current finance setup, and what you'd like help with."
                />
              </div>
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
              {submitError ? (
                <p className="text-xs text-red-600">{submitError}</p>
              ) : null}
              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                className="mt-2"
              >
                {isSubmitting ? "Submitting…" : "Submit inquiry"}
              </Button>
            </Card>
          </motion.form>

          <motion.div
            className="space-y-5"
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 mb-4">
                US Office
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-medium text-slate-900">Texas, USA</p>
                  <p>Phone: +1 (817) 966-0481</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Virginia, USA</p>
                  <p>Phone: +1 (757) 338-3452</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>

      {/* What happens next section */}
      <Section spacing="md" className="mt-16 border-t border-slate-200 bg-slate-50">
        <Container size="md">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">What happens next?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                After you submit your inquiry, here's what to expect:
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={0}
              >
                <Card className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC72C]/10">
                      <MessageSquare className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    We review your inquiry
                  </h3>
                  <p className="text-sm text-slate-600">
                    Our team reviews your details and service interests to understand your needs.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={1}
              >
                <Card className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC72C]/10">
                      <Clock className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    We schedule a call
                  </h3>
                  <p className="text-sm text-slate-600">
                    Within 24-48 hours, we'll reach out to schedule an initial conversation at your convenience.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={2}
              >
                <Card className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC72C]/10">
                      <CheckCircle2 className="h-6 w-6 text-[#FFC72C]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    We provide next steps
                  </h3>
                  <p className="text-sm text-slate-600">
                    During our call, we'll discuss your needs, answer questions, and outline a path forward.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
