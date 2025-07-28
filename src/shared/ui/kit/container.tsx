import React from "react";
import { cn } from "@/shared/lib/css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  centered?: boolean;
  children: React.ReactNode;
}

export const Container = ({
  size = "lg",
  padding = "md",
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) => {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-full",
  };

  const paddings = {
    none: "",
    sm: "px-4",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-6 sm:px-8 lg:px-12",
  };

  return (
    <div
      className={cn(
        sizes[size],
        paddings[padding],
        centered && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
