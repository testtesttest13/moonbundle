"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Affiliate() {
  const { t } = useTranslation();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-green-400/[0.04] via-navy-800/60 to-navy-900/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Dot grid */}
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

          {/* Decorative vertical lines */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-green-400/20 via-transparent to-green-400/20" />
            <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gradient-to-b from-green-400/20 via-transparent to-green-400/20" />
            <motion.div
              className="absolute left-[15%] h-24 w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
            <motion.div
              className="absolute right-[15%] h-24 w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
              animate={{ top: ["110%", "-10%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            />
            {/* Corners */}
            <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-green-400/30 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-green-400/30 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-green-400/30 to-transparent" />
            <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-green-400/30 to-transparent" />
          </div>

          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-green-400/8 blur-[100px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20">
            <motion.span
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              {t.affiliateHome.badge}
            </motion.span>

            <motion.h2
              className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {t.affiliateHome.titlePart1}{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                {t.affiliateHome.titlePart2}
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-text-muted sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              {t.affiliateHome.desc}
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-secondary sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              {t.affiliateHome.benefits.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-green-400" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              <a
                href="/affiliate"
                className="btn-shine group relative inline-flex items-center gap-3 rounded-full bg-green-500 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_50px_rgba(74,222,128,0.25)] hover:scale-[1.03]"
              >
                <span className="relative z-10">{t.nav.affiliate}</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
