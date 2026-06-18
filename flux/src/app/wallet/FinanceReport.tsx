"use client";
import "./FinanceReport.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  Utensils,
  Train,
  Home,
  ShoppingBag,
  MoreHorizontal,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

/* ─── Mock data ─────────────────────────────────────────────── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const INCOME_DATA  = [14200, 13800, 15500, 13200, 16000, 15800];
const EXPENSE_DATA = [11800, 10200, 38500, 12400, 11200, 12600];

const THIS_INCOME  = 15800;
const THIS_EXPENSE = 12600;
const NET = THIS_INCOME - THIS_EXPENSE;

const PREV_FOOD = 3200;
const THIS_FOOD = 3850;

const categories = [
  { label: "Rent / Dorm",  amount: 5500, color: "#7B61FF", pct: 43.7, dotClass: "fr-legend-dot--purple" },
  { label: "Food & Drink", amount: 3850, color: "#FF6B35", pct: 30.6, dotClass: "fr-legend-dot--orange" },
  { label: "Shopping",     amount: 1450, color: "#FF4B7C", pct: 11.5, dotClass: "fr-legend-dot--pink"   },
  { label: "Others",       amount: 1080, color: "#10B981", pct:  8.6, dotClass: "fr-legend-dot--green"  },
  { label: "Transport",    amount:  720, color: "#00D2FF", pct:  5.7, dotClass: "fr-legend-dot--cyan"   },
];

const transactions = [
  { icon: Home,           merchant: "Dorm rent — June",   category: "Rent/Dorm",    date: "Jun 1",  amount: -5500  },
  { icon: TrendingUp,     merchant: "Allowance — Dad",     category: "Income",        date: "Jun 2",  amount: +12000 },
  { icon: Utensils,       merchant: "Machi Machi Boba",    category: "Food & Drink",  date: "Jun 3",  amount: -75    },
  { icon: Train,          merchant: "EasyCard top-up",     category: "Transport",     date: "Jun 4",  amount: -500   },
  { icon: ShoppingBag,    merchant: "UNIQLO Zhubei",       category: "Shopping",      date: "Jun 5",  amount: -890   },
  { icon: Utensils,       merchant: "7-Eleven Guangfu",    category: "Food & Drink",  date: "Jun 7",  amount: -145   },
  { icon: TrendingUp,     merchant: "Part-time TA pay",    category: "Income",        date: "Jun 10", amount: +3800  },
  { icon: Utensils,       merchant: "NTHU Cafeteria",      category: "Food & Drink",  date: "Jun 11", amount: -95    },
  { icon: ShoppingBag,    merchant: "Carrefour Zhongli",   category: "Shopping",      date: "Jun 12", amount: -560   },
  { icon: MoreHorizontal, merchant: "Spotify Student",     category: "Others",        date: "Jun 13", amount: -149   },
];

/* ─── Chart config ──────────────────────────────────────────── */

