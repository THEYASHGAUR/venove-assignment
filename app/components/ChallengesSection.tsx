"use client";

const challenges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Missing Client Deadlines?",
    description:
      "We embed directly into your delivery pipeline — adding capacity without adding overhead, so your commitments are always met.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "Growth Stalling on Limited Budget?",
    description:
      "Our structured delivery model gives you senior-level output at a fraction of the cost of building the same team in-house.",
    highlighted: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    title: "Juggling Too Many Projects?",
    description:
      "Dedicated delivery pods handle parallel workstreams with clear accountability — so nothing slips and no context is lost.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Tech Bottlenecks Slowing You Down?",
    description:
      "Our engineering teams specialise in untangling complex stacks — modernising legacy systems, integrating APIs, and removing blockers fast.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Tight Margins Hurting Quality?",
    description:
      "We optimise every engagement for efficiency without cutting corners — you get consistent quality on every project, every time.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Struggling with Client Retention?",
    description:
      "When delivery is smooth and results are measurable, clients stay. We help you build the track record that earns long-term loyalty.",
    highlighted: false,
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
                color: "#2563eb",
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

        {/* Challenge cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {challenges.map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                border: item.highlighted ? "2px solid #2563eb" : "1px solid #e2e8f0",
                boxShadow: item.highlighted ? "0 8px 24px rgba(37,99,235,0.1)" : "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
