"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;
const AOV = 40;
const RATE = 0.4;
const PRESETS = [10, 50, 100, 250, 500] as const;

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-accent"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Simulator() {
  const { t } = useTranslation();
  const [referrals, setReferrals] = useState(100);

  const monthly = referrals * AOV * RATE;
  const yearly = monthly * 12;

  const monthlySpring = useSpring(monthly, { stiffness: 120, damping: 24 });
  const yearlySpring = useSpring(yearly, { stiffness: 120, damping: 24 });

  useEffect(() => {
    monthlySpring.set(monthly);
    yearlySpring.set(yearly);
  }, [monthly, yearly, monthlySpring, yearlySpring]);

  const monthlyDisplay = useTransform(monthlySpring, (v) => fmt(v));
  const yearlyDisplay = useTransform(yearlySpring, (v) => fmt(v));

  const pct = (referrals / 500) * 100;

  return (
    <div className="w-full text-left">
      {/* Readouts */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-text-muted">
            {t.simulator.eyebrow}
          </div>
          <div
            className="text-[22px] font-bold text-white font-[family-name:var(--font-heading)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {referrals}{" "}
            <span className="text-sm font-medium text-text-muted">{t.simulator.refs}</span>
          </div>
        </div>
        <div className="text-right">
          <motion.div
            className="text-[clamp(40px,5.5vw,64px)] font-bold leading-none tracking-[-0.02em] text-white font-[family-name:var(--font-heading)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {monthlyDisplay}
          </motion.div>
          <div
            className="mt-1.5 text-[13px] text-text-muted"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {t.simulator.perMonth} · {t.simulator.soit}{" "}
            <motion.span className="font-semibold text-text-secondary">
              {yearlyDisplay}
            </motion.span>{" "}
            {t.simulator.perYear}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative h-9">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 overflow-hidden rounded-full border border-white/5 bg-white/[0.06]">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #4d7cff, #7c5cff)",
              boxShadow: "0 0 16px rgba(77,124,255,.35)",
            }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={500}
          step={1}
          value={referrals}
          onChange={(e) => setReferrals(Number(e.target.value))}
          aria-label={t.simulator.refs}
          className="range-slider absolute inset-0 m-0 h-full w-full cursor-grab bg-transparent p-0"
          style={{ WebkitAppearance: "none" }}
        />
      </div>

      {/* Tick labels */}
      <div
        className="mt-2.5 flex justify-between text-[11px] text-text-muted"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        <span>0</span>
        <span>125</span>
        <span>250</span>
        <span>375</span>
        <span>500</span>
      </div>

      {/* Preset chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {PRESETS.map((n) => {
          const active = referrals === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => setReferrals(n)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "border-blue-accent/30 bg-blue-accent/[0.12] text-blue-accent"
                  : "border-white/5 bg-white/[0.02] text-text-muted hover:border-white/10 hover:text-white"
              }`}
            >
              {n} {t.simulator.preset}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AffiliateHero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden px-7 pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Ambient radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 900,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(77,124,255,.14), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[960px] text-center">
        {/* Pill badge */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
            <span className="h-[5px] w-[5px] rounded-full bg-blue-accent" />
            {t.affiliateHero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="m-0 text-[clamp(44px,6.6vw,82px)] font-bold leading-[1.02] tracking-[-0.035em] text-white font-[family-name:var(--font-heading)]"
          style={{ textWrap: "balance" }}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
        >
          {t.affiliateHero.headlineA}
          <br />
          <span className="text-text-muted">{t.affiliateHero.headlineB}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-[22px] max-w-[520px] text-[17px] leading-relaxed text-text-secondary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          {t.affiliateHero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 inline-flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <a
            href="#"
            className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-white px-[26px] py-[14px] text-[14.5px] font-semibold text-navy-900 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            {t.affiliateHero.ctaPrimary}
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px]" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-[26px] py-[14px] text-[14.5px] font-semibold text-white transition-colors hover:bg-white/[0.08]"
          >
            {t.affiliateHero.ctaSecondary}
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px]" />
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-x-[22px] gap-y-2 text-[12.5px] text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
        >
          {t.affiliateHero.trust.map((x) => (
            <span key={x} className="inline-flex items-center gap-1.5">
              <CheckIcon />
              {x}
            </span>
          ))}
        </motion.div>

        {/* Simulator card */}
        <motion.div
          className="glass-card mt-[54px] px-6 py-7 text-left sm:px-8 sm:py-8"
          style={{ boxShadow: "0 24px 60px rgba(0,0,0,.3)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
        >
          <Simulator />
        </motion.div>
      </div>
    </section>
  );
}
