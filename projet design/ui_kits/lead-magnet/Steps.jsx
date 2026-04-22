/** @jsx React.createElement */
const { GlassCard, Counter, ArrowIcon, CheckIcon } = window.LM;

const STEPS = [
  {
    n: 1,
    title: "Apprends à connaître ton persona",
    desc: "19 questions et Claude te sort une fiche complète de ton client idéal. La base de tout le reste.",
    cta: "Télécharger le prompt",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    n: 2,
    title: "Génère tes visuels avec Nanobanana",
    desc: "Copie le prompt, colle ton contexte, récupère 6 images native-feed prêtes à poster. 30 secondes.",
    cta: "Aller sur Nanobanana",
    ext: true,
  },
  {
    n: 3,
    title: "A/B teste tes hooks en une journée",
    desc: "3 angles × 3 visuels = 9 variantes. Celui qui gagne tu le scale. Les autres tu tues.",
    done: true,
  },
];

function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function StepCard({ step }) {
  return (
    <GlassCard style={{ padding: 22 }}>
      <Counter n={step.n} />
      <h3 style={{
        margin: "2px 0 6px", fontFamily: "var(--font-heading)",
        fontWeight: 700, fontSize: 19, color: "#fff", lineHeight: 1.25,
      }}>{step.title}</h3>
      <p style={{ margin: 0, color: "#94a3b8", fontSize: 14, lineHeight: 1.55 }}>{step.desc}</p>

      {step.cta && (
        <a href="#" style={{
          marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(77,124,255,.3)", background: "rgba(77,124,255,.08)",
          color: "#4d7cff", borderRadius: 12, padding: "9px 14px",
          fontSize: 12.5, fontWeight: 600, textDecoration: "none",
        }}>
          {step.ext ? <ExternalIcon /> : step.icon}
          {step.cta}
        </a>
      )}
      {step.done && (
        <div style={{
          marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8,
          color: "#22c55e", fontSize: 12.5, fontWeight: 600,
        }}>
          <CheckIcon size={14} /> C'est à toi de jouer.
        </div>
      )}
    </GlassCard>
  );
}

function Steps() {
  return (
    <section style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
      {STEPS.map(s => <StepCard key={s.n} step={s} />)}
    </section>
  );
}

window.LM = Object.assign(window.LM || {}, { Steps });
