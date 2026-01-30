import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[var(--container-max-width)]",
};

export function Container({
  children,
  className,
  size = "full",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 lg:px-6",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

