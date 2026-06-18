import "./SecuritySection.css";
import { Shield, Lock, Eye, Building, CheckCircle, Globe } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    icon: Shield,
    title: "Bank-level encryption",
    desc: "256-bit AES encryption. Your data and funds are protected at every layer.",
    color: "text-flux-purple-light",
    bg: "bg-flux-primary/15",
  },
  {
    icon: Building,
    title: "Regulated provider",
    desc: "Licensed remittance operations under OJK (Indonesia) and FSC (Taiwan) guidelines.",
    color: "text-flux-cyan",
    bg: "bg-flux-cyan/15",
  },
  {
    icon: Lock,
    title: "Funds always segregated",
    desc: "Your money is held in licensed trust accounts — never pooled with operational funds.",
    color: "text-flux-green",
    bg: "bg-flux-green/15",
  },
  {
    icon: Eye,
    title: "Real-time monitoring",
    desc: "Every transaction is monitored for fraud. Anomalies trigger instant account holds.",
    color: "text-flux-orange",
    bg: "bg-flux-orange/15",
  },
  {
    icon: Globe,
    title: "Multi-provider routing",
    desc: "We route through Nium, Wise, and Thunes — always the fastest, most secure path.",
    color: "text-flux-pink",
    bg: "bg-flux-pink/15",
  },
  {
    icon: CheckCircle,
    title: "Zero-loss guarantee",
    desc: "If a transfer fails, funds are returned within 24 hours. Full stop.",
    color: "text-flux-gold",
    bg: "bg-flux-gold/15",
  },
];

export default function SecuritySection() {
  return (
    <section className="security">
      <div className="blob" style={{ position: 'absolute', top: '50%', right: 0, width: '288px', height: '288px', background: 'rgba(16, 185, 129, 0.1)' }} />

      <div className="security__container">
        <ScrollReveal className="security__heading">
          <Badge variant="green" dot style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>Security</Badge>
          <h2 className="security__title">
            <span className="gradient-text-white">Your trust is</span>
            <br />
            <span style={{ color: 'var(--color-flux-green)' }}>non-negotiable.</span>
          </h2>
          <p className="security__description">
            We handle real money for real families. Security is not a feature — it&apos;s the foundation.
          </p>
        </ScrollReveal>

        <div className="security__pillars">
          {pillars.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <GlassCard variant="solid-dark" className="border-dark-border" style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100%',
                transition: 'all 0.3s ease'
              }}>
                <div className={`security__pillar-icon ${
                  color === 'text-flux-purple-light' ? 'security__pillar-icon--purple' :
                  color === 'text-flux-cyan' ? 'security__pillar-icon--cyan' :
                  color === 'text-flux-green' ? 'security__pillar-icon--green' :
                  color === 'text-flux-orange' ? 'security__pillar-icon--orange' :
                  color === 'text-flux-pink' ? 'security__pillar-icon--pink' :
                  'security__pillar-icon--gold'
                }`} style={{ background: bg }}>
                  <Icon style={{ width: '20px', height: '20px', color: color.replace('text-', 'var(--color-') + ')' }} />
                </div>
                <div className="security__pillar-body">
                  <h3 className="security__pillar-title">{title}</h3>
                  <p className="security__pillar-description">{desc}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance logos strip */}
        <ScrollReveal delay={200} style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px', opacity: 0.4 }}>
          {["🏦 OJK Licensed", "📋 FSC Compliant", "🔐 SOC2 Type II", "🛡️ ISO 27001"].map((label) => (
            <div key={label} className="security__compliance-badge">
              {label}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
