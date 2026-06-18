"use client";
import "./Transfers.css";
import "@/app/AppLayout.css";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowLeftRight, ArrowUpDown, Send, CheckCircle, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const recentTransfers = [
  {
    name: "Allowance from Dad",
    meta: "IDR → TWD · via FluxSnipe · Today 09:41",
    icon: "💚",
    amount: "+NT$ 12,000",
    sub: "Rp 5,980,800",
    amountClass: "transfer-row__amount--positive",
    badge: "snipe" as const,
  },
  {
    name: "NTHU Tuition Fee",
    meta: "TWD · Direct · Yesterday",
    icon: "🎓",
    amount: "-NT$ 45,800",
    sub: "",
    amountClass: "",
    badge: null,
  },
  {
    name: "Send to Reza",
    meta: "IDR → IDR · P2P · May 30",
    icon: "👤",
    amount: "-Rp 500,000",
    sub: "",
    amountClass: "",
    badge: null,
  },
  {
    name: "Allowance from Mum",
    meta: "IDR → TWD · May 22",
    icon: "💚",
    amount: "+NT$ 6,050",
    sub: "Rp 3,014,900",
    amountClass: "transfer-row__amount--positive",
    badge: null,
  },
  {
    name: "Send to Budi",
    meta: "IDR → IDR · P2P · May 18",
    icon: "👤",
    amount: "-Rp 200,000",
    sub: "",
    amountClass: "",
    badge: null,
  },
];

const IDR_TO_TWD = 498.4;

