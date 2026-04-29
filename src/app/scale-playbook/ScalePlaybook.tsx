"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;
const INSTALL_URL = "/api/go?from=scale-playbook";
const WHATSAPP_URL = "https://wa.me/33670438611";
const PROMO_CODE = "4K4MZMMS69";

const FOMO_HTML = `<div class="stock-warning-box">
  <div class="stock-warning-header">
    <span class="stock-icon">!</span>
    <span class="stock-title">WARNING: Low Stock Notice</span>
  </div>
  <p class="stock-text">
    This product sold out <span class="stock-underline">12 times</span> last year. We encourage you to take advantage of the <strong>limited sale</strong> and buy now. Subscribing protects you against future stockouts. <strong>PS:</strong> Only available here, don't buy <a href="#" class="stock-link">fakes on Amazon/eBay</a>.
  </p>
</div>
<style>
.stock-warning-box {
  background-color: #fdf2f2;
  border: 2px dashed #d37373;
  padding: 16px;
  border-radius: 4px;
  margin: 15px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.stock-warning-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #a94442;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
}
.stock-icon {
  background-color: #a94442;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 12px;
}
.stock-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #834040;
}
.stock-underline {
  text-decoration: underline;
  font-weight: 500;
}
.stock-link {
  color: #834040;
  text-decoration: underline;
  font-weight: 500;
}
.stock-text strong {
  color: #a94442;
}
</style>`;

