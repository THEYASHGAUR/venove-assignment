"use client";
import Image from "next/image";

const stats = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "97%", label: "Client Retention Rate" },
  { value: "98%", label: "On-time Delivery" },
  { value: "24/7", label: "Delivery Support" },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(90deg, #2a4ca2 0%, #1c3677 100%)",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            minHeight: "420px",
          }}
          className="why-choose-banner"
        >
          {/* Dark right portion (large circle) */}
          <div
            style={{
              position: "absolute",
              right: "-15%",
              top: "-40%",
              width: "800px",
              height: "800px",
              background: "#081226",
              borderRadius: "50%",
              zIndex: 0,
            }}
            className="why-choose-right-bg"
          />

          {/* Left content */}
          <div
            style={{
              padding: "72px 80px",
              position: "relative",
              zIndex: 1,
              flex: 1,
              maxWidth: "700px",
            }}
            className="why-choose-content"
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 600,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "20px",
                margin: 0,
              }}
            >
              Why{" "}
              <em
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                Choose
              </em>{" "}
              Us?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "480px",
                marginBottom: "40px",
                marginTop: "16px",
              }}
            >
              Our methodology is built on a decade of refined enterprise delivery — so we never miss a deadline or compromise on quality.
            </p>

            {/* Learn More button */}
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                background: "white",
                color: "var(--blue-primary, #168bf2)",
                padding: "8px 8px 8px 24px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "15px",
                marginBottom: "48px",
              }}
            >
              Learn More
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--blue-primary, #168bf2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            {/* Stats Grid */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "auto auto", 
                gap: "16px 48px",
                width: "max-content",
              }}
              className="stats-grid"
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 400 }}>
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image - cutout person */}
          <div
            style={{
              position: "absolute",
              right: "40px",
              bottom: 0,
              width: "420px",
              height: "100%",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            className="why-choose-img"
          >
            {/* Note: In a real app, replace this URL with the transparent PNG cutout from your assets */}
            <Image
              src="https://www.pngarts.com/files/3/Businessman-Transparent-Image.png" 
              alt="Professional business man"
              width={420}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "110%", // allows it to peek slightly if needed
                objectFit: "contain",
                objectPosition: "bottom",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-choose-banner {
            flex-direction: column !important;
            padding-bottom: 300px !important; /* space for image */
          }
          .why-choose-right-bg {
            top: auto !important;
            bottom: -20% !important;
            right: -20% !important;
            width: 600px !important;
            height: 600px !important;
          }
          .why-choose-img {
            right: 50% !important;
            transform: translateX(50%) !important;
          }
        }
        @media (max-width: 640px) {
          .why-choose-content {
            padding: 48px 24px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
