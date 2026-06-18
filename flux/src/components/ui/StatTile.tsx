import "./StatTile.css";
import { LucideIcon } from "lucide-react";

interface StatTileProps {
  icon: LucideIcon;
  label: string;
  gradient: "purple" | "orange" | "pink" | "cyan" | "green" | "gold";
  onClick?: () => void;
  className?: string;
}

const gradientMap = {
  purple: "stat-tile--purple",
  orange: "stat-tile--orange",
  pink:   "stat-tile--pink",
  cyan:   "stat-tile--cyan",
  green:  "stat-tile--green",
  gold:   "stat-tile--gold",
};

export default function StatTile({ icon: Icon, label, gradient, onClick, className }: StatTileProps) {
  return (
    <button
      onClick={onClick}
      className={`stat-tile ${gradientMap[gradient]}${className ? ` ${className}` : ""}`}
    >
      <Icon size={20} className="stat-tile__icon" />
      <span className="stat-tile__label">{label}</span>
    </button>
  );
}