function CopyButton({
  text,
  size = "md",
}: {
  text: string;
  size?: "sm" | "md" | "lg";
}) {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const sizeClass =
    size === "lg"
      ? "px-5 py-2.5 text-sm"
      : size === "sm"
        ? "px-3 py-1.5 text-[11px]"
        : "px-4 py-2 text-xs";
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-lg font-semibold transition-all duration-200 ${sizeClass} ${
        copied
          ? "border border-green-400/40 bg-green-400/15 text-green-400"
          : "border border-blue-accent/30 bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20"
      }`}
    >
      {copied ? "Copié ✓" : "Copier"}
    </button>
  );
}

function PrimaryCtaCard({ variant = "main" }: { variant?: "main" | "final" }) {
  const heading = variant === "main" ? "⚡ Étape 1 : Installe Moonbundles" : "⚡ Prêt à appliquer ces hacks ?";
  const sub =
    variant === "main"
      ? "Tous ces hacks demandent une app qui les supporte. Moonbundles fait tout en une seule app : bundles, cart drawer, upsell post-achat, A/B test. 1 200+ stores, 5.0/5 sur Shopify."
      : "Une seule app pour bundles, cart drawer, upsell post-achat et A/B test. Code -20% à vie, install en 30 secondes.";

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-blue-accent/30 bg-gradient-to-br from-blue-accent/[0.12] via-navy-800/60 to-violet-accent/[0.08]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/15 blur-[90px]" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <h3 className="text-center text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
          {heading}
        </h3>
        <p className="mx-auto mt-3 max-w-prose text-center text-sm leading-relaxed text-text-muted sm:text-base">
          {sub}
        </p>

        <div className="mx-auto mt-6 flex max-w-md items-center justify-between gap-3 rounded-xl border border-blue-accent/25 bg-navy-900/70 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
              -20% à vie · code
            </p>
            <p className="mt-1 truncate text-lg font-bold tracking-widest text-white sm:text-xl font-[family-name:var(--font-heading)]">
              {PROMO_CODE}
            </p>
          </div>
          <CopyButton text={PROMO_CODE} />
        </div>

        <div className="relative mx-auto mt-5 w-full max-w-md">
          <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-blue-accent/30 blur-xl animate-pulse-glow" />
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group relative flex w-full items-center justify-center gap-3 rounded-xl bg-blue-accent py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-light hover:shadow-[0_0_40px_rgba(77,124,255,0.45)] sm:text-lg"
          >
            <BoltIcon />
            <span className="relative z-10">Installer Moonbundles</span>
            <Image
              src="/shopify.png"
              alt="Shopify"
              width={20}
              height={20}
              className="relative z-10 h-5 w-5 object-contain"
            />
          </a>
        </div>

        <p className="mt-4 text-center text-[11px] text-text-muted/80 sm:text-xs">
          Installation en 30 secondes · aucun code requis · 1 200+ stores · 5.0/5
        </p>
      </div>
    </motion.div>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 relative z-10"
    >
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function HackCard({
  index,
  title,
  desc,
  apply,
  children,
}: {
  index: number;
  title: string;
  desc: string;
  apply: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      className="glass-card p-6 sm:p-8 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
        Hack {index} / 4
      </span>
      <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
        {title}
      </h3>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base lg:leading-[1.7]">
        {desc}
      </p>

      {children}

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-accent/20 bg-blue-accent/[0.06] p-4 sm:p-5">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-accent/20 text-blue-accent">
          <CheckIcon />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
            Comment l&apos;appliquer
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">
            {apply}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function FomoPreview() {
  return (
    <div
      style={{
        backgroundColor: "#fdf2f2",
        border: "2px dashed #d37373",
        padding: 16,
        borderRadius: 4,
        margin: "15px 0",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 8,
          color: "#a94442",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 14,
          letterSpacing: 0.5,
        }}
      >
        <span
          style={{
            backgroundColor: "#a94442",
            color: "white",
            width: 18,
            height: 18,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
            fontSize: 12,
          }}
        >
          !
        </span>
        <span>WARNING: Low Stock Notice</span>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.5,
          color: "#834040",
        }}
      >
        This product sold out{" "}
        <span style={{ textDecoration: "underline", fontWeight: 500 }}>
          12 times
        </span>{" "}
        last year. We encourage you to take advantage of the{" "}
        <strong style={{ color: "#a94442" }}>limited sale</strong> and buy now.
        Subscribing protects you against future stockouts.{" "}
        <strong style={{ color: "#a94442" }}>PS:</strong> Only available here,
        don&apos;t buy{" "}
        <span
          style={{
            color: "#834040",
            textDecoration: "underline",
            fontWeight: 500,
          }}
        >
          fakes on Amazon/eBay
        </span>
        .
      </p>
    </div>
  );
}

function FomoCodeBlock() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-navy-900/80">
      <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-2.5 sm:px-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
          Code à copier-coller
        </p>
        <CopyButton text={FOMO_HTML} size="sm" />
      </div>
      <pre className="max-h-80 overflow-auto px-4 py-4 text-[11px] leading-relaxed text-text-secondary/90 sm:px-5 sm:text-xs">
        <code className="font-mono">{FOMO_HTML}</code>
      </pre>
    </div>
  );
}

export default function ScalePlaybook() {
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

      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
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
          <Image
            src="/logo.png"
            alt="Moonbundles"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
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
            📊 Lead Magnet Moon
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Le playbook des stores Shopify à{" "}
            <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
              $10k/day
            </span>
          </h1>

          <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
            J&apos;ai analysé 50 boutiques qui impriment du chiffre en 2026.
            Voilà les <span className="font-semibold text-blue-accent">4 hacks</span>{" "}
            qui reviennent dans 98% des cas.
          </p>
        </motion.div>

        {/* ===== PRIMARY CTA ===== */}
        <div className="mt-10">
          <PrimaryCtaCard variant="main" />
        </div>

        {/* ===== HACKS HEADER ===== */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)]">
            Les 4 hacks à appliquer{" "}
            <span className="text-blue-accent">dès maintenant</span>
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-text-muted sm:text-base">
            Tous validés sur des stores qui font +$10k/jour.
          </p>
        </motion.div>

        {/* ===== HACKS ===== */}
        <div className="mt-8 flex flex-col gap-6 sm:gap-8">
          <HackCard
            index={1}
            title="Inverse l'ordre de tes packs"
            desc="La majorité des stores affichent leurs packs du moins cher au plus cher. Le client voit 30€ en premier, tout le reste paraît cher. Inverse l'ordre. Pack le plus cher en haut, le moins cher en bas. Le client voit 99€, le 30€ paraît dérisoire. C'est de l'ancrage psychologique pur."
            apply="Dans Moonbundles, tu réordonnes tes tiers en glissé-déposé. 30 secondes."
          />

          <HackCard
            index={2}
            title="Abonnement coché par défaut"
            desc="L'effet par défaut. Les utilisateurs ne décochent pas. Si tu coches « Subscribe & Save 20% » par défaut, tu transformes 30 à 40% de tes one-shots en abonnés récurrents. C'est le hack qui transforme un store en MRR machine."
            apply="Dans Moonbundles, active l'option « Subscribe & Save » et coche-la par défaut. Tu peux personnaliser le discount."
          />

          <HackCard
            index={3}
            title="Le liquid de FOMO qui fait passer ton CVR de 1% à 3%"
            desc="Un simple bloc d'urgence sous ton bouton ATC. Pas un timer relou, pas une alerte spammy. Juste un message qui rappelle 3 choses : la rareté, le côté limité, et le fait que c'est pas dispo ailleurs."
            apply="Colle le code dans une section custom liquid sur ta page produit Shopify, juste sous ton bouton « Add to cart ». Adapte le texte à ton produit et ta langue."
          >
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                Aperçu du bloc
              </p>
              <FomoPreview />
              <FomoCodeBlock />
            </div>
          </HackCard>

          <HackCard
            index={4}
            title="Les cadeaux qui se débloquent"
            desc="Le client achète pas pour économiser. Il achète pour pas rater le cadeau. Pack 1 : rien. Pack 2 : un cadeau (mesure, accessoire). Pack 3 : 2 cadeaux + free shipping. Le tier supérieur devient irrésistible. Cette boutique de taurine pour chiens fait $100k/mois avec ce simple détail."
            apply="Dans Moonbundles, ajoute des « Free gifts » à chaque tier de ton bundle. L'app affiche automatiquement ce qui se débloque à chaque palier."
          />
        </div>

        {/* ===== ALLER PLUS LOIN ===== */}
        <motion.div
          className="mt-16 glass-card p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Aller plus loin
          </span>
          <h2 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)]">
            Tu veux que je décortique{" "}
            <span className="text-blue-accent">TON store</span> ?
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base">
            Si t&apos;as installé Moonbundles avec le code{" "}
            <span className="font-semibold text-blue-accent">{PROMO_CODE}</span>,
            écris-moi sur WhatsApp. Je regarde ton store et je te dis exactement
            quels hacks appliquer en priorité, gratuitement.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-6 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fba59] hover:shadow-[0_0_30px_rgba(37,211,102,0.25)]"
          >
            <svg
              className="relative z-10 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10">M&apos;écrire sur WhatsApp</span>
          </a>
        </motion.div>

        {/* ===== FINAL CTA ===== */}
        <div className="mt-14">
          <PrimaryCtaCard variant="final" />
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-12 pb-28 text-center text-xs text-text-muted/50 md:pb-0">
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

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-blue-accent/25 bg-navy-900/95 px-3 py-3 backdrop-blur-lg md:hidden">
        <div className="flex items-center gap-2">
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-accent px-4 py-3 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
          >
            <BoltIcon />
            <span className="relative z-10 truncate">
              Installer · code {PROMO_CODE}
            </span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition-transform hover:scale-[1.05]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
