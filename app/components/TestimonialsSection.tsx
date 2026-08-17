"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    quote:
      "\"The Digital Liquid team delivered on every commitment — on time, on spec, and with a level of communication that made the entire engagement feel effortless. Results speak for themselves.\"",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures",
    quote:
      "\"Working with Digital Liquid transformed our product. Their engineering expertise and design sensibility are second to none. We launched 3 months ahead of schedule.\"",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80",
    stars: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder, ScaleUp Pro",
    quote:
      "\"From day one, they felt like an extension of our team. The quality of delivery, the communication cadence, and the business understanding were all exceptional.\"",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Hear from Our{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#2563eb",
                fontWeight: 700,
              }}
            >
              Satisfied Clients
            </em>
          </h2>
        </div>

        {/* Testimonial display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="testimonial-grid"
        >
          {/* Left: Photo */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "400px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${testimonial.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
            </div>
            {/* Name badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "#2563eb",
                borderRadius: "12px",
                padding: "14px 18px",
              }}
            >
              <div style={{ display: "flex", gap: "3px", marginBottom: "6px" }}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontWeight: 700, color: "white", fontSize: "16px" }}>
                {testimonial.name}
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>
                {testimonial.role}
              </div>
            </div>
          </div>

          {/* Right: Quote */}
          <div>
            {/* Big quotation marks */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
              {[0, 1].map((i) => (
                <svg key={i} width="24" height="34" viewBox="0 0 24 34" fill="none">
                  <path
                    d="M4 2 L4 14 C4 22 10 28 18 28"
                    stroke="#93c5fd"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              ))}
            </div>
            <p
              style={{
                fontSize: "clamp(17px, 2.5vw, 22px)",
                color: "#1e293b",
                fontStyle: "italic",
                lineHeight: 1.7,
                fontFamily: "'Playfair Display', serif",
                marginBottom: "40px",
              }}
            >
              {testimonial.quote}
            </p>

            {/* Navigation */}
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() =>
                  setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#475569",
                }}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
