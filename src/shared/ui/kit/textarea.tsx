import { useState } from "react";
import { cn } from "@/shared/lib/css";
import { motion, MotionProps } from "framer-motion";

interface TextareaProps extends MotionProps {
  label?: string;
  error?: string;
  variant?: "default" | "glass" | "minimal";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  resize?: boolean;
  className?: string;
  rows?: number;
}

const Textarea = ({
  label,
  error,
  variant = "default",
  size = "md",
  fullWidth = true,
  resize = true,
  className,
  rows = 4,
  ...props
}: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses =
    "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "bg-dark-light border border-white/20 text-white placeholder-white/50 focus:border-primary-500 focus:ring-primary-500",
    glass:
      "glass-effect border border-white/20 text-white placeholder-white/50 focus:border-primary-500 focus:ring-primary-500",
    minimal:
      "bg-transparent border-b border-white/20 text-white placeholder-white/50 focus:border-primary-500 focus:ring-0 focus:ring-offset-0 rounded-none",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg",
  };

  const roundedClasses = {
    default: "rounded-lg",
    glass: "rounded-lg",
    minimal: "rounded-none",
  };

  return (
    <div className={cn("relative", fullWidth && "w-full")}>
      {label && (
        <motion.label
          className={cn(
            "block text-sm font-medium mb-2 transition-colors duration-300",
            error
              ? "text-red-400"
              : isFocused
              ? "text-primary-400"
              : "text-white/70"
          )}
          animate={{
            color: error
              ? "#f87171"
              : isFocused
              ? "#818cf8"
              : "rgba(255,255,255,0.7)",
          }}
        >
          {label}
        </motion.label>
      )}

      <motion.textarea
        rows={rows}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          roundedClasses[variant],
          !resize && "resize-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          fullWidth && "w-full",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

Textarea.displayName = "Textarea";
