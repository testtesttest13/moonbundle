/** @jsx React.createElement */
// Moonbundles — Affiliate page (SOBER only · refined)
// DA inspired by "Comment ça marche" — dark cards, muted borders, accent colors reserved for icon chips.

const { useState, useEffect, useRef, createContext, useContext } = React;

// ==================== Tokens (match "Comment ça marche" DA) ====================
const C = {
  bg:        "#0a1628",
  bgSoft:    "rgba(255,255,255,.03)",
  bgSofter:  "rgba(255,255,255,.02)",
  border:    "rgba(255,255,255,.06)",
  borderStrong: "rgba(255,255,255,.1)",
  ink:       "#fff",
  ink2:      "#cbd5e1",
  muted:     "#94a3b8",
  muted2:    "#64748b",
  accent:    "#4d7cff",     // primary blue — used sparingly
  accentSoft:"rgba(77,124,255,.12)",
  accentLine:"rgba(77,124,255,.25)",
};

// Brand icon chip accents (used only on icons, never as flood color)
const BRAND = {
  youtube: "#ef4444", instagram: "#d946ef", tiktok: "#22d3ee",
  x: "#fff", shopify: "#95bf47", google: "#4285f4", linkedin: "#0a66c2",
  wa: "#22c55e",
};

const AOV = 40;
const RATE = 0.40;
const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");

