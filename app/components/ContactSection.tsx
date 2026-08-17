"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    country: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <section
      id="contact"
      style={{ background: "#f8fafc", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "480px 1fr",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
          }}
          className="contact-grid"
        >
          {/* Left dark panel */}
          <div
            style={{
              background: "#0f172a",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "500px",
            }}
          >
            {/* Wave lines decorations */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Cpath d='M0 100 Q100 80 200 100 T400 100 M0 200 Q100 180 200 200 T400 200 M0 300 Q100 280 200 300 T400 300 M0 400 Q100 380 200 400 T400 400 M0 500 Q100 480 200 500 T400 500' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1.5'/%3E%3C/svg%3E\")",
                backgroundSize: "cover",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                }}
              >
                Digital Liquid{" "}
                <em
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: "#60a5fa",
                  }}
                >
                  Availability
                </em>
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>
                    Next Available: Tomorrow, 10:00 AM
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>
                    Duration: 30 minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Person photo */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: "240px",
                  height: "280px",
                  position: "relative",
                }}
              >
                {/* Blue half-circle background */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50% 50% 0 0",
                    background: "var(--blue-primary)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "220px",
                    height: "270px",
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    borderRadius: "110px 110px 0 0",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div style={{ background: "white", padding: "48px 40px" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              Book a Fit Call
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                marginBottom: "32px",
                lineHeight: 1.6,
              }}
            >
              Speak with a solutions architect to discuss your goals, tech stack, and scalability needs.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                {/* Full Name */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-9px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1.5px solid var(--blue-primary)",
                      borderRadius: "10px",
                      fontSize: "14px",
                      outline: "none",
                      color: "#0f172a",
                      background: "white",
                    }}
                  />
                </div>

                {/* Work Email */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-9px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Enter Your Email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: "10px",
                      fontSize: "14px",
                      outline: "none",
                      color: "#0f172a",
                      background: "white",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                {/* Phone */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-9px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    Phone No.
                  </label>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "14px 12px",
                        border: "1.5px solid #e2e8f0",
                        borderRight: "none",
                        borderRadius: "10px 0 0 10px",
                        fontSize: "13px",
                        color: "#374151",
                        whiteSpace: "nowrap",
                      }}
                    >
                      🇮🇳 +91 ▼
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        flex: 1,
                        padding: "14px 12px",
                        border: "1.5px solid #e2e8f0",
                        borderRadius: "0 10px 10px 0",
                        fontSize: "14px",
                        outline: "none",
                        color: "#0f172a",
                        background: "white",
                      }}
                    />
                  </div>
                </div>

                {/* Country */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-9px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    Select Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: "10px",
                      fontSize: "14px",
                      outline: "none",
                      color: formData.country ? "#0f172a" : "#94a3b8",
                      background: "white",
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Select your Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                    <option value="DE">Germany</option>
                    <option value="SG">Singapore</option>
                    <option value="AE">UAE</option>
                  </select>
                </div>
              </div>

              {/* Requirements textarea */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    top: "-9px",
                    left: "12px",
                    background: "white",
                    padding: "0 4px",
                    fontSize: "12px",
                    color: "#94a3b8",
                    fontWeight: 500,
                  }}
                >
                  Your Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "10px",
                    fontSize: "14px",
                    outline: "none",
                    color: "#0f172a",
                    background: "white",
                    resize: "vertical",
                  }}
                />
                {/* File upload area */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  <button
                    type="button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      color: "#64748b",
                      cursor: "pointer",
                    }}
                  >
                    Browse | Drop Files Here
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--blue-primary)",
                    color: "white",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-primary)")}
                >
                  Request Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
