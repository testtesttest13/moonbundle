"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;
const INSTALL_URL = "https://apps.shopify.com/moonbundle";
const WHATSAPP_URL = "https://wa.me/33670438611";
const PROMO_CODE = "4K4MZMMS69";

const checklist = [
  {
    title: "Travaille ton copywriting",
    desc: "\u00AB Caf\u00e9 aux champignons adaptog\u00e8nes bio \u00BB personne en veut. \u00AB Retrouve ton \u00e9nergie sans nervosit\u00e9 en 14 jours \u00BB tout le monde veut essayer.",
  },
  {
    title: "Adapte tes CTA \u00e0 ta cible",
    desc: "\u00AB Ajouter au panier \u00BB \u00e7a parle \u00e0 personne. \u00AB Transformer mes nuits \u00BB \u00e7a donne envie de cliquer.",
  },
  {
    title: "Ajoute des cross-sell et upsell dans ton panier",
    desc: "Le client est pr\u00eat \u00e0 acheter\u00a0\u2014\u00a0c\u2019est le moment de lui proposer un produit compl\u00e9mentaire.",
  },
  {
    title: "Rajoute des cadeaux pour pousser le panier",
    desc: "Livraison gratuite, ebook, guide d\u2019utilisation, garantie \u00e9tendue. Le client rajoute un produit juste pour d\u00e9bloquer le palier.",
  },
  {
    title: "Propose un upsell compl\u00e9mentaire apr\u00e8s l\u2019achat",
    desc: "Tu vends des coussins\u00a0? Propose une taie d\u2019oreiller. Tu vends du shampoing\u00a0? Propose l\u2019apr\u00e8s-shampoing. Le client vient de payer, 20% acceptent.",
  },
  {
    title: "A/B teste tes offres et tes concepts",
    desc: "M\u00eame produit, m\u00eame trafic, deux structures diff\u00e9rentes. Une des deux convertit 2x mieux et tu le sauras jamais si tu testes pas.",
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
      className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
        copied
          ? "border border-green-400/40 bg-green-400/15 text-green-400"
          : "border border-blue-accent/30 bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20"
      }`}
    >
      {copied ? "Copi\u00e9 \u2713" : "Copier"}
    </button>
  );
}

export default function ChecklistPage() {
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

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[15%] h-72 w-72 rounded-full bg-blue-accent/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-[50%] right-[10%] h-56 w-56 rounded-full bg-violet-accent/4 blur-[100px] animate-pulse-glow [animation-delay:3s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[640px] px-5 py-10 sm:px-6 sm:py-14">
        {/* ===== HEADER (logo only) ===== */}
        <motion.div
          className="mb-12 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Image src="/logo.png" alt="Moonbundles" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="text-base font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
            Moonbundles
          </span>
        </motion.div>

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
            Moonbundles
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl font-[family-name:var(--font-heading)]">
            6 quick wins \u00e0 appliquer sur ton store{" "}
            <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
              en moins de 2h
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            La checklist CRO qu&apos;on utilise sur chaque store qu&apos;on analyse.
            Applique ces 6 points et ton panier moyen augmente de 20 \u00e0 40%.
          </p>
        </motion.div>

        {/* ===== CHECKLIST ===== */}
        <div className="mt-12 flex flex-col gap-4">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card group overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease }}
            >
              <div className="flex gap-4">
                {/* Number */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-accent text-sm font-bold text-white">
                  {i + 1}
                </div>

                <div className="min-w-0">
                  <h2 className="text-base font-bold text-white sm:text-lg font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-accent/15 to-transparent" />

        {/* ===== CTA MOONBUNDLES ===== */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-blue-accent/20 bg-gradient-to-br from-blue-accent/[0.08] to-violet-accent/[0.04]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-blue-accent/10 blur-[80px]" />
          </div>

          <div className="relative z-10 p-6 sm:p-8">
            <p className="text-center text-base font-semibold text-white sm:text-lg font-[family-name:var(--font-heading)]">
              Tout \u00e7a se configure en 5 min avec Moonbundles
            </p>

            {/* Promo code box */}
            <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-blue-accent/20 bg-navy-900/80 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-accent">
                  20% de r\u00e9duction avec le code
                </p>
                <p className="mt-1 truncate text-lg font-bold tracking-widest text-white sm:text-xl font-[family-name:var(--font-heading)]">
                  {PROMO_CODE}
                </p>
              </div>
              <CopyButton text={PROMO_CODE} />
            </div>

            {/* Install button */}
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
            >
              <span className="relative z-10">Installer Moonbundles</span>
              <img src="/shopify.png" alt="Shopify" className="relative z-10 h-5 w-5 object-contain" />
            </a>
          </div>
        </motion.div>

        {/* ===== CTA WHATSAPP ===== */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <div className="glass-card p-5 text-center sm:p-6">
            <p className="text-sm text-text-muted">
              Une question ? On t&apos;aide \u00e0 setup tes offres
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-4 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fba59] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
            >
              <svg className="relative z-10 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Nous contacter sur WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <div className="mt-12 text-center text-xs text-text-muted/50">
          Moonbundles by{" "}
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
