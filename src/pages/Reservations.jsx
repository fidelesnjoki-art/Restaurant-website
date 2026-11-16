import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SectionHeader from "../components/SectionHeader";
import { CalendarDays, Clock, Users, CheckCircle } from "lucide-react";

const times = ["12:00", "12:30", "13:00", "13:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const initial = { name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" };

export default function Reservations() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/reservations", form);
      setSuccess(true);
      setForm(initial);
      toast.success("Reservation confirmed!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            Join Us
          </p>
          <p style={{ color: "var(--red)", fontFamily: "Noto Serif SC, serif", fontSize: "0.9rem", letterSpacing: "0.3em", marginBottom: "0.75rem" }}>预订座位</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff" }}>Reserve a Table</h1>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
        {/* Info Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {[
            [CalendarDays, "Opening Hours", "Mon–Thu: 12–10pm\nFri–Sat: 12–11pm\nSun: 1–9pm"],
            [Clock, "Reservation Policy", "Tables held for 15 minutes. Please call if you're running late."],
            [Users, "Group Bookings", "For parties of 8+, please call us directly for arrangements."],
          ].map(([Icon, title, text]) => (
            <div key={title} style={{ backgroundColor: "var(--dark-2)", border: "1px solid #2a2a2a", padding: "1.5rem", borderRadius: "4px" }}>
              <Icon size={24} style={{ color: "var(--red)", marginBottom: "0.75rem" }} />
              <h4 style={{ color: "#e5e5e5", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{title}</h4>
              <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{text}</p>
            </div>
          ))}
        </div>

        {success ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "var(--dark-2)", border: "1px solid #2a2a2a", borderRadius: "4px" }}>
            <CheckCircle size={56} style={{ color: "var(--red)", margin: "0 auto 1.5rem" }} />
            <h2 style={{ color: "#e5e5e5", marginBottom: "1rem" }}>Reservation Confirmed!</h2>
            <p style={{ color: "#888", marginBottom: "2rem" }}>We look forward to welcoming you. A confirmation has been noted.</p>
            <button className="btn-gold" onClick={() => setSuccess(false)}>Make Another Reservation</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: "var(--dark-2)", border: "1px solid #2a2a2a", padding: "2.5rem", borderRadius: "4px" }}>
            <SectionHeader subtitle="Book Online" title="Make a Reservation" center={false} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
              </div>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" required />
              </div>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Guests *</label>
                <select name="guests" value={form.guests} onChange={handleChange} required>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Date *</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} required />
              </div>
              <div>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Time *</label>
                <select name="time" value={form.time} onChange={handleChange} required>
                  <option value="">Select a time</option>
                  {times.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", color: "#aaa", fontSize: "0.8rem", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>Special Requests</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Allergies, special occasions, seating preferences..." rows={4} />
              </div>
            </div>
            <button type="submit" className="btn-gold" style={{ marginTop: "1.5rem", width: "100%", padding: "1rem" }} disabled={loading}>
              {loading ? "Confirming..." : "Confirm Reservation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
