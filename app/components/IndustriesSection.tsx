"use client";

const industries = [
  {
    title: "Startups & Founders",
    description:
      "From MVP to market — we move fast, stay lean, and build the foundations your business can scale on.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "SaaS Companies",
    description:
      "Feature velocity, platform reliability, and infrastructure that scales with your user growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "eCommerce Brands",
    description:
      "Conversion-first builds across Shopify, Magento, and WooCommerce — engineered to perform under volume",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Fintech",
    description:
      "Secure, compliant infrastructure for businesses that can't afford performance or trust risk.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
  },
];

export default function IndustriesSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "88px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative organic background blobs */}
      <div
        style={{
          position: "absolute",
          left: "-120px",
          top: "20%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(219, 234, 254, 0.55) 0%, rgba(219, 234, 254, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "10%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 246, 255, 0.8) 0%, rgba(239, 246, 255, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
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
                color: "var(--blue-primary, #168bf2)",
                fontWeight: 700,
              }}
            >
              We Serve
            </em>
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            Deep expertise across the sectors that move fastest — from early-stage startups to high-growth enterprises.
          </p>
        </div>

        {/* Industry cards grid */}
        <div className="industries-grid">
          {industries.map((industry, i) => (
            <div key={i} className="industry-card">
              {/* Image */}
              <div className="industry-card-img-wrapper">
                <div
                  className="industry-card-img"
                  style={{
                    backgroundImage: `url(${industry.imageUrl})`,
                  }}
                />
              </div>

              {/* Bottom Content (Turns dark navy on hover) */}
              <div className="industry-card-content">
                <div className="industry-card-header">
                  <h3 className="industry-card-title">{industry.title}</h3>
                  <div className="industry-card-arrow">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="industry-card-desc">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .industry-card {
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-4px);
          border-color: #0b1022;
          box-shadow: 0 18px 40px -8px rgba(11, 16, 34, 0.22);
        }

        .industry-card-img-wrapper {
          height: 190px;
          overflow: hidden;
          position: relative;
          background: #e2e8f0;
        }

        .industry-card-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .industry-card:hover .industry-card-img {
          transform: scale(1.05);
        }

        .industry-card-content {
          padding: 22px 22px 26px;
          background: #ffffff;
          flex: 1;
          display: flex;
          flex-direction: column;
          justifyContent: flex-start;
          transition: background 0.28s ease;
        }

        .industry-card:hover .industry-card-content {
          background: #090d1a !important;
        }

        .industry-card-header {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .industry-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin: 0;
          transition: color 0.25s ease;
        }

        .industry-card:hover .industry-card-title {
          color: #ffffff !important;
        }

        .industry-card-arrow {
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          color: #ffffff;
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
        }

        .industry-card:hover .industry-card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .industry-card-desc {
          color: #64748b;
          font-size: 13.5px;
          line-height: 1.65;
          margin: 0;
          transition: color 0.25s ease;
        }

        .industry-card:hover .industry-card-desc {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 580px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
