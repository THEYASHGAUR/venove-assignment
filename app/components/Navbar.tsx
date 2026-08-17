"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "relative",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }}
        className="nav-container"
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              background: "var(--blue-primary)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12 Q6 6 12 12 Q18 18 21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M3 17 Q6 11 12 17 Q18 23 21 17" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "17px", color: "#0f172a", lineHeight: "1.2" }}>Digital Liquid</div>
            <div style={{ fontSize: "8px", color: "#94a3b8", lineHeight: "2", marginLeft: "10px" }} className="logo-subtext">Design That Moves With You</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1, justifyContent: "center" }} className="hidden-mobile">
          {[
            { label: "Services", hasChevron: false },
            { label: "Hire", hasChevron: false },
            { label: "For Agencies", hasChevron: false },
            { label: "Industries", hasChevron: false },
            { label: "Company", hasChevron: false },
          ].map((item) => (
            <Link
              key={item.label}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#374151",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >
              {item.label}
              {item.hasChevron && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden-mobile">
          <Link
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--blue-primary)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-primary)")}
          >
            Get Started
            {/* <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.5)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span> */}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#374151",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "16px 24px 24px",
          }}
          className="show-mobile"
        >
          {["Services", "Hire", "For Agencies", "Industries", "Company"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                display: "block",
                padding: "12px 0",
                color: "#374151",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              marginTop: "16px",
              background: "var(--blue-primary)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nav-container { padding: 0 16px !important; gap: 16px !important; }
          .logo-subtext { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
