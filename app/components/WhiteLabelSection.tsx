"use client";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "NDA-backed Partnership",
    highlighted: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    label: "One team across marketing and development",
    highlighted: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    label: "QA-driven, SLA-based delivery",
    highlighted: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "No direct client solicitation — ever",
    highlighted: false,
  },
];

export default function WhiteLabelSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wave pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E.wave%7Bfill:none;stroke:rgba(255,255,255,0.07);stroke-width:1.5%7D%3C/style%3E%3C/defs%3E%3Cpath class='wave' d='M-100 200 Q200 100 500 200 T1100 200'/%3E%3Cpath class='wave' d='M-100 300 Q200 200 500 300 T1100 300'/%3E%3Cpath class='wave' d='M-100 400 Q200 300 500 400 T1100 400'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="white-label-grid"
      >
        {/* Left content */}
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            White-Label Partnerships{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                display: "block",
                fontWeight: 700,
              }}
            >
              You Can Trust
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "15px",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Expand your capabilities, meet demanding deadlines, and maintain client trust with reliable delivery support—without the cost and complexity of growing your headcount.
          </p>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: feature.highlighted
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",
                  borderRadius: feature.highlighted ? "12px" : "0",
                  padding: feature.highlighted ? "14px 18px" : "0",
                  paddingLeft: feature.highlighted ? "18px" : "0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: feature.highlighted ? 700 : 500,
                    }}
                  >
                    {feature.label}
                  </span>
                </div>
                {feature.highlighted && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right images */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "380px",
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Two oval photos side by side */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#1e293b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "-20px",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "220px",
                  borderRadius: "999px",
                  overflow: "hidden",
                  border: "3px solid white",
                  marginLeft: "-20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                style={{
                  width: "160px",
                  height: "220px",
                  borderRadius: "999px",
                  overflow: "hidden",
                  border: "3px solid white",
                  position: "relative",
                  zIndex: 2,
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .white-label-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
