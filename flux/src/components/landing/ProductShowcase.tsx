"use client";
import "./ProductShowcase.css";
import Link from "next/link";
import { Target, Wallet, Crown, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

const products = [
  {
    icon: Target,
    badge: { label: "Smart FX", variant: "purple" as const },
    name: "FluxSnipe",
    tagline: "Set your rate. We'll catch it.",
    description:
      "Stop refreshing bank apps. Set your target IDR→TWD exchange rate and Flux automatically executes your transfer the moment the market hits it.",
    gradient: "bg-flux-primary",
    glow: "shadow-flux-glow",
    href: "/snipe",
    stats: [
      { value: "Rp 498", label: "avg target rate" },
      { value: "94%", label: "targets hit within 48h" },
    ],
    accentColor: "text-flux-purple-light",
  },
  {
    icon: Wallet,
    badge: { label: "Student Wallet", variant: "cyan" as const },
    name: "FluxWallet",
    tagline: "Your campus life, fully loaded.",
    description:
      "Pay tuition, top up allowance, scan QR codes at 7-Eleven, tap for MRT — all from one student-smart wallet built for life in Taiwan.",
    gradient: "bg-flux-cyan",
    glow: "shadow-[0_8px_32px_rgba(0,210,255,0.2)]",
    href: "/wallet",
    stats: [
      { value: "500+", label: "campus merchants" },
      { value: "NT$0", label: "transfer fee" },
    ],
    accentColor: "text-flux-cyan",
  },
  {
    icon: Crown,
    badge: { label: "Premium", variant: "gold" as const },
    name: "FluxPremium",
    tagline: "Every advantage, every trip.",
    description:
      "Unlimited transfers, airline discounts, premium cashback, and exclusive student perks. All for less than your boba budget.",
    gradient: "bg-flux-gold",
    glow: "shadow-[0_8px_32px_rgba(245,158,11,0.2)]",
    href: "/premium",
    stats: [
      { value: "NT$299", label: "per month" },
      { value: "NT$2,388", label: "per year" },
    ],
    accentColor: "text-flux-gold",
  },
];

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      <div className="product-showcase__decorline" />

      <div className="product-showcase__container">
        {/* Header */}
        <ScrollReveal className="product-showcase__heading">
          <Badge variant="dark">Three products. One ecosystem.</Badge>
          <h2 className="product-showcase__title">
            Everything you need
            <br />
            <span className="gradient-text-purple">to thrive abroad.</span>
          </h2>
          <p className="product-showcase__description">
            Flux connects your Indonesian roots with your Taiwanese life —
            from the moment money leaves Jakarta to the second you tap at FamilyMart.
          </p>
        </ScrollReveal>

        {/* Product cards */}
        <div className="product-showcase__grid">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <ScrollReveal key={product.name} delay={i * 150}>
                <GlassCard
                  variant="solid-dark"
                  hover
                  className="product-showcase__card border-dark-border"
                  style={{ height: '100%' }}
                >
                  {/* Icon + badge */}
                  <div className="product-showcase__card-header">
                    <div className={[
                      "product-showcase__icon",
                      product.gradient.includes("flux-primary") && "product-showcase__icon--purple",
                      product.gradient.includes("flux-cyan") && "product-showcase__icon--cyan",
                      product.gradient.includes("flux-gold") && "product-showcase__icon--gold",
                    ].filter(Boolean).join(" ")} style={{
                      background: product.gradient.replace('bg-', 'var(--color-'),
                      boxShadow: product.glow
                    }}>
                      <Icon style={{ width: '20px', height: '20px', color: 'white' }} />
                    </div>
                    <div style={{ transition: 'all 0.2s ease' }}>
                      <Badge variant={product.badge.variant}>{product.badge.label}</Badge>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="product-showcase__card-body">
                    <h3 className="product-showcase__card-title">{product.name}</h3>
                    <p className={`product-showcase__card-tagline ${product.accentColor}`}>{product.tagline}</p>
                    <p className="product-showcase__card-description">{product.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="product-showcase__stats" style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {product.stats.map((stat) => (
                      <div key={stat.label} className="product-showcase__stat">
                        <p className="product-showcase__stat-value">{stat.value}</p>
                        <p className="product-showcase__stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    className={`product-showcase__link ${product.accentColor}`}
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    Learn more
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
