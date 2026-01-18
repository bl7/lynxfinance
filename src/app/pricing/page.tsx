import { Suspense } from "react";
import { PricingContent } from "./PricingContent";

export default function PricingPage() {
  return (
    <div className="pb-16">
      <Suspense fallback={<div>Loading...</div>}>
        <PricingContent />
      </Suspense>
    </div>
  );
}

