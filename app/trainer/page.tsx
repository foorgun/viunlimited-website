import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Unsere Trainer — ViUnlimited",
};

const trainers = [
  {
    name: "Ulvi",
    role: "Cheftrainer & Gründer",
    specialty: "Muay Thai · Boxen · Kampfvorbereitung",
    bio: "Ulvi ist das Herz von Vi Unlimited. Mit über 15 Jahren Erfahrung im Wettkampfsport und als Trainer hat er hunderte Athleten auf allen Levels gecoacht — vom Einsteiger bis zum Titelträger. Seine Leidenschaft für Muay Thai und sein Auge fürs Detail machen ihn zu einem der besten Trainer in der Region.",
    image: "/Ulvi.webp",
    initials: "U",
  },
  {
    name: "Sandra",
    role: "Trainerin",
    specialty: "Muay Thai · Frauenselbstverteidigung · Fitness",
    bio: "Sandra bringt jahrelange Wettkampferfahrung in Muay Thai und Boxen mit. Als Trainerin steht sie für technische Präzision und individuelle Förderung — mit einem besonderen Fokus auf die Stärkung von Frauen durch Kampfsport.",
    image: "/Sandra.webp",
    initials: "S",
  },
  {
    name: "Team",
    role: "Gasttrainer & Coaches",
    specialty: "Verschiedene Disziplinen",
    bio: "Regelmäßig laden wir erfahrene Gasttrainer ein, die ihr spezialisiertes Wissen weitergeben. So bleibt das Training abwechslungsreich und auf höchstem Niveau.",
    image: null,
    initials: "GT",
  },
];

export default function Trainer() {
  return (
    <>
      <PageHero
        eyebrow="// Unsere Trainer"
        title="Unsere Trainer"
        subtitle="Erfahrung, Leidenschaft und echter Wettkampfhintergrund — das ist unser Team."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {trainers.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#141414",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    height: 360,
                    background: "#1C1C1C",
                    overflow: "hidden",
                  }}
                >
                  {t.image ? (
                    <>
                      <Image
                        src={t.image}
                        alt={`${t.name} — ${t.role}`}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(20,20,20,0.85) 0%, transparent 50%)",
                          zIndex: 1,
                        }}
                      />
                    </>
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(238,62,48,0.2)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-dm-serif), serif",
                          fontStyle: "italic",
                          fontSize: 72,
                          color: "rgba(238,62,48,0.2)",
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "16px 20px",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: "#EE3E30",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#fff",
                        padding: "3px 8px",
                        marginBottom: 4,
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontSize: 26,
                      color: "#F5F3EE",
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </h3>
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
                    {t.specialty}
                  </p>
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
                    {t.bio}
                  </p>
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
            Lern uns kennen
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
            Komm zu einem Probetraining und triff unser Team persönlich.
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
            Probetraining buchen →
          </Link>
        </div>
      </section>
    </>
  );
}
