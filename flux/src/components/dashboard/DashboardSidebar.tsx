"use client";
import "@/app/AppLayout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap, LayoutDashboard, Target, Wallet, Crown, ArrowLeftRight,
  Bell, Settings, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",   href: "/dashboard" },
  { icon: Target,          label: "FluxSnipe",   href: "/snipe",    badge: "2 active" },
  { icon: Wallet,          label: "FluxWallet",  href: "/wallet" },
  { icon: ArrowLeftRight,  label: "Transfers",   href: "/transfers" },
  { icon: Crown,           label: "Premium",     href: "/premium",  badge: "Upgrade" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="app-sidebar">
      {/* Logo */}
      <Link href="/" className="app-sidebar__logo">
        <div className="app-sidebar__logo-icon">
          <Zap className="w-4 h-4 text-white" fill="white" />
        </div>
        <span className="app-sidebar__logo-text gradient-text-purple">Flux</span>
      </Link>

      {/* Nav */}
      <nav className="app-sidebar__nav">
        {navItems.map(({ icon: Icon, label, href, badge }) => {
          const active = pathname === href;
          return (
            <Link
              key={href + label}
              href={href}
              className={cn(
                "app-sidebar__nav-item",
                active && "app-sidebar__nav-item--active"
              )}
            >
              <Icon size={16} />
              <span className="app-sidebar__nav-label">{label}</span>
              {badge && (
                <Badge variant={badge === "Upgrade" ? "gold" : "purple"} className="text-[10px] px-1.5 py-0.5">
                  {badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="app-sidebar__bottom">
        <Link href="#" className="app-sidebar__bottom-link">
          <Bell size={16} />
          <span className="app-sidebar__nav-label">Notifications</span>
          <span className="app-sidebar__notif-count">3</span>
        </Link>
        <Link href="#" className="app-sidebar__bottom-link">
          <Settings size={16} />
          <span>Settings</span>
        </Link>
        {/* User */}
        <div className="app-sidebar__user">
          <div className="app-sidebar__user-avatar">JV</div>
          <div className="app-sidebar__user-info">
            <p className="app-sidebar__user-name">Julianna</p>
            <p className="app-sidebar__user-sub">Student · NTHU</p>
          </div>
          <ChevronRight className="w-3 h-3 app-sidebar__chevron" />
        </div>
      </div>
    </aside>
  );
}
