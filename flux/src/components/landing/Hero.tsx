"use client";
import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

/* ─── Count-up stat ──────────────────────────── */
function StatCounter({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const match = value.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const isFloat = numStr.includes(".");
    const parts = numStr.split(".");
    const decimals = isFloat && parts[1] ? parts[1].length : 0;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          const startTime = performance.now();
          const duration = 1200;
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = target * eased;
            const formatted = isFloat
              ? current.toFixed(decimals)
              : Math.round(current).toLocaleString("en-US");
            setDisplay(prefix + formatted + suffix);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="hero__stat">
      <p className="hero__stat-value">{display}</p>
      <p className="hero__stat-label">{label}</p>
    </div>
  );
}

/* ─── Mini phone mockup ─────────────────────── */
function PhoneMockup() {
  return (
    <div className="hero__phone">
      <div className="hero__glow" />

      <div className="hero__mockup-container">
        <div style={{
          position: 'relative',
          borderRadius: '3rem',
          backgroundColor: 'var(--color-dark-card)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'var(--shadow-float-dark)',
          padding: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '17px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '144px',
            height: '29px',
            backgroundColor: 'black',
            borderRadius: '9999px',
            zIndex: 10
          }} />

          <div style={{
            borderRadius: '2.6rem',
            backgroundColor: 'var(--color-dark-bg)',
            overflow: 'hidden',
            paddingLeft: '29px',
            paddingRight: '29px',
            paddingTop: '82px',
            paddingBottom: '34px',
            display: 'flex',
            flexDirection: 'column',
            gap: '29px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '9999px',
                  background: 'var(--color-flux-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>JV</div>
                <div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Hello,</p>
                  <p style={{ fontSize: '17px', fontWeight: '600', color: 'white', margin: 0 }}>Julianna</p>
                </div>
              </div>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-dark-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-flux-purple)'
                }} />
              </div>
            </div>

            {/* Balance */}
            <div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Total balance</p>
              <p style={{ fontSize: '36px', fontWeight: '700', color: 'white', marginTop: '4px', margin: 0 }}>NT$ 28,400</p>
              <p style={{ fontSize: '14px', color: 'var(--color-flux-green)', marginTop: '4px', margin: 0 }}>↑ Rp 12.5M received today</p>
            </div>

            {/* Mini cards row */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{
                flex: 1,
                borderRadius: '1rem',
                backgroundColor: 'var(--color-dark-card)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '17px'
              }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>VISA</p>
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginTop: '4px', margin: 0 }}>FluxCard</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)', marginTop: '4px', margin: 0 }}>•• 8821</p>
              </div>
              <div style={{
                flex: 1,
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #5b3fdf 0%, #7b61ff 100%)',
                padding: '17px',
                boxShadow: 'var(--shadow-flux-glow-sm)'
              }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>FluxSnipe</p>
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginTop: '4px', margin: 0 }}>Active</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', margin: 0 }}>Rp 500 target</p>
              </div>
            </div>

            {/* Quick actions */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px'
            }}>
              {[
                { emoji: "⭐", label: "Rewards" },
                { emoji: "📊", label: "FX Rate" },
                { emoji: "💸", label: "Send" },
                { emoji: "🎓", label: "Tuition" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '53px',
                    height: '53px',
                    borderRadius: '0.75rem',
                    backgroundColor: 'var(--color-dark-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {item.emoji}
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* FX ticker */}
            <div style={{
              borderRadius: '1rem',
              backgroundColor: 'var(--color-dark-elevated)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '17px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>IDR → TWD Rate</p>
                <Badge variant="green" dot className="text-[8px] px-1.5 py-0.5">Live</Badge>
              </div>
              <p style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginTop: '4px', margin: 0 }}>1 TWD = Rp 498.40</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <TrendingUp style={{ width: '17px', height: '17px', color: 'var(--color-flux-green)' }} />
                <p style={{ fontSize: '13px', color: 'var(--color-flux-green)', margin: 0 }}>+0.8% from yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero">
      {/* Background blobs */}
      <div className="blob" style={{ position: 'absolute', top: '25%', left: '25%', width: '384px', height: '384px', background: 'rgba(123, 97, 255, 0.2)' }} />
      <div className="blob" style={{ position: 'absolute', bottom: '25%', right: '25%', width: '320px', height: '320px', background: 'rgba(255, 75, 124, 0.1)' }} />
      <div className="blob" style={{ position: 'absolute', top: '50%', right: '33%', width: '256px', height: '256px', background: 'rgba(0, 210, 255, 0.08)' }} />

      <div className="hero__decorline" />

      <div className="hero__container">
        <div className="hero__content">

          {/* LEFT: copy */}
          <div className="hero__text">

            {/* "Now in beta" badge with pulse ring */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ position: 'relative', display: 'inline-flex' }}>
                <div className="animate-pulse-ring" style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '9999px',
                  background: 'rgba(123, 97, 255, 0.3)'
                }} />
                <Badge variant="purple" dot>
                  🇮🇩 → 🇹🇼&nbsp; Now in beta — Join the waitlist
                </Badge>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="hero__title">
                <span className="gradient-text-white">Your money,</span>
                <br />
                <span className="gradient-text-purple">moving faster</span>
                <br />
                <span className="gradient-text-white">than the market.</span>
              </h1>
            </div>

            <p className="hero__description animate-fade-up" style={{ animationDelay: '0.2s' }}>
              The smart financial platform for Indonesian students in Taiwan.
              Set your FX target, automate your transfers, and never overpay again.
            </p>

            {/* Stats with count-up */}
            <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {[
                { value: "Rp 2B+", label: "transferred" },
                { value: "4,200+", label: "students" },
                { value: "3.2%", label: "avg savings vs banks" },
              ].map((s) => (
                <StatCounter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            <div className="hero__cta animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" variant="primary" className="group min-w-[160px]">
                Start for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Link
                href="/snipe"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
              >
                View demo
                <ArrowRight className="w-4 h-4" style={{ transition: 'transform 0.2s ease' }} />
              </Link>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '8px',
              animationDelay: '0.5s',
            }} className="animate-fade-up">
              {[
                { icon: Shield, text: "Bank-level security" },
                { icon: Zap, text: "Instant setup" },
                { icon: TrendingUp, text: "Live FX rates" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.35)' }}>
                  <Icon style={{ width: '14px', height: '14px', color: 'rgba(123, 97, 255, 0.7)' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: phone mockup */}
          <div className="hero__visual">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        animation: 'bounce-slow 2s ease-in-out infinite',
        pointerEvents: 'none'
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500' }}>Scroll</span>
        <ChevronDown style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.25)' }} />
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '128px',
        background: 'linear-gradient(to top, var(--color-dark-bg), transparent)',
        pointerEvents: 'none'
      }} />
    </section>
  );
}
