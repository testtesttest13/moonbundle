"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const PAGE_LABELS: Record<string, string> = {
  home: "Page d'accueil",
  checklist: "Checklist CRO",
  "native-ads": "Guide Native Ads",
  prompts: "Prompts Sidekick",
  affiliate: "Page Affiliate",
  cta: "CTA Final (home)",
  unknown: "Autre",
};

interface ClickData {
  total: Record<string, number>;
  days: Record<string, Record<string, number>>;
}

export default function ClicksPanel() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<ClickData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/clicks?key=${password}`);
      if (!res.ok) {
        const j = await res.json();
        setError(j.error || "Erreur");
        setLoading(false);
        return;
      }
      const json = await res.json();
      setData(json);
      setAuthed(true);
      sessionStorage.setItem("clicks-key", password);
    } catch {
      setError("Erreur de connexion");
    }
    setLoading(false);
  };

  const refresh = async () => {
    const key = sessionStorage.getItem("clicks-key");
    if (!key) return;
    const res = await fetch(`/api/clicks?key=${key}`);
    if (res.ok) setData(await res.json());
  };

  // Auto-login from session
  useEffect(() => {
    const key = sessionStorage.getItem("clicks-key");
    if (key) {
      setPassword(key);
      fetch(`/api/clicks?key=${key}`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((json) => {
          setData(json);
          setAuthed(true);
        })
        .catch(() => {});
    }
  }, []);

  const totalClicks = data
    ? Object.values(data.total).reduce((a, b) => a + (b as number), 0)
    : 0;

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
            <h1 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
              Moonbundles Analytics
            </h1>
            <p className="mt-2 text-sm text-text-muted">Entre ton mot de passe</p>

            <div className="mt-6 flex flex-col gap-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Mot de passe"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-muted/50 outline-none focus:border-blue-accent/40"
              />
              <button
                onClick={login}
                disabled={loading}
                className="rounded-xl bg-blue-accent px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-light disabled:opacity-50"
              >
                {loading ? "..." : "Connexion"}
              </button>
              {error && (
                <p className="text-xs text-red-400">{error}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
              Analytics
            </h1>
            <p className="mt-1 text-sm text-text-muted">Clics sur les CTA Moonbundles</p>
          </div>
          <button
            onClick={refresh}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-text-muted transition-all hover:bg-white/10 hover:text-white"
          >
            Actualiser
          </button>
        </div>

        {/* Total */}
        <motion.div
          className="glass-card mb-8 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Total des clics</p>
          <p className="mt-2 bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-5xl font-bold text-transparent font-[family-name:var(--font-heading)]">
            {totalClicks}
          </p>
        </motion.div>

        {/* Per page */}
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Par page
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {data &&
            Object.entries(data.total)
              .sort(([, a], [, b]) => (b as number) - (a as number))
              .map(([page, count], i) => {
                const pct = totalClicks > 0 ? ((count as number) / totalClicks) * 100 : 0;
                return (
                  <motion.div
                    key={page}
                    className="glass-card overflow-hidden p-5"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05, ease }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white">
                        {PAGE_LABELS[page] || page}
                      </span>
                      <span className="text-lg font-bold text-blue-accent font-[family-name:var(--font-heading)]">
                        {count as number}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-accent to-violet-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease }}
                      />
                    </div>
                  </motion.div>
                );
              })}
          {data && Object.keys(data.total).length === 0 && (
            <p className="text-sm text-text-muted">Aucun clic enregistré pour le moment.</p>
          )}
        </div>

        {/* Daily breakdown */}
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
          7 derniers jours
        </h2>
        <div className="flex flex-col gap-3">
          {data &&
            Object.entries(data.days)
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([date, pages]) => {
                const dayTotal = Object.values(pages).reduce((a, b) => a + b, 0);
                if (dayTotal === 0) return null;
                return (
                  <div key={date} className="glass-card p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{date}</span>
                      <span className="text-sm font-bold text-text-secondary">{dayTotal} clics</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(pages).map(([page, n]) => (
                        <span
                          key={page}
                          className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-text-muted"
                        >
                          {PAGE_LABELS[page] || page}: <span className="text-blue-accent font-medium">{n}</span>
                        </span>
                      ))}
                    </div>
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
          className="mt-10 text-xs text-text-muted/50 hover:text-text-muted"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
