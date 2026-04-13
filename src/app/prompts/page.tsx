"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const prompts = [
  {
    title: "Analyse tes ventes et donne-toi un plan d'action",
    desc: "Sidekick analyse tes 90 derniers jours de ventes et te sort les actions prioritaires pour le mois. Plus besoin de fouiller dans tes analytics pendant des heures, tu as un plan clair en 30 secondes.",
    prompt:
      "Analyze my sales trends over the last 90 days and give me 3-5 priority actions to take this month based on what's actually moving in my store.",
  },
  {
    title: "Crée une promo complète en une seule commande",
    desc: "Un seul message et Sidekick crée la réduction, l'applique à ta collection, et rédige le mail pour tes abonnés. Ce qui prenait 45 min se fait en 30 secondes.",
    prompt:
      "Create a 15% off discount for all products in the summer collection, valid for the next two weeks, and draft an email announcement for my subscriber list.",
  },
  {
    title: "Identifie tes clients inactifs et relance-les",
    desc: "Sidekick te crée une mini app interne qui affiche tous tes clients qui n'ont pas commandé depuis 90 jours et permet à ton équipe de leur envoyer un mail de win-back avec une réduction personnalisée.",
    prompt:
      "Create an app that shows all customers who haven't ordered in 90 days and lets my team send them a win-back email with a personalized discount.",
  },
  {
    title: "Optimise tes fiches produit pour le SEO",
    desc: "Donne-lui ton best-seller et Sidekick réécrit le titre, la description et les meta fields pour que Google te trouve. Il connaît déjà ton catalogue et ton ton de marque, le résultat est prêt à publier.",
    prompt:
      "Take my top-selling product and optimize it for SEO. Rewrite the title, description, and meta fields to improve organic search ranking while keeping my brand voice.",
  },
  {
    title: "Automatise le réapprovisionnement de ton stock",
    desc: "Sidekick te crée un Flow complet : quand un produit passe sous 10 unités, il le tag, prévient ton équipe par mail et prépare une commande fournisseur. Zéro rupture de stock.",
    prompt:
      "Build a Shopify Flow that triggers when any product's inventory drops below 10 units: tag it as low-stock, notify my team on email, and create a draft purchase order.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copy}
      className={`absolute top-3 right-3 rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 ${
        copied
          ? "border border-green-400/40 bg-green-400/15 text-green-400"
          : "border border-blue-accent/30 bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20"
      }`}
    >
      {copied ? "Copié ✓" : "Copier"}
    </button>
  );
}

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[680px] px-5 py-10 sm:px-6 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-accent/30 bg-blue-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-accent">
            Moonbundles
          </span>
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-[32px] font-[family-name:var(--font-heading)]">
            5 Prompts Sidekick pour 10x ta productivité
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
            Les prompts que les top e-commerçants US utilisent déjà sur le
            nouveau Sidekick de Shopify — utilité en français, prompt en anglais
            prêt à copier
          </p>
        </motion.div>

        {/* Prompts */}
        <div className="mt-10 flex flex-col gap-5">
          {prompts.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 sm:p-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
            >
              {/* Header */}
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  {p.title}
                </h2>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {p.desc}
              </p>

              {/* Prompt box */}
              <div className="relative rounded-lg border border-blue-accent/20 bg-blue-accent/[0.06] px-4 py-4 sm:px-5">
                <CopyButton text={p.prompt} />
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                  Prompt à copier ↓
                </div>
                <p className="pr-16 font-mono text-[13px] leading-relaxed text-blue-light/80 sm:pr-20">
                  {p.prompt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* CTA */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-blue-accent/20 bg-gradient-to-br from-blue-accent/[0.08] to-violet-accent/[0.05] p-8 text-center sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
        >
          <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
            Optimise ta conversion et ton AOV
          </h3>
          <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-text-muted">
            Le meilleur moyen d&apos;éviter de cramer ton budget ads c&apos;est
            d&apos;optimiser ta conversion et ton panier moyen
          </p>
          <a
            href="/api/go?from=prompts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-6 inline-block rounded-xl bg-blue-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(77,124,255,0.25)]"
          >
            Installer Moonbundles gratuitement
          </a>
          <span className="mt-3 block text-xs text-text-muted/60">
            apps.shopify.com/moonbundle
          </span>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-text-muted/50">
          Moonbundles by{" "}
          <a
            href="https://x.com/bambino_moon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-accent/60 hover:text-blue-accent"
          >
            Bambino
          </a>{" "}
          · Built for Shopify · 5.0 ★ (250+ reviews)
        </div>
      </div>
    </div>
  );
}
