import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Unsere Partner — ViUnlimited",
};

const partners = [
  {
    name: "Oceans Apart",
    category: "Sportbekleidung",
    desc: "Premium Activewear — stylisch, funktional, nachhaltig. Offizieller Bekleidungspartner von Vi Unlimited.",
    initials: "OA",
  },
  {
    name: "Thai Armor",
    category: "Kampfsport-Equipment",
    desc: "Hochwertige Kampfsportausrüstung für Training und Wettkampf. Bandagen, Handschuhe und Schienbeinschoner auf Wettkampfniveau.",
    initials: "TA",
  },
  {
    name: "Regionaler Partner",
    category: "Gesundheit & Regeneration",
    desc: "Physiotherapie, Massage und Regenerationsangebote — exklusive Konditionen für Vi Unlimited Mitglieder.",
    initials: "RP",
  },
];

export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="// Unsere Partner"
        title="Unsere Partner"
        subtitle="Starke Partner für starke Athleten — ausgewählt nach Qualität und Vertrauen."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {partners.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "#141414",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: "#1C1C1C",
                    border: "1px solid rgba(238,62,48,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#EE3E30",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.initials}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#EE3E30",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {p.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontSize: 22,
                      color: "#F5F3EE",
                      margin: 0,
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "rgba(245,243,238,0.6)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#141414",
          padding: "64px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#EE3E30",
                display: "block",
                marginBottom: 12,
              }}
            >
              // Partner werden
            </span>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#F5F3EE",
                margin: "0 0 16px",
              }}
            >
              Interesse an einer Partnerschaft?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 300,
                fontSize: 14,
                color: "rgba(245,243,238,0.55)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Wir suchen starke Partner, die unsere Werte teilen. Melde dich bei uns und lass uns gemeinsam etwas aufbauen.
            </p>
            <a
              href="mailto:info@viunlimited.de"
              style={{
                background: "#EE3E30",
                color: "#fff",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 28px",
                display: "inline-flex",
              }}
            >
              Anfrage senden →
            </a>
          </div>
          <div
            style={{
              background: "#1C1C1C",
              padding: "32px",
              borderLeft: "3px solid #EE3E30",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: 18,
                color: "rgba(245,243,238,0.7)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              &ldquo;Unsere Partner sind keine Sponsoren — sie sind Teil unserer Community.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
