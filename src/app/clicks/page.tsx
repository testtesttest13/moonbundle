"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const PAGES: { id: string; name: string; emoji: string }[] = [
  { id: "home", name: "Accueil", emoji: "🏠" },
  { id: "checklist", name: "Checklist", emoji: "✅" },
  { id: "native-ads", name: "Native Ads", emoji: "📱" },
  { id: "prompts", name: "Prompts", emoji: "💬" },
  { id: "affiliate", name: "Affiliate", emoji: "🤝" },
  { id: "value-offer", name: "Value Offer", emoji: "💰" },
  { id: "quiz-2026", name: "Quiz 2026", emoji: "🎯" },
];

interface Events {
  copyCode: Record<string, number>;
  downloadPdf: Record<string, number>;
}

interface Onboarding {
  completed: number;
  revenue: Record<string, number>;
  market: Record<string, number>;
  ads: Record<string, number>;
  aov: Record<string, number>;
}

interface ClickData {
  clicks: Record<string, number>;
  views: Record<string, number>;
  events: Events;
  onboarding?: Onboarding;
  days: Record<string, { clicks: Record<string, number>; views: Record<string, number> }>;
  pages: string[];
}

const ONBOARD_LABELS: Record<string, Record<string, string>> = {
  revenue: {
    "starting": "Démarre",
    "0-5k": "0-5k",
    "5-50k": "5-50k",
    "50-500k": "50-500k",
    "500k+": "500k+",
  },
  market: {
    beauty: "Beauté",
    fashion: "Mode",
    home: "Maison",
    health: "Santé",
    tech: "Tech",
    fitness: "Fitness",
    food: "Food",
    other: "Autre",
  },
  ads: {
    meta: "Meta",
    tiktok: "TikTok",
    google: "Google",
    snap: "Snap",
    multiple: "Plusieurs",
    none: "Aucune",
  },
  aov: {
    "0-25": "<$25",
    "25-50": "$25-50",
    "50-100": "$50-100",
    "100-200": "$100-200",
    "200+": "$200+",
    "unknown": "—",
  },
};

