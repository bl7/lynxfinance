import type { NextApiRequest, NextApiResponse } from "next";

type OkResponse = { ok: true; id: string };
type ErrorResponse = { ok: false; error: string };

const ALLOWED_SERVICES = new Set<string>([
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
]);

const ALLOWED_COUNTRIES = new Set<string>(["US", "Nepal", "Others"]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OkResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_ENQUIRY_API_KEY;

  if (!endpoint) {
    return res.status(500).json({
      ok: false,
      error: "NEXT_PUBLIC_ENQUIRY_ENDPOINT is not configured",
    });
  }

  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      error: "NEXT_PUBLIC_ENQUIRY_API_KEY is not configured",
    });
  }

  try {
    const clientBody =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // Basic payload validation (server-side)
    const name =
      typeof clientBody?.name === "string" ? clientBody.name.trim() : "";
    const email =
      typeof clientBody?.email === "string" ? clientBody.email.trim() : "";
    const phone =
      typeof clientBody?.phone === "string" ? clientBody.phone.trim() : "";
    const country =
      typeof clientBody?.country === "string" ? clientBody.country.trim() : "";
    const service =
      typeof clientBody?.service === "string" ? clientBody.service.trim() : "";
    const message =
      typeof clientBody?.message === "string" ? clientBody.message.trim() : "";
    const companyWebsite =
      typeof clientBody?.companyWebsite === "string"
        ? clientBody.companyWebsite.trim()
        : "";

    if (companyWebsite) {
      // Honeypot tripped — don't forward upstream
      return res.status(200).json({ ok: true, id: "SPAM" });
    }

    if (!isNonEmptyString(name) || name.length < 2 || name.length > 80) {
      return res.status(400).json({ ok: false, error: "Invalid name" });
    }
    if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(name)) {
      return res.status(400).json({ ok: false, error: "Invalid name" });
    }
    if (!isNonEmptyString(email) || email.length > 120) {
      return res.status(400).json({ ok: false, error: "Invalid email" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email" });
    }
    if (!isNonEmptyString(service) || !ALLOWED_SERVICES.has(service)) {
      return res
        .status(400)
        .json({ ok: false, error: "Invalid service selection" });
    }
    if (phone && (phone.length > 30 || !/^[0-9+\-().\s]{7,30}$/.test(phone))) {
      return res.status(400).json({ ok: false, error: "Invalid phone number" });
    }
    if (!isNonEmptyString(country) || !ALLOWED_COUNTRIES.has(country)) {
      return res.status(400).json({ ok: false, error: "Invalid country" });
    }
    if (message && message.length > 1500) {
      return res.status(400).json({ ok: false, error: "Message is too long" });
    }

    // Use server-side API key (don't trust client input)
    const body = {
      ...clientBody,
      apiKey,
      // Ensure normalized fields are forwarded
      name,
      email,
      phone,
      country,
      service,
      message,
    };

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await upstream.text();

    // Google Apps Script sometimes returns non-JSON on errors
    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = {};
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        ok: false,
        error:
          (data && typeof data.error === "string" && data.error) ||
          `Upstream error: ${upstream.status} ${upstream.statusText}`,
      });
    }

    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({
      ok: false,
      error: e instanceof Error ? e.message : "Unexpected server error",
    });
  }
}