// ==================== i18n ====================
const DICT = {
  fr: {
    nav: ["Fonctionnalités", "Tarifs", "Affiliation", "Blog"],
    install: "Installer",
    pill: "Programme d'Affiliation",
    h1a: "40% de commission.",
    h1b: "Chaque mois. À vie.",
    sub: "Ton audience. Notre produit. Tu touches 40% à vie sur chaque abonnement que tu génères.",
    cta: "Devenir affilié",
    ctaSecondary: "Comment ça marche",
    refs: "parrainages actifs",
    perMonth: "par mois", perYear: "par an",
    trust: ["Aucun investissement", "Paiement le 15 du mois", "Seuil min. $100"],

    splitPill: "Flexibilité",
    splitTitleA: "Les 40%, c'est toi qui les",
    splitTitleB: "répartis.",
    splitSub: "Garde tout pour toi, ou partage avec tes sous-affiliés. Ton programme, tes règles.",
    splitYour: "Pour toi", splitSubs: "Pour tes sous-affiliés",
    splitScenarioA: "Tu gardes tout",
    splitScenarioB: "Tu partages 50/50",
    splitScenarioC: "Tu t'organises en réseau",
    splitDescA: "Tu encaisses 40% sur chaque abonnement. La formule la plus simple.",
    splitDescB: "Tu gardes 20%, tu en reverses 20% à tes sous-affiliés. Ils t'amènent du volume, tu gardes du revenu passif.",
    splitDescC: "Tu reverses 30-35% à tes sous-affiliés et gardes 5-10% de coordination. Parfait pour monter une machine.",

    stepsPill: "Processus", stepsTitle: "Comment ça marche ?",
    steps: [
      ["Étape 1", "Rejoins-nous en 2 minutes", "Crée ton compte affilié. Lien personnalisé + code promo instantané."],
      ["Étape 2", "Partage ton lien", "Sur YouTube, TikTok, Insta, X — ou dans ta newsletter."],
      ["Étape 3", "Recrute tes sous-affiliés", "Parraine d'autres créateurs — tu touches aussi des commissions à vie sur leurs ventes."],
    ],

    aiPill: "Demande à l'IA",
    aiTitleA: "Pas convaincu que", aiTitleB: "soit fait pour toi ?",
    aiSub: "Laisse ChatGPT, Claude, Gemini ou Perplexity répondre. Un clic — ton IA préférée te dit tout ce qu'elle sait sur Moonbundles.",
    aiAsk: "Demander à",

    targetsPill: "Cibles", targetsTitle: "À qui s'adresse ce programme ?",
    targetsSub: "Tu parles aux marchands Shopify ? On te paye 40% à vie pour les faire passer à Moonbundles.",
    targets: [
      ["Créateurs", "Créateurs de contenu", "Tu parles e-commerce, dropshipping, Shopify ? Ton audience est DTC. Moonbundles colle pile.", ["instagram","tiktok","youtube"]],
      ["YouTubers", "YouTubers", "Une vidéo « comment j'ai doublé mon AOV » = des leads qualifiés pour des années.", ["youtube"]],
      ["Rédacteurs", "Rédacteurs & SEO", "Articles comparatifs, guides bundles, tutos Shopify — chaque lien te rapporte 40% à vie.", ["google"]],
      ["Agences", "Agences & consultants", "Recommande Moonbundles à tes clients Shopify. Plus besoin de stacker 4 apps.", ["shopify"]],
    ],

    faqPill: "FAQ", faqTitleA: "Encore des questions ?", faqTitleB: "On a les réponses.",
    faqSub: "Pas trouvé ton bonheur ? Écris-nous sur WhatsApp, on répond en quelques minutes.",
    faqs: [
      ["Quel est le taux de commission ?", "40% à vie sur chaque abonnement que tu génères. Tant que ton référé reste client, tu touches 40% — chaque mois, sans limite."],
      ["Comment fonctionnent les paiements ?", "Paiement automatique le 15 de chaque mois par Stripe, Wise ou virement. Seuil minimum $100. Versement en 3-5 jours ouvrés."],
      ["Comment je répartis les 40% entre moi et mes sous-affiliés ?", "Depuis ton dashboard, tu choisis librement ta part (de 0 à 40%) et ce qui revient à tes sous-affiliés. Tu peux changer le split à tout moment."],
      ["Annuel ou mensuel — comment est calculée la commission ?", "Tu touches 40% sur le paiement réel du client. S'il paye en annuel, tu reçois 40% du montant annuel dès validation (~30j pour couvrir la fenêtre de remboursement)."],
      ["Si un visiteur ne s'inscrit pas tout de suite, je perds ?", "Non. Cookie 30 jours. À chaque clic ou usage de ton code promo, le compteur redémarre. La commission reste à toi."],
      ["Qu'est-ce que je n'ai pas le droit de faire ?", "Pas de publicité payante sur le nom Moonbundles. Pas de spam, fake reviews, cashback. Commissions non conformes annulées."],
    ],

    deservesA: "Ton audience mérite", deservesB: "Toi, tu mérites", deservesRate: "40% à vie.",
    deservesSub: "Moonbundles est un produit que les marchands adorent utiliser. Tu amènes l'audience, on amène le produit.",

    footerTag: "L'app Shopify tout-en-un pour les marchands qui veulent doubler leur AOV.",
    footerCopy: "© 2026 Moonbundles · by Bambino",
  },
  en: {
    nav: ["Features", "Pricing", "Affiliate", "Blog"],
    install: "Install",
    pill: "Affiliate Program",
    h1a: "40% commission.",
    h1b: "Every month. For life.",
    sub: "Your audience. Our product. You earn 40% for life on every subscription you generate.",
    cta: "Become an affiliate",
    ctaSecondary: "How it works",
    refs: "active referrals",
    perMonth: "per month", perYear: "per year",
    trust: ["No investment", "Paid on the 15th", "$100 min. threshold"],

    splitPill: "Flexibility",
    splitTitleA: "You decide how the 40%",
    splitTitleB: "gets split.",
    splitSub: "Keep it all, or share with sub-affiliates. Your program, your rules.",
    splitYour: "For you", splitSubs: "For sub-affiliates",
    splitScenarioA: "Keep it all",
    splitScenarioB: "Split 50/50",
    splitScenarioC: "Build a network",
    splitDescA: "You earn the full 40% on every subscription. The simplest setup.",
    splitDescB: "Keep 20%, pass 20% to your sub-affiliates. They bring volume, you keep passive revenue.",
    splitDescC: "Give 30-35% to sub-affiliates, keep 5-10% as orchestrator. Perfect for building a machine.",

    stepsPill: "Process", stepsTitle: "How it works",
    steps: [
      ["Step 1", "Sign up in 2 minutes", "Create your affiliate account. Personal link + promo code, instant."],
      ["Step 2", "Share your link", "On YouTube, TikTok, Insta, X — or in your newsletter."],
      ["Step 3", "Recruit your sub-affiliates", "Refer other creators — you earn lifetime commissions on their sales too."],
    ],

    aiPill: "Ask the AI",
    aiTitleA: "Not sure", aiTitleB: "is made for you?",
    aiSub: "Let ChatGPT, Claude, Gemini or Perplexity answer. One click — your favorite AI tells you everything it knows about Moonbundles.",
    aiAsk: "Ask",

    targetsPill: "Targets", targetsTitle: "Who's this program for?",
    targetsSub: "Talk to Shopify merchants? We pay 40% for life to get them on Moonbundles.",
    targets: [
      ["Creators", "Content creators", "Talk e-commerce, dropshipping, Shopify? Your audience is DTC. Moonbundles fits perfectly.", ["instagram","tiktok","youtube"]],
      ["YouTubers", "YouTubers", "One \"how I doubled my AOV\" video = qualified leads for years.", ["youtube"]],
      ["Writers", "Writers & SEO", "Comparison articles, bundle guides, Shopify tutorials — every link earns 40% for life.", ["google"]],
      ["Agencies", "Agencies & consultants", "Recommend Moonbundles to your Shopify clients. No more stacking 4 apps.", ["shopify"]],
    ],

    faqPill: "FAQ", faqTitleA: "Still have questions?", faqTitleB: "We've got answers.",
    faqSub: "Didn't find it? Message us on WhatsApp, we reply in minutes.",
    faqs: [
      ["What's the commission rate?", "40% for life on every subscription you generate. As long as your referral stays a customer, you earn 40% — every month, no limit."],
      ["How do payouts work?", "Automatic payout on the 15th of each month via Stripe, Wise, or bank transfer. $100 minimum. Paid within 3-5 business days."],
      ["How do I split the 40% between me and sub-affiliates?", "From your dashboard, freely set your share (0-40%) and what goes to your sub-affiliates. You can change the split anytime."],
      ["Annual or monthly — how is commission calculated?", "You earn 40% on what the customer actually pays. Annual plans = 40% of annual amount, validated after ~30 days."],
      ["If a visitor doesn't sign up right away, do I lose?", "No. 30-day cookie. Every click or promo code use resets it. Commission stays yours."],
      ["What am I not allowed to do?", "No paid ads on the Moonbundles brand name. No spam, fake reviews, or cashback. Non-compliant commissions are voided."],
    ],

    deservesA: "Your audience deserves", deservesB: "You deserve", deservesRate: "40% for life.",
    deservesSub: "Moonbundles is a product merchants love using. You bring the audience, we bring the product.",

    footerTag: "The all-in-one Shopify app for merchants who want to double their AOV.",
    footerCopy: "© 2026 Moonbundles · by Bambino",
  },
};

