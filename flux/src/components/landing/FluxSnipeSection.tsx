"use client";
import "./FluxSnipeSection.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Target, Bell, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  { icon: Target,      title: "Set your target",       desc: "Choose your desired IDR → TWD rate. No stress, no guessing." },
  { icon: Bell,        title: "We watch the market",   desc: "Flux monitors live FX rates 24/7 across multiple providers." },
  { icon: Zap,         title: "Auto-execute",          desc: "The moment your rate hits, we automatically execute your transfer." },
  { icon: CheckCircle, title: "Done. Notify parents.", desc: "Parents get notified instantly. You get the money faster." },
];

/* Fake rate chart bars */
const chartBars = [42, 68, 55, 82, 61, 77, 58, 90, 65, 78, 88, 95];
const targetLine = 85;

export default function FluxSnipeSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleY(1)";
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="flux-snipe">
      {/* Background glow */}
      <div className="blob" style={{ position: 'absolute', top: '50%', left: 0, width: '320px', height: '320px', background: 'rgba(123, 97, 255, 0.15)' }} />

      <div className="flux-snipe__container">
        <div className="flux-snipe__content">
          {/* Left: visual */}
          <ScrollReveal direction="left" style={{ position: 'relative' }}>
            <GlassCard variant="solid-dark" className="border-dark-border" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Header */}
              <div className="flux-snipe__card-header">
                <div className="flux-snipe__card-header-left">
                  <div className="flux-snipe__icon-box">
                    <Target style={{ width: '16px', height: '16px', color: 'white' }} />
                  </div>
                  <div className="flux-snipe__card-info">
                    <p className="flux-snipe__card-label">FluxSnipe</p>
                    <p className="flux-snipe__card-title">IDR → TWD Tracker</p>
                  </div>
                </div>
                <Badge variant="green" dot>Active</Badge>
              </div>

              {/* Target rate */}
              <div className="flux-snipe__rate-section">
                <p className="flux-snipe__rate-label">Your target rate</p>
                <div className="flux-snipe__rate-value">
                  <p className="flux-snipe__rate-number">Rp 498</p>
                  <p className="flux-snipe__rate-suffix">per TWD</p>
                </div>
                <div className="flux-snipe__rate-meta">
                  <p className="flux-snipe__rate-meta-label">Current market:</p>
                  <p className="flux-snipe__rate-meta-current">Rp 491.20</p>
                  <Badge variant="orange" style={{ fontSize: '10px', padding: '2px 6px', marginLeft: '4px' }}>Rp 6.80 away</Badge>
                </div>
              </div>

              {/* Mini chart */}
              <div className="flux-snipe__chart">
                <div className="flux-snipe__chart-header">
                  <p className="flux-snipe__chart-label">30-day trend</p>
                  <p className="flux-snipe__chart-target">Target: Rp 498</p>
                </div>
                <div className="flux-snipe__bars">
                  {/* Target line */}
                  <div
                    ref={lineRef}
                    className="flux-snipe__target-line"
                    style={{ bottom: `${targetLine}%` }}
                  />
                  {chartBars.map((height, i) => (
                    <div
                      key={i}
                      className={height >= targetLine ? "flux-snipe__bar flux-snipe__bar--hit" : "flux-snipe__bar flux-snipe__bar--miss"}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Notification preview */}
              <div style={{
                borderRadius: '1.25rem',
                background: 'rgba(123, 97, 255, 0.1)',
                border: '1px solid rgba(123, 97, 255, 0.2)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '0.75rem',
                  background: 'rgba(123, 97, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Bell style={{ width: '16px', height: '16px', color: 'var(--color-flux-purple-light)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: 'white', margin: 0 }}>Snipe triggered!</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '2px', margin: 0 }}>Rp 498.50 reached → Rp 5,000,000 transferred automatically</p>
                </div>
              </div>
            </GlassCard>

            {/* Floating stat */}
            <div className="glass-dark" style={{
              display: 'none',
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              borderRadius: '1rem',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-float-dark)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', margin: 0 }}>Avg savings vs banks</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-flux-green)', margin: '2px 0 0 0' }}>+Rp 48,000</p>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.2)', margin: '2px 0 0 0' }}>per Rp 10M transfer</p>
            </div>
          </ScrollReveal>

          {/* Right: copy */}
          <ScrollReveal direction="right" className="flux-snipe__text">
            <div className="flux-snipe__text-block">
              <Badge variant="purple">FluxSnipe</Badge>
              <h2 className="flux-snipe__title">
                <span className="gradient-text-white">Stop watching</span>
                <br />
                <span className="gradient-text-purple">exchange rates.</span>
                <br />
                <span className="gradient-text-white">Let Flux watch.</span>
              </h2>
              <p className="flux-snipe__description">
                Indonesian parents shouldn&apos;t need to refresh bank apps every morning.
                Set your target rate once — Flux monitors the market 24/7 and executes
                automatically when your rate hits.
              </p>
            </div>

            {/* Steps with animated connecting line */}
            <div className="flux-snipe__steps" style={{ position: 'relative', paddingLeft: '4px' }}>
              {/* Vertical connector line */}
              <div
                ref={lineRef}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '20px',
                  bottom: '20px',
                  width: '1px',
                  background: 'linear-gradient(to bottom, rgba(123, 97, 255, 0.6), rgba(123, 97, 255, 0.25), transparent)',
                  transformOrigin: 'top',
                  transform: 'scaleY(0)',
                  transition: 'transform 1.2s ease-out 0.4s'
                }}
              />
              {steps.map(({ icon: Icon, title, desc }, idx) => (
                <ScrollReveal key={title} delay={idx * 150} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 10 }}>
                  <div className="flux-snipe__step-icon">
                    <Icon style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div className="flux-snipe__step-text">
                    <p className="flux-snipe__step-title">{title}</p>
                    <p className="flux-snipe__step-desc">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flux-snipe__cta" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button size="lg" variant="primary" className="group" style={{ minWidth: '160px' }}>
                Try FluxSnipe
                <ArrowRight style={{ width: '16px', height: '16px' }} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.3)', margin: 0 }}>Free on all plans</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
