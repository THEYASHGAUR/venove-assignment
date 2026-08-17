"use client";
import { useState } from "react";
import Image from "next/image";

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
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80",
    imageAlt: "Marketing and product team working together",
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
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    imageAlt: "Engineering team writing scalable code",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    imageAlt: "Analytics dashboard and metrics",
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
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80",
    imageAlt: "Design team creating digital interfaces",
  },
};

export default function DigitalDeliverySection() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("Marketing");
  const content = tabContent[activeTab];

  return (
    <section style={{ background: "#ffffff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Heading area: Left title and Right 2-line description aligned opposite */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "44px",
          }}
        >
          <div style={{ flex: "1 1 340px" }}>
            <h2
              style={{
                fontSize: "clamp(30px, 3.8vw, 44px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              One Partner. End-to-End
              <br />
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "var(--blue-primary, #168bf2)",
                  fontWeight: 700,
                }}
              >
                Digital Delivery.
              </em>
            </h2>
          </div>
          <div style={{ flex: "1 1 320px", maxWidth: "490px" }}>
            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              From strategy through to execution — we cover every dimension of digital
              delivery so your business moves faster, further, and with less friction.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              background: "#f1f5f9",
              borderRadius: "9999px",
              padding: "5px",
              gap: "4px",
              border: "1px solid #e2e8f0",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof tabContent)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: activeTab === tab ? 600 : 500,
                  background: activeTab === tab ? "var(--blue-primary, #168bf2)" : "transparent",
                  color: activeTab === tab ? "#ffffff" : "#64748b",
                  boxShadow: activeTab === tab ? "0 2px 8px rgba(22, 139, 242, 0.3)" : "none",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dark container with content and 4-sided padded image */}
        <div
          style={{
            background: "radial-gradient(ellipse at 20% 30%, #0d1e3d 0%, #060b18 70%)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            alignItems: "stretch",
            minHeight: "440px",
          }}
          className="digital-delivery-card"
        >
          {/* Left text content */}
          <div
            style={{
              padding: "48px 40px 48px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(28px, 3.2vw, 38px)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "16px",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {content.title}{" "}
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "var(--blue-primary, #168bf2)",
                  fontWeight: 700,
                }}
              >
                {content.titleItalic}
              </em>
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.72)",
                fontSize: "15px",
                lineHeight: 1.68,
                maxWidth: "460px",
                marginBottom: "28px",
              }}
            >
              {content.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              {content.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "rgba(255, 255, 255, 0.8)",
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Learn More button with white circular arrow badge */}
            <div>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "var(--blue-primary, #168bf2)",
                  color: "#ffffff",
                  padding: "8px 8px 8px 22px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  boxShadow: "0 4px 14px rgba(22, 139, 242, 0.35)",
                }}
                className="learn-more-btn"
              >
                <span>Learn More</span>
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--blue-primary, #168bf2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right image with margins/padding on all 4 sides */}
          <div
            style={{
              padding: "20px 20px 20px 0",
              display: "flex",
              alignItems: "stretch",
            }}
            className="digital-delivery-img-container"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "340px",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <Image
                src={content.imageUrl}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 500px"
                style={{
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "18px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .learn-more-btn:hover {
          background: #147ad6 !important;
          transform: translateY(-1px);
        }
        @media (max-width: 900px) {
          .digital-delivery-card {
            grid-template-columns: 1fr !important;
          }
          .digital-delivery-img-container {
            padding: 0 20px 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}