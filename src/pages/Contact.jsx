import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const info = [
  { icon: MapPin, title: "Address", lines: ["8 Rue du Dragon", "Paris, 75006, France"] },
  { icon: Phone, title: "Phone", lines: ["+1 (555) 234-5678", "+1 (555) 234-5679"] },
  { icon: Mail, title: "Email", lines: ["hello@maisonrouge.com", "events@maisonrouge.com"] },
  { icon: Clock, title: "Hours", lines: ["Mon–Thu: 12pm – 10pm", "Fri–Sat: 12pm – 11pm", "Sun: 1pm – 9pm"] },
];

export default function Contact() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          backgroundImage: "url(https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(8,2,2,0.78)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            Get in Touch
          </p>
          <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.3em", marginBottom: "0.75rem" }}>联系我们</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff" }}>Contact Us</h1>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <SectionHeader subtitle="联系我们 · We'd Love to Hear From You" title="Find Us" />

        {/* Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {info.map(({ icon: Icon, title, lines }) => (
            <div key={title} style={{ backgroundColor: "var(--dark-2)", border: "1px solid #2a1a1a", padding: "2rem", borderRadius: "4px", textAlign: "center" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid var(--red)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <Icon size={22} style={{ color: "var(--red)" }} />
              </div>
              <h4 style={{ color: "#e5e5e5", marginBottom: "0.75rem", fontSize: "1rem" }}>{title}</h4>
              {lines.map(l => <p key={l} style={{ color: "#888", fontSize: "0.88rem", lineHeight: 1.8 }}>{l}</p>)}
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #2a1a1a" }}>
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3308!3d48.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sPlace%20Vend%C3%B4me%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0, display: "block", filter: "grayscale(0.5) invert(0.88) contrast(0.85) sepia(0.2)" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
