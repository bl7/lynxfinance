export type EnquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  service: string;
  message?: string;
  companyWebsite?: string; // honeypot
};

export type SubmitResult = { id: string };

export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<SubmitResult> {
  // Honeypot check
  if (payload.companyWebsite && payload.companyWebsite.trim() !== "") {
    return { id: "SPAM" };
  }

  // Collect metadata
  const pageUrl = window.location.href;
  const referrer = document.referrer || "";
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const userAgent = navigator.userAgent;

  // Prepare request body
  const body = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone || "",
    country: payload.country || "",
    service: payload.service,
    message: payload.message || "",
    companyWebsite: payload.companyWebsite || "",
    metadata: {
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      userAgent,
    },
  };

  // Make POST request to our Next.js API route (which proxies to Google Apps Script)
  // This avoids CORS issues by making the request server-side
  let response: Response;
  try {
    response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    // Network error (connection refused, etc.)
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Network error: Could not reach the server. Please check your internet connection."
      );
    }
    throw new Error(
      `Failed to submit: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }

  // Parse response
  let data: { ok: boolean; id?: string; error?: string };
  try {
    data = await response.json();
  } catch (error) {
    throw new Error(
      `Unexpected response format from enquiry service. Status: ${response.status} ${response.statusText}`
    );
  }

  // Check if response is ok
  if (!response.ok) {
    throw new Error(
      data.error ||
        `Server error: ${response.status} ${response.statusText}. Please check your endpoint configuration.`
    );
  }

  // Check response
  if (data.ok !== true) {
    throw new Error(data.error || "Submission failed");
  }

  if (!data.id) {
    throw new Error("Unexpected response from enquiry service");
  }

  return { id: data.id };
}
