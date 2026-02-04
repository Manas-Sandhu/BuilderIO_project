import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export default function PremiumButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  href,
}: PremiumButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg relative group overflow-hidden";

  const variantStyles = {
    primary:
      "bg-gold text-background hover:scale-105 hover:shadow-xl hover:shadow-gold/40 active:bg-gold-dark",
    secondary:
      "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg hover:shadow-gold/20",
    accent:
      "bg-electric-blue text-white hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-electric-blue/40",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {/* Glow backdrop for glow effect */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      )}
      {variant === "accent" && (
        <div className="absolute inset-0 bg-electric-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {buttonContent}
    </button>
  );
}
