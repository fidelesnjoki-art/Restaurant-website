import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuCard from "../components/MenuCard";
import SectionHeader from "../components/SectionHeader";
import { ChefHat, Clock, Star, Users } from "lucide-react";

const stats = [
  { icon: ChefHat, value: "12+", label: "Years of Fusion" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "40K+", label: "Happy Guests" },
  { icon: Clock, value: "7", label: "Days a Week" },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get("/api/menu/featured").then(r => setFeatured(r.data)).catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,4,4,0.75)" }} />
        {/* Decorative red side accent */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: "linear-gradient(to bottom, var(--red), var(--gold), var(--red))" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "5px", background: "linear-gradient(to bottom, var(--red), var(--gold), var(--red))" }} />

        <div style={{ position: "relative", textAlign: "center", padding: "0 1.5rem", maxWidth: "820px" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "0.75rem" }}>
            French · Chinese · Fusion
          </p>
          <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "1.1rem", letterSpacing: "0.4em", marginBottom: "1.5rem" }}>
            法式中华融合料理
          </p>
          <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Two Cultures,<br />
            <span style={{ color: "var(--gold)" }}>One Extraordinary Table</span>
          </h1>
          <p style={{ color: "#bbb", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Where the elegance of French haute cuisine meets the depth and artistry of Chinese culinary tradition — reimagined for the modern palate.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/reservations" className="btn-gold">Reserve a Table</Link>
            <Link to="/menu" className="btn-outline">Explore Menu</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--dark-2)", padding: "3rem 2rem", borderBottom: "1px solid #2a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem" }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <Icon size={28} style={{ color: "var(--red)", margin: "0 auto 0.75rem" }} />
              <div style={{ fontSize: "2rem", fontFamily: "Playfair Display, serif", color: "#e5e5e5", marginBottom: "0.25rem" }}>{value}</div>
              <div style={{ color: "#888", fontSize: "0.85rem", letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader subtitle="主厨精选 · Chef's Selection" title="Signature Fusion Dishes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {featured.slice(0, 6).map(item => <MenuCard key={item.id} item={item} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/menu" className="btn-outline">View Full Menu</Link>
        </div>
      </section>

      {/* Dual Heritage Section */}
      <section style={{ backgroundColor: "var(--dark-2)", padding: "6rem 2rem", borderTop: "1px solid #2a1a1a", borderBottom: "1px solid #2a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader subtitle="Our Philosophy" title="The Art of Two Worlds" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {[
              {
                flag: "🇫🇷",
                lang: "French",
                chinese: "法式",
                desc: "Classic French techniques — consommés, reductions, butter-poached proteins and delicate pastry — form the structural backbone of every dish.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
              },
              {
                flag: "🇨🇳",
                lang: "Chinese",
                chinese: "中式",
                desc: "Bold Chinese flavours — five-spice, Sichuan peppercorn, fermented black bean, aged Shaoxing wine — breathe soul and depth into every creation.",
                img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
              },
            ].map(({ flag, lang, chinese, desc, img }) => (
              <div key={lang} style={{ position: "relative", borderRadius: "4px", overflow: "hidden", minHeight: "320px" }}>
                <img src={img} alt={lang} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,4,4,0.95) 40%, rgba(10,4,4,0.3))" }} />
                <div style={{ position: "relative", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "320px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{flag}</span>
                    <span style={{ color: "var(--gold)", fontFamily: "Playfair Display, serif", fontSize: "1.3rem" }}>{lang}</span>
                    <span style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "1rem", letterSpacing: "0.1em" }}>{chinese}</span>
                  </div>
                  <p style={{ color: "#bbb", fontSize: "0.9rem", lineHeight: 1.8 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800"
              alt="Chef"
              style={{ width: "100%", borderRadius: "4px", objectFit: "cover", height: "500px" }}
            />
            <div style={{
              position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
              backgroundColor: "var(--red)", padding: "1.5rem 2rem", borderRadius: "2px",
            }}>
              <div style={{ fontSize: "2rem", fontFamily: "Playfair Display, serif", color: "#fff", fontWeight: 700 }}>12+</div>
              <div style={{ fontSize: "0.8rem", color: "#ffcccc", fontWeight: 600 }}>Years of Fusion</div>
            </div>
          </div>
          <div>
            <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>Our Story</p>
            <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>我们的故事</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#e5e5e5", marginBottom: "1.5rem", lineHeight: 1.3 }}>
              Born from Two Culinary Worlds
            </h2>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              Founded in 2012 by Chef Élise Chen — trained at Le Cordon Bleu in Paris and under Master Chef Wei in Chengdu — Maison Rouge was born from a lifelong passion for bridging two of the world's greatest food cultures.
            </p>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: "2rem" }}>
              Every dish is a dialogue: a French beurre blanc infused with ginger and Shaoxing wine, a Peking duck reimagined as a confit with cherry gastrique, a mille-feuille layered with red bean and jasmine cream.
            </p>
            <Link to="/reservations" className="btn-gold">Make a Reservation</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          backgroundImage: "url(https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(8,2,2,0.82)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            Special Occasions
          </p>
          <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.3em", marginBottom: "1.25rem" }}>特别场合</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Celebrate Life's Finest Moments
          </h2>
          <p style={{ color: "#bbb", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            From intimate anniversaries to grand banquets, let us craft an unforgettable evening where East meets West on every plate.
          </p>
          <Link to="/reservations" className="btn-gold">Book Your Event</Link>
        </div>
      </section>
    </div>
  );
}
