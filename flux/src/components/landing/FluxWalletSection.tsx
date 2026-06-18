"use client";
import "./FluxWalletSection.css";
import { useRef } from "react";
import { Wallet, QrCode, Train, GraduationCap, Coffee, ShoppingBag, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StatTile from "@/components/ui/StatTile";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { icon: GraduationCap, label: "Tuition",      gradient: "purple" as const },
  { icon: Train,         label: "MRT / Bus",    gradient: "cyan"   as const },
  { icon: QrCode,        label: "QR Pay",       gradient: "green"  as const },
  { icon: Coffee,        label: "Restaurants",  gradient: "orange" as const },
  { icon: ShoppingBag,   label: "Convenience",  gradient: "pink"   as const },
  { icon: Wallet,        label: "Dorm fees",    gradient: "gold"   as const },
];

const transactions = [
  { name: "National Tsing Hua University", category: "Tuition",  amount: "-NT$ 45,800", time: "2d ago",  icon: "🎓", color: "text-white" },
  { name: "Allowance from Parents",        category: "Incoming", amount: "+NT$ 12,000", time: "3d ago",  icon: "💚", color: "text-flux-green" },
  { name: "7-Eleven NTHU",                 category: "Shopping", amount: "-NT$ 87",     time: "Today",   icon: "🛒", color: "text-white" },
  { name: "MRT Hsinchu Station",           category: "Transport",amount: "-NT$ 24",     time: "Today",   icon: "🚇", color: "text-white" },
];

export default function FluxWalletSection() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    el.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    el.style.transition = "transform 0.5s ease-out";
  };

  return (
    <section className="flux-wallet">
      <div className="blob" style={{ position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', background: 'rgba(0, 210, 255, 0.1)' }} />

      <div className="flux-wallet__container">
        <div className="flux-wallet__content">
          {/* Left: copy */}
          <ScrollReveal direction="left" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="flux-wallet__text-block">
              <Badge variant="cyan">FluxWallet</Badge>
              <h2 className="flux-wallet__title">
                <span className="gradient-text-white">Campus life,</span>
                <br />
                <span style={{ color: 'var(--color-flux-cyan)' }}>fully cashless.</span>
              </h2>
              <p className="flux-wallet__description">
                From paying tuition at NTHU to grabbing boba on Guangfu Road —
                FluxWallet is the one card Indonesian students actually need.
              </p>
            </div>

            {/* Feature grid */}
            <div className="flux-wallet__features">
              {features.map((f) => (
                <StatTile key={f.label} icon={f.icon} label={f.label} gradient={f.gradient} className="text-xs min-h-[80px]" />
              ))}
            </div>

            <div className="flux-wallet__cta">
              <Button size="lg" variant="outline" style={{ minWidth: '160px', borderColor: 'rgba(0, 210, 255, 0.4)', color: 'var(--color-flux-cyan)', background: 'rgba(0, 210, 255, 0.05)', transition: 'all 0.2s ease' }}>
                Get FluxWallet
                <ArrowRight style={{ width: '16px', height: '16px' }} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right: wallet card visual with 3D tilt */}
          <ScrollReveal direction="right">
            <div
              ref={tiltRef}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Student card */}
              <GlassCard variant="solid-dark" className="border-dark-border" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="flux-wallet__card-header">
                  <div>
                    <p className="flux-wallet__card-label">FluxWallet</p>
                    <p className="flux-wallet__card-amount">NT$ 8,450</p>
                  </div>
                  <div className="flux-wallet__card-icon">
                    <Wallet style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
                <div className="flux-wallet__card-tiles">
                  <div className="flux-wallet__card-tile">
                    <p className="flux-wallet__tile-label">Student ID</p>
                    <p className="flux-wallet__tile-value" style={{ fontFamily: 'var(--font-mono)' }}>112062xxx</p>
                  </div>
                  <div className="flux-wallet__card-tile">
                    <p className="flux-wallet__tile-label">Cashback earned</p>
                    <p className="flux-wallet__tile-value flux-wallet__tile-value--gold">NT$ 320</p>
                  </div>
                </div>
                {/* Quick-pay tiles */}
                <div className="flux-wallet__quick-tiles">
                  {[
                    { icon: GraduationCap, label: "Tuition", gradient: "purple" as const },
                    { icon: QrCode,        label: "QR Pay",  gradient: "cyan"   as const },
                    { icon: Train,         label: "Transit", gradient: "green"  as const },
                    { icon: Coffee,        label: "Food",    gradient: "orange" as const },
                  ].map((t) => (
                    <StatTile key={t.label} icon={t.icon} label={t.label} gradient={t.gradient} className="min-h-[68px] text-[9px]" />
                  ))}
                </div>
              </GlassCard>

              {/* Transactions */}
              <GlassCard variant="solid-dark" className="border-dark-border" style={{ overflow: 'hidden' }}>
                <div className="flux-wallet__transactions-header">
                  <p className="flux-wallet__transactions-title">Recent activity</p>
                  <a href="#" className="flux-wallet__transactions-link">See all</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {transactions.map((tx) => (
                    <div key={tx.name} className="flux-wallet__transaction">
                      <div className="flux-wallet__transaction-icon">
                        {tx.icon}
                      </div>
                      <div className="flux-wallet__transaction-details">
                        <p className="flux-wallet__transaction-name">{tx.name}</p>
                        <p className="flux-wallet__transaction-meta">{tx.category} · {tx.time}</p>
                      </div>
                      <p className={`flux-wallet__transaction-amount ${tx.color === 'text-flux-green' ? 'flux-wallet__transaction-amount--positive' : ''}`}>{tx.amount}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
