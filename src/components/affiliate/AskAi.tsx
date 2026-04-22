"use client";

import { FadeInSection } from "../AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const SERVICES = [
  { name: "ChatGPT", base: "https://chatgpt.com/?q=", accent: "#10a37f", glyph: "◐" },
  { name: "Claude", base: "https://claude.ai/new?q=", accent: "#d97757", glyph: "✦" },
  { name: "Gemini", base: "https://gemini.google.com/app?q=", accent: "#4285f4", glyph: "✧" },
] as const;

export default function AskAi() {
  const { t } = useTranslation();
  const q = encodeURIComponent(t.askAi.prompt);

  return (
    <section className="relative px-7 py-20">
      <div className="relative mx-auto max-w-[760px] text-center">
        <FadeInSection>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
              <span className="h-[5px] w-[5px] rounded-full bg-blue-accent" />
              {t.askAi.badge}
            </span>
          </div>
          <h2
            className="m-0 text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.1] tracking-[-0.025em] text-white font-[family-name:var(--font-heading)]"
            style={{ textWrap: "balance" }}
          >
            {t.askAi.titleA} <span className="text-blue-accent">Moonbundles</span>{" "}
            {t.askAi.titleB}
          </h2>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {SERVICES.map((s) => (
              <a
                key={s.name}
                href={`${s.base}${q}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-navy-900/70 px-[18px] py-[11px] text-[13.5px] font-semibold text-white shadow-[0_3px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-navy-800/95 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                style={{ ["--brand" as string]: s.accent } as React.CSSProperties}
              >
                <span
                  className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-md text-[13px] font-bold"
                  style={{
                    background: `${s.accent}22`,
                    color: s.accent,
                  }}
                >
                  {s.glyph}
                </span>
                <span>
                  {t.askAi.ask} <span style={{ color: s.accent }}>{s.name}</span>
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
