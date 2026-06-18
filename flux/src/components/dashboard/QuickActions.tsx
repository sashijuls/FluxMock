import {
  Send, QrCode, GraduationCap, TrendingUp,
  Star, ArrowDownLeft, Wallet, BarChart2
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const actions = [
  { icon: Star,          label: "Rewards",  cls: "stat-tile--purple" },
  { icon: BarChart2,     label: "FX Rates", cls: "stat-tile--orange" },
  { icon: Send,          label: "Send",     cls: "stat-tile--pink" },
  { icon: TrendingUp,    label: "Snipe",    cls: "stat-tile--cyan" },
  { icon: GraduationCap, label: "Tuition",  cls: "stat-tile--green" },
  { icon: QrCode,        label: "QR Pay",   cls: "stat-tile--gold" },
  { icon: ArrowDownLeft, label: "Request",  cls: "stat-tile--purple" },
  { icon: Wallet,        label: "Wallet",   cls: "stat-tile--cyan" },
];

export default function QuickActions() {
  return (
    <GlassCard variant="solid-dark" className="quick-actions">
      <div className="quick-actions__header">
        <p className="quick-actions__title">Finance</p>
        <button className="quick-actions__see-all">See all</button>
      </div>
      <div className="quick-actions__grid">
        {actions.map((action) => (
          <button key={action.label} className={`stat-tile ${action.cls}`}>
            <action.icon className="stat-tile__icon" />
            <span className="stat-tile__label">{action.label}</span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
