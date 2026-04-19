"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;
const INSTALL_URL = "/api/go?from=quiz-2026";
const WHATSAPP_URL = "https://wa.me/33670438611";
const PROMO_CODE = "4K4MZMMS69";
const MULTIPLIER = 1.7;
const TOTAL_QUESTIONS = 20;

type Answer = "yes" | "no" | "idk" | null;
type Step = "hero" | "aov" | number | "result";
type Currency = "$" | "€";

function formatNumber(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "0";
  const rounded = Math.round(n * 100) / 100;
  if (rounded >= 10000) return Math.round(rounded).toLocaleString("en-US");
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function msUntilLocalMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function CountUp({
  to,
  duration = 1500,
  format,
  className,
}: {
  to: number;
  duration?: number;
  format: (n: number) => string;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (to <= 0) {
      setValue(0);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span className={className}>{format(value)}</span>;
}

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
        body: JSON.stringify({ event: "copy-code", page: "quiz-2026" }),
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
      {copied ? t.quiz2026.copyDone : t.quiz2026.copyIdle}
    </button>
  );
}

function ScoreCircle({
  score,
  total,
  color,
}: {
  score: number;
  total: number;
  color: string;
}) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const ratio = total > 0 ? score / total : 0;
  return (
    <div className="relative h-40 w-40 sm:h-44 sm:w-44">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - ratio) }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-4xl font-bold sm:text-5xl font-[family-name:var(--font-heading)] tabular-nums"
          style={{ color }}
        >
          {score}
          <span className="text-2xl text-text-muted/70">/{total}</span>
        </span>
      </div>
    </div>
  );
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
        {t.quiz2026.countdownLabel}
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

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 relative z-10">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function QuizPage() {
  const { t, lang } = useTranslation();
  const tr = t.quiz2026;

  const [step, setStep] = useState<Step>("hero");
  const [aov, setAov] = useState("");
  const [currency, setCurrency] = useState<Currency>("$");
  const [answers, setAnswers] = useState<Answer[]>(() => Array(TOTAL_QUESTIONS).fill(null));
  const [orders, setOrders] = useState(1000);
  const [showAllImprovements, setShowAllImprovements] = useState(false);

  // Default currency from lang on first lang-aware render
  useEffect(() => {
    setCurrency(lang === "fr" ? "€" : "$");
  }, [lang]);

  const aovNum = Math.max(0, parseFloat(aov.replace(",", ".")) || 0);
  const projected = aovNum * MULTIPLIER;
  const monthlyImpact = Math.max(0, (projected - aovNum) * orders);

  const score = useMemo(() => answers.filter((a) => a === "yes").length, [answers]);

  const tier: "high" | "mid" | "low" =
    score >= 15 ? "high" : score >= 8 ? "mid" : "low";
  const tierColor =
    tier === "high" ? "#22c55e" : tier === "mid" ? "#f59e0b" : "#ef4444";
  const tierMessage =
    tier === "high" ? tr.resultHigh : tier === "mid" ? tr.resultMid : tr.resultLow;

  const failedIdxs = useMemo(
    () =>
      answers
        .map((a, i) => (a === "yes" ? -1 : i))
        .filter((i) => i >= 0),
    [answers]
  );

  function pick(answer: Answer) {
    if (typeof step !== "number") return;
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = answer;
      return next;
    });
    if (step < TOTAL_QUESTIONS - 1) {
      setStep(step + 1);
    } else {
      setStep("result");
    }
  }

  function previous() {
    if (typeof step === "number") {
      if (step === 0) setStep("aov");
      else setStep(step - 1);
    } else if (step === "result") {
      setStep(TOTAL_QUESTIONS - 1);
    }
  }

  function restart() {
    setStep("hero");
    setAnswers(Array(TOTAL_QUESTIONS).fill(null));
    setShowAllImprovements(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const progressPct =
    typeof step === "number" ? ((step + 1) / TOTAL_QUESTIONS) * 100 : 0;

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

      {/* Progress bar (fixed top during questions) */}
      {typeof step === "number" && (
        <div className="fixed inset-x-0 top-0 z-30 h-1 bg-white/[0.04]">
          <motion.div
            className="h-full bg-blue-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[680px] px-5 py-10 sm:px-6 sm:py-14 lg:max-w-3xl lg:px-8 lg:py-16">
        {/* Logo */}
        <motion.a
          href="https://moonbundles.io"
          className="mb-10 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Image src="/logo.png" alt="Moonbundles" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="text-base font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
            Moonbundles
          </span>
        </motion.a>

        <AnimatePresence mode="wait">
          {/* ===== HERO ===== */}
          {step === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease }}
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

              <button
                onClick={() => setStep("aov")}
                className="btn-shine group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:text-base"
              >
                <span className="relative z-10">{tr.heroCta}</span>
                <ArrowRight />
              </button>
            </motion.div>
          )}

          {/* ===== AOV INPUT ===== */}
          {step === "aov" && (
            <motion.div
              key="aov"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                {tr.questionCounter} 0/{TOTAL_QUESTIONS}
              </p>
              <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
                {tr.aovTitle}
              </h2>
              <p className="mt-2 text-sm text-text-muted">{tr.aovHint}</p>

              <div className="mt-6 flex items-stretch gap-3">
                <div className="relative flex-1">
                  <input
                    autoFocus
                    type="text"
                    inputMode="decimal"
                    value={aov}
                    onChange={(e) => setAov(e.target.value.replace(/[^0-9.,]/g, ""))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && aovNum > 0) setStep(0);
                    }}
                    placeholder={tr.aovPlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-2xl font-bold text-white placeholder:text-text-muted/30 outline-none transition-all focus:border-blue-accent/50 focus:bg-white/[0.06] sm:text-3xl font-[family-name:var(--font-heading)]"
                  />
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-muted">
                    {currency}
                  </span>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  {(["$", "€"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`flex-1 px-3 text-sm font-semibold transition-colors ${
                        currency === c ? "bg-blue-accent text-white" : "text-text-muted hover:text-white"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(0)}
                disabled={aovNum <= 0}
                className="btn-shine mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-light hover:shadow-[0_0_30px_rgba(77,124,255,0.25)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-blue-accent disabled:hover:shadow-none"
              >
                <span className="relative z-10">{tr.aovNext}</span>
                <ArrowRight />
              </button>
            </motion.div>
          )}

          {/* ===== QUESTION ===== */}
          {typeof step === "number" && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                  {tr.questionCounter} {step + 1}/{TOTAL_QUESTIONS}
                </p>
                <button
                  onClick={previous}
                  className="text-xs text-text-muted transition-colors hover:text-white"
                >
                  ← {tr.previous}
                </button>
              </div>

              <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[28px] font-[family-name:var(--font-heading)]">
                {tr.questions[step]}
              </h2>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => pick("yes")}
                  className="group flex items-center justify-between rounded-xl border border-green-500/30 bg-green-500/[0.06] px-5 py-4 text-left text-base font-semibold text-green-400 transition-all duration-200 hover:border-green-500/60 hover:bg-green-500/[0.12] hover:translate-x-1"
                >
                  <span>{tr.yes}</span>
                  <ArrowRight />
                </button>
                <button
                  onClick={() => pick("no")}
                  className="group flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/[0.06] px-5 py-4 text-left text-base font-semibold text-red-400 transition-all duration-200 hover:border-red-500/60 hover:bg-red-500/[0.12] hover:translate-x-1"
                >
                  <span>{tr.no}</span>
                  <ArrowRight />
                </button>
                <button
                  onClick={() => pick("idk")}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-base font-semibold text-text-muted transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white hover:translate-x-1"
                >
                  <span>{tr.idk}</span>
                  <ArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* ===== RESULT ===== */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              {/* Score circle */}
              <div className="flex flex-col items-center text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                  {tr.scoreLabel}
                </p>
                <motion.div
                  className="mt-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease }}
                >
                  <ScoreCircle score={score} total={TOTAL_QUESTIONS} color={tierColor} />
                </motion.div>
                <p
                  className="mt-5 max-w-md text-sm leading-relaxed text-white sm:text-base"
                  style={{ color: tierColor }}
                >
                  {tierMessage}
                </p>
              </div>

              {/* AOV projection card */}
              <motion.div
                className="mt-10 overflow-hidden rounded-2xl border border-blue-accent/30 bg-gradient-to-br from-blue-accent/[0.12] via-navy-800/60 to-violet-accent/[0.08] p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">
                      {tr.aovCurrentLabel}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)] tabular-nums">
                      {currency}
                      {formatNumber(aovNum)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      className="text-blue-accent"
                    >
                      <ArrowRight />
                    </motion.div>
                    <span className="mt-1 text-[10px] uppercase tracking-wider text-blue-accent">
                      {tr.aovMultiplier}
                    </span>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-[10px] uppercase tracking-wider text-blue-accent">
                      {tr.aovProjectedLabel}
                    </p>
                    <p className="mt-1 text-3xl font-bold text-green-400 sm:text-4xl font-[family-name:var(--font-heading)] tabular-nums">
                      {currency}
                      <CountUp to={projected} format={formatNumber} />
                    </p>
                  </div>
                </div>

                {/* Revenue impact with editable orders */}
                <div className="mt-6 border-t border-white/5 pt-5">
                  <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-text-muted sm:text-base">
                    <span>{tr.revenueImpactPrefix}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-navy-900/70 px-2 py-1">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={orders}
                        onChange={(e) => {
                          const v = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
                          setOrders(Number.isFinite(v) ? v : 0);
                        }}
                        className="w-20 bg-transparent text-center text-sm font-bold text-white outline-none tabular-nums"
                        aria-label={tr.ordersInputLabel}
                      />
                    </span>
                    <span>{tr.revenueImpactMid}</span>
                    <span className="font-bold text-green-400 tabular-nums">
                      {currency}
                      <CountUp to={monthlyImpact} format={formatNumber} duration={900} />
                    </span>
                    <span>{tr.revenueImpactBoldEnd}</span>
                    <span>{tr.revenueImpactSuffix}</span>
                  </p>
                </div>
              </motion.div>

              {/* Improvements */}
              {failedIdxs.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-white sm:text-xl font-[family-name:var(--font-heading)]">
                    {tr.improveTitle}
                  </h3>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {(showAllImprovements ? failedIdxs : failedIdxs.slice(0, 5)).map((i) => (
                      <motion.div
                        key={i}
                        className="glass-card flex items-start gap-3 p-4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-400">
                          ✕
                        </span>
                        <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                          <span className="font-semibold text-text-muted/70">
                            {String(i + 1).padStart(2, "0")} —{" "}
                          </span>
                          {tr.questions[i]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  {failedIdxs.length > 5 && (
                    <button
                      onClick={() => setShowAllImprovements((v) => !v)}
                      className="mt-3 text-xs font-semibold text-blue-accent hover:text-blue-light"
                    >
                      {showAllImprovements
                        ? tr.showLess
                        : `${tr.showAll} (+${failedIdxs.length - 5})`}
                    </button>
                  )}
                </div>
              )}

              {/* CTA Moonbundles */}
              <motion.div
                className="relative mt-12 overflow-hidden rounded-2xl border border-blue-accent/30 bg-gradient-to-br from-blue-accent/[0.12] via-navy-800/60 to-violet-accent/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-72 rounded-full bg-blue-accent/15 blur-[90px]" />
                </div>
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <DailyCountdown />

                  <h3 className="mx-auto mt-8 max-w-prose text-center text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
                    {tr.ctaTitlePrefix}{" "}
                    <span className="text-text-muted line-through tabular-nums">
                      {currency}
                      {formatNumber(aovNum)}
                    </span>{" "}
                    {tr.ctaTitleMid}{" "}
                    <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent tabular-nums">
                      {currency}
                      {formatNumber(projected)}
                    </span>{" "}
                    {tr.ctaTitleSuffix}
                  </h3>
                  <p className="mx-auto mt-3 max-w-prose text-center text-sm leading-relaxed text-text-muted sm:text-base">
                    {tr.ctaSubtitle}
                  </p>

                  <div className="mx-auto mt-8 flex max-w-md items-center justify-between gap-3 rounded-xl border border-blue-accent/25 bg-navy-900/70 px-4 py-3 sm:px-5">
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

                  <div className="relative mx-auto mt-5 w-full max-w-md">
                    <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-white/20 blur-xl animate-pulse-glow" />
                    <a
                      href={INSTALL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine group relative flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-base font-semibold text-navy-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] sm:text-lg"
                    >
                      <BoltIcon />
                      <span className="relative z-10">{tr.ctaButton}</span>
                    </a>
                  </div>

                  <p className="mt-4 text-center text-[11px] text-text-muted/80 sm:text-xs">
                    {tr.socialProof}
                  </p>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <div className="mt-5 glass-card p-5 text-center sm:p-6">
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

              {/* Restart */}
              <div className="mt-6 text-center">
                <button
                  onClick={restart}
                  className="text-xs text-text-muted/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  ↻ {tr.restart}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
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
