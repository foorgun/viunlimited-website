"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kurse & mehr", href: "/kurse" },
  { label: "Unsere Trainer", href: "/trainer" },
  { label: "Unsere Partner", href: "/partner" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Neuigkeiten", href: "/neuigkeiten" },
  { label: "Shop", href: "/shop" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#141414",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
        }}
      >
        {/* Col 1: Logo + tagline + socials */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              color: "#EE3E30",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
              display: "block",
              marginBottom: 12,
            }}
          >
            ViUnlimited
          </Link>
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
            Kampfsport und Fitness in Ulm — für jeden, der seine Grenzen kennenlernen und überwinden will.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { label: "Facebook", href: "https://facebook.com", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", href: "https://instagram.com/vi_unlimited_gym", path: "M16 2H8C4.686 2 2 4.686 2 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6zm4 14c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8zm-8-9a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm4.5-9a1 1 0 100 2 1 1 0 000-2z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F5F3EE",
                  textDecoration: "none",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#EE3E30";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5F3EE";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#EE3E30",
              marginBottom: 20,
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    color: "rgba(245,243,238,0.65)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,243,238,0.65)"; }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact + hours */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#EE3E30",
              marginBottom: 20,
            }}
          >
            Kontakt
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Telefon", value: "+49 (0)172-6683343" },
              { label: "E-Mail", value: "info@viunlimited.de" },
              { label: "Adresse", value: "Industriestraße 5/2\n89081 Ulm-Lehr" },
            ].map((item) => (
              <div key={item.label}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,243,238,0.35)",
                    display: "block",
                    marginBottom: 2,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    color: "rgba(245,243,238,0.75)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,243,238,0.35)",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                Öffnungszeiten
              </span>
              {[
                { day: "Mo – Fr", time: "09:00 – 21:00" },
                { day: "Sa", time: "10:00 – 16:00" },
                { day: "So", time: "Geschlossen" },
              ].map((h) => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(245,243,238,0.6)" }}>
                    {h.day}
                  </span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "rgba(245,243,238,0.5)" }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 24px",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11,
            color: "rgba(245,243,238,0.3)",
            letterSpacing: "0.04em",
          }}
        >
          © 2024 ViUnlimited GbR
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "Impressum", href: "/impressum" },
            { label: "Datenschutz", href: "/datenschutz" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                color: "rgba(245,243,238,0.3)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,243,238,0.3)"; }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