const barData = {
  labels: MONTHS,
  datasets: [
    {
      label: "Income",
      data: INCOME_DATA,
      backgroundColor: "rgba(16, 185, 129, 0.75)",
      borderRadius: 6,
      borderSkipped: false as const,
    },
    {
      label: "Expenses",
      data: EXPENSE_DATA,
      backgroundColor: "rgba(255, 107, 53, 0.75)",
      borderRadius: 6,
      borderSkipped: false as const,
    },
  ],
};

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "rgba(255, 255, 255, 0.55)",
        font: { size: 11 },
        boxWidth: 12,
        padding: 16,
      },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => ` NT$ ${Number(ctx.parsed.y).toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(255, 255, 255, 0.05)" },
      ticks: { color: "rgba(255, 255, 255, 0.45)", font: { size: 11 } },
    },
    y: {
      grid: { color: "rgba(255, 255, 255, 0.05)" },
      ticks: {
        color: "rgba(255, 255, 255, 0.45)",
        font: { size: 11 },
        callback: (val) => `NT$${(Number(val) / 1000).toFixed(0)}k`,
      },
    },
  },
};

const donutData = {
  labels: categories.map((c) => c.label),
  datasets: [
    {
      data: categories.map((c) => c.amount),
      backgroundColor: categories.map((c) => c.color),
      borderColor: "transparent",
      borderWidth: 0,
      hoverOffset: 6,
    },
  ],
};

const donutOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "68%",
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => ` NT$ ${Number(ctx.parsed).toLocaleString()}`,
      },
    },
  },
};

/* ─── Component ─────────────────────────────────────────────── */

export default function FinanceReport() {
  const foodDiff = THIS_FOOD - PREV_FOOD;

  return (
    <div className="finance-report">

      {/* Section header */}
      <div className="finance-report__header">
        <div className="finance-report__divider" />
        <div className="finance-report__title-group">
          <h2 className="finance-report__title">Finance Report</h2>
          <p className="finance-report__subtitle">Your money, at a glance.</p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="finance-report__summary">
        <GlassCard variant="solid-dark" className="fr-metric-card">
          <div className="fr-metric-card__icon fr-metric-card__icon--green">
            <TrendingUp size={18} />
          </div>
          <p className="fr-metric-card__label">Total Income</p>
          <p className="fr-metric-card__value fr-metric-card__value--green">
            NT$ {THIS_INCOME.toLocaleString()}
          </p>
          <p className="fr-metric-card__sub">this month</p>
        </GlassCard>

        <GlassCard variant="solid-dark" className="fr-metric-card">
          <div className="fr-metric-card__icon fr-metric-card__icon--red">
            <TrendingDown size={18} />
          </div>
          <p className="fr-metric-card__label">Total Expenses</p>
          <p className="fr-metric-card__value fr-metric-card__value--red">
            NT$ {THIS_EXPENSE.toLocaleString()}
          </p>
          <p className="fr-metric-card__sub">this month</p>
        </GlassCard>

        <GlassCard variant="solid-dark" className="fr-metric-card">
          <div className="fr-metric-card__icon fr-metric-card__icon--purple">
            <Minus size={18} />
          </div>
          <p className="fr-metric-card__label">Net Balance</p>
          <p className={`fr-metric-card__value ${NET >= 0 ? "fr-metric-card__value--green" : "fr-metric-card__value--red"}`}>
            {NET >= 0 ? "+" : ""}NT$ {Math.abs(NET).toLocaleString()}
          </p>
          <p className="fr-metric-card__sub">this month</p>
        </GlassCard>
      </div>

      {/* Charts — two columns on desktop, stacked on mobile */}
      <div className="finance-report__charts">
        <GlassCard variant="solid-dark" className="fr-chart-card">
          <p className="fr-chart-card__title">6-Month Overview</p>
          <div className="fr-chart-wrap">
            <Bar data={barData} options={barOptions} />
          </div>
        </GlassCard>

        <GlassCard variant="solid-dark" className="fr-chart-card">
          <p className="fr-chart-card__title">Spending by Category</p>
          <div className="fr-chart-wrap fr-chart-wrap--donut">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
          <div className="fr-donut-legend">
            {categories.map((cat) => (
              <div key={cat.label} className="fr-donut-legend__row">
                <div className={`fr-legend-dot ${cat.dotClass}`} />
                <span className="fr-donut-legend__label">{cat.label}</span>
                <span className="fr-donut-legend__pct">{cat.pct}%</span>
                <span className="fr-donut-legend__amount">NT$ {cat.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Monthly comparison callout */}
      <div className="fr-callout">
        <div className="fr-callout__accent" />
        <div className="fr-callout__body">
          <p className="fr-callout__text">
            You spent{" "}
            <strong className="fr-callout__strong">
              NT$ {foodDiff.toLocaleString()} more
            </strong>{" "}
            on Food &amp; Drink this month vs last month.
          </p>
          <p className="fr-callout__sub">
            Your net balance is still positive — you&rsquo;re managing well.
          </p>
        </div>
      </div>

      {/* Recent transactions */}
      <GlassCard variant="solid-dark" className="fr-transactions">
        <div className="fr-transactions__header">
          <p className="fr-transactions__title">Recent Transactions</p>
        </div>
        <div className="fr-transactions__list">
          {transactions.map((tx, i) => {
            const Icon = tx.icon;
            const isIncome = tx.amount > 0;
            return (
              <div key={i} className="fr-tx-row">
                <div className={`fr-tx-row__icon ${isIncome ? "fr-tx-row__icon--income" : "fr-tx-row__icon--expense"}`}>
                  <Icon size={14} />
                </div>
                <div className="fr-tx-row__info">
                  <p className="fr-tx-row__merchant">{tx.merchant}</p>
                  <p className="fr-tx-row__meta">{tx.category} · {tx.date}</p>
                </div>
                <p className={`fr-tx-row__amount ${isIncome ? "fr-tx-row__amount--income" : "fr-tx-row__amount--expense"}`}>
                  {isIncome ? "+" : "−"}NT$ {Math.abs(tx.amount).toLocaleString()}
                </p>
              </div>
            );
          })}
        </div>
        <div className="fr-transactions__footer">
          <button className="fr-transactions__view-all">
            View all
            <ArrowRight size={14} />
          </button>
        </div>
      </GlassCard>

    </div>
  );
}
