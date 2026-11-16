export default function SectionHeader({ subtitle, title, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "3rem" }}>
      {subtitle && (
        <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
          {subtitle}
        </p>
      )}
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e5e5e5", lineHeight: 1.2 }}>{title}</h2>
      <div style={{ width: "60px", height: "2px", backgroundColor: "var(--gold)", margin: center ? "1rem auto 0" : "1rem 0 0" }} />
    </div>
  );
}
