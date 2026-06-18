"use client";
import "./FluxPremiumSection.css";
import Link from "next/link";
import { Crown, Check, Plane, Percent, Zap, Shield, ArrowRight, Star } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  { icon: Zap,    text: "Unlimited transfers per month" },
  { icon: Plane,  text: "Airline cashback up to 3%" },
  { icon: Percent,text: "Campus merchant discounts" },
  { icon: Shield, text: "Priority customer support" },
  { icon: Star,   text: "Early access to new features" },
  { icon: Crown,  text: "Premium FluxCard design" },
];

const freeFeatures = [
  "Up to 3 transfers/month",
  "FluxSnipe (5 targets)",
  "FluxWallet basic",
  "QR payments",
];

const premiumFeatures = [
  "Unlimited transfers",
  "FluxSnipe unlimited",
  "FluxWallet + FluxCard",
  "Airline cashback 3%",
  "Campus discounts",
  "Priority support",
  "Premium badge",
];

export default function FluxPremiumSection() {
  return (
    <section className="flux-premium" id="premium">
      <div className="blob" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '256px', background: 'rgba(245, 158, 11, 0.1)' }} />

      <div className="flux-premium__container">
        {/* Header */}
        <ScrollReveal className="flux-premium__heading">
          <Badge variant="gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Crown style={{ width: '12px', height: '12px' }} />
            FluxPremium
          </Badge>
          <h2 className="flux-premium__title">
            <span className="gradient-text-white">Every advantage,</span>
            <br />
            <span className="gradient-text-warm">for less than your boba.</span>
          </h2>
          <p className="flux-premium__description">
            Serious students unlock serious perks. FluxPremium turns your spending
            into savings, your trips into cashback, your campus life into rewards.
          </p>
        </ScrollReveal>

        {/* Pricing grid */}
        <ScrollReveal delay={100} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '800px', margin: '0 auto 80px' }}>
          {/* Free */}
          <GlassCard variant="solid-dark" className="border-dark-border" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p className="flux-premium__card-type">Free</p>
              <div className="flux-premium__card-price">
                <p className="flux-premium__price-amount">NT$0</p>
                <p className="flux-premium__price-period">/forever</p>
              </div>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {freeFeatures.map((f) => (
                <li key={f} className="flux-premium__feature">
                  <div className="flux-premium__feature-icon">
                    <Check className="flux-premium__feature-icon-inner" style={{ width: '10px', height: '10px' }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="secondary" style={{ width: '100%' }}>Get started free</Button>
          </GlassCard>

          {/* Premium */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '1.5rem',
              background: 'linear-gradient(to bottom right, rgba(123, 97, 255, 0.3), transparent)',
              filter: 'blur(32px)'
            }} />
            <GlassCard
              variant="solid-dark"
              className="border"
              style={{
                position: 'relative',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderColor: 'rgba(123, 97, 255, 0.25)',
                boxShadow: '0 0 0 1px rgba(123, 97, 255, 0.3), 0 8px 32px rgba(123, 97, 255, 0.2)'
              }}
            >
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <Badge variant="gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Crown style={{ width: '12px', height: '12px' }} />
                  Most popular
                </Badge>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p className="flux-premium__card-type--featured">Premium</p>
                </div>
                <div className="flux-premium__card-price" style={{ marginTop: '8px' }}>
                  <p className="gradient-text-purple" style={{ fontSize: '2.25rem', fontWeight: '700' }}>NT$299</p>
                  <p className="flux-premium__price-period">/month</p>
                </div>
                <p className="flux-premium__price-note">or NT$2,388/year — save NT$1,200</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {premiumFeatures.map((f) => (
                  <li key={f} className="flux-premium__feature flux-premium__feature--featured">
                    <div className="flux-premium__feature-icon flux-premium__feature-icon--featured">
                      <Check className="flux-premium__feature-icon-inner flux-premium__feature-icon-inner--featured" style={{ width: '10px', height: '10px' }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="primary" style={{ width: '100%', fontSize: '1rem', padding: '0.75rem 1.5rem' }} className="group">
                Upgrade to Premium
                <ArrowRight style={{ width: '16px', height: '16px' }} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Benefits strip */}
        <div className="flux-premium__benefits">
          {benefits.map(({ icon: Icon, text }, i) => (
            <ScrollReveal key={text} delay={i * 80}>
              <div className="flux-premium__benefit">
                <div className="flux-premium__benefit-icon">
                  <Icon style={{ width: '16px', height: '16px' }} />
                </div>
                <div className="flux-premium__benefit-text">
                  <p className="flux-premium__benefit-label">{text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
