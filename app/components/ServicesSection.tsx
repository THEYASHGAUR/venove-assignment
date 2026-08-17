"use client";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M4 3h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" opacity="0.5" />
        <path d="M7 8h10M7 11h7M3 19h18M3 21h18" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Digital Firm",
    description: "Reliable digital delivery for complex projects, without disruption.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" fill="white" />
        <path d="M9.5 2.5 L6 6 M14.5 2.5 L18 6 M21.5 9.5 L18 6 M21.5 14.5 L18 18 M14.5 21.5 L18 18 M9.5 21.5 L6 18 M2.5 14.5 L6 18 M2.5 9.5 L6 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Creative Agencies",
    description: "We build digital experiences so your team can focus on ideas.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 Q16 8 16 12 Q16 16 12 21 Q8 16 8 12 Q8 8 12 3Z" fill="white" opacity="0.4" />
        <path d="M3 12h18" />
      </svg>
    ),
    title: "Development Agencies",
    description: "Senior engineers embedded in your team—no ramp-up required.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h7M7 16h4" strokeLinecap="round" />
        <circle cx="18" cy="16" r="3" fill="white" opacity="0.6" />
      </svg>
    ),
    title: "Marketing Agencies",
    description: "We build the infrastructure that powers high-performing campaigns.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#2563eb",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            left: "-80px",
            bottom: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-60px",
            bottom: "-100px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            One partner. Predictable delivery.{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              Measurable results.
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "16px",
              maxWidth: "620px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            We work alongside businesses at every stage — from early-stage founders to established enterprises — delivering digital outcomes that move the needle.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "8px",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
