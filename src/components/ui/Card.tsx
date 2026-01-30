import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
  variant?: "default" | "bordered" | "elevated";
};

export function Card({
  children,
  className,
  hover = true,
  variant = "default",
  ...props
}: CardProps) {
  const baseClasses = "rounded-2xl bg-white transition-all duration-300";
  
  const variantClasses = {
    default: "border border-slate-200 shadow-sm",
    bordered: "border border-slate-200",
    elevated: "border border-slate-200 shadow-lg",
  };
  
  const hoverClasses = hover
    ? "hover:-translate-y-1 hover:border-[#FFC72C]/30 hover:shadow-lg"
    : "";

  return (
    <div
      {...props}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
}

