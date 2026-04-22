/** @jsx React.createElement */
const { WhatsAppIcon } = window.LM;

function WhatsAppCard() {
  return (
    <section style={{ padding: "18px 24px 0" }}>
      <div style={{
        background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)",
        borderRadius: 20, backdropFilter: "blur(20px)",
        padding: "18px 20px", display: "flex", alignItems: "center", gap: 14,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "rgba(37,211,102,.12)", color: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center", flex: "none",
        }}>
          <WhatsAppIcon size={20} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14.5, color: "#fff" }}>
            Une question ?
          </div>
          <div style={{ color: "#94a3b8", fontSize: 12.5, marginTop: 2 }}>
            On t'aide à configurer tes offres.
          </div>
        </div>
        <a href="https://wa.me/33670438611" target="_blank" rel="noopener" style={{
          background: "#25D366", color: "#fff", borderRadius: 12,
          padding: "10px 16px", fontSize: 12.5, fontWeight: 600,
          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7,
        }}>
          <WhatsAppIcon size={14}/> WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "36px 24px 28px", marginTop: 24,
      textAlign: "center", color: "#94a3b8", fontSize: 11.5, lineHeight: 1.7,
    }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, opacity: .8 }}>
        <img src="../../assets/logo.png" alt="" style={{ width: 18, height: 18, borderRadius: 5 }}/>
        <span style={{ color: "#e2e8f0", fontFamily: "var(--font-heading)", fontWeight: 600 }}>Moonbundles</span>
      </div>
      <div style={{ marginTop: 6 }}>
        by Bambino · <a href="#" style={{color:"#94a3b8"}}>@bambino_moon</a> · Built for Shopify
      </div>
    </footer>
  );
}

function StickyMobileCta({ visible }) {
  if (!visible) return null;
  return (
    <div className="lm-sticky" style={{
      position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 30,
      padding: "10px 16px",
      background: "rgba(10,22,40,.9)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(255,255,255,.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, fontSize: 11.5, color: "#e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#ef4444",
            animation: "mb-pulse 1s infinite", flex: "none",
          }} />
          <span><b style={{color:"#fff",fontWeight:700}}>-20%</b> expire à minuit</span>
        </div>
        <a href="#" style={{
          background: "#fff", color: "#0a1628", borderRadius: 10,
          padding: "10px 16px", fontSize: 12.5, fontWeight: 700, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 6,
        }}>Installer →</a>
      </div>
    </div>
  );
}

window.LM = Object.assign(window.LM || {}, { WhatsAppCard, Footer, StickyMobileCta });
