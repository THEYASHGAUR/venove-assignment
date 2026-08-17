"use client";

const projects = [
  {
    date: "November 22, 2023",
    readTime: "7 in min read",
    title: "Global OEM Infotainment Platform",
    description: "Modernized a legacy infotainment platform for 2M+ users in 14 markets",
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    highlighted: false,
  },
  {
    date: "November 22, 2023",
    readTime: "7 in min read",
    title: "SaaS Analytics Dashboard Rebuild",
    description:
      "Re-engineered a B2B analytics platform, cutting load times by 60% and churn by 22%",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    highlighted: true,
  },
  {
    date: "November 22, 2023",
    readTime: "7 in min read",
    title: "Retail eCommerce Scale-Up",
    description:
      "Rebuilt a Shopify store and checkout, increasing conversions by 34%.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    highlighted: false,
  },
];

export default function PortfolioSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Work We&apos;re{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              Proud Of
            </em>
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              maxWidth: "540px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Real projects. Real outcomes. A selection of work we&apos;re proud to stand behind — delivered across industries and platforms.
          </p>
        </div>

        {/* Portfolio cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="portfolio-grid"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                border: project.highlighted ? "2px solid #2563eb" : "1px solid #e2e8f0",
                boxShadow: project.highlighted ? "0 8px 24px rgba(37,99,235,0.1)" : "none",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = project.highlighted
                  ? "0 8px 24px rgba(37,99,235,0.1)"
                  : "none";
              }}
            >
              {/* Image */}
              <div style={{ height: "220px", overflow: "hidden" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#94a3b8",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span>{project.date}</span>
                  <span>{project.readTime}</span>
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
