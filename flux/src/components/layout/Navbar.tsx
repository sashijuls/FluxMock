"use client";
import "./Navbar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "FluxSnipe", href: "/snipe" },
  { label: "FluxWallet", href: "/wallet" },
  { label: "FluxPremium", href: "/premium" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}>
        <nav className="navbar__nav">
          {/* Logo */}
          <Link href="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="navbar__logo-text">
              <span className="gradient-text-purple">Flux</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="navbar__auth">
            <Link href="/dashboard" className="navbar__login">
              Log in
            </Link>
            <Button size="sm" variant="primary">
              Get started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-[320px] glass-dark p-6 pt-20 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="navbar__mobile-link"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-dark-border">
              <Button variant="secondary" fullWidth>
                Log in
              </Button>
              <Button variant="primary" fullWidth>
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
