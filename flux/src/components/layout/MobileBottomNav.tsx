"use client";
import "@/app/AppLayout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Wallet, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: LayoutDashboard, label: "Home",    href: "/dashboard" },
  { icon: Target,          label: "Snipe",   href: "/snipe" },
  { icon: Wallet,          label: "Wallet",  href: "/wallet" },
  { icon: Crown,           label: "Premium", href: "/premium" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="mobile-nav">
      {items.map(({ icon: Icon, label, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn("mobile-nav__item", active && "mobile-nav__item--active")}
          >
            <Icon className="w-5 h-5" />
            <span className={cn("mobile-nav__label", active && "mobile-nav__label--active")}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
