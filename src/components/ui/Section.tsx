import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "none";
  background?: "white" | "gray" | "slate";
};

const spacingClasses = {
  sm: "py-12",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-24",
  none: "",
};

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-slate-50",
  slate: "bg-slate-950",
};

export function Section({
  children,
  className,
  spacing = "md",
  background = "white",
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}

