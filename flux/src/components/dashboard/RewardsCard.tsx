import { Star, Crown, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function RewardsCard() {
  return (
    <div className="rewards">
      {/* Cashback */}
      <GlassCard variant="solid-dark" className="cashback-card">
        <div className="cashback-card__header">
          <div className="cashback-card__icon">
            <Star size={16} />
          </div>
          <div className="cashback-card__info">
            <p className="cashback-card__label">Cashback earned</p>
            <p className="cashback-card__amount">
              NT$ 320 <span className="cashback-card__amount-sub">this month</span>
            </p>
          </div>
        </div>
        <div className="cashback-card__progress-labels">
          <span>Monthly goal: NT$ 500</span>
          <span>64%</span>
        </div>
        <div className="cashback-card__bar">
          <div className="cashback-card__bar-fill" />
        </div>
      </GlassCard>

      {/* Premium upsell */}
      <div className="premium-upsell">
        <div className="premium-upsell__bg" />
        <div className="premium-upsell__overlay" />
        <div className="premium-upsell__content">
          <div className="premium-upsell__top">
            <Badge variant="gold">
              <Crown size={12} />
              Premium
            </Badge>
            <Crown size={20} className="icon-gold" />
          </div>
          <div className="premium-upsell__body">
            <p className="premium-upsell__title">Unlock unlimited transfers</p>
            <p className="premium-upsell__desc">+ airline cashback + campus perks</p>
          </div>
          <div className="premium-upsell__bottom">
            <div className="premium-upsell__price-group">
              <p className="premium-upsell__price">NT$299</p>
              <p className="premium-upsell__period">per month</p>
            </div>
            <Link href="/premium">
              <Button variant="secondary" size="sm">
                Upgrade
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
