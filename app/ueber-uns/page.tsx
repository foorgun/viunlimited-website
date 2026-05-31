import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Über uns — ViUnlimited",
};

export default function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="// Über uns"
        title="Unser Gym. Unsere Geschichte."
        subtitle="Vi Unlimited ist mehr als ein Gym — es ist eine Gemeinschaft von Menschen, die ihre Grenzen täglich neu definieren."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "start",
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
                marginBottom: 16,
              }}
            >
              // Unsere Geschichte
            </span>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: "clamp(26px, 3vw, 38px)",
                color: "#F5F3EE",
                margin: "0 0 24px",
              }}
            >
              Vom Traum zum Gym
            </h2>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 300,
                fontSize: 15,
                color: "rgba(245,243,238,0.65)",
                lineHeight: 1.85,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p>
                Vi Unlimited GbR wurde mit einer klaren Vision gegründet: ein Ort in Ulm, an dem echtes Kampfsport-Training auf individuelle Betreuung trifft. Kein Massengeschäft, kein Kompromiss — sondern Qualität auf jedem Level.
              </p>
              <p>
                Seit über 10 Jahren begleiten wir Athleten in Ulm und Umgebung auf ihrem Weg — von der ersten Unterrichtsstunde bis zur Wettkampfvorbereitung. Unsere Trainer bringen jahrzehntelange Erfahrung aus dem Wettkampfsport mit und geben dieses Wissen jeden Tag weiter.
              </p>
              <p>
                Was uns auszeichnet: Wir nehmen jeden ernst. Egal ob du 16 oder 45 bist, ob du das erste Mal eine Kampfsportart ausprobierst oder dich auf den nächsten Titel vorbereitest — bei uns bist du richtig.
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "#141414",
                borderLeft: "3px solid #EE3E30",
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  color: "#F5F3EE",
                  lineHeight: 1.4,
                  margin: "0 0 16px",
                }}
              >
                &ldquo;Kein Limit — das ist nicht nur ein Name. Es ist unsere Philosophie.&rdquo;
              </blockquote>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#EE3E30",
                  margin: 0,
                }}
              >
                — Vi Unlimited GbR
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Mission", text: "Jedem Menschen den Zugang zu qualitativem Kampfsport-Training ermöglichen." },
                { label: "Vision", text: "Das führende Kampfsport- und Fitness-Gym in der Region Ulm werden." },
                { label: "Werte", text: "Respekt, Disziplin, Gemeinschaft und kontinuierliche Verbesserung." },
              ].map((v) => (
                <div
                  key={v.label}
                  style={{
                    background: "#141414",
                    padding: "20px 20px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#EE3E30",
                      flexShrink: 0,
                      paddingTop: 2,
                      minWidth: 60,
                    }}
                  >
                    {v.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "rgba(245,243,238,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {v.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#141414",
          padding: "80px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#F5F3EE",
              margin: "0 0 16px",
            }}
          >
            Komm und überzeug dich selbst.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: 15,
              color: "rgba(245,243,238,0.55)",
              marginBottom: 32,
            }}
          >
            Erstes Probetraining kostenlos. Wir freuen uns auf dich.
          </p>
          <Link
            href="/kontakt"
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
            Probetraining anfragen →
          </Link>
        </div>
      </section>
    </>
  );
}
