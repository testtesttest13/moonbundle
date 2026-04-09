"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/33670438611";
const ease = [0.22, 1, 0.36, 1] as const;

export default function AffiliateCTA() {
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
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-navy-800/80 to-navy-900/90">
          {/* Decorative vertical lines */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-blue-accent/20 via-transparent to-blue-accent/20" />
            <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gradient-to-b from-violet-accent/20 via-transparent to-violet-accent/20" />
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
            {/* Corners */}
            <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-blue-accent/30 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-blue-accent/30 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-violet-accent/30 to-transparent" />
            <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-violet-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-blue-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-blue-accent/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-violet-accent/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-violet-accent/30 to-transparent" />
          </div>

          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-green-500/8 blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center py-16 px-8 sm:py-24 sm:px-16">
            {/* Stats badges */}
            <motion.div
              className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-muted"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400">★</span>
                {t.affiliateCta.stats[0]}
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span>{t.affiliateCta.stats[1]}</span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span className="text-green-400">{t.affiliateCta.stats[2]}</span>
            </motion.div>

            <motion.h2
              className="max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {t.affiliateCta.titlePart1}
              <br />
              <span className="bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent">
                {t.affiliateCta.titlePart2}
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-text-muted sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              {t.affiliateCta.subtitlePart1}{" "}
              <span className="text-white">{t.affiliateCta.subtitleHighlight}</span>{t.affiliateCta.subtitlePart2}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center"
              >
                <div className="absolute -inset-3 rounded-full bg-green-500/20 blur-xl animate-pulse-glow" />
                <span className="btn-shine relative z-10 flex items-center gap-3 rounded-full bg-green-500 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-green-400 group-hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] group-hover:scale-[1.03]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.affiliateCta.button}
                </span>
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-xs text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              {t.affiliateCta.footnote}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
