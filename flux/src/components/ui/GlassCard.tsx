"use client";
import "./GlassCard.css";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light" | "purple" | "solid-dark" | "solid-purple" | "solid-orange" | "solid-pink" | "solid-cyan";
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "dark", hover = false, glow = false, children, ...props }, ref) => {
    const variantClass = `glass-card--${variant}`;
    const hoverClass = hover ? "glass-card--hover" : "";
    const glowClass = glow ? "glass-card--glow" : "";

    const classNames = [
      "glass-card",
      variantClass,
      hoverClass,
      glowClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export default GlassCard;
