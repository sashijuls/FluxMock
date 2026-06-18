"use client";
import { TrendingUp, Eye, EyeOff, Plus } from "lucide-react";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

const cards = [
  { label: "FluxWallet", amount: "NT$ 8,450", sub: "•• 8821", type: "default" },
  { label: "FluxPremium Card", amount: "NT$ 3,200", sub: "•• 4433 · Premium", type: "premium" },
];

export default function BalanceCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <GlassCard variant="solid-dark" className="balance-card">
      {/* Total balance */}
      <div className="balance-card__header">
        <div className="balance-card__meta">
          <p className="balance-card__label">Total balance</p>
          <div className="balance-card__amount-row">
            {hidden
              ? <div className="balance-card__placeholder shimmer-bg" />
              : <p className="balance-card__amount">NT$ 28,400</p>
            }
            <button onClick={() => setHidden(!hidden)} className="balance-card__toggle">
              {hidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <div className="balance-card__trend">
            <TrendingUp className="w-3 h-3" />
            <span>+Rp 12,500,000 received today</span>
          </div>
        </div>
        <Badge variant="green" dot>Live balance</Badge>
      </div>

      {/* Card row */}
      <div>
        <div className="balance-card__section-header">
          <p className="balance-card__section-label">Cards</p>
          <button className="balance-card__add-btn">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>
        <div className="balance-card__scroll">
          {cards.map((card) => (
            <div
              key={card.label}
              className={`balance-card__mini balance-card__mini--${card.type}`}
            >
              <div className="balance-card__mini-top">
                <p className="balance-card__mini-type">VISA</p>
                <div className="balance-card__mini-circles">
                  <div className="balance-card__mini-circle" />
                  <div className="balance-card__mini-circle balance-card__mini-circle--2" />
                </div>
              </div>
              <div>
                <p className="balance-card__mini-sub">{card.label}</p>
                <p className="balance-card__mini-amount">
                  {hidden ? "••••" : card.amount}
                </p>
              </div>
              <p className="balance-card__mini-number">{card.sub}</p>
            </div>
          ))}
          {/* Add card placeholder */}
          <div className="balance-card__add-card">
            <div className="balance-card__add-card-inner">
              <Plus className="w-5 h-5 balance-card__add-card-icon" />
              <p className="balance-card__add-card-text">Add card</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
