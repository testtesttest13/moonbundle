"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Language, type TranslationDict } from "./translations";

const STORAGE_KEY = "moonbundles-language";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDict;
  hasChosen: boolean;
  hydrated: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");
  const [hasChosen, setHasChosen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
        setHasChosen(true);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    setHasChosen(true);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      // Update html lang attribute
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  };

  // Update html lang on mount/change
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], hasChosen, hydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
