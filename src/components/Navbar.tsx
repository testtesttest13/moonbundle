"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Fonctionnalités", href: "/#features" },
  { label: "Avis", href: "/#reviews" },
  { label: "Comparatif", href: "/#compare" },
  { label: "Affilié", href: "/affiliate" },
];

const INSTALL_URL = "https://apps.shopify.com/moonbundle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/80 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={INSTALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] md:inline-block"
        >
          Essayer 14 jours
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-navy-900/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-navy-900"
            >
              Essayer 14 jours
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
