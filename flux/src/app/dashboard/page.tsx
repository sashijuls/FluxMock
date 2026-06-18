import "./Dashboard.css";
import "@/app/AppLayout.css";
import { Bell, Search } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import BalanceCard from "@/components/dashboard/BalanceCard";
import QuickActions from "@/components/dashboard/QuickActions";
import FXWidget from "@/components/dashboard/FXWidget";
import SnipeTracker from "@/components/dashboard/SnipeTracker";
import TransactionList from "@/components/dashboard/TransactionList";
import RewardsCard from "@/components/dashboard/RewardsCard";
import Badge from "@/components/ui/Badge";

export default function DashboardPage() {
  return (
    <div className="app-layout">
      <DashboardSidebar />

      {/* Main content */}
      <div className="app-main">
        {/* Top bar */}
        <header className="app-header">
          <div className="app-header__user">
            <div className="app-header__user-avatar">JV</div>
            <div className="app-header__user-text">
              <p className="app-header__user-greeting">Hello,</p>
              <p className="app-header__user-name">Julianna</p>
            </div>
          </div>
          <div className="app-header__right">
            <Badge variant="green" dot className="hide-mobile">Rp 498 rate live</Badge>
            <button className="app-header__icon-btn">
              <Search className="w-4 h-4" />
            </button>
            <button className="app-header__icon-btn">
              <Bell className="w-4 h-4" />
              <span className="app-header__notif-dot" />
            </button>
          </div>
        </header>

        {/* Dashboard grid */}
        <main className="app-content">
          <div className="app-container dashboard-grid">
            {/* Row 1: Balance + Quick actions */}
            <div className="dashboard-row dashboard-row--2col">
              <BalanceCard />
              <QuickActions />
            </div>

            {/* Row 2: Transactions + FX */}
            <div className="dashboard-row dashboard-row--3col">
              <div className="dashboard-col-2">
                <TransactionList />
              </div>
              <FXWidget />
            </div>

            {/* Row 3: Snipe + Rewards */}
            <div className="dashboard-row dashboard-row--2col">
              <SnipeTracker />
              <RewardsCard />
            </div>
          </div>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
