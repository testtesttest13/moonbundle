/** @jsx React.createElement */
const { Pill, PrimaryCta, GhostCta } = window.HP;

function HeroShowcase() {
  const imgs = [
    { src: "../../assets/fixed-bundle.png", x: -220, y: 20, rot: -8, z: 1, d: 0 },
    { src: "../../assets/cart-drawer.webp", x: 0, y: -10, rot: 0, z: 3, d: .4 },
    { src: "../../assets/one-click-upsell.webp", x: 220, y: 20, rot: 8, z: 2, d: .8 },
  ];
  return (
    <div style={{ position: "relative", height: 360, marginTop: 56 }}>
      {imgs.map((im, i) => (
        <div key={i} style={{
          position: "absolute", left: "50%", top: 0,
          transform: `translate(calc(-50% + ${im.x}px), ${im.y}px) rotate(${im.rot}deg)`,
          zIndex: im.z,
          width: 300, height: 320,
          borderRadius: 18, overflow: "hidden",
          border: "1px solid rgba(255,255,255,.1)",
          background: "#162044",
          boxShadow: "0 24px 80px rgba(0,0,0,.55)",
          animation: `mb-float 7s ease-in-out ${im.d}s infinite`,
        }}>
          <img src={im.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}/>
        </div>
      ))}
    </div>
  );
}

function Stat({ big, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-heading)", fontWeight: 700,
        fontSize: 32, color: "#fff", fontVariantNumeric: "tabular-nums", lineHeight: 1,
      }}>{big}</div>
      <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", padding: "48px 28px 80px" }}>
      <div aria-hidden style={{
        position: "absolute", left: "50%", top: 60, transform: "translateX(-50%)",
        width: 640, height: 420, borderRadius: "50%",
        background: "rgba(77,124,255,.14)", filter: "blur(130px)",
        animation: "mb-pulse-glow 5s ease-in-out infinite",
      }}/>
      <div style={{ position: "relative", maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 22 }}>
          <Pill>Built for Shopify · 5.0/5</Pill>
        </div>
        <h1 style={{
          margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: "clamp(38px, 6vw, 68px)", lineHeight: 1.04, letterSpacing: "-0.025em",
          color: "#fff",
        }}>
          Boostez votre AOV <br/>
          <span style={{
            backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff,#5b8def)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>à chaque étape</span>
        </h1>
        <p style={{
          marginTop: 22, color: "#94a3b8", fontSize: 17, lineHeight: 1.55,
          maxWidth: "62ch", marginLeft: "auto", marginRight: "auto",
        }}>
          L'app Shopify tout-en-un pour les <span style={{color:"#fff",fontWeight:600}}>Bundles</span>, le <span style={{color:"#fff",fontWeight:600}}>Cart Drawer</span> et les <span style={{color:"#fff",fontWeight:600}}>Upsells post-achat</span>. Une seule app, un seul abonnement.
        </p>
        <div style={{ marginTop: 30, display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <PrimaryCta>Installer Gratuitement</PrimaryCta>
          <GhostCta>Voir la démo</GhostCta>
        </div>
        <div style={{ marginTop: 16, color: "#94a3b8", fontSize: 12.5 }}>
          Sans carte bancaire · Plan gratuit · Annulable à tout moment
        </div>

        <HeroShowcase />

        <div style={{
          marginTop: 40, display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap",
          paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.06)",
        }}>
          <Stat big="1 200+" label="marchands actifs"/>
          <Stat big="5.0 ★" label="448+ avis"/>
          <Stat big="+ 28%" label="AOV moyen"/>
          <Stat big="< 5 min" label="à configurer"/>
        </div>
      </div>
    </section>
  );
}

window.HP = Object.assign(window.HP || {}, { Hero });
