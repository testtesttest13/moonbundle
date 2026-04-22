"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";

const INSTALL_URL = "/api/go?from=navbar";

function FrFlag({ w = 18, h = 18 }: { w?: number; h?: number }) {
  return (
    <svg viewBox="0 0 60 40" width={w} height={h} preserveAspectRatio="xMidYMid slice" className="block">
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </svg>
  );
}

function EnFlag({ w = 18, h = 18 }: { w?: number; h?: number }) {
  return (
    <svg viewBox="0 0 60 30" width={w} height={h} preserveAspectRatio="xMidYMid slice" className="block">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function Flag({ lang, size = 18 }: { lang: Language; size?: number }) {
  return (
    <span
      className="inline-flex overflow-hidden rounded-full border border-white/10"
      style={{ width: size, height: size, lineHeight: 0 }}
    >
      {lang === "fr" ? <FrFlag w={size} h={size} /> : <EnFlag w={size} h={size} />}
    </span>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const NAV_LINKS = [
    { label: t.nav.features, href: "/#features" },
    { label: t.nav.reviews, href: "/#reviews" },
    { label: t.nav.compare, href: "/#compare" },
    { label: t.nav.affiliate, href: "/affiliate" },
  ];

  const onAffiliate = pathname === "/affiliate";
  const ctaLabel = onAffiliate ? t.nav.ctaAffiliate : t.nav.cta;
  const ctaHref = onAffiliate ? "#" : INSTALL_URL;
  const ctaExternal = !onAffiliate;

  const isActive = (href: string) => {
    if (href === "/affiliate") return pathname === "/affiliate";
    return false;
  };

  const pickLang = (l: Language) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <div
      className="animate-nav-float fixed inset-x-0 top-4 z-50 px-5"
      data-nav
    >
      <nav
        className="relative mx-auto flex items-center justify-between gap-5"
        style={{
          maxWidth: 1080,
          padding: "10px 14px 10px 22px",
          borderRadius: 9999,
          background: "rgba(18,28,52,.55)",
          border: "1px solid rgba(255,255,255,.12)",
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
          boxShadow: scrolled
            ? "0 14px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.08)"
            : "0 8px 28px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.08)",
          transition: "box-shadow .4s cubic-bezier(.22,1,.36,1), background .4s",
        }}
      >
        {/* Liquid sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.08), transparent 40%)",
          }}
        />

        {/* Logo */}
        <a
          href="/"
          className="relative inline-flex items-center gap-2.5 no-underline"
          aria-label="Moonbundles — accueil"
        >
          <Image
            src="/logo.png"
            alt=""
            width={26}
            height={26}
            className="h-[26px] w-[26px] rounded-[7px] object-contain"
          />
          <span className="text-base font-bold tracking-[-0.01em] text-white font-[family-name:var(--font-heading)]">
            Moonbundles
          </span>
        </a>

        {/* Desktop links */}
        <div className="relative hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap text-[13px] font-medium transition-colors ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-[2px]"
                    style={{
                      background: "linear-gradient(90deg, #4d7cff, #7c5cff)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="relative flex items-center gap-2.5">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Change language"
              className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <Flag lang={lang} size={18} />
            </button>

            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setLangOpen(false)}
                />
                <div
                  className="absolute right-0 top-[calc(100%+10px)] z-40 min-w-[168px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
                  style={{
                    background: "rgba(12,20,40,.92)",
                    backdropFilter: "blur(22px) saturate(180%)",
                    WebkitBackdropFilter: "blur(22px) saturate(180%)",
                  }}
                >
                  {(["fr", "en"] as Language[]).map((l) => {
                    const sel = lang === l;
                    return (
                      <button
                        key={l}
                        onClick={() => pickLang(l)}
                        className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13px] font-medium transition-colors ${
                          sel
                            ? "bg-blue-accent/[0.14] text-blue-accent"
                            : "text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Flag lang={l} size={18} />
                        {l === "fr" ? "Français" : "English"}
                        {sel && (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="ml-auto"
                            aria-hidden
                          >
                            <path
                              d="M5 12l5 5L20 7"
                              stroke="#4d7cff"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* CTA (hidden on small screens) */}
          <a
            href={ctaHref}
            {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hidden whitespace-nowrap rounded-full bg-white px-[18px] py-[9px] text-[12.5px] font-semibold text-navy-900 shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_28px_rgba(255,255,255,0.35),0_2px_12px_rgba(0,0,0,0.3)] sm:inline-block"
          >
            {ctaLabel} →
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t.nav.menuOpen}
            className="inline-flex h-[34px] w-[34px] flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 bg-white/5 md:hidden"
          >
            <span
              className={`block h-[1.5px] w-4 rounded-[2px] bg-white transition-transform duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 rounded-[2px] bg-white transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 rounded-[2px] bg-white transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mx-auto mt-2.5 rounded-[20px] border border-white/10 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden"
          style={{
            maxWidth: 1080,
            background: "rgba(12,20,40,.92)",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
          }}
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-[10px] px-3.5 py-3 text-[15px] font-medium no-underline transition-colors ${
                    active
                      ? "bg-blue-accent/[0.14] text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-2.5 rounded-full bg-white px-[18px] py-3 text-center text-[14px] font-semibold text-navy-900 no-underline"
            >
              {ctaLabel} →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
