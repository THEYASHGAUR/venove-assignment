"use client";

const challenges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Missing Client Deadlines?",
    description:
      "We embed directly into your delivery pipeline — adding capacity without adding overhead, so your commitments are always met.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "Growth Stalling on Limited Budget?",
    description:
      "Our structured delivery model gives you senior-level output at a fraction of the cost of building the same team in-house.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    title: "Juggling Too Many Projects?",
    description:
      "Dedicated delivery pods handle parallel workstreams with clear accountability — so nothing slips and no context is lost.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Tech Bottlenecks Slowing You Down?",
    description:
      "Our engineering teams specialise in untangling complex stacks — modernising legacy systems, integrating APIs, and removing blockers fast.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Tight Margins Hurting Quality?",
    description:
      "We optimise every engagement for efficiency without cutting corners — you get consistent quality on every project, every time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-primary)" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Struggling with Client Retention?",
    description:
      "When delivery is smooth and results are measurable, clients stay. We help you build the track record that earns long-term loyalty.",
  },
];

export default function ChallengesSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Turn Your Challenges into{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "var(--blue-primary)",
                fontWeight: 700,
              }}
            >
              Growth Opportunities
            </em>
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Whether you&apos;re scaling fast or hitting roadblocks, we step in with the expertise and capacity to move things forward.
          </p>
        </div>

        {/* Challenge cards grid (3 and 3 order) */}
        <div className="challenges-grid">
          {challenges.map((item, i) => (
            <div
              key={i}
              className="challenge-card"
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px 28px",
                border: "1.5px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
                transition: "all 0.25s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "12px",
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .challenge-card:hover {
          border-color: var(--blue-primary, #168bf2) !important;
          box-shadow: 0 12px 28px -6px rgba(22, 139, 242, 0.16), 0 4px 12px rgba(22, 139, 242, 0.06) !important;
          transform: translateY(-3px);
        }
        @media (max-width: 960px) {
          .challenges-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .challenges-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
