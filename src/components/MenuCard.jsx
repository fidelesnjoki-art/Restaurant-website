export default function MenuCard({ item }) {
  return (
    <div
      style={{
        backgroundColor: "var(--dark-2)",
        border: "1px solid #2a1a1a",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--red)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#2a1a1a";
      }}
    >
      {item.image_url && (
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={item.image_url}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>
      )}
      <div style={{ padding: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
          <h3 style={{ fontSize: "1rem", color: "#e5e5e5", fontFamily: "Playfair Display, serif" }}>{item.name}</h3>
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "1rem", marginLeft: "1rem", whiteSpace: "nowrap" }}>
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.description}</p>
      </div>
    </div>
  );
}
