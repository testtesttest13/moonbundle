"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;
const WHATSAPP_URL = "https://wa.me/33670438611";

export default function Affiliate() {
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/[0.06]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/[0.04] via-navy-800/80 to-blue-accent/[0.04]" />

          {/* Grid pattern */}
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

          {/* Decorative corner accents */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-green-400/30 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-20 bg-gradient-to-r from-green-400/30 to-transparent" />
            <div className="absolute top-0 right-0 h-20 w-px bg-gradient-to-b from-green-400/30 to-transparent" />
            <div className="absolute top-0 right-0 h-px w-20 bg-gradient-to-l from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-20 w-px bg-gradient-to-t from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 left-0 h-px w-20 bg-gradient-to-r from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-20 w-px bg-gradient-to-t from-green-400/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-20 bg-gradient-to-l from-green-400/30 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20 lg:flex-row lg:text-left lg:gap-16">
            {/* Left content */}
            <div className="flex-1">
              <FadeInSection>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-1.5 text-xs font-medium text-green-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                  </span>
                  Programme Partenaire
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                  Rejoignez notre{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    programme d&apos;affiliation
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:mx-0">
                  Recommandez Moonbundles et gagnez des commissions sur chaque marchand
                  que vous apportez. Un programme pensé pour les agences, freelances et
                  créateurs de contenu e-commerce.
                </p>
              </FadeInSection>
            </div>

            {/* Right - benefits + CTA */}
            <div className="mt-10 flex-1 lg:mt-0">
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                {[
                  { icon: "💰", text: "Commissions récurrentes sur chaque vente" },
                  { icon: "📊", text: "Dashboard de suivi en temps réel" },
                  { icon: "🤝", text: "Support dédié et ressources marketing" },
                  { icon: "🚀", text: "Aucun frais d'entrée — 100% gratuit" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-5 py-3.5 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08, ease }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-text-secondary">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                className="mt-8 flex flex-col items-center gap-3 lg:items-start"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine group relative inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:scale-[1.03]"
                >
                  <svg className="h-5 w-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="relative z-10">Contactez-nous sur WhatsApp</span>
                </a>
                <span className="text-xs text-text-muted">
                  Réponse sous 24h · Programme géré en direct
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
