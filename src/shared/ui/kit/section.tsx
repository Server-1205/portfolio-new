import React from "react";
import { cn } from "@/shared/lib/css";
import { Container } from "@/shared/ui/kit/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "light" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  background?: "none" | "grid" | "dots" | "waves";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      variant = "default",
      size = "md",
      background = "none",
      containerSize = "lg",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-dark",
      dark: "bg-dark-light",
      light: "bg-gray-50",
      gradient: "bg-gradient-to-br from-dark via-dark-light to-dark",
    };

    const sizes = {
      sm: "py-12",
      md: "py-20",
      lg: "py-32",
      xl: "py-40",
    };

    const backgrounds = {
      none: "",
      grid: "grid-bg",
      dots: "dots-bg",
      waves: "waves-bg",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          variants[variant],
          sizes[size],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {/* Animated Background Elements */}
        {background === "grid" && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div
              className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "-3s" }}
            />
          </div>
        )}

        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
