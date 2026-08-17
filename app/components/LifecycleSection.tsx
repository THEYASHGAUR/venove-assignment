"use client";

const steps = [
  {
    label: "Kickoff",
    description: "Alignment on goals and team introduction.",
  },
  {
    label: "Scoping",
    description: "Project requirements & roadmap",
  },
  {
    label: "Build",
    description: "Bi-weekly sprints with full client visibility.",
    highlighted: true,
  },
  {
    label: "Review",
    description: "Iterative feedback and UAT phases",
  },
  {
    label: "Launch",
    description: "Seamless go-live with zero downtime.",
  },
  {
    label: "Evolve",
    description: "Ongoing support, monitoring, & scaling.",
  },
];

export default function LifecycleSection() {
  return (
    <section style={{ background: "#f1f5f9", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      {/* Subtle bg lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Two-column header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "32px",
            marginBottom: "56px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              The Lifecycle of a
              <br />
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#2563eb",
                  fontWeight: 700,
                }}
              >
                Project.
              </em>
            </h2>
          </div>
          <div style={{ maxWidth: "420px" }}>
            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
                lineHeight: 1.7,
                textAlign: "right",
              }}
            >
              How every engagement moves from discovery to sustained delivery — with velocity that builds over time, not plateaus.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting dotted line */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "10%",
              right: "10%",
              height: "2px",
              borderTop: "2px dashed #94a3b8",
              zIndex: 0,
            }}
            className="process-line"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "12px",
              position: "relative",
              zIndex: 1,
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Arrow pointer above card (for steps 2+) */}
                {i > 0 && (
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderBottom: `8px solid ${step.highlighted ? "#2563eb" : "#e2e8f0"}`,
                      marginBottom: "-4px",
                    }}
                  />
                )}

                {/* Step card */}
                <div
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    border: step.highlighted ? "2px solid #2563eb" : "1px solid #e2e8f0",
                    background: step.highlighted ? "#eff6ff" : "white",
                    padding: "16px 12px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {/* Dot indicator */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "white",
                      border: `2.5px solid ${step.highlighted ? "#2563eb" : "#94a3b8"}`,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: step.highlighted ? "#1d4ed8" : "#0f172a",
                      marginBottom: "6px",
                      marginTop: "8px",
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .process-line {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