const LangCtx = createContext({ lang: "fr", t: DICT.fr, setLang: () => {} });
const useT = () => useContext(LangCtx);

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("mb-aff-lang"));
  const pick = (l) => { localStorage.setItem("mb-aff-lang", l); setLang(l); };
  const t = DICT[lang || "fr"];
  return (
    <LangCtx.Provider value={{ lang: lang || "fr", setLang: pick, t }}>
      {children}
      {!lang && <LangPopup onPick={pick}/>}
    </LangCtx.Provider>
  );
}

function Flag({ k, w = 28, h = 18 }) {
  if (k === "fr") return (
    <svg viewBox="0 0 60 40" width={w} height={h}>
      <rect width="20" height="40" fill="#0055A4"/>
      <rect x="20" width="20" height="40" fill="#fff"/>
      <rect x="40" width="20" height="40" fill="#EF4135"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 60 30" width={w} height={h} preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

function LangPopup({ onPick }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(4,10,22,.78)", backdropFilter: "blur(14px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      animation: "mb-fade-in .25s ease-out",
    }}>
      <div style={{
        maxWidth: 420, width: "100%", padding: "34px 28px 28px",
        borderRadius: 24, border: `1px solid ${C.accentLine}`,
        background: "linear-gradient(180deg, rgba(22,32,68,.95), rgba(10,22,40,.98))",
        boxShadow: "0 30px 80px rgba(0,0,0,.6)",
        textAlign: "center", animation: "mb-pop-in .35s cubic-bezier(.22,1.3,.36,1)",
      }}>
        <img src={window.__resources.logo} alt="" style={{ width: 46, height: 46, borderRadius: 12, margin: "0 auto 14px", display: "block" }}/>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "#fff", letterSpacing: "-0.01em" }}>
          Choose your language
        </h2>
        <p style={{ margin: "8px 0 22px", color: C.muted, fontSize: 13.5 }}>
          Choisis ta langue — changeable à tout moment.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[["fr","Français"],["en","English"]].map(([k, label]) => (
            <button key={k} onClick={() => onPick(k)} style={{
              cursor: "pointer", border: `1px solid ${C.borderStrong}`,
              background: "rgba(255,255,255,.04)", color: "#fff",
              padding: "14px 10px", borderRadius: 14, fontSize: 14, fontWeight: 600,
              fontFamily: "var(--font-body)", transition: "all .2s",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accentSoft; e.currentTarget.style.borderColor = C.accentLine; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.04)"; e.currentTarget.style.borderColor = C.borderStrong; }}
            >
              <span style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", lineHeight: 0 }}>
                <Flag k={k}/>
              </span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== Brand icons (real logos) ====================
function BrandIcon({ name, size = 14 }) {
  const color = BRAND[name] || "#fff";
  const s = { width: size, height: size };
  switch (name) {
    case "youtube":   return <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M21.6 7.2s-.2-1.4-.8-2C20 4.4 19.2 4.4 18.9 4.3 16.1 4.1 12 4.1 12 4.1h0s-4.1 0-6.9.2c-.3.1-1.1.1-1.9.9-.6.6-.8 2-.8 2s-.2 1.7-.2 3.3v1.5c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.6.2 6.6.2s4.1 0 6.9-.2c.3-.1 1.1-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.5c0-1.7-.2-3.3-.2-3.3zM9.7 14.6v-5.7l5.3 2.9-5.3 2.8z"/></svg>;
    case "instagram": return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill={color}/>
      </svg>
    );
    case "tiktok": return (
      <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M19.6 6.8a5 5 0 0 1-3.1-1.1 5 5 0 0 1-1.5-2.6h-3v11.4a2.5 2.5 0 1 1-1.8-2.4V9.1a5.5 5.5 0 1 0 4.8 5.4V9.1a8 8 0 0 0 4.6 1.4v-3c0 0-0 .2 0 .3z"/></svg>
    );
    case "x": return <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.4L4.3 21H1.3l8-9.2L1 3h6.8l4.5 5.9L18 3zm-1.2 16.2h1.7L7.3 4.7H5.5l11.3 14.5z"/></svg>;
    case "shopify": return <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M15.3 4.5c-.1 0-.8.2-.8.2s-.7-.7-.8-.8c-.2-.2-.5-.1-.6-.1 0 0-.1 0-.3.1-.2-.7-.7-1.4-1.6-1.4h-.1c-.3-.3-.6-.5-.9-.5-2.2 0-3.2 2.7-3.5 4.1-.9.3-1.5.5-1.6.5-.5.2-.5.2-.6.7C4.4 7.7 3 19 3 19l10.4 2 5.6-1.2s-3.6-13.2-3.7-13.3zM11.3 5c-.3.1-.7.2-1.1.4 0-.6-.1-1.4-.4-2.1.9.1 1.4 1.1 1.5 1.7zm-1.8-1.5c.3.8.4 1.8.3 2.5l-1.5.5c.3-1.1 1-1.8 1.2-3zm-.8-.7c.2 0 .4.1.5.2-.4.2-.8.7-1.1 1.4-.2.5-.3 1-.4 1.4l-1.3.4c.3-1.2 1.1-3.4 2.3-3.4z"/></svg>;
    case "google": return (
      <svg {...s} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.3H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-1.9 3.2-4.8 3.2-8.1z"/>
        <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.5H2.2v2.8C4 20.4 7.8 23 12 23z"/>
        <path fill="#FBBC05" d="M5.9 14.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V7.1H2.2C1.4 8.6 1 10.3 1 12s.4 3.4 1.2 4.9l3.7-2.8z"/>
        <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.4 2.1 14.9 1 12 1 7.8 1 4 3.6 2.2 7.1l3.7 2.8C6.8 7.3 9.2 5.4 12 5.4z"/>
      </svg>
    );
    case "wa": return <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M17.5 14.2c-.3-.1-1.7-.8-2-1s-.4-.1-.6.1c-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s.9 2.7 1.1 2.9c.1.1 1.9 2.9 4.6 4 .7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.2-.1-.3-.1-.5-.1zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3 .8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>;
    case "linkedin": return <svg {...s} viewBox="0 0 24 24" fill={color}><path d="M20.4 3H3.6C3.3 3 3 3.3 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6zM8.3 18.3H5.7V9.8h2.6v8.5zM7 8.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.6h-2.6V14c0-1 0-2.2-1.4-2.2s-1.5 1.1-1.5 2.2v4.3h-2.6V9.8h2.5v1.2c.4-.7 1.2-1.4 2.5-1.4 2.6 0 3.1 1.7 3.1 4v4.7z"/></svg>;
    default: return null;
  }
}

function BrandChip({ name, size = 32 }) {
  const color = BRAND[name];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: 8,
      background: "rgba(10,22,40,.6)",
      border: `1px solid ${C.borderStrong}`,
      color, flex: "none",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)",
    }}>
      <BrandIcon name={name} size={Math.round(size * 0.5)}/>
    </span>
  );
}

