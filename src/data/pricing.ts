export type PlanFeature = "Included" | "Not included" | string;

export interface BookkeepingPlan {
  name: string;
  price: string;
  idealFor: string;
  transactions: string;
  accounts: string;
  strategyReview: string;
  highlight?: boolean;
}

export interface FormationPlan {
  name: string;
  price: string;
  whoItsFor: string;
  whatYouGet: string;
}

export interface FormationFeature {
  category: string;
  feature: string;
  ignite: PlanFeature;
  elevate: PlanFeature;
  propel: PlanFeature;
}

export interface TaxService {
  name: string;
  price: string;
  bestFor: string;
  included: string[];
}

export interface AddOnService {
  service: string;
  description: string;
  fee: string;
  recommendedPlan: string;
}

export interface OtherFee {
  service: string;
  description: string;
  fee: string;
}

export const bookkeepingPlans: BookkeepingPlan[] = [
  {
    name: "Essential",
    price: "$150",
    idealFor: "New investors or small business owners needing clean, accurate books",
    transactions: "≤ 200",
    accounts: "≤ 2",
    strategyReview: "Quarterly",
  },
  {
    name: "Growth",
    price: "$300",
    idealFor: "Growing investors or scaling businesses with more complexity",
    transactions: "≤ 300",
    accounts: "≤ 2",
    strategyReview: "Monthly",
    highlight: true,
  },
  {
    name: "Supreme",
    price: "$900",
    idealFor: "Companies needing detailed oversight, reporting, and communication",
    transactions: "≤ 1000",
    accounts: "≤ 6",
    strategyReview: "Weekly",
  },
  {
    name: "Enterprise",
    price: "$1200",
    idealFor: "Multi-entity or high-volume firms needing full-time remote finance team",
    transactions: "1,000+",
    accounts: "Unlimited",
    strategyReview: "Daily",
  },
];

export const formationPlans: FormationPlan[] = [
  {
    name: "Ignite",
    price: "$199/year",
    whoItsFor: "Get your business off the ground fast",
    whatYouGet: "Quick, cost-effective setup",
  },
  {
    name: "Elevate",
    price: "$999/year",
    whoItsFor: "Stay compliant while growing",
    whatYouGet: "End-to-end compliance coverage",
  },
  {
    name: "Propel",
    price: "$229/month",
    whoItsFor: "Full-scale finance & compliance support for scaling companies",
    whatYouGet: "Accounting, bookkeeping & regulatory backup for your growing biz",
  },
];

export const formationFeatures: FormationFeature[] = [
  // Company Setup & Core Docs
  {
    category: "Company Setup & Core Docs",
    feature: "Business Registration Filing",
    ignite: "Included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Company Setup & Core Docs",
    feature: "Federal Tax ID (EIN)",
    ignite: "Included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Company Setup & Core Docs",
    feature: "Operating Agreement / Corporate Bylaws",
    ignite: "Included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Company Setup & Core Docs",
    feature: "Priority EIN Processing",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Company Setup & Core Docs",
    feature: "Beneficial Ownership (BOI) Submission",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Company Setup & Core Docs",
    feature: "Voluntary Company Dissolution Support",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  // Compliance & Business Address
  {
    category: "Compliance & Business Address",
    feature: "Registered Agent (1 Year)",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Compliance & Business Address",
    feature: "Professional Virtual Office Address",
    ignite: "Included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Compliance & Business Address",
    feature: "Dedicated Suite Number",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Compliance & Business Address",
    feature: "Address Proof (Lease / Utility Bill)",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  // Tax & Regulatory Assistance
  {
    category: "Tax & Regulatory Assistance",
    feature: "State Annual Compliance Filings",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Tax & Regulatory Assistance",
    feature: "One-on-One Accountant Guidance",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Tax & Regulatory Assistance",
    feature: "Federal Business Tax Filing Support",
    ignite: "Not included",
    elevate: "Not included",
    propel: "Included",
  },
  // Accounting, Bookkeeping & Insights
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Transaction Monitoring & Categorization",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Exportable Financial Statements",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Multiple Bank Account Integration",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Periodic Financial Closings",
    ignite: "Not included",
    elevate: "Quarterly",
    propel: "Monthly",
  },
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Dedicated Accounting Professional",
    ignite: "Not included",
    elevate: "Not included",
    propel: "Included",
  },
  {
    category: "Accounting, Bookkeeping & Insights",
    feature: "Annual Financial Health Report",
    ignite: "Not included",
    elevate: "Included",
    propel: "Included",
  },
];

export const freeServices = {
  name: "Business Launch Checklist & Webinar Access",
  description: "Step-by-step launch guide plus exclusive founder webinars.",
  fee: "Free",
  recommendedPlan: "Ignite / Elevate / Propel",
};

