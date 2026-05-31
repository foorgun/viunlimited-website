import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Datenschutz — ViUnlimited",
};

export default function Datenschutz() {
  return (
    <>
      <PageHero eyebrow="// Rechtliches" title="Datenschutzerklärung" />
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
            <p>
              Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
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
                Verantwortlicher
              </h2>
              <p>
                Vi Unlimited GbR<br />
                Industriestraße 5/2, 89081 Ulm-Lehr<br />
                info@viunlimited.de
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
                Kontaktformular
              </h2>
              <p>
                Wenn du uns per Formular Anfragen zukommen lässt, werden deine Angaben aus dem Formular zur Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
