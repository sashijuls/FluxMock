"use client";
import { useState } from "react";
import { TrendingUp, TrendingDown, RefreshCw, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const rates = [
  { pair: "IDR → TWD", rate: "1 TWD = Rp 498.40", change: "+0.8%", up: true },
  { pair: "IDR → USD", rate: "1 USD = Rp 16,248",  change: "+0.2%", up: true },
  { pair: "TWD → USD", rate: "1 USD = NT$ 32.6",   change: "-0.1%", up: false },
];

export default function FXWidget() {
  const [amount, setAmount] = useState("5000000");

  const idr = parseFloat(amount) || 0;
  const twd = (idr / 498.4).toFixed(0);

  return (
    <GlassCard variant="solid-dark" className="fx-widget">
      <div className="fx-widget__header">
        <p className="fx-widget__title">FX Converter</p>
        <button className="fx-widget__refresh">
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Converter */}
      <div className="fx-widget__converter">
        <div className="fx-widget__box">
          <p className="fx-widget__box-label">You send (IDR)</p>
          <div className="fx-widget__row">
            <span className="fx-widget__prefix">Rp</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="fx-widget__input"
            />
            <div className="fx-widget__currency">
              <span>🇮🇩</span>
              <span className="fx-widget__currency-code">IDR</span>
            </div>
          </div>
        </div>

        <div className="fx-widget__arrow">
          <div className="fx-widget__arrow-btn">
            <ArrowRight size={16} className="rotate-90 icon-muted" />
          </div>
        </div>

        <div className="fx-widget__box fx-widget__box--output">
          <p className="fx-widget__box-label fx-widget__box-label--output">They receive (TWD)</p>
          <div className="fx-widget__row">
            <span className="fx-widget__prefix fx-widget__prefix--output">NT$</span>
            <p className="fx-widget__output-value">{parseInt(twd).toLocaleString()}</p>
            <div className="fx-widget__currency">
              <span>🇹🇼</span>
              <span className="fx-widget__currency-code">TWD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rate table */}
      <div className="fx-widget__rates">
        {rates.map((r) => (
          <div key={r.pair} className="fx-widget__rate-row">
            <p className="fx-widget__rate-pair">{r.pair}</p>
            <div className="fx-widget__rate-right">
              <p className="fx-widget__rate-value">{r.rate}</p>
              <div className={`fx-widget__rate-change ${r.up ? "fx-widget__rate-change--up" : "fx-widget__rate-change--down"}`}>
                {r.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {r.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" fullWidth size="sm">
        Send money now
      </Button>
    </GlassCard>
  );
}