// ==================== Primitives ====================
function useCountUp(target, dur = 500) {
  const [v, setV] = useState(target);
  const from = useRef(target), t0 = useRef(0);
  useEffect(() => {
    const start = from.current, delta = target - start;
    if (Math.abs(delta) < 0.01) { from.current = target; return; }
    let raf; t0.current = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0.current) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setV(start + delta * e);
      if (p < 1) raf = requestAnimationFrame(tick); else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return v;
}

function Pill({ children, dot = false }) {
  // Single sober pill style. No tone prop — uniform quiet chip, matches steps DA.
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      border: `1px solid ${C.accentLine}`, background: C.accentSoft,
      color: C.accent, borderRadius: 9999, padding: "5px 13px",
      fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em",
    }}>
      {dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent }}/>}
      {children}
    </span>
  );
}

// Quiet CTA — white pill, clean hover
function Cta({ children, size = "md", secondary = false }) {
  const [h, setH] = useState(false);
  const padding = size === "lg" ? "14px 26px" : "11px 20px";
  const fontSize = size === "lg" ? 14.5 : 13;

  const bg = secondary
    ? (h ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)")
    : (h ? "#f1f5f9" : "#fff");
  const fg = secondary ? "#fff" : "#0a1628";
  const border = secondary ? `1px solid ${C.borderStrong}` : "1px solid transparent";

  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: 10,
      background: bg, color: fg, border,
      borderRadius: 9999, padding, fontSize, fontWeight: 600,
      textDecoration: "none", letterSpacing: "-0.005em",
      boxShadow: secondary ? "none" : (h ? "0 10px 30px rgba(0,0,0,.4)" : "0 4px 14px rgba(0,0,0,.25)"),
      transform: h ? "translateY(-1px)" : "translateY(0)",
      transition: "all .25s cubic-bezier(.22,1,.36,1)",
    }}>
      {/* subtle shimmer */}
      {!secondary && (
        <span aria-hidden style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(110deg, transparent 30%, rgba(77,124,255,.18) 50%, transparent 70%)",
          transform: h ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform .9s cubic-bezier(.22,1,.36,1)",
        }}/>
      )}
      <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 10 }}>
        {children}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: h ? "translateX(3px)" : "translateX(0)", transition: "transform .3s" }}>
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  );
}

