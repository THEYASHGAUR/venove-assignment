"use client";

const industries = [
  {
    title: "Startups & Founders",
    description:
      "From MVP to market — we move fast, stay lean, and build the foundations your business can scale on.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    highlighted: false,
  },
  {
    title: "SaaS Companies",
    description:
      "Feature velocity, platform reliability, and infrastructure that scales with your user growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80",
    highlighted: true,
  },
  {
    title: "eCommerce Brands",
    description:
      "Conversion-first builds across Shopify, Magento, and WooCommerce — engineered to perform under volume",
    imageUrl:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80",
    highlighted: false,
  },
  {
    title: "Fintech",
    description:
      "Secure, compliant infrastructure for businesses that can't afford performance or trust risk.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
    highlighted: false,
  },
];

export default function IndustriesSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          left: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(219,234,254,0.5)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Industry{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              We Serve
            </em>
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              maxWidth: "540px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Deep expertise across the sectors that move fastest — from early-stage startups to high-growth enterprises.
          </p>
        </div>

        {/* Industry cards - horizontal scroll on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="industries-grid"
        >
          {industries.map((industry, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: industry.highlighted ? "#0f172a" : "white",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${industry.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {industry.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent, rgba(15,23,42,0.6))",
                    }}
                  />
                )}
                {/* Arrow icon on highlighted card */}
                {industry.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "32px",
                      height: "32px",
                      background: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: industry.highlighted ? "white" : "#0f172a",
                    marginBottom: "8px",
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  style={{
                    color: industry.highlighted ? "rgba(255,255,255,0.7)" : "#64748b",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
