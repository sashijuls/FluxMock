"use client";
import "./FluxSnipe.css";
import "@/app/AppLayout.css";
import { useState } from "react";
import Link from "next/link";
import { Target, Plus, Bell, TrendingDown, ArrowLeft, CheckCircle, Clock, AlertCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const rateHistory = [
  { date: "May 26", rate: 488.2 },
  { date: "May 27", rate: 491.5 },
  { date: "May 28", rate: 489.8 },
  { date: "May 29", rate: 493.1 },
  { date: "May 30", rate: 490.4 },
  { date: "May 31", rate: 494.7 },
  { date: "Jun 1",  rate: 491.2 },
  { date: "Jun 2",  rate: 491.2 },
];

const MAX = Math.max(...rateHistory.map((r) => r.rate));
const MIN = Math.min(...rateHistory.map((r) => r.rate));

const snipeHistory = [
  { date: "May 15, 2025", pair: "IDR → TWD", targetRate: "Rp 496", actualRate: "Rp 496.30", amount: "Rp 5,000,000", received: "NT$ 10,067", status: "executed" },
  { date: "Apr 28, 2025", pair: "IDR → TWD", targetRate: "Rp 492", actualRate: "Rp 492.10", amount: "Rp 3,000,000", received: "NT$ 6,099",  status: "executed" },
  { date: "Apr 10, 2025", pair: "IDR → TWD", targetRate: "Rp 500", actualRate: "—",          amount: "Rp 2,000,000", received: "—",          status: "cancelled" },
];

export default function SnipePage() {
  const [targetRate, setTargetRate] = useState("498");
  const [sendAmount, setSendAmount] = useState("5000000");
  const currentRate = 491.2;
  const targetNum = parseFloat(targetRate) || 0;

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
            <div className="app-header__icon app-header__icon--purple">
              <Target size={16} className="icon-white" />
            </div>
            <div>
              <p className="app-header__title">FluxSnipe</p>
              <p className="app-header__subtitle">Automatic FX rate catcher</p>
            </div>
          </div>
          <div className="app-header__right">
            <Badge variant="green" dot>Market open</Badge>
          </div>
        </header>

        <main className="app-content">
          <div className="app-container snipe-content">

            {/* Rate chart card — full width */}
            <GlassCard variant="solid-dark" className="snipe-rate-card">
              <div className="snipe-rate-card__header">
                <div className="snipe-rate-card__left">
                  <p className="snipe-rate-card__label">IDR → TWD Live Rate</p>
                  <div className="snipe-rate-card__amount-row">
                    <p className="snipe-rate-card__rate">Rp {currentRate}</p>
                    <div className="snipe-rate-card__change">
                      <TrendingDown className="w-4 h-4" />
                      -0.7% today
                    </div>
                  </div>
                  <p className="snipe-rate-card__updated">per 1 TWD · Updated 30s ago</p>
                </div>
                <div className="snipe-rate-card__right">
                  <p className="snipe-rate-card__range-label">7-day range</p>
                  <p className="snipe-rate-card__range-value">Rp {MIN} — Rp {MAX}</p>
                </div>
              </div>

              {/* Chart */}
              <div className="snipe-chart">
                <svg
                  viewBox={`0 0 ${rateHistory.length * 60} 100`}
                  className="snipe-chart__svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0 ${100 - ((rateHistory[0].rate - MIN) / (MAX - MIN)) * 80} ${rateHistory.map((r, i) => `L ${i * 60 + 30} ${100 - ((r.rate - MIN) / (MAX - MIN)) * 80}`).join(" ")} L ${(rateHistory.length - 1) * 60 + 30} 100 L 0 100 Z`}
                    fill="url(#chartGrad)"
                  />
                  <polyline
                    points={rateHistory.map((r, i) => `${i * 60 + 30},${100 - ((r.rate - MIN) / (MAX - MIN)) * 80}`).join(" ")}
                    fill="none"
                    stroke="#7B61FF"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  {targetNum >= MIN && targetNum <= MAX + 10 && (
                    <line
                      x1="0" y1={100 - ((targetNum - MIN) / (MAX - MIN)) * 80}
                      x2={(rateHistory.length - 1) * 60 + 30} y2={100 - ((targetNum - MIN) / (MAX - MIN)) * 80}
                      stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="6,4"
                    />
                  )}
                </svg>
                <div className="snipe-chart__labels">
                  {rateHistory.filter((_, i) => i % 2 === 0).map((r) => (
                    <p key={r.date} className="snipe-chart__date-label">{r.date}</p>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Two-column: form + active snipes */}
            <div className="snipe-cols">
              {/* Left: New Snipe form */}
              <GlassCard variant="solid-dark" className="snipe-form-card">
                <div className="snipe-form-card__title-row">
                  <div className="snipe-form-card__icon">
                    <Plus className="w-4 h-4" />
                  </div>
                  <p className="snipe-form-card__title">Set new Snipe target</p>
                </div>

                <div className="snipe-form-card__fields">
                  {/* Target rate */}
                  <div className="snipe-field">
                    <label className="snipe-field__label">Target rate (per TWD)</label>
                    <div className="snipe-field__input-row">
                      <span className="snipe-field__prefix">Rp</span>
                      <input
                        type="number"
                        value={targetRate}
                        onChange={(e) => setTargetRate(e.target.value)}
                        className="snipe-field__input"
                        placeholder="498"
                      />
                      <div className="snipe-field__steppers">
                        <button onClick={() => setTargetRate(String(parseFloat(targetRate) + 0.5))} className="snipe-field__step-btn">▲</button>
                        <button onClick={() => setTargetRate(String(parseFloat(targetRate) - 0.5))} className="snipe-field__step-btn">▼</button>
                      </div>
                    </div>
                    <p className="snipe-field__hint">
                      Current: Rp {currentRate} · Your target is{" "}
                      <span className={targetNum > currentRate ? "snipe-field__hint--green" : "snipe-field__hint--orange"}>
                        Rp {Math.abs(targetNum - currentRate).toFixed(2)} {targetNum > currentRate ? "above" : "below"}
                      </span>{" "}
                      market
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="snipe-field">
                    <label className="snipe-field__label">Amount to send (IDR)</label>
                    <div className="snipe-field__input-row">
                      <span className="snipe-field__prefix">Rp</span>
                      <input
                        type="number"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        className="snipe-field__input"
                      />
                    </div>
                    <p className="snipe-field__hint">
                      ≈ NT$ {(parseFloat(sendAmount) / targetNum).toFixed(0)} at target rate
                    </p>
                  </div>

                  {/* Notifications toggle */}
                  <div className="snipe-toggle-row">
                    <div className="snipe-toggle-row__left">
                      <Bell className="w-4 h-4 snipe-toggle-row__icon" />
                      <span className="snipe-toggle-row__label">Notify parents when hit</span>
                    </div>
                    <div className="snipe-toggle">
                      <div className="snipe-toggle__knob" />
                    </div>
                  </div>

                  {/* Estimate alert */}
                  {targetNum > currentRate && (
                    <div className="snipe-alert">
                      <Clock className="w-4 h-4 snipe-alert__icon" />
                      <p className="snipe-alert__text">
                        Based on recent trends, your target may be reached within{" "}
                        <span className="snipe-alert__highlight">2–5 days</span>.
                      </p>
                    </div>
                  )}

                  <Button variant="primary" fullWidth size="lg">
                    <Target className="w-4 h-4" />
                    Activate Snipe
                  </Button>
                </div>
              </GlassCard>

              {/* Right: Active snipes + history */}
              <div className="snipe-right-col">
                <p className="snipe-section-title">Active snipes</p>
                {[
                  { target: "Rp 498", current: currentRate, progress: 78, amount: "Rp 5,000,000", pair: "IDR → TWD", close: false },
                  { target: "Rp 495", current: currentRate, progress: 92, amount: "Rp 2,000,000", pair: "IDR → TWD", close: true },
                ].map((snipe, i) => (
                  <GlassCard key={i} variant="solid-dark" className="snipe-active-card">
                    <div className="snipe-active-card__header">
                      <div>
                        <p className="snipe-active-card__pair">{snipe.pair}</p>
                        <p className="snipe-active-card__target">Target: {snipe.target}</p>
                      </div>
                      <Badge variant={snipe.close ? "green" : "orange"} dot>
                        {snipe.close ? "Almost!" : "Watching"}
                      </Badge>
                    </div>
                    <div>
                      <div className="snipe-active-card__progress-labels">
                        <span>Current: Rp {snipe.current}</span>
                        <span>{snipe.progress}%</span>
                      </div>
                      <div className="snipe-active-card__bar">
                        <div
                          className={`snipe-active-card__fill ${snipe.close ? "snipe-active-card__fill--green" : "snipe-active-card__fill--purple"}`}
                          style={{ width: `${snipe.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="snipe-active-card__footer">
                      <span>Amount: {snipe.amount}</span>
                      <button className="snipe-active-card__cancel">Cancel</button>
                    </div>
                  </GlassCard>
                ))}

                {/* History */}
                <p className="snipe-section-title snipe-section-title--spaced">Snipe history</p>
                <GlassCard variant="solid-dark" className="snipe-history-card">
                  {snipeHistory.map((h) => (
                    <div key={h.date} className="snipe-history-row">
                      <div className={`snipe-history-row__status-icon ${h.status === "executed" ? "snipe-history-row__status-icon--done" : "snipe-history-row__status-icon--cancelled"}`}>
                        {h.status === "executed"
                          ? <CheckCircle size={14} className="icon-green" />
                          : <AlertCircle size={14} className="icon-muted" />
                        }
                      </div>
                      <div className="snipe-history-row__info">
                        <p className="snipe-history-row__pair">
                          {h.pair} @ {h.actualRate !== "—" ? h.actualRate : h.targetRate}
                        </p>
                        <p className="snipe-history-row__meta">{h.amount} · {h.date}</p>
                      </div>
                      <div className="snipe-history-row__result">
                        <p className={`snipe-history-row__received ${h.status === "executed" ? "snipe-history-row__received--done" : "snipe-history-row__received--cancelled"}`}>
                          {h.received}
                        </p>
                        <Badge variant={h.status === "executed" ? "green" : "dark"} className="text-[9px] mt-0.5">
                          {h.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </GlassCard>
              </div>
            </div>

          </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
