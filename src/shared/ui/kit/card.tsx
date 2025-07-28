import React from "react";
import { cn } from "@/shared/lib/css";
import { motion } from "framer-motion";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "default" | "gradient" | "outline" | "glow";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "black";
  align?: "left" | "center" | "right";
  animated?: boolean;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  variant = "default",
  size,
  weight = "bold",
  align = "left",
  animated = false,
  className,
  children,
  as: Component = "h2",
  ...props
}: HeadingProps) => {
  // Default sizes based on heading level

  const baseClasses = "leading-tight";

  const variants = {
    default: "text-white",
    gradient:
      "bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent",
    outline:
      "text-transparent bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text stroke-2 stroke-white",
    glow: "text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]",
  };

  const sizes = {
    xs: "text-xs",
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
    "2xl": "text-2xl md:text-4xl",
    "3xl": "text-3xl md:text-5xl lg:text-6xl",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  };

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const content = (
    <Component
      className={cn(
        baseClasses,
        variants[variant],
        weights[weight],
        alignments[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

Heading.displayName = "Heading";
