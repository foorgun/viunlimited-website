"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  {
    label: "Kurse & mehr",
    href: "/kurse",
    dropdown: ["Muay Thai", "Boxen", "Fitness & Conditioning", "Kindertraining", "Selbstverteidigung"],
  },
  { label: "Unsere Trainer", href: "/trainer" },
  { label: "Unsere Partner", href: "/partner" },
  {
    label: "Kontakt",
    href: "/kontakt",
    dropdown: ["Anfahrt", "Öffnungszeiten", "Nachricht schreiben"],
  },
  {
    label: "Neuigkeiten",
    href: "/neuigkeiten",
    dropdown: ["Alle Beiträge", "Events", "Ergebnisse"],
  },
  { label: "Shop", href: "/shop" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          background: "#0C0C0C",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "6px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "📞", text: "+49 (0)172-6683343" },
            { icon: "✉", text: "info@viunlimited.de" },
            { icon: "📍", text: "Industriestraße 5/2, 89081 Ulm-Lehr" },
          ].map((item) => (
            <span
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 11,
                color: "rgba(245,243,238,0.55)",
                fontFamily: "var(--font-dm-mono), monospace",
                letterSpacing: "0.03em",
              }}
            >
              <span
                style={{
                  background: "#EE3E30",
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#0C0C0C",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.jpg"
              alt="ViUnlimited"
              width={120}
              height={40}
              style={{ objectFit: "contain", objectPosition: "left", height: 40, width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              position: "relative",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,243,238,0.75)",
                    textDecoration: "none",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,243,238,0.75)";
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.08)",
                      minWidth: 200,
                      zIndex: 100,
                      padding: "8px 0",
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        href={link.href}
                        style={{
                          display: "block",
                          padding: "8px 16px",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "rgba(245,243,238,0.65)",
                          textDecoration: "none",
                          transition: "color 0.15s, background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30";
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(238,62,48,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,243,238,0.65)";
                          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: socials + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Social icons (desktop) */}
            <div style={{ display: "flex", gap: 10 }} className="hidden-mobile">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: "M16 2H8C4.686 2 2 4.686 2 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6zm4 14c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8zm-8-9a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm4.5-9a1 1 0 100 2 1 1 0 000-2z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  style={{ color: "#F5F3EE", transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EE3E30"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F5F3EE"; }}
                  aria-label={s.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#F5F3EE",
                padding: 4,
                display: "none",
              }}
              className="show-mobile"
              aria-label="Menü öffnen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{ flex: 1, background: "rgba(0,0,0,0.7)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            style={{
              width: 300,
              background: "#141414",
              height: "100%",
              overflowY: "auto",
              padding: "24px 0",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ padding: "0 24px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Image src="/logo.jpg" alt="ViUnlimited" width={100} height={34} style={{ objectFit: "contain", objectPosition: "left", height: 34, width: "auto" }} />
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: "none", border: "none", color: "#F5F3EE", cursor: "pointer" }}
                aria-label="Menü schließen"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 24px",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245,243,238,0.8)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
