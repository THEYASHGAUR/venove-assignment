"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of projects does Digital Liquid handle?",
    answer:
      "We work across web development, mobile apps, SaaS products, eCommerce platforms, cloud infrastructure, and digital marketing — from early-stage MVPs to enterprise-scale platforms.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After an initial fit call and scoping session, we can typically begin within 1–2 weeks. For urgent engagements, we have a fast-track onboarding process.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We offer project-based engagements, dedicated team models, and retainer partnerships — all structured around your delivery needs and timeline.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. All engagements include a post-launch support window, and we offer ongoing retainers for monitoring, maintenance, and continuous improvement.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "20%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(219,234,254,0.6)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Wave bg */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "40%",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='800'%3E%3Cpath d='M0 100 Q100 50 200 100 T400 100 M0 200 Q100 150 200 200 T400 200 M0 300 Q100 250 200 300 T400 300 M0 400 Q100 350 200 400 T400 400 M0 500 Q100 450 200 500 T400 500 M0 600 Q100 550 200 600 T400 600 M0 700 Q100 650 200 700 T400 700' fill='none' stroke='rgba(147,197,253,0.15)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-y",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "64px",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
        className="faq-grid"
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Frequently Asked
            <br />
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              Questions
            </em>
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.7 }}>
            Here are some questions our clients frequently ask about working with Digital Liquid.
          </p>
        </div>

        {/* Right: FAQ accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: openIndex === i ? "#2563eb" : "white",
                borderRadius: "14px",
                overflow: "hidden",
                border: openIndex === i ? "none" : "1px solid #e2e8f0",
                transition: "all 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                aria-expanded={openIndex === i}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: openIndex === i ? "white" : "#0f172a",
                    lineHeight: 1.4,
                    flex: 1,
                    marginRight: "16px",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: `1.5px solid ${openIndex === i ? "rgba(255,255,255,0.4)" : "#e2e8f0"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: openIndex === i ? "white" : "#94a3b8",
                    fontSize: "20px",
                    fontWeight: 300,
                  }}
                >
                  {openIndex === i ? "×" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
