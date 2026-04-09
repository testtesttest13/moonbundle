"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";

const ease = [0.22, 1, 0.36, 1] as const;

const languages: { code: Language; name: string; subtitle: string; flag: React.ReactNode }[] = [
  {
    code: "fr",
    name: "Français",
    subtitle: "Site en français",
    flag: (
      <svg viewBox="0 0 60 40" className="h-full w-full">
        <rect width="20" height="40" fill="#0055A4" />
        <rect x="20" width="20" height="40" fill="#FFFFFF" />
        <rect x="40" width="20" height="40" fill="#EF4135" />
      </svg>
    ),
  },
  {
    code: "en",
    name: "English",
    subtitle: "Site in English",
    flag: (
      <svg viewBox="0 0 60 40" className="h-full w-full">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    ),
  },
];

export default function LanguageModal() {
  const { setLang, hasChosen, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  useEffect(() => {
    if (!hasChosen) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, [hasChosen]);

  const handleSelect = (code: Language) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="lang-modal-title"
        >
          <div
            className="absolute inset-0 bg-navy-900/85 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-accent/15 blur-2xl animate-pulse-glow" />

            <div className="animated-border">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 p-8 sm:p-10">
                <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

                <div className="relative z-10">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted transition-all hover:bg-white/10 hover:text-white"
                    aria-label={t.languageModal.close}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-3.5 w-3.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  <div className="text-center">
                    <span className="badge-glow inline-flex items-center gap-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                      {t.languageModal.welcome}
                    </span>
                    <h2
                      id="lang-modal-title"
                      className="mt-4 text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]"
                    >
                      {t.languageModal.title}
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">
                      {t.languageModal.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {languages.map((lang) => {
                      const isHovered = hoveredCode === lang.code;
                      return (
                        <motion.button
                          key={lang.code}
                          onClick={() => handleSelect(lang.code)}
                          onMouseEnter={() => setHoveredCode(lang.code)}
                          onMouseLeave={() => setHoveredCode(null)}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-blue-accent/40 hover:bg-white/[0.06]"
                          whileHover={{ y: -4 }}
                          whileTap={{ scale: 0.97 }}
                          aria-label={`Sélectionner ${lang.name}`}
                        >
                          <div
                            className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-accent/10 to-violet-accent/5 transition-opacity duration-300 ${
                              isHovered ? "opacity-100" : "opacity-0"
                            }`}
                          />

                          <div className="relative mx-auto h-16 w-24 overflow-hidden rounded-lg border border-white/10 shadow-lg">
                            {lang.flag}
                          </div>

                          <div className="relative mt-4">
                            <p className="text-base font-bold text-white font-[family-name:var(--font-heading)]">
                              {lang.name}
                            </p>
                            <p className="mt-0.5 text-[11px] text-text-muted">
                              {lang.subtitle}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <p className="mt-6 text-center text-[11px] text-text-muted/70">
                    {t.languageModal.footnote}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
