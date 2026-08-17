"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #dbeafe 0%, #e0effe 30%, #bfdbfe 60%, #c7d2fe 100%)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "0",
      }}
    >
      {/* Background decorative squares */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Left tall rectangle */}
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
        {/* Center-left rectangle */}
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
        {/* Center-right small rect */}
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
        {/* Right rectangle */}
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
        {/* Bottom small squares */}
        <div
          style={{
            position: "absolute",
            left: "5%",
            bottom: "30%",
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
            bottom: "28%",
            width: "110px",
            height: "110px",
            background: "rgba(147,197,253,0.3)",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Social proof badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
            position: "relative",
          }}
        >
          {/* Sparkle */}
          <svg
            style={{ position: "absolute", left: "-28px", top: "-8px" }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 2 L13.5 8 L18 6 L14 10 L20 12 L14 13.5 L18 18 L13.5 16 L12 22 L10.5 16 L6 18 L10 13.5 L4 12 L10 10.5 L6 6 L10.5 8 Z" fill="#7c3aed" opacity="0.7" />
          </svg>

          {/* Avatar stack */}
          <div style={{ display: "flex" }}>
            {[
              { bg: "#d1d5db", initials: "👨‍💼" },
              { bg: "#9ca3af", initials: "👩‍💼" },
              { bg: "#f59e0b", initials: "👨‍💻" },
            ].map((avatar, i) => (
              <div
                key={i}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "2px solid white",
                  background: avatar.bg,
                  marginLeft: i === 0 ? 0 : "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  overflow: "hidden",
                }}
              >
                {avatar.initials}
              </div>
            ))}
          </div>

          {/* Stars + text */}
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

        {/* Arrow decoration on right */}
        <div
          style={{
            position: "absolute",
            right: "12%",
            top: "80px",
            opacity: 0.6,
            zIndex: 1,
          }}
        >
          <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
            <path d="M10 80 Q30 40 65 15" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeDasharray="none" />
            <path d="M65 15 L55 25 M65 15 L75 22" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="80" r="5" fill="#0f172a" opacity="0.5" />
          </svg>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            maxWidth: "900px",
            margin: "0 auto 24px",
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

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#4b5563",
            maxWidth: "600px",
            margin: "24px auto 40px",
            lineHeight: 1.7,
          }}
        >
          End-to-end digital delivery across development, design, and marketing — built for ambitious businesses ready to scale with confidence.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#168bf2",
              color: "white",
              padding: "14px 28px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
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
              border: "1.5px solid #cbd5e1",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2563eb";
              e.currentTarget.style.color = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.color = "#0f172a";
            }}
          >
            View Service
          </Link>
        </div>

        {/* Video Thumbnail */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "20px 20px 0 0",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 -4px 40px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Video background image placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.75,
              }}
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(15,23,42,0.4)",
              }}
            />
            {/* Play button */}
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#2563eb">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
