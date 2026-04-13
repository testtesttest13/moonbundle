"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const PAGE_LABELS: Record<string, { name: string; color: string }> = {
  home: { name: "Page d'accueil", color: "from-blue-accent to-violet-accent" },
  affiliate: { name: "Page Affiliate", color: "from-green-400 to-emerald-300" },
  checklist: { name: "Checklist CRO", color: "from-yellow-400 to-orange-400" },
  "native-ads": { name: "Guide Native Ads", color: "from-pink-400 to-rose-400" },
  prompts: { name: "Prompts Sidekick", color: "from-cyan-400 to-blue-accent" },
  navbar: { name: "Navbar", color: "from-violet-accent to-purple-400" },
  cta: { name: "CTA Final", color: "from-blue-light to-blue-accent" },
  footer: { name: "Footer", color: "from-gray-400 to-gray-500" },
};

interface DayData {
  clicks: Record<string, number>;
  views: Record<string, number>;
}

interface ClickData {
  clicks: Record<string, number>;
  views: Record<string, number>;
  days: Record<string, DayData>;
  pages: string[];
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
    if (!res.ok) {
      const j = await res.json();
      throw new Error(j.error || "Erreur");
    }
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
    } catch (e) {
      setError((e as Error).message);
    }
    setLoading(false);
  };

  const refresh = useCallback(async () => {
    const key = sessionStorage.getItem("clicks-key");
    if (!key) return;
    try {
      setData(await fetchData(key));
      setLastRefresh(new Date());
    } catch {}
  }, [fetchData]);

  // Auto-login
  useEffect(() => {
    const key = sessionStorage.getItem("clicks-key");
    if (key) {
      setPassword(key);
      fetchData(key)
        .then((json) => { setData(json); setAuthed(true); setLastRefresh(new Date()); })
        .catch(() => {});
    }
  }, [fetchData]);

  // Auto-refresh toutes les 15s
  useEffect(() => {
    if (!authed) return;
    const interval = setInterval(refresh, 15000);
    return () => clearInterval(interval);
  }, [authed, refresh]);

  const totalClicks = data ? Object.values(data.clicks).reduce((a, b) => a + b, 0) : 0;
  const totalViews = data ? Object.values(data.views).reduce((a, b) => a + b, 0) : 0;
  const clickRate = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : "0.0";

  const contentPages = ["home", "affiliate", "checklist", "native-ads", "prompts"];
  const ctaPages = ["navbar", "cta", "footer"];

  // Today data
  const today = new Date().toISOString().slice(0, 10);
  const todayData = data?.days[today];
  const todayViews = todayData ? Object.values(todayData.views).reduce((a, b) => a + b, 0) : 0;
  const todayClicks = todayData ? Object.values(todayData.clicks).reduce((a, b) => a + b, 0) : 0;

  // === LOGIN ===
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a1628] px-6">
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="glass-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-accent/15 text-sm font-bold text-blue-accent">
                M
              </div>
              <div>
                <h1 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  Analytics
                </h1>
                <p className="text-xs text-text-muted">Moonbundles Dashboard</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Mot de passe"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-muted/50 outline-none focus:border-blue-accent/40 transition-colors"
              />
              <button
                onClick={login}
                disabled={loading}
                className="rounded-xl bg-blue-accent px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-light disabled:opacity-50"
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
              {error && <p className="text-xs text-red-400">{error}</p>}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // === DASHBOARD ===
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-accent/15 text-sm font-bold text-blue-accent">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold text-white sm:text-2xl font-[family-name:var(--font-heading)]">
                Analytics
              </h1>
              <p className="text-xs text-text-muted">
                {lastRefresh && (
                  <>Mis à jour {lastRefresh.toLocaleTimeString("fr-FR")} · <span className="text-green-400">live 15s</span></>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-text-muted transition-all hover:bg-white/10 hover:text-white"
            >
              Actualiser
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("clicks-key");
                setAuthed(false);
                setData(null);
                setPassword("");
              }}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-text-muted transition-all hover:bg-white/10 hover:text-white"
            >
              Quitter
            </button>
          </div>
        </div>

        {/* === TOP STATS === */}
        <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { label: "Vues totales", value: totalViews, gradient: "from-blue-accent to-violet-accent" },
            { label: "Clics totaux", value: totalClicks, gradient: "from-green-400 to-emerald-300" },
            { label: "Taux de clic", value: `${clickRate}%`, gradient: "from-yellow-400 to-orange-400" },
            { label: "Vues aujourd'hui", value: todayViews, gradient: "from-cyan-400 to-blue-accent" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-4 sm:p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
              <p className={`mt-1.5 bg-gradient-to-r ${stat.gradient} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl font-[family-name:var(--font-heading)]`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Today clicks */}
        <div className="mb-8 glass-card p-4 flex items-center justify-between">
          <span className="text-xs text-text-muted">Clics aujourd&apos;hui</span>
          <span className="text-sm font-bold text-green-400 font-[family-name:var(--font-heading)]">{todayClicks}</span>
        </div>

        {/* === PAGES LIVE === */}
        <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Pages en direct
        </h2>
        <div className="mb-8 flex flex-col gap-2.5">
          {contentPages.map((page, i) => {
            const info = PAGE_LABELS[page] || { name: page, color: "from-white to-white" };
            const views = data?.views[page] || 0;
            const clicks = data?.clicks[page] || 0;
            const rate = views > 0 ? ((clicks / views) * 100).toFixed(1) : "0.0";
            const todayPageViews = todayData?.views[page] || 0;
            const todayPageClicks = todayData?.clicks[page] || 0;
            const maxViews = Math.max(...contentPages.map(p => data?.views[p] || 0), 1);
            const barWidth = (views / maxViews) * 100;
            return (
              <motion.div
                key={page}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05, ease }}
              >
                <div className="p-4 sm:p-5">
                  {/* Title row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${info.color}`} />
                      <span className="text-sm font-medium text-white">{info.name}</span>
                    </div>
                    <span className="text-[10px] text-text-muted">
                      {rate}% taux de clic
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-text-muted/70">Vues</p>
                      <p className="text-base font-bold text-white font-[family-name:var(--font-heading)]">{views}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-text-muted/70">Clics</p>
                      <p className="text-base font-bold text-blue-accent font-[family-name:var(--font-heading)]">{clicks}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-text-muted/70">Vues 24h</p>
                      <p className="text-base font-bold text-cyan-400 font-[family-name:var(--font-heading)]">{todayPageViews}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-text-muted/70">Clics 24h</p>
                      <p className="text-base font-bold text-green-400 font-[family-name:var(--font-heading)]">{todayPageClicks}</p>
                    </div>
                  </div>

                  {/* Bar relative aux autres pages */}
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${info.color} opacity-60`}
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === CTA BUTTONS === */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Boutons CTA
        </h2>
        <div className="mb-8 grid grid-cols-3 gap-2.5">
          {ctaPages.map((page, i) => {
            const info = PAGE_LABELS[page] || { name: page, color: "from-white to-white" };
            const clicks = data?.clicks[page] || 0;
            const todayC = todayData?.clicks[page] || 0;
            return (
              <motion.div
                key={page}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05, ease }}
              >
                <p className="text-[10px] uppercase tracking-wider text-text-muted">{info.name}</p>
                <p className="mt-1 text-xl font-bold text-blue-accent font-[family-name:var(--font-heading)]">{clicks}</p>
                <p className="text-[10px] text-text-muted/50">
                  {todayC > 0 && <span className="text-green-400">+{todayC} aujourd&apos;hui</span>}
                  {todayC === 0 && "clics total"}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* === DAILY === */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
          14 derniers jours
        </h2>
        <div className="flex flex-col gap-2">
          {data &&
            Object.entries(data.days)
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([date, day]) => {
                const dayViews = Object.values(day.views).reduce((a, b) => a + b, 0);
                const dayClicks = Object.values(day.clicks).reduce((a, b) => a + b, 0);
                const isToday = date === today;
                return (
                  <div key={date} className={`glass-card p-4 ${isToday ? "border-blue-accent/20" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-sm font-medium text-white">
                        {date}
                        {isToday && (
                          <span className="rounded-full bg-green-400/15 px-2 py-0.5 text-[9px] font-semibold text-green-400">
                            Live
                          </span>
                        )}
                      </span>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-text-muted">
                          {dayViews} <span className="text-text-muted/50">vues</span>
                        </span>
                        <span className="text-blue-accent font-medium">
                          {dayClicks} <span className="text-blue-accent/50">clics</span>
                        </span>
                      </div>
                    </div>

                    {(dayViews > 0 || dayClicks > 0) && (
                      <div className="flex flex-wrap gap-1.5">
                        {[...new Set([...Object.keys(day.views), ...Object.keys(day.clicks)])].map((p) => {
                          const v = day.views[p] || 0;
                          const c = day.clicks[p] || 0;
                          const label = (PAGE_LABELS[p]?.name || p);
                          return (
                            <span
                              key={p}
                              className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-text-muted"
                            >
                              {label.length > 12 ? label.slice(0, 12) + "…" : label}:{" "}
                              <span className="text-text-secondary">{v}v</span>
                              {c > 0 && <> / <span className="text-blue-accent">{c}c</span></>}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {dayViews === 0 && dayClicks === 0 && (
                      <p className="text-[10px] text-text-muted/30">Aucune activité</p>
                    )}
                  </div>
                );
              })}
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            sessionStorage.removeItem("clicks-key");
            setAuthed(false);
            setData(null);
            setPassword("");
          }}
          className="mt-10 text-xs text-text-muted/40 hover:text-text-muted"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