export const taxServices: TaxService[] = [
  {
    name: "Individual Federal Tax Return",
    price: "$150",
    bestFor: "W-2 taxpayers with possible small business interests",
    included: [
      "Final review call",
      "Estimated tax calculation for next year",
      "Tax extension filing (if applicable)",
      "Unlimited email support",
    ],
  },
  {
    name: "Individual Federal Tax Return",
    price: "$300",
    bestFor: "W-2 taxpayers, K1s, Sch C income, Rental Income",
    included: [
      "Final review call",
      "Estimated tax calculation for next year",
      "Tax extension filing (if applicable)",
      "Unlimited email support",
    ],
  },
  {
    name: "Partnership Tax Return (Form 1065)",
    price: "$500",
    bestFor: "Partnerships with up to 2 partners",
    included: [
      "K-1 preparation",
      "Reporting of income/deductions/credits",
      "Deduction optimization",
      "Extension filing",
      "Post-filing IRS support",
      "Secure portal access",
      "Tax planning only if requested",
    ],
  },
  {
    name: "S-Corp Tax Return (Form 1120S)",
    price: "$500",
    bestFor: "S-Corps with up to 2 shareholders",
    included: [
      "K-1 preparation",
      "Reporting of income/deductions/credits",
      "Deduction optimization",
      "Extension filing",
      "Post-filing IRS support",
      "Secure portal access",
      "Tax planning only if requested",
    ],
  },
  {
    name: "C-Corp Tax Return (Form 1120)",
    price: "$750",
    bestFor: "Complex C-Corp structures",
    included: [
      "Custom quote",
      "Reporting of income/deductions/credits",
      "Deduction optimization",
      "Extension filing",
      "Post-filing IRS support",
      "Secure portal access",
      "Tax planning only if requested",
    ],
  },
  {
    name: "Consultation",
    price: "Free",
    bestFor: "Tax related and Other preliminary discussion",
    included: [],
  },
];

export const addOnServices: AddOnService[] = [
  {
    service: "Business Templates Pack",
    description: "Access to professionally drafted contracts, NDAs, invoices, and legal agreements.",
    fee: "$49 (one-time)",
    recommendedPlan: "Ignite / Elevate / Propel",
  },
  {
    service: "Banking & Payment Setup Assistance",
    description: "Support with setting up U.S. bank accounts and integrating Stripe or PayPal.",
    fee: "$99 (one-time)",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "One-on-One Mentorship / Advisory Session",
    description: "30–60 minute personalized guidance on business structuring, compliance, or growth strategy.",
    fee: "$79 per session",
    recommendedPlan: "Ignite / Elevate / Propel",
  },
  {
    service: "Priority Support / Dedicated Consultant",
    description: "Faster response times with personalized consultant support.",
    fee: "$79 per session",
    recommendedPlan: "Propel",
  },
  {
    service: "Branding Starter Kit",
    description: "Logo design, social media graphics, and a basic brand style guide.",
    fee: "$199 (one-time)",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Additional State Tax Return",
    description: "Filing for extra state returns beyond your plan coverage.",
    fee: "$99 per state",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Partner / Owner Tax Return",
    description: "Individual tax filing for partners or business owners.",
    fee: "$100–$249 per person",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "ITIN Application",
    description: "Filing support for Individual Taxpayer Identification Numbers for non-U.S. owners.",
    fee: "$399",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Full Tax Planning Session",
    description: "In-depth session to optimize tax strategy and deductions.",
    fee: "$79 per session",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Payroll Setup & Filing",
    description: "Complete payroll setup and monthly filing service.",
    fee: "$49 per month",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Bookkeeping Expansion",
    description: "Additional bookkeeping services beyond standard plan limits.",
    fee: "Custom quote",
    recommendedPlan: "Elevate / Propel",
  },
  {
    service: "Sales Tax Filing",
    description: "Monthly sales filing service.",
    fee: "$49 per month",
    recommendedPlan: "Elevate / Propel",
  },
];

export const otherFees: OtherFee[] = [
  {
    service: "US phone number setup",
    description: "We help you obtain and configure a U.S.-based business phone number that works globally.",
    fee: "$15 -$40 per month",
  },
  {
    service: "Compliance reminder system",
    description: "Automated notification system that alerts you about important business deadlines such as annual state filings, tax due dates, BOI updates, and license renewals.",
    fee: "Contact Sales",
  },
  {
    service: "Business email setup",
    description: "Setup of a professional business email using your domain (e.g., info@yourcompany.com) through Google Workspace or Microsoft 365.",
    fee: "Contact Sales",
  },
];

export const pricingFAQs = [
  {
    q: "What are state fees?",
    a: "State fees are mandatory charges imposed by the state where you're incorporating your business. These fees vary by state and typically range from $50 to $500+ depending on the state and entity type. We confirm the exact amount before filing so there are no surprises.",
  },
  {
    q: "Can I upgrade plans later?",
    a: "Yes, absolutely. You can upgrade your plan at any time to access more features, higher transaction limits, or additional services. We'll prorate any charges and ensure a smooth transition.",
  },
  {
    q: "What is included in bookkeeping?",
    a: "Our bookkeeping plans include transaction categorization, bank reconciliation, financial statement preparation, and monthly or quarterly reporting depending on your plan. Higher-tier plans include more frequent strategy reviews and dedicated accounting professional support.",
  },
  {
    q: "Do you support non-US founders?",
    a: "Yes, we specialize in supporting non-US founders. We can help with ITIN applications, cross-border tax planning, and ensuring compliance with both US and international requirements.",
  },
  {
    q: "How quickly can you form a company?",
    a: "With our Ignite plan, we can typically complete company formation within 5-7 business days after receiving all required documents. Priority processing is available with Elevate and Propel plans for faster turnaround.",
  },
  {
    q: "Do you provide ongoing compliance reminders?",
    a: "Yes, our Elevate and Propel plans include automated compliance reminders for state filings, tax due dates, BOI updates, and license renewals. This helps ensure you never miss important deadlines.",
  },
  {
    q: "What happens if I exceed my transaction limit?",
    a: "If you exceed your plan's transaction limit, we'll contact you to discuss upgrading to a higher tier or adding a bookkeeping expansion add-on. We'll never surprise you with unexpected charges.",
  },
  {
    q: "Are there any setup fees?",
    a: "No setup fees for any of our plans. You only pay the monthly or annual plan fee plus any applicable state fees for company formation. All pricing is transparent with no hidden costs.",
  },
];

