"use client";
import { useState } from "react";
import { Target, Plus, CheckCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

const activeSnipes = [
  { id: 1, pair: "IDR → TWD", target: "Rp 498", current: "Rp 491.20", progress: 78, amount: "Rp 5,000,000", status: "watching" },
  { id: 2, pair: "IDR → TWD", target: "Rp 495", current: "Rp 491.20", progress: 92, amount: "Rp 2,000,000", status: "close" },
];

const recentHits = [
  { pair: "IDR → TWD", rate: "Rp 496.30", amount: "NT$ 3,040", time: "2 days ago" },
];

export default function SnipeTracker() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <GlassCard variant="solid-dark" className="snipe-tracker">
      <div className="snipe-tracker__header">
        <div className="snipe-tracker__title-group">
          <div className="snipe-tracker__icon">
            <Target size={16} className="icon-white" />
          </div>
          <p className="snipe-tracker__title">FluxSnipe</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="snipe-tracker__add-btn">
          <Plus size={14} /> New target
        </button>
      </div>

      {/* Active snipes */}
      <div className="snipe-tracker__items">
        {activeSnipes.map((snipe) => (
          <div key={snipe.id} className="snipe-tracker__item">
            <div className="snipe-tracker__item-header">
              <div>
                <p className="snipe-tracker__item-pair">{snipe.pair} · {snipe.amount}</p>
                <p className="snipe-tracker__item-target">Target: {snipe.target}</p>
              </div>
              <Badge variant={snipe.status === "close" ? "green" : "purple"} dot>
                {snipe.status === "close" ? "Almost!" : "Watching"}
              </Badge>
            </div>
            {/* Progress bar */}
            <div>
              <div className="snipe-tracker__progress-labels">
                <span>Current: {snipe.current}</span>
                <span>{snipe.progress}% to target</span>
              </div>
              <div className="snipe-tracker__progress-bar">
                <div
                  className="snipe-tracker__progress-fill"
                  style={{ width: `${snipe.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent hits */}
      <div>
        <p className="snipe-tracker__hits-label">Recent hits</p>
        {recentHits.map((hit) => (
          <div key={hit.time} className="snipe-tracker__hit">
            <div className="snipe-tracker__hit-icon">
              <CheckCircle size={14} className="icon-green" />
            </div>
            <div className="snipe-tracker__hit-info">
              <p className="snipe-tracker__hit-pair">{hit.pair} @ {hit.rate}</p>
              <p className="snipe-tracker__hit-meta">{hit.amount} transferred · {hit.time}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