function OnboardBreakdown({
  label,
  dict,
  data,
}: {
  label: string;
  dict: Record<string, string>;
  data: Record<string, number>;
}) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, n]) => sum + n, 0);
  if (total === 0) {
    return (
      <div className="glass-card p-4">
        <p className="text-[10px] uppercase tracking-wider text-text-muted">{label}</p>
        <p className="mt-2 text-xs text-text-muted/50">—</p>
      </div>
    );
  }
  return (
    <div className="glass-card p-4">
      <p className="text-[10px] uppercase tracking-wider text-text-muted">{label}</p>
      <div className="mt-3 flex flex-col gap-1.5">
        {entries.map(([key, n]) => {
          const pct = Math.round((n / total) * 100);
          return (
            <div key={key} className="flex items-center gap-2 text-[11px]">
              <span className="w-16 shrink-0 text-text-muted">{dict[key] || key}</span>
              <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                <div className="absolute inset-y-0 left-0 rounded-full bg-blue-accent/70" style={{ width: `${pct}%` }} />
              </div>
              <span className="w-10 shrink-0 text-right font-medium text-white tabular-nums">{n}</span>
              <span className="w-8 shrink-0 text-right text-text-muted/60 tabular-nums">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ClicksPanel() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<ClickData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchData = useCallback(async (key: string) => {
    const res = await fetch(`/api/clicks?key=${key}`);
    if (!res.ok) throw new Error((await res.json()).error);
    return res.json();
  }, []);

  const login = async () => {
    setLoading(true);
    setError("");
    try {
      const json = await fetchData(password);
      setData(json);
      setAuthed(true);
      setLastRefresh(new Date());
      sessionStorage.setItem("clicks-key", password);
    } catch (e) { setError((e as Error).message); }
    setLoading(false);
  };

  const refresh = useCallback(async () => {
    const key = sessionStorage.getItem("clicks-key");
    if (!key) return;
    try { setData(await fetchData(key)); setLastRefresh(new Date()); } catch {}
  }, [fetchData]);

  useEffect(() => {
    const key = sessionStorage.getItem("clicks-key");
    if (key) {
      setPassword(key);
      fetchData(key).then((j) => { setData(j); setAuthed(true); setLastRefresh(new Date()); }).catch(() => {});
    }
  }, [fetchData]);

  useEffect(() => {
    if (!authed) return;
    const i = setInterval(refresh, 15000);
    return () => clearInterval(i);
  }, [authed, refresh]);

  const totalClicks = data ? Object.values(data.clicks).reduce((a, b) => a + b, 0) : 0;
  const totalViews = data ? Object.values(data.views).reduce((a, b) => a + b, 0) : 0;
  const totalCopies = data ? Object.values(data.events.copyCode).reduce((a, b) => a + b, 0) : 0;
  const totalDownloads = data ? Object.values(data.events.downloadPdf).reduce((a, b) => a + b, 0) : 0;
  const today = new Date().toISOString().slice(0, 10);
  const todayData = data?.days[today];

  // === LOGIN ===
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a1628] px-6">
        <motion.div className="w-full max-w-xs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <div className="glass-card p-8 text-center">
            <p className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">Moonbundles</p>
            <p className="mt-1 text-xs text-text-muted">Analytics</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Mot de passe"
              className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white placeholder:text-text-muted/50 outline-none focus:border-blue-accent/40"
            />
            <button onClick={login} disabled={loading} className="mt-3 w-full rounded-xl bg-blue-accent py-3 text-sm font-semibold text-white hover:bg-blue-light disabled:opacity-50">
              {loading ? "..." : "Entrer"}
            </button>
            {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
          </div>
        </motion.div>
      </div>
    );
  }

  // === DASHBOARD ===
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">Analytics</h1>
            <p className="text-[11px] text-text-muted">
              {lastRefresh && <>{lastRefresh.toLocaleTimeString("fr-FR")} · <span className="text-green-400">auto 15s</span></>}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={refresh} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-text-muted hover:text-white">
              Refresh
            </button>
            <button onClick={() => { sessionStorage.removeItem("clicks-key"); setAuthed(false); }} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-text-muted hover:text-white">
              Quitter
            </button>
          </div>
        </div>

        {/* === TOTAUX === */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Vues", value: totalViews, color: "text-white" },
            { label: "Clics CTA", value: totalClicks, color: "text-blue-accent" },
            { label: "Copies code", value: totalCopies, color: "text-violet-accent" },
            { label: "Downloads", value: totalDownloads, color: "text-green-400" },
          ].map((s, i) => (
            <motion.div key={s.label} className="glass-card p-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05, ease }}>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">{s.label}</p>
              <p className={`mt-1 text-2xl font-bold ${s.color} font-[family-name:var(--font-heading)]`}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* === PAR PAGE === */}
        <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">Par page</h2>
        <div className="mb-8 flex flex-col gap-2">
          {PAGES.map((page, i) => {
            const v = data?.views[page.id] || 0;
            const c = data?.clicks[page.id] || 0;
            const cc = data?.events.copyCode[page.id] || 0;
            const dl = data?.events.downloadPdf[page.id] || 0;
            const tv = todayData?.views[page.id] || 0;
            const tc = todayData?.clicks[page.id] || 0;
            return (
              <motion.div key={page.id} className="glass-card p-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.04, ease }}>
                {/* Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    <span>{page.emoji}</span> {page.name}
                  </span>
                  {tv > 0 && (
                    <span className="rounded-full bg-green-400/10 px-2 py-0.5 text-[9px] font-medium text-green-400">
                      +{tv} vues aujourd&apos;hui
                    </span>
                  )}
                </div>

                {/* Stats inline */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs">
                  <span className="text-text-muted">{v} <span className="text-text-muted/50">vues</span></span>
                  <span className="text-blue-accent">{c} <span className="text-blue-accent/50">clics</span></span>
                  {cc > 0 && <span className="text-violet-accent">{cc} <span className="text-violet-accent/50">copies</span></span>}
                  {dl > 0 && <span className="text-green-400">{dl} <span className="text-green-400/50">downloads</span></span>}
                  {tc > 0 && <span className="text-yellow-400">{tc} <span className="text-yellow-400/50">clics 24h</span></span>}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === EVENTS === */}
        {(totalCopies > 0 || totalDownloads > 0) && (
          <>
            <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">Events</h2>
            <div className="mb-8 grid grid-cols-2 gap-2">
              <div className="glass-card p-4">
                <p className="text-[10px] uppercase tracking-wider text-text-muted">Code promo copié</p>
                <p className="mt-1 text-xl font-bold text-violet-accent font-[family-name:var(--font-heading)]">{totalCopies}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {Object.entries(data?.events.copyCode || {}).map(([p, n]) => (
                    <span key={p} className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-text-muted">
                      {PAGES.find(x => x.id === p)?.name || p}: {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card p-4">
                <p className="text-[10px] uppercase tracking-wider text-text-muted">PDFs téléchargés</p>
                <p className="mt-1 text-xl font-bold text-green-400 font-[family-name:var(--font-heading)]">{totalDownloads}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {Object.entries(data?.events.downloadPdf || {}).map(([p, n]) => (
                    <span key={p} className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-text-muted">
                      {PAGES.find(x => x.id === p)?.name || p}: {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* === ONBOARDING === */}
        {data?.onboarding && data.onboarding.completed > 0 && (
          <>
            <h2 className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              <span>Onboarding value-offer</span>
              <span className="text-blue-accent">{data.onboarding.completed} complétés</span>
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <OnboardBreakdown label="CA mensuel" dict={ONBOARD_LABELS.revenue} data={data.onboarding.revenue} />
              <OnboardBreakdown label="AOV actuel" dict={ONBOARD_LABELS.aov} data={data.onboarding.aov} />
              <OnboardBreakdown label="Marché" dict={ONBOARD_LABELS.market} data={data.onboarding.market} />
              <OnboardBreakdown label="Ads" dict={ONBOARD_LABELS.ads} data={data.onboarding.ads} />
            </div>
          </>
        )}

        {/* === 7 JOURS === */}
        <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">7 derniers jours</h2>
        <div className="flex flex-col gap-1.5">
          {data && Object.entries(data.days).sort(([a], [b]) => b.localeCompare(a)).slice(0, 7).map(([date, day]) => {
            const dv = Object.values(day.views).reduce((a, b) => a + b, 0);
            const dc = Object.values(day.clicks).reduce((a, b) => a + b, 0);
            const isToday = date === today;
            return (
              <div key={date} className={`flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 ${isToday ? "border-blue-accent/15" : ""}`}>
                <span className="flex items-center gap-2 text-xs text-white">
                  {date.slice(5)}
                  {isToday && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}
                </span>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-text-muted">{dv}v</span>
                  <span className="text-blue-accent font-medium">{dc}c</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
