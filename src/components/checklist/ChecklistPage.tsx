"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;
const INSTALL_URL = "/api/go?from=checklist";
const WHATSAPP_URL = "https://wa.me/33670438611";
const PROMO_CODE = "4K4MZMMS69";

function Bad({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-red-400 line-through decoration-red-400/40">{children}</span>;
}
function Good({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-green-400/10 px-1.5 py-0.5 text-green-400 font-medium">{children}</span>;
}
function Hl({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-accent font-medium">{children}</span>;
}

const checklist: { title: string; desc: React.ReactNode; example: React.ReactNode }[] = [
  {
    title: "Travaille ton copywriting",
    desc: <><Bad>Café aux champignons adaptogènes bio</Bad> personne en veut. <Good>Retrouve ton énergie sans nervosité en 14 jours</Good> tout le monde veut essayer.</>,
    example: <>Remplace <Bad>Complément alimentaire naturel</Bad> par <Good>Retrouve ton énergie en 14 jours — sans nervosité</Good></>,
  },
  {
    title: "Adapte tes CTA à ta cible",
    desc: <><Bad>Ajouter au panier</Bad> ça parle à personne. <Good>Transformer mes nuits</Good> ça donne envie de cliquer.</>,
    example: <>Tu vends des matelas → <Good>Je veux mieux dormir</Good> convertit <Hl>2x plus</Hl> que <Bad>Ajouter au panier</Bad></>,
  },
  {
    title: "Ajoute des cross-sell et upsell dans ton panier",
    desc: <>Le client est prêt à acheter — c&apos;est le moment de lui proposer un <Hl>produit complémentaire</Hl>.</>,
    example: <>Le client a un shampoing dans le panier → propose le <Good>masque capillaire en upsell à -15%</Good></>,
  },
  {
    title: "Rajoute des cadeaux pour pousser le panier",
    desc: <>Livraison gratuite, ebook, guide d&apos;utilisation, garantie étendue. Le client rajoute un produit juste pour <Hl>débloquer le palier</Hl>.</>,
    example: <><Good>Plus que 12€ pour la livraison gratuite + un guide offert</Good> — le client ajoute un produit pour y arriver.</>,
  },
  {
    title: "Propose un upsell complémentaire après l'achat",
    desc: <>Tu vends des coussins ? Propose une taie d&apos;oreiller. Tu vends du shampoing ? Propose l&apos;après-shampoing. Le client vient de payer, <Hl>20% acceptent</Hl>.</>,
    example: <>Page de confirmation → <Good>Ajoute l&apos;après-shampoing pour 9€ au lieu de 14€ — en 1 clic</Good></>,
  },
  {
    title: "A/B teste tes offres et tes concepts",
    desc: <>Même produit, même trafic, deux structures différentes. Une des deux convertit <Hl>2x mieux</Hl> et tu le sauras jamais si tu testes pas.</>,
    example: <>Teste <Good>bundle 2+1 offert</Good> vs <Good>remise volume -20% dès 3</Good> pendant 7 jours. Garde celui qui convertit.</>,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "copy-code", page: "checklist" }),
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
      {copied ? "Copié ✓" : "Copier"}
    </button>
  );
}

export default function ChecklistPage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(checklist.length).fill(false));
  const completedCount = checked.filter(Boolean).length;
  const progress = (completedCount / checklist.length) * 100;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[15%] h-72 w-72 rounded-full bg-blue-accent/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-[50%] right-[10%] h-56 w-56 rounded-full bg-violet-accent/4 blur-[100px] animate-pulse-glow [animation-delay:3s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[640px] px-5 py-10 sm:px-6 sm:py-14">
        {/* Logo */}
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

        {/* Hero */}
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
            Checklist CRO
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl font-[family-name:var(--font-heading)]">
            6 quick wins à appliquer sur ton store{" "}
            <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
              en moins de 2h
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            La checklist CRO qu&apos;on utilise sur chaque store qu&apos;on analyse.
            Applique ces 6 points et ton panier moyen augmente de 20 à 40%.
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="mt-10 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-medium text-text-muted">Ta progression</span>
            <span className="text-xs font-semibold text-blue-accent">
              {completedCount}/{checklist.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06] border border-white/[0.04]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-accent to-violet-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease }}
            />
          </div>
          {completedCount === checklist.length && (
            <motion.p
              className="mt-2 text-xs font-medium text-green-400"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Checklist complète — bravo !
            </motion.p>
          )}
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {checklist.map((item, i) => {
            const done = checked[i];
            return (
              <motion.div
                key={i}
                onClick={() => toggle(i)}
                className={`glass-card cursor-pointer overflow-hidden transition-all duration-300 select-none ${
                  done
                    ? "border-blue-accent/20 bg-blue-accent/[0.03]"
                    : "hover:-translate-y-0.5"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease }}
              >
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  {/* Checkbox */}
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-300 ${
                      done
                        ? "border-blue-accent bg-blue-accent text-white"
                        : "border-white/15 bg-white/[0.03]"
                    }`}
                  >
                    {done && (
                      <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </motion.svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h2
                      className={`text-base font-bold sm:text-lg font-[family-name:var(--font-heading)] transition-colors duration-300 ${
                        done ? "text-blue-accent" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`mt-1.5 text-sm leading-relaxed transition-colors duration-300 ${
                        done ? "text-text-muted/50" : "text-text-muted"
                      }`}
                    >
                      {item.desc}
                    </p>
                    {/* Exemple */}
                    <p
                      className={`mt-3 rounded-lg bg-white/[0.03] px-3.5 py-2.5 text-xs leading-relaxed italic transition-colors duration-300 ${
                        done ? "text-text-muted/40" : "text-text-secondary/70"
                      }`}
                    >
                      {item.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-accent/15 to-transparent" />

        {/* CTA */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-blue-accent/20 bg-gradient-to-br from-blue-accent/[0.08] to-violet-accent/[0.04]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-blue-accent/10 blur-[80px]" />
          </div>

          <div className="relative z-10 p-6 sm:p-8">
            {/* Promo code */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-blue-accent/20 bg-navy-900/80 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-accent">
                  20% de réduction avec le code
                </p>
                <p className="mt-1 truncate text-lg font-bold tracking-widest text-white sm:text-xl font-[family-name:var(--font-heading)]">
                  {PROMO_CODE}
                </p>
              </div>
              <CopyButton text={PROMO_CODE} />
            </div>

            {/* Button */}
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
            >
              <span className="relative z-10">Installer Moonbundles</span>
              <img src="/shopify.png" alt="Shopify" className="relative z-10 h-5 w-5 object-contain" />
            </a>
          </div>
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <div className="glass-card p-5 text-center sm:p-6">
            <p className="text-sm text-text-muted">
              Une question ? On t&apos;aide à setup tes offres
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

        {/* Footer */}
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
