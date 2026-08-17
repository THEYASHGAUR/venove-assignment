"use client";
import Link from "next/link";

const footerLinks = {
  SERVICES: ["Engineering", "Design Systems", "Growth Marketing", "Data & Analytics", "DevOps & Cloud"],
  COMPANY: ["About Us", "Our Portfolio", "Insights", "Careers", "Contact"],
  "LEGAL & SUPPORT": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance", "Sitemap"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#dbeafe", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "64px",
            paddingBottom: "48px",
          }}
          className="footer-main-grid"
        >
          {/* Left: Brand */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--blue-primary)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12 Q6 6 12 12 Q18 18 21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M3 17 Q6 11 12 17 Q18 23 21 17" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>Digital Liquid</div>
                <div style={{ fontSize: "10px", color: "#64748b" }}>Design That Moves With You</div>
              </div>
            </div>

            <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", maxWidth: "240px" }}>
              Architectural excellence for the digital enterprise. Built for performance, designed for clarity.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                <svg key="share" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>,
                <svg key="podcast" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8">
                  <circle cx="12" cy="11" r="4" />
                  <path d="M12 1a10 10 0 010 20M12 1a10 10 0 000 20" />
                </svg>,
                <svg key="globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>,
              ].map((icon, i) => (
                <Link
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #cbd5e1",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Link columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
            className="footer-links-grid"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0f172a",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {category}
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      style={{
                        color: "#475569",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #bfdbfe",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ color: "#64748b", fontSize: "13px" }}>
            © 2025 Digital Liquid. Built for structural clarity.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ color: "#64748b", fontSize: "13px" }}>English (US)</span>
            <span style={{ color: "#64748b", fontSize: "13px" }}>USD ($)</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
