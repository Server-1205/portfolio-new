import React from "react";
import { cn } from "@/shared/lib/css";
import { motion, HTMLMotionProps } from "framer-motion";

interface BadgeProps {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "glass";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

type MotionBadgeProps = BadgeProps &
  Omit<HTMLMotionProps<"div">, keyof BadgeProps>;

export const Badge = React.forwardRef<HTMLDivElement, MotionBadgeProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      pulse = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center font-medium rounded-full transition-all duration-300";

    const variants = {
      primary:
        "bg-primary-500/20 text-primary-400 border border-primary-500/30",
      secondary:
        "bg-secondary-500/20 text-secondary-400 border border-secondary-500/30",
      accent: "bg-accent-500/20 text-accent-400 border border-accent-500/30",
      success: "bg-green-500/20 text-green-400 border border-green-500/30",
      warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
      error: "bg-red-500/20 text-red-400 border border-red-500/30",
      info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      glass: "glass-effect text-white/80 border border-white/20",
    };

    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          pulse && "animate-pulse",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {icon && <span className="mr-1.5">{icon}</span>}
        {children}
      </motion.div>
    );
  }
);

Badge.displayName = "Badge";
