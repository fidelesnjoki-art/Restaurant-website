import { Link } from "react-router-dom";
import { Globe, Rss, Share2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1f1f1f", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <h3 style={{ color: "var(--gold)", fontSize: "1.5rem", marginBottom: "0.25rem" }}>Maison Rouge</h3>
            <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>红楼</p>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: "0.9rem" }}>
              Where French elegance meets Chinese artistry. A fusion of two great culinary traditions, reimagined for the modern palate.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              {[Globe, Rss, Share2].map((Icon, i) => (
                <a key={i} href="#" style={{ color: "#666", transition: "color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "#666"}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "#e5e5e5", marginBottom: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem" }}>Quick Links</h4>
            {[["Home", "/"], ["Menu", "/menu"], ["Reservations", "/reservations"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} style={{ display: "block", color: "#888", textDecoration: "none", marginBottom: "0.6rem", fontSize: "0.9rem", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#e5e5e5", marginBottom: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem" }}>Hours</h4>
            {[["Mon – Thu", "12pm – 10pm"], ["Fri – Sat", "12pm – 11pm"], ["Sunday", "1pm – 9pm"]].map(([day, time]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem", fontSize: "0.9rem" }}>
                <span style={{ color: "#888" }}>{day}</span>
                <span style={{ color: "var(--gold)" }}>{time}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#e5e5e5", marginBottom: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem" }}>Contact</h4>
            {[
              [MapPin, "8 Rue du Dragon, Paris, 75006"],
              [Phone, "+1 (555) 234-5678"],
              [Mail, "hello@maisonrouge.com"],
            ].map(([Icon, text]) => (
              <div key={text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                <Icon size={16} style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#888", fontSize: "0.9rem" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: "1.5rem", textAlign: "center", color: "#555", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} La Maison. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
