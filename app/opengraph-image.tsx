import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.personal.name} - ${portfolioData.personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { personal } = portfolioData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #0f172a 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0) 70%)",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#2563eb",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            ZA
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#4ade80",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", display: "flex" }} />
            {personal.status}
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {personal.name}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            marginTop: 20,
            background: "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {personal.title}
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#94a3b8",
            marginTop: 28,
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          {personal.shortDescription}
        </div>
      </div>
    ),
    { ...size }
  );
}
