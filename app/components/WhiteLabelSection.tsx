"use client";

const otherFeatures = [
  {
    label: "One team across marketing and development",
  },
  {
    label: "QA-driven, SLA-based delivery",
  },
  {
    label: "No direct client solicitation — ever",
  },
];

export default function WhiteLabelSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0968c9 0%, #0d7ceb 50%, #0a6fd6 100%)",
        padding: "90px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle curved background lines / waves overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.25,
          backgroundImage: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.15) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 600' fill='none'%3E%3Cpath d='M-100 100 C 300 20 700 250 1500 80' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-100 200 C 400 120 800 350 1500 180' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-100 300 C 500 220 900 450 1500 280' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "56px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="white-label-grid"
      >
        {/* Left column content */}
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.2vw, 46px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            White–Label Partnerships{" "}
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
              color: "rgba(255, 255, 255, 0.88)",
              fontSize: "15.5px",
              lineHeight: 1.65,
              maxWidth: "490px",
              marginBottom: "36px",
            }}
          >
            Expand your capabilities, meet demanding deadlines, and maintain client trust with reliable delivery support—without the cost and complexity of growing your headcount.
          </p>

          {/* Features container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              maxWidth: "460px",
            }}
          >
            {/* 1. NDA-backed Partnership (Pill card) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.14)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                borderRadius: "12px",
                padding: "14px 20px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              className="nda-pill"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* Rosette badge icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.4 2.8 3.7-.4 1.2 3.5 3.3 1.7-1 3.6 2 3.2-2.8 2.4.4 3.7-3.5 1.2-1.7 3.3-3.6-1-3.2 2-2.4-2.8-3.7.4-1.2-3.5-3.3-1.7 1-3.6-2-3.2 2.8-2.4-.4-3.7 3.5-1.2 1.7-3.3 3.6 1L12 2z"
                      fill="rgba(255,255,255,0.22)"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  NDA-backed Partnership
                </span>
              </div>

              {/* Up-Right arrow */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>

            {/* 2, 3, 4. Feature list items with stacked code disk icon */}
            {otherFeatures.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "2px 4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* Layered disks with code brackets icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 6.5C3 4.8 7 3.5 12 3.5C17 3.5 21 4.8 21 6.5C21 8.2 17 9.5 12 9.5C7 9.5 3 8.2 3 6.5Z"
                      fill="rgba(255,255,255,0.25)"
                      stroke="#ffffff"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 6.5V11.5C3 13.2 7 14.5 12 14.5C17 14.5 21 13.2 21 11.5V6.5"
                      stroke="#ffffff"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 12V17C3 18.7 7 20 12 20C17 20 21 18.7 21 17V12"
                      stroke="#ffffff"
                      strokeWidth="1.6"
                    />
                    {/* Code bracket symbol in middle */}
                    <path
                      d="M9 10.5L7.5 11.5L9 12.5"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 10.5L16.5 11.5L15 12.5"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Larger dark rounded square card with overlapping circle & capsule images */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              height: "500px",
              background: "#0c1020",
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 28px 70px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="white-label-card"
          >
            {/* Subtle grid pattern overlay on dark card */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)`,
                backgroundSize: "44px 44px",
                pointerEvents: "none",
              }}
            />

            {/* Left image: Circle with high-five team */}
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "4px solid #ffffff",
                overflow: "hidden",
                position: "absolute",
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
                background: "#1e293b",
              }}
              className="circle-img"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Right image: Arch/Capsule shape with team around laptop */}
            <div
              style={{
                width: "250px",
                height: "410px",
                borderRadius: "140px",
                border: "4px solid #ffffff",
                overflow: "hidden",
                position: "absolute",
                right: "34px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                background: "#1e293b",
              }}
              className="capsule-img"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nda-pill:hover {
          background: rgba(255, 255, 255, 0.22) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 960px) {
          .white-label-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .white-label-card {
            max-width: 520px !important;
            height: 460px !important;
          }
        }
        @media (max-width: 560px) {
          .white-label-card {
            height: 380px !important;
          }
          .circle-img {
            width: 210px !important;
            height: 210px !important;
            left: 16px !important;
          }
          .capsule-img {
            width: 190px !important;
            height: 320px !important;
            right: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
