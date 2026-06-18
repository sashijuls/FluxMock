"use client";
import "./ScrollReveal.css";
import { useEffect, useRef, HTMLAttributes } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const initial =
      direction === "up"    ? "translateY(24px)" :
      direction === "left"  ? "translateX(-32px)" :
                              "translateX(32px)";

    el.style.opacity = "0";
    el.style.transform = initial;
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, direction]);

  const classNames = ["scroll-reveal", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classNames} style={style} {...props}>
      {children}
    </div>
  );
}
