import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Liquid — Design That Moves With You",
  description:
    "End-to-end digital delivery across development, design, and marketing — built for ambitious businesses ready to scale with confidence.",
  keywords:
    "digital agency, web development, design, marketing, SaaS, digital delivery",
  openGraph: {
    title: "Digital Liquid — Design That Moves With You",
    description: "End-to-end digital delivery for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
