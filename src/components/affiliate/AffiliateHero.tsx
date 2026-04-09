"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/33670438611";
const ease = [0.22, 1, 0.36, 1] as const;

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function AffiliateHero() {
  const { t } = useTranslation();
  const headlineWords = t.affiliateHero.headline.map((word) => ({
    text: word,
    gradient: (t.affiliateHero.gradientWords as readonly string[]).includes(word),
  }));
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Dot grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/8 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[400px] rounded-full bg-violet-accent/6 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-blue-accent/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-violet-accent/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <span className="badge-glow inline-flex items-center gap-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-accent backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-accent" />
            </span>
            {t.affiliateHero.badge}
          </span>
        </motion.div>

        {/* Headline — text reveal mot par mot */}
        <h1 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-7xl font-[family-name:var(--font-heading)]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease }}
            >
              {word.gradient ? (
                <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
                  {word.text}
                </span>
              ) : (
                word.text
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
        >
          {t.affiliateHero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            <div className="absolute -inset-3 rounded-full bg-green-500/20 blur-xl animate-pulse-glow" />
            <span className="btn-shine relative z-10 flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-green-400 group-hover:shadow-[0_0_40px_rgba(74,222,128,0.3)] group-hover:scale-[1.03]">
              <WhatsAppIcon />
              {t.affiliateHero.ctaPrimary}
            </span>
          </a>
          <a
            href="#how-it-works"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            {t.affiliateHero.ctaSecondary}
            <span className="inline-block text-xs transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        {/* 3 stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 sm:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease }}
        >
          {t.affiliateHero.stats.map((stat, i) => {
            const gradients = [
              "from-blue-accent to-violet-accent",
              "from-violet-accent to-blue-light",
              "from-blue-light to-blue-accent",
            ];
            return (
              <div key={i} className="text-center">
                <span className={`bg-gradient-to-r ${gradients[i]} bg-clip-text text-3xl font-bold text-transparent sm:text-4xl font-[family-name:var(--font-heading)]`}>
                  {stat.value}
                </span>
                <p className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
