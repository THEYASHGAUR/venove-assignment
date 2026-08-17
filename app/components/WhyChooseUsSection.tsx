"use client";

const stats = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "98%", label: "On-time Delivery" },
  { value: "97%", label: "Client Retention Rate" },
  { value: "24/7", label: "Delivery Support" },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #1e3a8a 100%)",
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            minHeight: "320px",
            position: "relative",
          }}
          className="why-choose-grid"
        >
          {/* Dark right portion */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "45%",
              background: "#0f172a",
              borderRadius: "0 24px 24px 0",
              clipPath: "ellipse(100% 100% at 100% 50%)",
            }}
            className="why-choose-right-bg"
          />

          {/* Left content */}
          <div
            style={{
              padding: "48px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                Why Choose Us?
              </em>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "28px",
              }}
            >
              Our methodology is built on a decade of refined enterprise delivery — so we never miss a deadline or compromise on quality.
            </p>

            {/* Learn More button */}
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "white",
                color: "#2563eb",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "36px",
              }}
            >
              Learn More
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            {/* Stats 2x2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px" }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image - person with laptop */}
          <div
            style={{
              width: "340px",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden",
            }}
            className="why-choose-img"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                position: "absolute",
                inset: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(15,23,42,0.5), transparent)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
          .why-choose-img {
            display: none !important;
          }
          .why-choose-right-bg {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
