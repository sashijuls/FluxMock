import "./Footer.css";
import Link from "next/link";
import { Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const links = {
  Products: [
    { label: "FluxSnipe", href: "/snipe" },
    { label: "FluxWallet", href: "/wallet" },
    { label: "FluxPremium", href: "/premium" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          {/* Brand */}
          <ScrollReveal direction="up" className="footer__brand">
            <Link href="/" className="footer__logo">
              <div className="footer__logo-icon">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="footer__logo-text gradient-text-purple">Flux</span>
            </Link>
            <p className="footer__description">
              The financial ecosystem built for Indonesian students in Taiwan. Send smarter, spend smarter.
            </p>
            {/* Trust badges */}
            <div className="footer__badges">
              {["🏦 Licensed Remittance", "🔐 256-bit SSL", "🇮🇩 🇹🇼 Trusted"].map(
                (badge) => (
                  <span key={badge} className="footer__badge">
                    {badge}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>

          {/* Link columns */}
          {Object.entries(links).map(([section, items], colIdx) => (
            <ScrollReveal key={section} delay={colIdx * 100} className="footer__section">
              <h4 className="footer__section-title">{section}</h4>
              <ul className="footer__links">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer__link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150} className="footer__bottom">
          <p className="footer__copyright">© 2025 Flux Technologies. All rights reserved.</p>
          <p className="footer__legal">
            Regulated under Indonesian OJK & Taiwan FSC guidelines.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
