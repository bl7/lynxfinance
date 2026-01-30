// Helper script to generate service page metadata
// This is a reference - actual implementation done manually for better control

const services = [
  { slug: "excel-google-sheet-modeling", name: "Excel and Google Sheet Modeling" },
  { slug: "financial-modeling", name: "Financial Modeling" },
  { slug: "budgeting-financial-services", name: "Budgeting and Financial Services" },
  { slug: "process-automation-services", name: "Process Automation Services" },
  { slug: "ein", name: "EIN (Employer Identification Number)" },
  { slug: "us-business-bank-account", name: "US Business Bank Account" },
  { slug: "registered-agent-services", name: "Registered Agent Services" },
  { slug: "itin", name: "ITIN (Individual Taxpayer Identification Number)" },
  { slug: "bookkeeping-tax-services", name: "Bookkeeping & Tax Services" },
  { slug: "annual-compliance-state-filings", name: "Annual Compliance & State Filings" },
  { slug: "migrate-company", name: "Migrate Your Company to Lynx" },
];

console.log("Services to process:", services.length);

