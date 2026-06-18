"use client";
import "./CTASection.css";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="cta">
      {/* Glow center */}
      <div className="cta__glow">
        <div className="cta__glow-blob" />
      </div>

      <div className="cta__container">
        <ScrollReveal className="cta__content">
          {/* Logo mark */}
          <div className="cta__icon">
            <div className="cta__icon-box">
              <Zap style={{ width: '32px', height: '32px' }} fill="white" />
            </div>
          </div>

          <div className="cta__text-block">
            <h2 className="cta__title">
              <span className="gradient-text-white">Start sending smarter</span>
              <br />
              <span className="cta__title-line-2 gradient-text-purple">today.</span>
            </h2>
            <p className="cta__description">
              Join 4,200+ Indonesian students who already trust Flux
              to handle the money side of studying abroad.
            </p>
          </div>

          <div className="cta__actions">
            <div className="cta__action-row">
              <Button size="xl" variant="primary" className="cta__button group">
                Create your free account
                <ArrowRight style={{ width: '20px', height: '20px' }} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Link
                href="/dashboard"
                className="cta__demo-link"
              >
                Explore the demo dashboard →
              </Link>
            </div>
          </div>

          <p className="cta__footer-text">
            Free to start · No credit card required · Available for Indonesian students in Taiwan
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
