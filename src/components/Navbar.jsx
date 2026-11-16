import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(15,15,15,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #2a2a2a" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", color: "var(--gold)", letterSpacing: "0.05em" }}>
                Maison Rouge
              </span>
              <span style={{ fontFamily: "Noto Serif SC, serif", fontSize: "0.85rem", color: "var(--red)", letterSpacing: "0.2em", marginTop: "2px" }}>
                红楼
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0 }} className="desktop-nav">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    textDecoration: "none",
                    color: pathname === to ? "var(--gold)" : "#ccc",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    transition: "color 0.3s",
                    borderBottom: pathname === to ? "1px solid var(--gold)" : "none",
                    paddingBottom: "2px",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/reservations" className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.6rem 1.4rem", textDecoration: "none" }}>
            Book a Table
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#e5e5e5", cursor: "pointer", display: "none" }}
            className="mobile-menu-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "rgba(15,15,15,0.98)", padding: "1rem 2rem 2rem", borderTop: "1px solid #2a2a2a" }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: "block",
                padding: "0.9rem 0",
                textDecoration: "none",
                color: pathname === to ? "var(--gold)" : "#ccc",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav a.btn-gold { display: none; }
        }
      `}</style>
    </nav>
  );
}