// ==================== Navbar (floating liquid-glass pill) ====================
function Navbar() {
  const { t, lang, setLang } = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const toggle = () => setLang(lang === "fr" ? "en" : "fr");
  return (
    <div style={{
      position: "sticky", top: 16, zIndex: 40,
      padding: "0 20px",
      animation: "mb-nav-float 7s ease-in-out infinite",
    }}>
      <nav style={{
        maxWidth: 1080, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 20,
        padding: "10px 14px 10px 22px",
        borderRadius: 9999,
        background: "rgba(18,28,52,.55)",
        border: `1px solid rgba(255,255,255,.12)`,
        backdropFilter: "blur(22px) saturate(180%)",
        WebkitBackdropFilter: "blur(22px) saturate(180%)",
        boxShadow: scrolled
          ? "0 14px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.08)"
          : "0 8px 28px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "box-shadow .4s cubic-bezier(.22,1,.36,1), background .4s",
      }}>
        {/* Liquid highlight sheen */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, borderRadius: 9999, pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(255,255,255,.08), transparent 40%)",
        }}/>

        <a href="#" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={window.__resources.logo} alt="" style={{ width: 26, height: 26, borderRadius: 7 }}/>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em", color: "#fff" }}>Moonbundles</span>
        </a>

        <div className="aff-nav-links" style={{ position: "relative", display: "flex", alignItems: "center", gap: 26 }}>
          {t.nav.map((l, i) => {
            const active = (l === "Affiliation" || l === "Affiliate");
            return (
              <a key={i} href="#" style={{
                color: active ? "#fff" : "rgba(255,255,255,.68)",
                textDecoration: "none", fontSize: 13, fontWeight: 500,
                transition: "color .3s", whiteSpace: "nowrap",
              }}>{l}</a>
            );
          })}
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={toggle} aria-label="Change language" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 32, height: 32, borderRadius: 9999, cursor: "pointer",
            border: `1px solid rgba(255,255,255,.14)`, background: "rgba(255,255,255,.06)", padding: 0,
          }}>
            <span style={{ borderRadius: "50%", overflow: "hidden", lineHeight: 0 }}><Flag k={lang} w={16} h={11}/></span>
          </button>
          <a href="#" style={{
            background: "#fff", color: "#0a1628", borderRadius: 9999,
            padding: "8px 16px", fontSize: 12.5, fontWeight: 600, textDecoration: "none",
            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
          }}>{t.install} →</a>
        </div>
      </nav>
    </div>
  );
}

window.__aff_base = { C, BRAND, AOV, RATE, fmt, DICT, useT, useCountUp, Pill, Cta, BrandIcon, BrandChip, LangProvider, Navbar, Flag };
