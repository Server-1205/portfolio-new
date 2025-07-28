import React from "react";
import { cn } from "@/shared/lib/css";
import { motion } from "framer-motion";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "spinner" | "dots" | "pulse" | "bars" | "ring";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent" | "white";
  fullscreen?: boolean;
  text?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      variant = "spinner",
      size = "md",
      color = "primary",
      fullscreen = false,
      text,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: "w-4 h-4",
      md: "w-8 h-8",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
    };

    const colors = {
      primary: "text-primary-400 border-primary-400",
      secondary: "text-secondary-400 border-secondary-400",
      accent: "text-accent-400 border-accent-400",
      white: "text-white border-white",
    };

    const renderLoader = () => {
      switch (variant) {
        case "spinner":
          return (
            <div
              className={cn(
                "animate-spin rounded-full border-2 border-t-transparent",
                sizes[size],
                colors[color]
              )}
            />
          );

        case "dots":
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "rounded-full bg-current",
                    {
                      "w-2 h-2": size === "sm",
                      "w-3 h-3": size === "md",
                      "w-4 h-4": size === "lg",
                      "w-5 h-5": size === "xl",
                    },
                    colors[color]
                  )}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          );

        case "pulse":
          return (
            <motion.div
              className={cn(
                "rounded-full bg-current",
                sizes[size],
                colors[color]
              )}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          );

        case "bars":
          return (
            <div className="flex space-x-1 items-end">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "bg-current",
                    {
                      "w-1 h-4": size === "sm",
                      "w-1.5 h-6": size === "md",
                      "w-2 h-8": size === "lg",
                      "w-2.5 h-10": size === "xl",
                    },
                    colors[color]
                  )}
                  animate={{
                    scaleY: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          );

        case "ring":
          return (
            <div className={cn("relative", sizes[size])}>
              <div
                className={cn(
                  "absolute inset-0 rounded-full border-2 border-transparent border-t-current animate-spin",
                  colors[color]
                )}
              />
              <div
                className={cn(
                  "absolute inset-1 rounded-full border-2 border-transparent border-t-current animate-spin",
                  colors[color]
                )}
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              />
            </div>
          );

        default:
          return null;
      }
    };

    const content = (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center space-y-4",
          fullscreen && "fixed inset-0 bg-dark/90 backdrop-blur-sm z-50",
          className
        )}
        {...props}
      >
        {renderLoader()}
        {text && (
          <motion.p
            className={cn("text-sm font-medium", colors[color])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );

    return content;
  }
);

Loading.displayName = "Loading";

export default Loading;
