import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Kurse & mehr — ViUnlimited",
};

const courses = [
  {
    initials: "MT",
    title: "Muay Thai",
    level: "Alle Levels",
    desc: "Die Kunst der acht Gliedmaßen kombiniert Schläge, Tritte, Knie- und Ellbogenstöße zu einem vollständigen Kampfsystem. Ideal für Selbstverteidigung und Wettkampf.",
    details: ["Mo & Mi 19:00–20:30", "Sa 10:00–11:30", "Anfänger bis Fortgeschrittene"],
  },
  {
    initials: "BX",
    title: "Boxen",
    level: "Alle Levels",
    desc: "Klassisches Boxtraining — von Grundtechnik und Footwork bis zu Sparring und Wettkampfvorbereitung. Verbessert Koordination, Kraft und mentale Stärke.",
    details: ["Di & Do 19:00–20:30", "Sa 11:30–13:00", "Anfänger bis Wettkampf"],
  },
  {
    initials: "FC",
    title: "Fitness & Conditioning",
    level: "Alle Levels",
    desc: "Funktionelles Athletiktraining als Grundlage für alle Kampfsportarten. Ausdauer, Kraft, Beweglichkeit und Explosivität im Fokus.",
    details: ["Mo–Fr 08:00–09:00", "Flexible Zeiten", "Offenes Training"],
  },
  {
    initials: "KT",
    title: "Kindertraining",
    level: "Ab 6 Jahren",
    desc: "Kampfsport für Kinder — spielerisch und altersgerecht. Fördert Koordination, Selbstbewusstsein und sozialen Zusammenhalt.",
    details: ["Mi 16:00–17:00", "Sa 09:00–10:00", "Kinder ab 6 Jahren"],
  },
  {
    initials: "SV",
    title: "Selbstverteidigung",
    level: "Einsteiger",
    desc: "Praxisorientierte Kurse für Alltagssituationen. Basierend auf Muay Thai und Krav Maga — keine Vorkenntnisse nötig.",
    details: ["Blockkurse monatlich", "Wochenendkurse", "Für Frauen & Männer"],
  },
  {
    initials: "SP",
    title: "Sparring",
    level: "Fortgeschrittene",
    desc: "Kontrolliertes Sparring für erfahrene Kämpfer. Technische Weiterentwicklung im echten Wettkampfsetting unter Aufsicht.",
    details: ["Fr 20:00–21:30", "Auf Einladung", "Schutzausrüstung Pflicht"],
  },
];

export default function Kurse() {
  return (
    <>
      <PageHero
        eyebrow="// Kurse & Angebote"
        title="Kurse & mehr"
        subtitle="Von Einsteiger bis Wettkampf — wir haben das Richtige für dich."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {courses.map((c) => (
              <div
                key={c.title}
                style={{
                  background: "#141414",
                  borderLeft: "3px solid #EE3E30",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#EE3E30",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {c.initials}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-dm-serif), serif",
                        fontSize: 20,
                        color: "#F5F3EE",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {c.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(245,243,238,0.4)",
                      }}
                    >
                      {c.level}
                    </span>
                  </div>
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
                  {c.desc}
                </p>
                <div
                  style={{
                    paddingTop: 12,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {c.details.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        color: "rgba(245,243,238,0.4)",
                        letterSpacing: "0.04em",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ width: 4, height: 4, background: "#EE3E30", flexShrink: 0 }} />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#141414",
          padding: "64px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontStyle: "italic",
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#F5F3EE",
              margin: "0 0 12px",
            }}
          >
            Noch Fragen zum Kursangebot?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(245,243,238,0.5)",
              marginBottom: 28,
            }}
          >
            Wir helfen dir gerne beim Einstieg und finden den passenden Kurs für dich.
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
            Jetzt anfragen →
          </Link>
        </div>
      </section>
    </>
  );
}
