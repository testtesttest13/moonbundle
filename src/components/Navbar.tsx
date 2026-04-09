"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";

const INSTALL_URL = "https://apps.shopify.com/moonbundle";

function FrFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full">
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </svg>
  );
}

function EnFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <clipPath id="uk-stripes-nav">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-stripes-nav)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);

  const switchLang = (l: Language) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
        aria-label="Change language"
      >
        <div className="h-5 w-5 overflow-hidden rounded-full">
          {lang === "fr" ? <FrFlag /> : <EnFlag />}
        </div>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-40 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-navy-900/95 backdrop-blur-xl shadow-xl">
            <button
              onClick={() => switchLang("fr")}
              className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs transition-colors ${
                lang === "fr" ? "bg-blue-accent/10 text-blue-accent" : "text-text-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="h-4 w-4 overflow-hidden rounded-full">
                <FrFlag />
              </div>
              Français
            </button>
            <button
              onClick={() => switchLang("en")}
              className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs transition-colors ${
                lang === "en" ? "bg-blue-accent/10 text-blue-accent" : "text-text-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="h-4 w-4 overflow-hidden rounded-full">
                <EnFlag />
              </div>
              English
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { label: t.nav.features, href: "/#features" },
    { label: t.nav.reviews, href: "/#reviews" },
    { label: t.nav.compare, href: "/#compare" },
    { label: t.nav.affiliate, href: "/affiliate" },
  ];

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

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5"
            aria-label={t.nav.menuOpen}
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
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
