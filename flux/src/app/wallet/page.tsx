"use client";
import "./FluxWallet.css";
import "@/app/AppLayout.css";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, QrCode, Send, ArrowDownLeft, GraduationCap, Train, Coffee, ShoppingBag, Wallet, Plus, Eye, EyeOff, Scan, CreditCard } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StatTile from "@/components/ui/StatTile";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import FinanceReport from "./FinanceReport";

const recentTx = [
  { name: "NTHU Tuition Semester 2", amount: "-NT$ 45,800", time: "2d ago",   icon: "🎓", amountClass: "wallet-tx-row__amount--neutral",  tag: "Tuition" },
  { name: "Allowance — Dad",         amount: "+NT$ 12,000", time: "3d ago",   icon: "💚", amountClass: "wallet-tx-row__amount--positive", tag: "Incoming" },
  { name: "7-Eleven Guangfu Rd",     amount: "-NT$ 87",     time: "Today",    icon: "🛒", amountClass: "wallet-tx-row__amount--neutral",  tag: null },
  { name: "MRT Card top-up",         amount: "-NT$ 300",    time: "Today",    icon: "🚇", amountClass: "wallet-tx-row__amount--neutral",  tag: null },
  { name: "Boba 50 Lan",             amount: "-NT$ 65",     time: "Today",    icon: "🧋", amountClass: "wallet-tx-row__amount--neutral",  tag: null },
  { name: "Cashback reward",         amount: "+NT$ 42",     time: "2d ago",   icon: "⭐", amountClass: "wallet-tx-row__amount--gold",     tag: "Reward" },
];

const quickPay = [
  { icon: GraduationCap, label: "Tuition",  gradient: "purple" as const },
  { icon: Train,         label: "Transit",  gradient: "cyan"   as const },
  { icon: Coffee,        label: "Food",     gradient: "orange" as const },
  { icon: ShoppingBag,   label: "Shops",    gradient: "pink"   as const },
  { icon: Wallet,        label: "Dorm",     gradient: "gold"   as const },
  { icon: Plus,          label: "More",     gradient: "green"  as const },
];

