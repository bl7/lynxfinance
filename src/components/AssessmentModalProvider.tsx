"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { AssessmentModal } from "./AssessmentModal";
import { GetStartedModal } from "./GetStartedModal";

type AssessmentModalContextType = {
  openAssessment: (initialService?: string | null) => void;
  openGetStarted: (args: {
    service: string;
    packageName?: string | null;
    source?: string | null;
  }) => void;
  closeModal: () => void;
};

const AssessmentModalContext = createContext<AssessmentModalContextType | null>(
  null
);

export function AssessmentModalProvider({ children }: { children: ReactNode }) {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [assessmentService, setAssessmentService] = useState<string | null>(
    null
  );
  const [getStartedService, setGetStartedService] = useState<string | null>(
    null
  );
  const [getStartedPackage, setGetStartedPackage] = useState<string | null>(
    null
  );
  const [getStartedSource, setGetStartedSource] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      openAssessment: (svc?: string | null) => {
        setAssessmentService(svc ?? null);
        setAssessmentOpen(true);
      },
      openGetStarted: (args: {
        service: string;
        packageName?: string | null;
        source?: string | null;
      }) => {
        setGetStartedService(args.service);
        setGetStartedPackage(args.packageName ?? null);
        setGetStartedSource(args.source ?? null);
        setGetStartedOpen(true);
      },
      closeModal: () => {
        setAssessmentOpen(false);
        setGetStartedOpen(false);
      },
    }),
    []
  );

  return (
    <AssessmentModalContext.Provider value={value}>
      {children}
      <AssessmentModal
        open={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
        initialService={assessmentService}
      />
      <GetStartedModal
        open={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        service={getStartedService}
        packageName={getStartedPackage}
        source={getStartedSource}
      />
    </AssessmentModalContext.Provider>
  );
}

export function useAssessmentModal() {
  const ctx = useContext(AssessmentModalContext);
  if (!ctx) {
    throw new Error(
      "useAssessmentModal must be used within an AssessmentModalProvider"
    );
  }
  return ctx;
}
