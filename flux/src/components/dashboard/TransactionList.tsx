import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

const transactions = [
  { name: "Allowance from Dad", category: "Incoming", amount: "+NT$ 12,000", amountIDR: "Rp 5,980,800", time: "Today 09:41", icon: "💚", amountClass: "tx-row__amount--positive", badge: "snipe" as const },
  { name: "NTHU Tuition Fee",   category: "Tuition",   amount: "-NT$ 45,800", amountIDR: "",              time: "Yesterday",    icon: "🎓", amountClass: "tx-row__amount--neutral",  badge: null },
  { name: "7-Eleven Guangfu",   category: "Shopping",  amount: "-NT$ 87",     amountIDR: "",              time: "Today 11:22",  icon: "🛒", amountClass: "tx-row__amount--neutral",  badge: null },
  { name: "MRT Hsinchu",        category: "Transport", amount: "-NT$ 24",     amountIDR: "",              time: "Today 08:15",  icon: "🚇", amountClass: "tx-row__amount--neutral",  badge: null },
  { name: "Cashback reward",    category: "Rewards",   amount: "+NT$ 42",     amountIDR: "",              time: "2 days ago",   icon: "⭐", amountClass: "tx-row__amount--gold",     badge: null },
  { name: "Starbucks NTHU",     category: "Food & Drink", amount: "-NT$ 160", amountIDR: "",              time: "3 days ago",   icon: "☕", amountClass: "tx-row__amount--neutral",  badge: null },
];

export default function TransactionList() {
  return (
    <GlassCard variant="solid-dark" className="tx-list">
      <div className="tx-list__header">
        <p className="tx-list__title">All expenses</p>
        <button className="tx-list__nav">March →</button>
      </div>

      {/* Expense breakdown */}
      <div className="tx-list__breakdown">
        <svg viewBox="0 0 36 36" className="tx-list__donut">
          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#7B61FF" strokeWidth="4" strokeDasharray="47 88" strokeLinecap="round" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#FF4B7C" strokeWidth="4" strokeDasharray="22 88" strokeDashoffset="-47" strokeLinecap="round" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="19 88" strokeDashoffset="-69" strokeLinecap="round" />
        </svg>
        <div className="tx-list__legend">
          <div className="tx-list__legend-item">
            <div className="tx-list__legend-dot tx-list__legend-dot--purple" />
            <span className="tx-list__legend-text">47% Shopping</span>
          </div>
          <div className="tx-list__legend-item">
            <div className="tx-list__legend-dot tx-list__legend-dot--pink" />
            <span className="tx-list__legend-text">25% Tuition</span>
          </div>
          <div className="tx-list__legend-item">
            <div className="tx-list__legend-dot tx-list__legend-dot--gold" />
            <span className="tx-list__legend-text">28% Food</span>
          </div>
        </div>
      </div>

      {/* Transaction rows */}
      <div className="tx-list__rows">
        {transactions.map((tx) => (
          <div key={tx.name + tx.time} className="tx-row">
            <div className="tx-row__icon">{tx.icon}</div>
            <div className="tx-row__info">
              <div className="tx-row__name-row">
                <p className="tx-row__name">{tx.name}</p>
                {tx.badge === "snipe" && (
                  <Badge variant="purple" className="no-shrink">via Snipe</Badge>
                )}
              </div>
              <p className="tx-row__meta">{tx.category} · {tx.time}</p>
            </div>
            <div className="tx-row__amount-col">
              <p className={`tx-row__amount ${tx.amountClass}`}>{tx.amount}</p>
              {tx.amountIDR && <p className="tx-row__sub">{tx.amountIDR}</p>}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
