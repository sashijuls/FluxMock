import "./Badge.css";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "purple" | "orange" | "pink" | "cyan" | "green" | "gold" | "dark" | "premium";
  dot?: boolean;
}

export default function Badge({ className, variant = "purple", dot, children, ...props }: BadgeProps) {
  const variantClass = `badge--${variant}`;
  const classNames = [
    "badge",
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames} {...props}>
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  );
}
