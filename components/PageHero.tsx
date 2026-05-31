interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      style={{
        background: "#0C0C0C",
        padding: "80px 24px 64px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 8px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#EE3E30",
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <span style={{ display: "inline-block", width: 24, height: 2, background: "#EE3E30" }} />
          {eyebrow}
        </span>
        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontStyle: "italic",
            fontSize: "clamp(36px, 6vw, 72px)",
            color: "#F5F3EE",
            margin: subtitle ? "0 0 16px" : 0,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(245,243,238,0.55)",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
