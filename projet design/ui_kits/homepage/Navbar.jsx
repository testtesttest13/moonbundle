/** @jsx React.createElement */
const { useState, useEffect } = React;
const { Logo, PrimaryCta } = window.HP;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 40,
      background: scrolled ? "rgba(10,22,40,.82)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all .35s cubic-bezier(.22,1,.36,1)",
    }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "16px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Logo />
        <div className="hp-nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Fonctionnalités", "Tarifs", "Témoignages", "Affiliation"].map(l => (
            <a key={l} href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13.5, fontWeight: 500, transition: "color .3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 34, height: 34, borderRadius: 9999,
            border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)",
          }}>
            <svg viewBox="0 0 60 40" style={{ width: 16, height: 16, borderRadius: 9999 }}>
              <rect width="20" height="40" fill="#0055A4" />
              <rect x="20" width="20" height="40" fill="#FFFFFF" />
              <rect x="40" width="20" height="40" fill="#EF4135" />
            </svg>
          </div>
          <a href="#" style={{
            background: "#fff", color: "#0a1628", borderRadius: 10,
            padding: "9px 18px", fontSize: 13, fontWeight: 600,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
          }}>Installer →</a>
        </div>
      </div>
    </nav>
  );
}

window.HP = Object.assign(window.HP || {}, { Navbar });
