import React from "react";
import { cn } from "@/shared/lib/css";
import { motion } from "framer-motion";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "white"
    | "gray"
    | "success"
    | "warning"
    | "error";
  variant?: "solid" | "outline" | "duotone";
  animated?: boolean;
  pulse?: boolean;
  spin?: boolean;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      name,
      size = "md",
      color = "white",
      variant = "solid",
      animated = false,
      pulse = false,
      spin = false,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    };

    const colors = {
      primary: "text-primary-400",
      secondary: "text-secondary-400",
      accent: "text-accent-400",
      white: "text-white",
      gray: "text-gray-400",
      success: "text-green-400",
      warning: "text-yellow-400",
      error: "text-red-400",
    };

    const variants = {
      solid: "fas",
      outline: "far",
      duotone: "fad",
    };

    const iconClasses = cn(
      variants[variant],
      `fa-${name}`,
      sizes[size],
      colors[color],
      pulse && "animate-pulse",
      spin && "animate-spin",
      className
    );

    const IconElement = <i className={iconClasses} {...props} />;

    if (animated) {
      return (
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block"
        >
          {IconElement}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className="inline-block">
        {IconElement}
      </div>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
