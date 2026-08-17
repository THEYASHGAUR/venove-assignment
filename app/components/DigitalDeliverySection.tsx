"use client";
import { useState } from "react";

const tabs = ["Marketing", "Engineering", "Analytics", "Design"];

const tabContent = {
  Marketing: {
    title: "What We",
    titleItalic: "Do?",
    description:
      "We design, build, and scale digital products that drive real business outcomes — from conversion-focused websites to complex software systems.",
    tags: [
      "Search Engine Optimization",
      "Paid Media Management",
      "Content Strategy",
      "Conversion Optimization",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    imageAlt: "Marketing team working",
  },
  Engineering: {
    title: "What We",
    titleItalic: "Build?",
    description:
      "We architect scalable, performant systems — from MVPs to enterprise platforms — with senior engineers who embed directly into your team.",
    tags: [
      "Full-Stack Development",
      "Cloud Infrastructure",
      "API Integration",
      "DevOps & CI/CD",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    imageAlt: "Engineering team",
  },
  Analytics: {
    title: "What We",
    titleItalic: "Measure?",
    description:
      "We transform raw data into strategic insight — delivering dashboards, attribution models, and analytics systems that inform every decision.",
    tags: [
      "Data Warehousing",
      "Business Intelligence",
      "User Analytics",
      "Attribution Modeling",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Analytics dashboard",
  },
  Design: {
    title: "What We",
    titleItalic: "Design?",
    description:
      "We craft interfaces and experiences that convert — from brand identities to full design systems, grounded in user research and modern aesthetics.",
    tags: [
      "UI/UX Design",
      "Design Systems",
      "Brand Identity",
      "Prototyping",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    imageAlt: "Design team",
  },
};

export default function DigitalDeliverySection() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("Marketing");
  const content = tabContent[activeTab];

  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Heading area */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "flex-start",
            marginBottom: "48px",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              One Partner. End-to-End
              <br />
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#2563eb",
                  fontWeight: 700,
                }}
              >
                Digital Delivery.
              </em>
            </h2>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              From strategy through to execution — we cover every dimension of digital delivery so your business moves faster, further, and with less friction.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              background: "#e2e8f0",
              borderRadius: "999px",
              padding: "4px",
              gap: "4px",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof tabContent)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  background: activeTab === tab ? "#2563eb" : "transparent",
                  color: activeTab === tab ? "white" : "#64748b",
                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dark card with content */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: "20px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "380px",
          }}
          className="digital-delivery-grid"
        >
          {/* Left text content */}
          <div style={{ padding: "48px" }}>
            <h3
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                color: "white",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              {content.title}{" "}
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#60a5fa",
                }}
              >
                {content.titleItalic}
              </em>
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              {content.description}
            </p>
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
              {content.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Learn More button */}
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#2563eb",
                color: "white",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Learn More
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right image */}
          <div
            style={{
              position: "relative",
              minHeight: "300px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${content.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0 20px 20px 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(15,23,42,0.5), transparent)",
                borderRadius: "0 20px 20px 0",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .digital-delivery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