export default function TransfersPage() {
  const [sendAmount, setSendAmount] = useState("5000000");

  const idr = parseFloat(sendAmount) || 0;
  const twd = (idr / IDR_TO_TWD).toFixed(0);
  const fee = (idr * 0.0025).toFixed(0);
  const feeIDR = `Rp ${parseInt(fee).toLocaleString("id-ID")}`;
  const twdReceived = ((idr - parseFloat(fee)) / IDR_TO_TWD).toFixed(0);

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
            <div className="app-header__icon app-header__icon--pink">
              <ArrowLeftRight size={16} className="icon-pink" />
            </div>
            <div>
              <p className="app-header__title">Transfers</p>
              <p className="app-header__subtitle">Send & receive money</p>
            </div>
          </div>
          <div className="app-header__right">
            <Badge variant="green" dot>Live rates</Badge>
          </div>
        </header>

        <main className="app-content">
          <div className="app-container transfers-content">

            {/* Stats row */}
            <div className="transfers-stats">
              {[
                { label: "Sent this month",    value: "NT$ 45,800",   sub: "3 transfers" },
                { label: "Received",           value: "NT$ 18,050",   sub: "+Rp 8,995,700", subClass: "transfers-stat-card__sub--green" },
                { label: "Avg FX rate",        value: "Rp 497.2",     sub: "per 1 TWD" },
                { label: "Saved via Snipe",    value: "Rp 38,400",    sub: "vs bank rate", subClass: "transfers-stat-card__sub--green" },
              ].map(({ label, value, sub, subClass }) => (
                <GlassCard key={label} variant="solid-dark" className="transfers-stat-card">
                  <p className="transfers-stat-card__label">{label}</p>
                  <p className="transfers-stat-card__value">{value}</p>
                  <p className={`transfers-stat-card__sub ${subClass ?? ""}`}>{sub}</p>
                </GlassCard>
              ))}
            </div>

            {/* Two columns: form + history */}
            <div className="transfers-cols">

              {/* Left: Send form */}
              <GlassCard variant="solid-dark" className="transfer-form-card">
                <div className="transfer-form-card__title-row">
                  <div className="transfer-form-card__icon">
                    <Send size={15} />
                  </div>
                  <p className="transfer-form-card__title">Send money</p>
                </div>

                <div className="transfer-form-card__fields">

                  {/* You send */}
                  <div className="transfer-field">
                    <label className="transfer-field__label">You send (IDR)</label>
                    <div className="transfer-field__input-row">
                      <span className="transfer-field__prefix">Rp</span>
                      <input
                        type="number"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        className="transfer-field__input"
                        placeholder="5000000"
                      />
                      <div className="transfer-field__currency-tag">
                        <span>🇮🇩</span>
                        <span className="transfer-field__currency-code">IDR</span>
                      </div>
                    </div>
                    <p className="transfer-field__hint">
                      ≈ NT$ {parseInt(twd).toLocaleString()} at today&apos;s rate
                    </p>
                  </div>

                  {/* Swap icon */}
                  <div className="transfer-swap">
                    <button className="transfer-swap__btn" aria-label="Swap currencies">
                      <ArrowUpDown size={15} />
                    </button>
                  </div>

                  {/* They receive */}
                  <div className="transfer-field">
                    <label className="transfer-field__label">They receive (TWD)</label>
                    <div className="transfer-field__input-row">
                      <span className="transfer-field__prefix">NT$</span>
                      <p className="transfer-field__output">
                        {parseInt(twdReceived).toLocaleString()}
                      </p>
                      <div className="transfer-field__currency-tag">
                        <span>🇹🇼</span>
                        <span className="transfer-field__currency-code">TWD</span>
                      </div>
                    </div>
                    <p className="transfer-field__hint transfer-field__hint--green">
                      After 0.25% transfer fee
                    </p>
                  </div>

                  {/* Recipient */}
                  <div className="transfer-recipient">
                    <label className="transfer-recipient__label">Recipient</label>
                    <input
                      type="text"
                      className="transfer-recipient__input"
                      placeholder="Name, phone number, or Flux ID"
                    />
                  </div>

                  {/* Fee summary */}
                  <div className="transfer-fee-strip">
                    {[
                      { label: "Transfer fee (0.25%)", value: feeIDR },
                      { label: "FX rate",              value: `1 TWD = Rp ${IDR_TO_TWD}` },
                      { label: "Arrival",              value: "Within 30 minutes" },
                    ].map(({ label, value }) => (
                      <div key={label} className="transfer-fee-row">
                        <span className="transfer-fee-row__label">{label}</span>
                        <span className="transfer-fee-row__value">{value}</span>
                      </div>
                    ))}
                    <div className="transfer-fee-divider" />
                    <div className="transfer-fee-row transfer-fee-row--total">
                      <span className="transfer-fee-row__label">They receive</span>
                      <span className="transfer-fee-row__value">NT$ {parseInt(twdReceived).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth size="lg">
                    <Send className="w-4 h-4" />
                    Send now
                  </Button>
                </div>
              </GlassCard>

              {/* Right: Recent transfers */}
              <GlassCard variant="solid-dark" className="recent-transfers">
                <div className="recent-transfers__header">
                  <p className="recent-transfers__title">Recent transfers</p>
                  <button className="recent-transfers__see-all">See all →</button>
                </div>

                <div>
                  {recentTransfers.map((tx) => (
                    <div key={tx.name + tx.meta} className="transfer-row">
                      <div className="transfer-row__icon">{tx.icon}</div>
                      <div className="transfer-row__info">
                        <div className="transfer-row__name-row">
                          <p className="transfer-row__name">{tx.name}</p>
                          {tx.badge === "snipe" && (
                            <Badge variant="purple" className="no-shrink">via Snipe</Badge>
                          )}
                        </div>
                        <p className="transfer-row__meta">{tx.meta}</p>
                      </div>
                      <div className="transfer-row__amount-col">
                        <p className={`transfer-row__amount ${tx.amountClass}`}>{tx.amount}</p>
                        {tx.sub && <p className="transfer-row__sub">{tx.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status pills */}
                <div className="transfer-status-strip">
                  <div className="transfer-status-strip__item">
                    <CheckCircle size={13} className="icon-green" />
                    4 completed
                  </div>
                  <div className="transfer-status-strip__item">
                    <Clock size={13} className="icon-muted" />
                    1 pending
                  </div>
                </div>
              </GlassCard>

            </div>
          </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
