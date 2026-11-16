import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/MenuCard";
import SectionHeader from "../components/SectionHeader";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([axios.get("/api/menu/categories"), axios.get("/api/menu")])
      .then(([catRes, itemRes]) => {
        setCategories(catRes.data);
        setItems(itemRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = active === "All" ? items : items.filter(i => i.category === active);

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh" }}>
      {/* Page Hero */}
      <div
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          backgroundImage: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            Culinary Creations
          </p>
          <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.3em", marginBottom: "0.75rem" }}>菜单</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff" }}>Our Menu</h1>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        {/* Category Tabs */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3.5rem" }}>
          {["All", ...categories.map(c => c.name)].map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.6rem 1.5rem",
                border: "1px solid",
                borderColor: active === cat ? "var(--red)" : "#3a2a2a",
                backgroundColor: active === cat ? "var(--red)" : "transparent",
                color: active === cat ? "#fff" : "#888",
                borderRadius: "2px",
                cursor: "pointer",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "Inter, sans-serif",
                fontWeight: active === cat ? 600 : 400,
                transition: "all 0.3s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#888", padding: "4rem" }}>Loading menu...</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {filtered.map(item => <MenuCard key={item.id} item={item} />)}
          </div>
        )}
      </div>
    </div>
  );
}
