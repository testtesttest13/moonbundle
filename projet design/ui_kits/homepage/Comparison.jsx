/** @jsx React.createElement */
const { PrimaryCta } = window.HP;

function Check() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>; }
function X() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }

const ROWS = [
  ["Bundles fixes", true, true, "Bundle Bear"],
  ["Remises volume", true, true, "Volume++"],
  ["Cart drawer upsell", true, true, "Cart Uplift"],
  ["Post-purchase 1-click", true, true, "ReConvert"],
  ["Free gifts à paliers", true, false, "—"],
  ["Un seul abonnement", true, false, "≈ 120 €/mois"],
  ["Support WhatsApp direct", true, false, "Tickets · 48h"],
];

function Comparison() {
  return (
    <section style={{ padding: "60px 28px 80px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{
          margin: 0, textAlign: "center", fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em",
          color: "#fff",
        }}>
          Moonbundles <span style={{
            backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>remplace</span> 4 apps.
        </h2>
        <p style={{ textAlign: "center", color: "#94a3b8", marginTop: 12, fontSize: 15 }}>
          Un seul abonnement. Un seul support. Zéro conflit de code.
        </p>

        <div style={{
          marginTop: 36, overflow: "hidden", borderRadius: 22,
          border: "1px solid rgba(255,255,255,.06)",
          background: "rgba(255,255,255,.02)", backdropFilter: "blur(20px)",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
            padding: "16px 22px", fontSize: 11.5, fontWeight: 600,
            color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".12em",
            borderBottom: "1px solid rgba(255,255,255,.06)",
          }}>
            <span>Fonctionnalité</span>
            <span style={{ color: "#4d7cff", textAlign: "center" }}>Moonbundles</span>
            <span style={{ textAlign: "center" }}>Apps séparées</span>
          </div>
          {ROWS.map(([label, mb, other, name], i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
              padding: "14px 22px", alignItems: "center",
              background: i % 2 ? "rgba(255,255,255,.015)" : "transparent",
              borderTop: i ? "1px solid rgba(255,255,255,.04)" : "none",
              fontSize: 14,
            }}>
              <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{label}</span>
              <span style={{ display: "flex", justifyContent: "center" }}>{mb ? <Check/> : <X/>}</span>
              <span style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center", color: other ? "#e2e8f0" : "#94a3b8", fontSize: 12.5 }}>
                {other ? <Check/> : <X/>}<span style={{opacity:.75}}>{name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section style={{ padding: "40px 28px 80px" }}>
      <div style={{
        position: "relative", overflow: "hidden", maxWidth: 980, margin: "0 auto",
        borderRadius: 28, border: "1px solid rgba(77,124,255,.3)",
        background: "linear-gradient(135deg,rgba(77,124,255,.14),rgba(22,32,68,.6),rgba(124,92,255,.1))",
        padding: "56px 32px", textAlign: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          width: 560, height: 320, borderRadius: "50%",
          background: "rgba(77,124,255,.22)", filter: "blur(100px)",
          animation: "mb-pulse-glow 5s ease-in-out infinite",
        }}/>
        <div style={{ position: "relative" }}>
          <h2 style={{
            margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em",
            color: "#fff",
          }}>
            Prêt à <span style={{
              backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff,#5b8def)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>doubler votre AOV</span> ?
          </h2>
          <p style={{ margin: "18px auto 0", color: "#94a3b8", fontSize: 16, maxWidth: 520, lineHeight: 1.55 }}>
            Installez Moonbundles en 5 minutes. Votre premier bundle tourne avant la fin du café.
          </p>
          <div style={{ marginTop: 28 }}>
            <PrimaryCta>Installer Gratuitement</PrimaryCta>
          </div>
          <div style={{ marginTop: 16, color: "#94a3b8", fontSize: 12.5, display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <span>Sans carte bancaire</span><span>·</span><span>Plan gratuit</span><span>·</span><span>5 minutes · zero code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Produit", ["Bundles", "Cart Drawer", "Post-Purchase", "Free Gifts", "Remises Volume"]],
    ["Ressources", ["Guide Native Ads", "Checklist CRO", "Blog", "Prompts Claude"]],
    ["Entreprise", ["Affiliation", "Support WhatsApp", "Politique de confidentialité", "CGU"]],
  ];
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "60px 28px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <img src="../../assets/logo.png" alt="" style={{ width: 28, height: 28, borderRadius: 8 }}/>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "#fff" }}>Moonbundles</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6, marginTop: 14, maxWidth: 260 }}>
              L'app Shopify tout-en-un pour augmenter votre AOV. Bundles, cart drawer, upsell post-achat.
            </p>
          </div>
          {cols.map(([title, items]) => (
            <div key={title}>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
                color: "#4d7cff", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 14,
              }}>{title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {items.map(x => (
                  <li key={x}><a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13 }}>{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40, paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
          color: "#94a3b8", fontSize: 12,
        }}>
          <span>© 2026 Moonbundles · by Bambino · <a href="#" style={{color:"#94a3b8"}}>@bambino_moon</a></span>
          <span>Built for Shopify · 5.0/5 · 448+ avis</span>
        </div>
      </div>
    </footer>
  );
}

window.HP = Object.assign(window.HP || {}, { Comparison, FinalCta, Footer });
