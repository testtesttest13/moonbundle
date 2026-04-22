/** @jsx React.createElement */
const { useState } = React;
const { Pill } = window.HP;

const FEATURES = [
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    title: "Bundles Fixes",
    desc: "Groupez plusieurs produits à prix dégressif — vendu en une seule ligne de panier.",
    img: "../../assets/fixed-bundle.png",
  },
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Remises Volume",
    desc: "« Achète 2, -10%. Achète 3, -20%. » Le déclencheur d'AOV le plus simple du monde.",
    img: "../../assets/quantity-breaks.png",
  },
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>,
    title: "Cart Drawer",
    desc: "Un panier latéral qui vend pour vous — upsells, add-ons, barre de progression free gift.",
    img: "../../assets/cart-drawer.webp",
    highlighted: true,
  },
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>,
    title: "Mix & Match",
    desc: "Laissez l'acheteur composer son bundle parmi vos collections — taille, saveur, variante.",
    img: "../../assets/bundle.webp",
  },
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Upsell 1-Click Post-Achat",
    desc: "Une offre exclusive après le checkout Shopify. 0 friction, 1 clic, AOV dopé.",
    img: "../../assets/one-click-upsell.webp",
  },
  {
    icon: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
    title: "Free Gifts",
    desc: "Un cadeau offert au franchissement d'un seuil. La barre progresse, la tentation monte.",
    img: "../../assets/progress-gift.png",
  },
];

function FeatureCard({ f }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      position: "relative", overflow: "hidden",
      background: h ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.03)",
      border: `1px solid ${h ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.06)"}`,
      borderRadius: 22, padding: 22,
      transform: h ? "translateY(-3px)" : "translateY(0)",
      transition: "all .4s cubic-bezier(.22,1,.36,1)",
      backdropFilter: "blur(20px)",
    }}>
      {f.highlighted && (
        <div aria-hidden style={{
          position: "absolute", right: -40, top: -40, width: 180, height: 180,
          borderRadius: "50%", background: "rgba(77,124,255,.18)", filter: "blur(60px)",
        }}/>
      )}
      <div style={{
        position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 42, height: 42, borderRadius: 12,
        background: "rgba(77,124,255,.12)", color: "#4d7cff",
      }}>{f.icon({ style: { width: 20, height: 20 } })}</div>
      <h3 style={{
        position: "relative", margin: "14px 0 6px",
        fontFamily: "var(--font-heading)", fontWeight: 700,
        fontSize: 18, color: "#fff", lineHeight: 1.2,
      }}>{f.title}</h3>
      <p style={{ position: "relative", margin: 0, color: "#94a3b8", fontSize: 13.5, lineHeight: 1.55 }}>{f.desc}</p>
      <div style={{
        position: "relative", marginTop: 18, height: 150, borderRadius: 12, overflow: "hidden",
        border: "1px solid rgba(255,255,255,.08)", background: "#0f1a33",
      }}>
        <img src={f.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}/>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ marginBottom: 18 }}><Pill dot={false}>Fonctionnalités</Pill></div>
          <h2 style={{
            margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#fff",
          }}>
            Une seule app. <span style={{
              backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>Tout le funnel.</span>
          </h2>
          <p style={{ marginTop: 14, color: "#94a3b8", fontSize: 15.5, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            De la page produit au post-achat, cinq leviers d'AOV activables en cinq minutes.
          </p>
        </div>
        <div className="hp-features-grid" style={{
          display: "grid", gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} f={f}/>)}
        </div>
      </div>
    </section>
  );
}

window.HP = Object.assign(window.HP || {}, { Features });
