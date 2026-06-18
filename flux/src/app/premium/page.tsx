"use client";
import "./FluxPremium.css";
import { useState } from "react";
import { Crown, Check, Plane, Percent, Zap, Shield, Star, Gift, ArrowRight, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tiers = [
  {
    name: "Free",
    price: "NT$0",
    period: "forever",
    priceClass: "premium-card__price--free",
    features: [
      { text: "Transfer wallet support",    included: true },
      { text: "5 FluxSnipe targets per week",      included: true },
      { text: "FluxWallet basic",         included: true },
      { text: "QR payments",             included: true },
      { text: "Unlimited transfers",      included: false },
      { text: "Airline cashback",         included: false },
      { text: "Campus discounts",         included: false },
      { text: "Priority support",         included: false },
    ],
    cta: "Current plan",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
  {
    name: "Premium Monthly",
    price: "NT$299",
    priceBilledYearly: "NT$299",
    period: "per month",
    priceClass: "premium-card__price--monthly",
    features: [
      { text: "Priority transfers",            included: true },
      { text: "Unlimited FluxSnipe targets",    included: true },
      { text: "FluxWallet + FluxCard",          included: true },
      { text: "QR payments",                   included: true },
      { text: "Airline cashback 3%",           included: true },
      { text: "Campus merchant discounts",      included: true },
      { text: "Priority 24/7 support",         included: true },
      { text: "Premium badge + card skin",      included: true },
    ],
    cta: "Upgrade monthly",
    ctaVariant: "premium" as const,
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Premium Yearly",
    price: "NT$2,388",
    period: "per year",
    priceClass: "premium-card__price--yearly",
    features: [
      { text: "Everything in Monthly",        included: true },
      { text: "Save NT$1,200 vs monthly",      included: true },
      { text: "4 months free",               included: true },
      { text: "Unlimited transfers",          included: true },
      { text: "5% airline cashback",          included: true },
      { text: "Priority support",             included: true },
      { text: "Exclusive yearly rewards",     included: true },
    ],
    cta: "Upgrade yearly",
    ctaVariant: "primary" as const,
    highlight: false,
    badge: "Best value",
    savingsBadge: "Save NT$1,200",
  },
];

const perks = [
  { icon: Zap,    title: "Unlimited transfers",  desc: "Send as much as you need, whenever you need it. No monthly cap.",   iconClass: "perk-card__icon--purple" },
  { icon: Plane,  title: "Airline cashback",     desc: "3% cashback on AirAsia, Lion Air, Batik Air, and more.",            iconClass: "perk-card__icon--cyan" },
  { icon: Percent,title: "Campus discounts",     desc: "Exclusive discounts at 500+ campus merchants and restaurants.",     iconClass: "perk-card__icon--orange" },
  { icon: Shield, title: "Priority support",     desc: "24/7 dedicated support line. Real humans, not bots.",              iconClass: "perk-card__icon--green" },
  { icon: Star,   title: "Premium FluxCard",     desc: "Exclusive card design with premium metal finish.",                 iconClass: "perk-card__icon--gold" },
  { icon: Gift,   title: "Student perks bundle", desc: "Netflix, Spotify, and campus app discounts monthly.",              iconClass: "perk-card__icon--pink" },
];

export default function PremiumPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="premium-page">
      <Navbar />

      {/* Hero */}
      <section className="premium-hero">
        <div className="premium-hero__blob-center" />
        <div className="premium-hero__blob-side" />
        <div className="premium-hero__inner">
          <div className="premium-hero__crown">
            <Crown size={32} className="icon-gold" />
          </div>
          <Badge variant="gold">
            <Crown className="w-3 h-3" />
            FluxPremium
          </Badge>
          <h1 className="premium-hero__title">
            <span className="gradient-text-white">Unlock every</span>
            <br />
            <span className="gradient-text-warm">advantage.</span>
          </h1>
          <p className="premium-hero__subtitle">
            Serious students deserve serious perks. FluxPremium gives you
            unlimited everything — for less than one milk tea per week.
          </p>

          {/* Billing toggle */}
          <div className="premium-billing-toggle">
            <div className="premium-billing-toggle__inner">
              {(["monthly", "yearly"] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`premium-billing-btn${billing === b ? " premium-billing-btn--active" : ""}`}
                >
                  {b}
                  {b === "yearly" && (
                    <Badge variant="green" className="text-[9px] px-1.5 py-0.5">Save 33%</Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="premium-pricing">
        <div className="premium-pricing__inner">
          <div className="premium-cards-grid">
            {tiers.map((tier) => (
              <div key={tier.name} className="premium-card-wrap">
                {tier.highlight && <div className="premium-card-wrap__glow" />}
                {tier.badge && (
                  <div className="premium-card-wrap__badge">
                    <Badge variant={tier.name.includes("Yearly") ? "gold" : "purple"}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <GlassCard
                  variant="solid-dark"
                  className={`premium-card${tier.highlight ? " premium-card--highlighted" : ""}`}
                >
                  <div>
                    <p className="premium-card__tier">{tier.name}</p>
                    <div className="premium-card__price-row">
                      <p className={`premium-card__price ${tier.priceClass}`}>
                        {billing === "yearly" && tier.priceBilledYearly ? tier.priceBilledYearly : tier.price}
                      </p>
                      <p className="premium-card__period">{tier.period}</p>
                    </div>
                    {tier.savingsBadge && (
                      <Badge variant="green" className="mt-2">{tier.savingsBadge}</Badge>
                    )}
                  </div>

                  <ul className="premium-card__features">
                    {tier.features.map((f) => (
                      <li key={f.text} className="premium-card__feature">
                        <div className={`premium-card__feature-check ${f.included && tier.highlight ? "premium-card__feature-check--included-purple" : "premium-card__feature-check--included"}`}>
                          <Check
                            size={10}
                            className={
                              !f.included
                                ? "premium-card__check-icon--hidden"
                                : tier.highlight
                                  ? "premium-card__check-icon--highlighted"
                                  : "premium-card__check-icon"
                            }
                          />
                        </div>
                        <span className={f.included ? "premium-card__feature-text--included" : "premium-card__feature-text--excluded"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="premium-card__cta">
                    <Button variant={tier.ctaVariant} fullWidth size="lg">
                      {tier.cta}
                      {tier.ctaVariant !== "secondary" && (
                        <ArrowRight size={16} />
                      )}
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="premium-perks">
        <div className="premium-perks__inner">
          <div className="premium-perks__heading">
            <h2 className="premium-perks__title">What you unlock</h2>
            <p className="premium-perks__subtitle">Every perk, designed for student life in Taiwan.</p>
          </div>
          <div className="premium-perks__grid">
            {perks.map(({ icon: Icon, title, desc, iconClass }) => (
              <GlassCard key={title} variant="solid-dark" hover className="perk-card">
                <div className={`perk-card__icon ${iconClass}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="perk-card__title">{title}</h3>
                  <p className="perk-card__desc">{desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="premium-cta">
        <div className="premium-cta__inner">
          <Sparkles size={40} className="premium-cta__icon" />
          <h2 className="premium-cta__title">Your best year abroad starts now.</h2>
          <p className="premium-cta__subtitle">Join 4,200+ students already using Flux.</p>
          <Button size="xl" variant="premium">
            Start FluxPremium today
            <ArrowRight size={20} />
          </Button>
          <p className="premium-cta__disclaimer">Cancel anytime · No hidden fees</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
