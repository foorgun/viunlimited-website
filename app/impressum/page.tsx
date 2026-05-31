import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Impressum — ViUnlimited",
};

export default function Impressum() {
  return (
    <>
      <PageHero eyebrow="// Rechtliches" title="Impressum" />
      <section style={{ background: "#0C0C0C", padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(245,243,238,0.65)",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#EE3E30",
                  marginBottom: 8,
                }}
              >
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Vi Unlimited GbR<br />
                Industriestraße 5/2<br />
                89081 Ulm-Lehr<br />
                Deutschland
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#EE3E30",
                  marginBottom: 8,
                }}
              >
                Kontakt
              </h2>
              <p>
                Telefon: +49 (0)172-6683343<br />
                E-Mail: info@viunlimited.de
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
