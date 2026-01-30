import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variantClasses = {
  primary: "bg-[#FFC72C] text-slate-900 hover:bg-[#FFD54F] font-semibold",
  secondary: "bg-[#002147] text-white hover:bg-[#003366] font-semibold",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 font-medium",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 font-medium",
};

export function Button({
  children,
  size = "md",
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

