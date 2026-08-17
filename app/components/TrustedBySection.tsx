"use client";

export default function TrustedBySection() {
  const logos = [
    "GOIPSUM",
    "Logoipsum",
    "LOGOIPSUM",
    "Logoipsum",
    "Logoipsum",
  ];

  return (
    <section style={{ background: "#f9fafb", padding: "56px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Divider with text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Trusted by startups and Fortune{" "}
            <span style={{ color: "var(--blue-primary)", fontWeight: 700 }}>500</span>{" "}
            companies
          </p>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
        </div>

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                opacity: 0.4,
                filter: "grayscale(1)",
              }}
            >
              {/* Shield/logo icon */}
              {i > 0 && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#6b7280">
                  <path d="M12 2L3 7v6c0 4.5 3.8 8.7 9 10 5.2-1.3 9-5.5 9-10V7z" />
                </svg>
              )}
              <span
                style={{
                  fontSize: i === 0 ? "18px" : "16px",
                  fontWeight: i === 0 ? 900 : 700,
                  fontFamily: i === 0 ? "serif" : "sans-serif",
                  letterSpacing: i === 2 ? "0.1em" : "0",
                  color: "#374151",
                  textTransform: i === 2 ? "uppercase" : "none",
                }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          {[
            { value: "20+", label: "Years Of Experience" },
            { value: "2500+", label: "Projects Delivered" },
            { value: "500+", label: "Global Partners" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "32px 16px",
                borderRight: i < 2 ? "1px solid #e2e8f0" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "14px", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
