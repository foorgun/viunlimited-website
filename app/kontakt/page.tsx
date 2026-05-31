import PageHero from "@/components/PageHero";
import KontaktForm from "@/components/KontaktForm";

export const metadata = {
  title: "Kontakt — ViUnlimited",
};

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="// Kontakt"
        title="Kontakt"
        subtitle="Schreib uns, ruf an oder komm einfach vorbei — wir freuen uns auf dich."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
          }}
        >
          {/* Left: contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#EE3E30",
                  display: "block",
                  marginBottom: 20,
                }}
              >
                // Erreichbarkeit
              </span>
              {[
                { label: "Telefon", value: "+49 (0)172-6683343", href: "tel:+4901726683343" },
                { label: "E-Mail", value: "info@viunlimited.de", href: "mailto:info@viunlimited.de" },
                { label: "Adresse", value: "Industriestraße 5/2\n89081 Ulm-Lehr", href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#EE3E30",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 15,
                        color: "rgba(245,243,238,0.8)",
                        textDecoration: "none",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 15,
                        color: "rgba(245,243,238,0.8)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

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
                // Öffnungszeiten
              </span>
              {[
                { day: "Montag – Freitag", time: "09:00 – 21:00" },
                { day: "Samstag", time: "10:00 – 16:00" },
                { day: "Sonntag", time: "Geschlossen" },
              ].map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 14,
                      color: "rgba(245,243,238,0.65)",
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 13,
                      color: h.time === "Geschlossen" ? "rgba(245,243,238,0.3)" : "rgba(245,243,238,0.65)",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EE3E30" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(245,243,238,0.35)",
                }}
              >
                Industriestraße 5/2, Ulm-Lehr
              </span>
              <a
                href="https://maps.google.com/?q=Industriestraße+5/2+89081+Ulm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#EE3E30",
                  textDecoration: "none",
                }}
              >
                In Google Maps öffnen →
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#EE3E30",
                display: "block",
                marginBottom: 20,
              }}
            >
              // Nachricht schreiben
            </span>
            <KontaktForm />
          </div>
        </div>
      </section>
    </>
  );
}
