"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;
const INSTALL_URL = "/api/go?from=value-offer";
const WHATSAPP_URL = "https://wa.me/33670438611";
const PROMO_CODE = "4K4MZMMS69";

function CopyButton({ text }: { text: string }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "copy-code", page: "value-offer" }),
      }).catch(() => {});
    });
  };
  return (
    <button
      onClick={copy}
      className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
        copied
          ? "border border-green-400/40 bg-green-400/15 text-green-400"
          : "border border-blue-accent/30 bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20"
      }`}
    >
      {copied ? t.valueOffer.copyDone : t.valueOffer.copyIdle}
    </button>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 relative z-10">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function msUntilLocalMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function DailyCountdown() {
  const { t } = useTranslation();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(msUntilLocalMidnight());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) return null;

  const h = Math.floor(remaining / 3_600_000);
  const m = Math.floor((remaining / 60_000) % 60);
  const s = Math.floor((remaining / 1000) % 60);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
        </span>
        {t.valueOffer.countdownLabel}
      </p>
      <div className="mt-3 flex items-center gap-2 tabular-nums">
        {[h, m, s].map((v, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="flex h-12 min-w-[3rem] items-center justify-center rounded-lg border border-white/10 bg-navy-900/80 px-2 text-xl font-bold text-white sm:h-14 sm:min-w-[3.5rem] sm:text-2xl font-[family-name:var(--font-heading)]">
              {pad(v)}
            </div>
            {idx < 2 && <span className="text-xl font-bold text-text-muted">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ValueOfferPage() {
  const { t } = useTranslation();
  const tr = t.valueOffer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[8%] left-[10%] h-72 w-72 rounded-full bg-blue-accent/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-[55%] right-[8%] h-72 w-72 rounded-full bg-violet-accent/5 blur-[100px] animate-pulse-glow [animation-delay:3s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[680px] px-5 py-10 sm:px-6 sm:py-14 lg:max-w-3xl lg:px-8 lg:py-20">
        {/* ===== LOGO ===== */}
        <motion.a
          href="https://moonbundles.io"
          className="mb-12 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Image src="/logo.png" alt="Moonbundles" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="text-base font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
            Moonbundles
          </span>
        </motion.a>

        {/* ===== HERO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-accent" />
            </span>
            {tr.heroBadge}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            {tr.heroTitle}
          </h1>

          <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
            {tr.heroSubtitle}
          </p>
        </motion.div>

        {/* ===== SECTIONS ===== */}
        <div className="mt-14 flex flex-col gap-6 sm:gap-8">
          {tr.sections.map((section, i) => (
            <motion.article
              key={i}
              className="glass-card p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                {String(i + 1).padStart(2, "0")} / {String(tr.sections.length).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base lg:leading-[1.7]">
                {section.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ===== CTA MOONBUNDLES ===== */}
        <motion.div
          className="relative mt-14 overflow-hidden rounded-2xl border border-blue-accent/30 bg-gradient-to-br from-blue-accent/[0.12] via-navy-800/60 to-violet-accent/[0.08]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-72 rounded-full bg-blue-accent/15 blur-[90px]" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            {/* Countdown */}
            <DailyCountdown />

            {/* Main text */}
            <h3 className="mx-auto mt-8 max-w-prose text-center text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
              {tr.ctaTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-prose text-center text-sm leading-relaxed text-text-muted sm:text-base">
              {tr.ctaSubtitle}
            </p>

            {/* Button */}
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-white py-4 text-base font-semibold text-navy-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:text-lg"
            >
              <BoltIcon />
              <span className="relative z-10">{tr.ctaButton}</span>
            </a>

            {/* Social proof */}
            <p className="mt-4 text-center text-[11px] text-text-muted/80 sm:text-xs">
              {tr.socialProof}
            </p>

            {/* Promo code */}
            <div className="mx-auto mt-6 flex max-w-md items-center justify-between gap-3 rounded-xl border border-blue-accent/25 bg-navy-900/70 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-accent">
                  {tr.promoLabel}
                </p>
                <p className="mt-1 truncate text-lg font-bold tracking-widest text-white sm:text-xl font-[family-name:var(--font-heading)]">
                  {PROMO_CODE}
                </p>
              </div>
              <CopyButton text={PROMO_CODE} />
            </div>
          </div>
        </motion.div>

        {/* ===== WHATSAPP ===== */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <div className="glass-card p-5 text-center sm:p-6">
            <p className="text-sm text-text-muted">{tr.whatsappText}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-4 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fba59] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            >
              <svg className="relative z-10 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">{tr.whatsappButton}</span>
            </a>
          </div>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <div className="mt-12 text-center text-xs text-text-muted/50">
          Moonbundles by Bambino ·{" "}
          <a
            href="https://x.com/bambino_moon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-accent/60 hover:text-blue-accent"
          >
            @bambino_moon
          </a>{" "}
          · Built for Shopify
        </div>
      </div>
    </div>
  );
}
