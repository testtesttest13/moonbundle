"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const INSTALL_URL = "/api/go?from=cta";
const ease = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <motion.div
        className="relative mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        {/* Outer container with rounded corners and decorative lines */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-navy-800/80 to-navy-900/90">

          {/* Decorative vertical lines (TrendTrack style) */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-blue-accent/20 via-transparent to-blue-accent/20" />
            <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gradient-to-b from-violet-accent/20 via-transparent to-violet-accent/20" />
            {/* Animated pulses on lines */}
            <motion.div
              className="absolute left-[15%] h-24 w-px bg-gradient-to-b from-transparent via-blue-accent/50 to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
            <motion.div
              className="absolute right-[15%] h-24 w-px bg-gradient-to-b from-transparent via-violet-accent/50 to-transparent"
              animate={{ top: ["110%", "-10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-blue-accent/30 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-blue-accent/30 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-violet-accent/30 to-transparent" />
            <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-violet-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-blue-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-blue-accent/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-violet-accent/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-violet-accent/30 to-transparent" />
          </div>

          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-blue-accent/8 blur-[100px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center py-16 px-8 sm:py-24 sm:px-16">
            {/* Social proof */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              {/* Fake avatars */}
              <div className="flex -space-x-2">
                {["bg-blue-accent/30", "bg-violet-accent/30", "bg-blue-light/30", "bg-blue-accent/20"].map((bg, i) => (
                  <div key={i} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-navy-900 ${bg} text-[10px]`}>
                    {["👤", "👤", "👤", "👤"][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-xs text-text-muted ml-1">{t.ctaHome.socialProof}</span>
              </div>
            </motion.div>

            <motion.h2
              className="max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {t.ctaHome.titlePart1}
              <br />
              <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
                {t.ctaHome.titlePart2}
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-md text-center text-base text-text-muted"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              {t.ctaHome.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group relative inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-[1.03]"
              >
                <span className="relative z-10">{t.ctaHome.button}</span>
                <motion.span
                  className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-[10px] text-white"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              {t.ctaHome.perks.map((perk) => (
                <span key={perk} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-green-400" />
                  {perk}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
