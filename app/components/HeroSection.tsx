"use client";
import Link from "next/link";
import Image from "next/image";
const logos = [
  "GOIPSUM",
  "Logoipsum",
  "LOGOIPSUM",
  "Logoipsum",
  "Logoipsum",
];

const stats = [
  { value: "20+", label: "Years Of Experience" },
  { value: "2500+", label: "Projects Delivered" },
  { value: "500+", label: "Global Partners" },
];

export default function HeroSection() {
  return (
    <section style={{ background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          background: "linear-gradient(160deg, #dbeafe 0%, #e0effe 30%, #bfdbfe 60%, #c7d2fe 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "80px 24px 190px",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              left: "5%",
              top: "15%",
              width: "160px",
              height: "280px",
              background: "rgba(147,197,253,0.35)",
              borderRadius: "12px",
              transform: "rotate(-2deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "18%",
              top: "10%",
              width: "200px",
              height: "220px",
              background: "rgba(147,197,253,0.25)",
              borderRadius: "12px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "28%",
              top: "8%",
              width: "160px",
              height: "200px",
              background: "rgba(147,197,253,0.28)",
              borderRadius: "12px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "8%",
              top: "12%",
              width: "140px",
              height: "260px",
              background: "rgba(147,197,253,0.32)",
              borderRadius: "12px",
              transform: "rotate(2deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "5%",
              bottom: "12%",
              width: "120px",
              height: "120px",
              background: "rgba(147,197,253,0.28)",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "5%",
              bottom: "14%",
              width: "110px",
              height: "110px",
              background: "rgba(147,197,253,0.3)",
              borderRadius: "10px",
            }}
          />
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            <svg
              style={{ position: "absolute", left: "-28px", top: "-8px" }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 2 L13.5 8 L18 6 L14 10 L20 12 L14 13.5 L18 18 L13.5 16 L12 22 L10.5 16 L6 18 L10 13.5 L4 12 L10 10.5 L6 6 L10.5 8 Z" fill="#7c3aed" opacity="0.7" />
            </svg>

            <div style={{ display: "flex" }}>
              {[
                { bg: "#d1d5db", initials: "DL" },
                { bg: "#9ca3af", initials: "GO" },
                { bg: "#f59e0b", initials: "UX" },
              ].map((avatar, i) => (
                <div
                  key={i}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    background: avatar.bg,
                    color: "#ffffff",
                    marginLeft: i === 0 ? 0 : "-10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 800,
                    overflow: "hidden",
                  }}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "13px", color: "#374151", fontWeight: 500, marginTop: "2px" }}>
                100+ Businesses Scaled
              </span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "12%",
              top: "-10px",
              opacity: 0.6,
              zIndex: 1,
            }}
          >
            <svg width="80" height="90" viewBox="0 0 100 100" fill="none" style={{ transform: "rotate(15deg)" }}>
              <path 
                d="M10 90 Q15 60 40 65 Q55 70 50 85 Q40 105 20 85 Q0 60 40 40 Q70 20 90 10 M90 10 L75 10 M90 10 L85 25" 
                stroke="#0f172a" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 6vw, 60px)",
              fontWeight: 400,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: "0",
              margin: "0 auto 24px",
              maxWidth: "900px",
            }}
          >
            Your Trusted{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              Growth
              <br />
              Operations
            </em>{" "}
            Partners
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#4b5563",
              maxWidth: "640px",
              margin: "24px auto 34px",
              lineHeight: 1.7,
            }}
          >
            End-to-end digital delivery across development, design, and marketing - built for ambitious businesses ready to scale with confidence.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--blue-primary)",
                color: "white",
                padding: "14px 28px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(var(--blue-primary-rgb), 0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-primary)")}
            >
              Get Started
            </Link>
            <Link
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1.5px solid #64748b",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--blue-primary)";
                e.currentTarget.style.color = "var(--blue-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#64748b";
                e.currentTarget.style.color = "#0f172a";
              }}
            >
              View Service
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "980px",
          margin: "-130px auto 0",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-video-container"
      >
        <div
          style={{
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 24px 60px rgba(15,23,42,0.18)",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              minHeight: "320px",
              background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1100&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.78,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(15,23,42,0.38)",
              }}
            />
            <button
              style={{
                position: "relative",
                zIndex: 1,
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
              aria-label="Play video"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--blue-primary)">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "76px 24px 56px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          {stats.map((stat, i) => (
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
                  fontWeight: 600,
                  color: "#0f172a",
                  letterSpacing: "0",
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
      <style>{`
        @media (max-width: 768px) {
          .hero-video-container {
            margin-top: -60px !important;
          }
        }
      `}</style>
    </section>
  );
}