export default function WalletPage() {
  const [hidden, setHidden] = useState(false);
  const [activeTab, setActiveTab] = useState<"wallet" | "card" | "qr">("wallet");

  return (
    <div className="app-layout">
      <DashboardSidebar />
      <div className="app-main">
        {/* Header */}
        <header className="app-header">
          <div className="app-header__left">
            <Link href="/dashboard" className="app-header__back">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="app-header__icon app-header__icon--cyan">
              <Wallet size={16} className="icon-cyan" />
            </div>
            <div>
              <p className="app-header__title">FluxWallet</p>
              <p className="app-header__subtitle">Student digital wallet</p>
            </div>
          </div>
          <div className="app-header__right">
            <Badge variant="green" dot>Connected</Badge>
          </div>
        </header>

        <main className="app-content">
          <div className="app-container wallet-content">

            {/* Balance hero */}
            <div className="wallet-hero">
              <div className="wallet-hero__bg" />
              <div className="wallet-hero__blob" />
              <div className="wallet-hero__content">
                <div className="wallet-hero__top">
                  <div className="wallet-hero__meta">
                    <p className="wallet-hero__label">FluxWallet Balance</p>
                    <div className="wallet-hero__amount-row">
                      {hidden
                        ? <div className="wallet-hero__amount-placeholder" />
                        : <p className="wallet-hero__amount">NT$ 8,450</p>
                      }
                      <button onClick={() => setHidden(!hidden)} className="wallet-hero__toggle">
                        {hidden ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="wallet-hero__student-id">Student ID: 112062xxx · NTHU</p>
                  </div>
                  <div className="wallet-hero__icon">
                    <Wallet className="w-7 h-7" />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="wallet-hero__actions">
                  {[
                    { icon: Send, label: "Send" },
                    { icon: ArrowDownLeft, label: "Request" },
                    { icon: QrCode, label: "QR Pay" },
                    { icon: Plus, label: "Top up" },
                  ].map(({ icon: Icon, label }) => (
                    <button key={label} className="wallet-action-btn">
                      <Icon className="w-4 h-4" />
                      <span className="wallet-action-btn__label">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="wallet-tabs">
              {(["wallet", "card", "qr"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`wallet-tab${activeTab === tab ? " wallet-tab--active" : ""}`}
                >
                  {tab === "qr" ? "QR Pay" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Wallet tab */}
            {activeTab === "wallet" && (
              <div className="wallet-grid">
                {/* Quick pay */}
                <GlassCard variant="solid-dark" className="wallet-quickpay">
                  <p className="wallet-quickpay__title">Quick pay</p>
                  <div className="wallet-quickpay__grid">
                    {quickPay.map((t) => (
                      <StatTile key={t.label} icon={t.icon} label={t.label} gradient={t.gradient} />
                    ))}
                  </div>
                </GlassCard>

                {/* Transactions */}
                <GlassCard variant="solid-dark" className="wallet-tx">
                  <div className="wallet-tx__header">
                    <p className="wallet-tx__title">Recent transactions</p>
                    <button className="wallet-tx__see-all">See all</button>
                  </div>
                  <div className="wallet-tx__rows">
                    {recentTx.map((tx) => (
                      <div key={tx.name + tx.time} className="wallet-tx-row">
                        <div className="wallet-tx-row__icon">{tx.icon}</div>
                        <div className="wallet-tx-row__info">
                          <div className="wallet-tx-row__name-row">
                            <p className="wallet-tx-row__name">{tx.name}</p>
                            {tx.tag && (
                              <Badge variant="dark" className="no-shrink">
                                {tx.tag}
                              </Badge>
                            )}
                          </div>
                          <p className="wallet-tx-row__time">{tx.time}</p>
                        </div>
                        <p className={`wallet-tx-row__amount ${tx.amountClass}`}>{tx.amount}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            )}

            {/* Card tab */}
            {activeTab === "card" && (
              <div className="wallet-card-grid">
                {/* Physical card mockup */}
                <div className="wallet-physical-card">
                  <div className="wallet-physical-card__circle-1" />
                  <div className="wallet-physical-card__circle-2" />
                  <div className="wallet-physical-card__content">
                    <div className="wallet-physical-card__top">
                      <p className="wallet-physical-card__name">FluxCard</p>
                      <div className="wallet-physical-card__circles">
                        <div className="wallet-physical-card__chip" />
                        <div className="wallet-physical-card__chip wallet-physical-card__chip--2" />
                      </div>
                    </div>
                    <p className="wallet-physical-card__number">•••• •••• •••• 8821</p>
                    <div className="wallet-physical-card__footer">
                      <div>
                        <p className="wallet-physical-card__info-label">Cardholder</p>
                        <p className="wallet-physical-card__info-value">JULIANNA</p>
                      </div>
                      <div>
                        <p className="wallet-physical-card__info-label">Expires</p>
                        <p className="wallet-physical-card__info-value">08/28</p>
                      </div>
                      <Badge variant="gold" className="text-[10px]">Premium</Badge>
                    </div>
                  </div>
                </div>

                {/* Card details */}
                <GlassCard variant="solid-dark" className="wallet-card-details">
                  <p className="wallet-card-details__title">Card details</p>
                  <div className="wallet-card-details__rows">
                    {[
                      { label: "Card type",      value: "FluxCard Visa Debit" },
                      { label: "Daily limit",    value: "NT$ 20,000" },
                      { label: "Monthly limit",  value: "NT$ 100,000" },
                      { label: "International",  value: "Enabled" },
                      { label: "Status",         value: "Active" },
                    ].map(({ label, value }) => (
                      <div key={label} className="wallet-card-detail-row">
                        <p className="wallet-card-detail-row__label">{label}</p>
                        <p className="wallet-card-detail-row__value">{value}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="secondary" fullWidth size="sm">
                    <CreditCard className="w-4 h-4" /> Manage card
                  </Button>
                </GlassCard>
              </div>
            )}

            {/* QR tab */}
            {activeTab === "qr" && (
              <div className="wallet-qr-wrap">
                <GlassCard variant="solid-dark" className="wallet-qr-card">
                  <p className="wallet-qr-title">Scan to pay or receive</p>
                  <div className="wallet-qr-box">
                    <div className="wallet-qr-grid">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className={`wallet-qr-cell ${[0, 2, 4, 6, 8].includes(i) ? "wallet-qr-cell--filled" : "wallet-qr-cell--empty"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="wallet-qr-balance">NT$ 8,450 available</p>
                  <Button variant="primary" fullWidth>
                    <Scan className="w-4 h-4" /> Scan QR code
                  </Button>
                </GlassCard>
              </div>
            )}

            <FinanceReport />

          </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
