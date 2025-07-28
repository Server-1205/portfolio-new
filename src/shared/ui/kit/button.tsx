import React from "react";
import { cn } from "@/shared/lib/css";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
  gradient?: boolean;
  glowEffect?: boolean;
  as?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      loading = false,
      fullWidth = false,
      gradient = false,
      glowEffect = false,
      className,
      children,
      disabled,
      as,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: gradient
        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500"
        : "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
      secondary: gradient
        ? "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500"
        : "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500",
      accent: gradient
        ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 focus:ring-accent-500"
        : "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
      outline:
        "border border-white/20 text-white hover:border-primary-500/50 hover:bg-primary-500/10 focus:ring-primary-500",
      ghost: "text-white hover:bg-white/10 focus:ring-primary-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    };

    const glowClasses = glowEffect
      ? {
          primary: "hover:shadow-lg hover:shadow-primary-500/25",
          secondary: "hover:shadow-lg hover:shadow-secondary-500/25",
          accent: "hover:shadow-lg hover:shadow-accent-500/25",
          outline: "hover:shadow-lg hover:shadow-primary-500/25",
          ghost: "hover:shadow-lg hover:shadow-white/10",
        }
      : {};

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          glowEffect && glowClasses[variant],
          fullWidth && "w-full",
          loading && "cursor-wait",
          className
        )}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {icon && iconPosition === "left" && !loading && (
          <span className="mr-2">{icon}</span>
        )}

        {children}

        {icon && iconPosition === "right" && !loading && (
          <span className="ml-2">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
