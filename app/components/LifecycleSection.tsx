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
    <section style={{ 
      backgroundColor: "#ffffff", 
      padding: "100px 24px", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      {/* Background gradients and grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle at 0% 100%, rgba(219, 234, 254, 0.4) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              The Lifecycle of a
              <br />
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "var(--blue-primary, #168bf2)",
                  fontWeight: 700,
                }}
              >
                Project.
              </em>
            </h2>
          </div>
          <div style={{ maxWidth: "460px" }}>
            <p
              style={{
                color: "#475569",
                fontSize: "15px",
                lineHeight: 1.6,
                textAlign: "right",
                margin: 0,
                fontWeight: 500,
              }}
            >
              How every engagement moves from discovery to sustained delivery — with velocity that builds over time, not plateaus.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="lifecycle-container" style={{ position: "relative", paddingTop: "24px" }}>
          <div
            style={{
              display: "grid",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Connecting Arch Line (Hidden on smaller screens via CSS) */}
                {i < steps.length - 1 && (
                  <div className="arch-connector" style={{
                    position: "absolute",
                    left: "50%",
                    width: "calc(100% + 24px)", // 100% of card + gap
                    top: "-24px",
                    height: "24px",
                    border: "1.5px dashed #cbd5e1",
                    borderBottom: "none",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    zIndex: 0,
                  }}>
                    {/* Blue Arrow on the Arch */}
                    <div style={{
                      position: "absolute",
                      top: "-5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      borderLeft: "6px solid var(--blue-primary, #168bf2)",
                    }} />
                  </div>
                )}

                {/* Step Card */}
                <div
                  className="lifecycle-card"
                  style={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "1.5px solid #e2e8f0",
                    padding: "16px 12px 24px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                >
                  {/* Node Indicator */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      border: "3px solid var(--blue-primary, #168bf2)",
                      zIndex: 3,
                    }}
                  />
                  
                  {/* Title Pill */}
                  <div
                    style={{
                      backgroundColor: "#dbeafe",
                      color: "#0f172a",
                      padding: "6px 16px",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontWeight: 600,
                      marginTop: "12px",
                      marginBottom: "12px",
                      width: "100%",
                    }}
                  >
                    {step.label}
                  </div>
                  
                  {/* Description */}
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      lineHeight: 1.5,
                      fontWeight: 400,
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
        .steps-grid {
          grid-template-columns: repeat(6, 1fr);
        }
        
        .lifecycle-card:hover {
          border-color: var(--blue-primary, #168bf2) !important;
          box-shadow: 0 10px 25px -5px rgba(22, 139, 242, 0.15), 0 4px 10px -2px rgba(22, 139, 242, 0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 32px !important;
          }
          .arch-connector {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
