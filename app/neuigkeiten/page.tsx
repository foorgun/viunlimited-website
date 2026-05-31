import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Neuigkeiten — ViUnlimited",
};

const posts = [
  {
    date: "15. Mai 2024",
    category: "Training",
    title: "Neuer Muay Thai Grundkurs startet im Juni",
    excerpt: "Ab Juni 2024 bieten wir wieder einen Grundkurs für Muay Thai Einsteiger an. Keine Vorkenntnisse nötig — wir starten von Null.",
    slug: "muay-thai-grundkurs-juni",
  },
  {
    date: "28. April 2024",
    category: "Wettkampf",
    title: "Sandra beim Ulmer Kampfsporttag: Goldmedaille!",
    excerpt: "Unsere Trainerin Sandra hat beim regionalen Kampfsporttag in der Gewichtsklasse bis 60 kg den ersten Platz belegt. Herzlichen Glückwunsch!",
    slug: "sandra-goldmedaille",
  },
  {
    date: "10. April 2024",
    category: "Events",
    title: "Sommercampus 2024 — Anmeldungen offen",
    excerpt: "Im August veranstalten wir wieder unser beliebtes Sommercampus. Drei intensive Tage mit nationalen und internationalen Gasttrainern. Plätze begrenzt.",
    slug: "sommercampus-2024",
  },
  {
    date: "22. März 2024",
    category: "News",
    title: "Neue Ausrüstung und erweiterter Trainingsbereich",
    excerpt: "Wir haben unser Gym renoviert und erweitert. Neue Boxsäcke, ein vergrößerter Sparring-Ring und modernisierte Umkleideräume warten auf euch.",
    slug: "neue-ausstattung",
  },
  {
    date: "5. März 2024",
    category: "Training",
    title: "Gasttraining mit Profi-Boxer aus München",
    excerpt: "Wir hatten das Vergnügen, einen erfahrenen Profi-Boxer aus München als Gasttrainer begrüßen zu dürfen. Ein unvergessliches Training für alle Teilnehmer.",
    slug: "gasttraining-maerz",
  },
  {
    date: "14. Februar 2024",
    category: "Community",
    title: "Vi Unlimited jetzt auf TikTok",
    excerpt: "Wir sind jetzt auf TikTok! Schaut unter @vi_unlimited_gym vorbei für Behind-the-Scenes-Material, Trainingsclips und Wettkampfhighlights.",
    slug: "tiktok-launch",
  },
];

const categoryColors: Record<string, string> = {
  Training: "#EE3E30",
  Wettkampf: "#EE3E30",
  Events: "#EE3E30",
  News: "rgba(245,243,238,0.4)",
  Community: "rgba(245,243,238,0.4)",
};

export default function Neuigkeiten() {
  return (
    <>
      <PageHero
        eyebrow="// Neuigkeiten"
        title="Neuigkeiten"
        subtitle="Aktuelle Infos, Events und Highlights aus dem ViUnlimited Gym."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "#141414",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: categoryColors[post.category] || "#EE3E30",
                      border: `1px solid ${categoryColors[post.category] || "#EE3E30"}`,
                      padding: "2px 8px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      color: "rgba(245,243,238,0.3)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontSize: 20,
                    color: "#F5F3EE",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "rgba(245,243,238,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href="/neuigkeiten"
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#EE3E30",
                    textDecoration: "none",
                    marginTop: "auto",
                    paddingTop: 8,
                  }}
                >
                  Weiterlesen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
