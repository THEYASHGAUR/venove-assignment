"use client";
import { useState } from "react";
import Image from "next/image";

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
      style={{ background: "#f8fafc", padding: 0 }}
    >
      <div style={{ width: "100%", margin: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(380px, 35%) 1fr",
            background: "#f8fafc",
            minHeight: "800px",
          }}
          className="contact-grid"
        >
          {/* Left dark panel */}
          <div
            style={{
              background: "#0f172a",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "64px",
            }}
          >
            {/* Concentric circle decorations */}
            <div
              style={{
                position: "absolute",
                top: "-150px",
                left: "-150px",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 0 0 80px rgba(255,255,255,0.02), 0 0 0 160px rgba(255,255,255,0.01)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 0 0 60px rgba(255,255,255,0.02)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, padding: "60px 40px 10px 40px" }}>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 600,
                  color: "white",
                  lineHeight: 1.3,
                  marginBottom: "48px",
                }}
              >
                Digital Liquid{" "}
                <em
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: "var(--blue-primary, #168bf2)",
                    fontWeight: 700,
                  }}
                >
                  Availability
                </em>
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "40px",
                  
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>
                    Next Available: Tomorrow, 10:00 AM
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>
                    Duration: 30 minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Large Blue curve base */}
            <div
              style={{
                position: "absolute",
                bottom: "-15%",
                left: "-10%",
                width: "120%",
                height: "55%",
                background: "var(--blue-primary, #168bf2)",
                borderRadius: "50% 50% 0 0",
                zIndex: 0,
              }}
            />

            {/* Person photo cutout */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginTop: "40px",
                width: "100%",
                flex: 1,
              }}
            >
              <Image 
                src="https://www.pngarts.com/files/3/Businessman-Transparent-Image.png" 
                alt="Professional business man"
                width={450}
                height={550}
                style={{
                  width: "90%",
                  height: "auto",
                  maxWidth: "450px",
                  maxHeight: "90%",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </div>
          </div>

          {/* Right form panel */}
          <div style={{ background: "#f8fafc", padding: "80px 8%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Book a Fit Call
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                marginBottom: "48px",
                lineHeight: 1.6,
              }}
            >
              Speak with a solutions architect to discuss your goals, tech stack, and scalability needs.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="form-row">
                {/* Full Name */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#0f172a",
                      fontWeight: 600,
                      zIndex: 1,
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
                      padding: "16px",
                      border: "1.5px solid var(--blue-primary, #168bf2)",
                      borderRadius: "6px",
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
                      top: "-8px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: 600,
                      zIndex: 1,
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
                      padding: "16px",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      color: "#0f172a",
                      background: "white",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="form-row">
                {/* Phone */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: 600,
                      zIndex: 1,
                    }}
                  >
                    Phone No.
                  </label>
                  <div style={{ display: "flex", border: "1px solid #cbd5e1", borderRadius: "6px", overflow: "hidden" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "16px",
                        borderRight: "1px solid #cbd5e1",
                        fontSize: "14px",
                        color: "#0f172a",
                        whiteSpace: "nowrap",
                        background: "white",
                      }}
                    >
                      <span>🇮🇳</span>
                      <span>+91</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        flex: 1,
                        padding: "16px",
                        border: "none",
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
                      top: "-8px",
                      left: "12px",
                      background: "white",
                      padding: "0 4px",
                      fontSize: "12px",
                      color: "#64748b",
                      fontWeight: 600,
                      zIndex: 1,
                    }}
                  >
                    Select Country
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "16px",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
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
                    </select>
                    <div style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements textarea container */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: "12px",
                    background: "white",
                    padding: "0 4px",
                    fontSize: "12px",
                    color: "#64748b",
                    fontWeight: 600,
                    zIndex: 1,
                  }}
                >
                  Your Requirements
                </label>
                <div
                  style={{
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    padding: "16px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: "100%",
                      border: "none",
                      fontSize: "14px",
                      outline: "none",
                      color: "#0f172a",
                      background: "transparent",
                      resize: "vertical",
                    }}
                  />
                  {/* File upload pill inside the border */}
                  <div>
                    <button
                      type="button"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "#e2e8f0",
                        border: "none",
                        borderRadius: "4px",
                        padding: "6px 10px",
                        fontSize: "11px",
                        color: "#64748b",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      Browse | Drop Files Here
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--blue-primary, #168bf2)",
                    color: "white",
                    padding: "16px 32px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0b459c")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-primary, #168bf2)")}
                >
                  Request Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
