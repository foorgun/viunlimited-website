'use client';

import Link from 'next/link';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const courses = [
  { title: 'Muay Thai', initials: 'MT', desc: 'Die Kunst der acht Gliedmaßen — Schläge, Tritte, Knie und Ellbogen. Für Einsteiger und Fortgeschrittene.' },
  { title: 'Boxen', initials: 'BX', desc: 'Klassisches Boxen für Technik, Ausdauer und mentale Stärke. Von Anfänger bis Wettkampf.' },
  { title: 'Fitness & Conditioning', initials: 'FC', desc: 'Funktionelles Training und Athletik — der Grundstein für jede Kampfsportart und maximale Leistung.' },
];

const pills = ['Muay Thai', 'Boxen', 'Fitness', 'Kindertraining', 'Selbstverteidigung', 'Sparring'];

export default function Home() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1920&auto=format&fit=crop"
      title="Kein Limit."
      date="// Kampfsport · Fitness · Ulm"
      scrollToExpand="Scroll zum Entdecken"
      textBlend={false}
    >
      {/* ── FFL-STYLE HERO (visible after expansion) ── */}
      <section
        style={{
          background: '#0C0C0C',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background diagonal texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 8px)',
            pointerEvents: 'none',
          }}
        />
        {/* Red glow accent top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            background: 'radial-gradient(circle, rgba(238,62,48,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
          }}
          className="hero-content-grid"
        >
          {/* Left: text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Eyebrow */}
            <span
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#EE3E30',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 20,
              }}
            >
              <span style={{ display: 'inline-block', width: 24, height: 2, background: '#EE3E30' }} />
              // Kampfsport · Fitness · Ulm
            </span>

            {/* Main headline — FFL bold style */}
            <h1
              style={{
                fontFamily: 'var(--font-dm-serif), serif',
                fontStyle: 'italic',
                fontSize: 'clamp(52px, 8vw, 100px)',
                color: '#F5F3EE',
                lineHeight: 1.0,
                margin: '0 0 8px',
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              Kein Limit.
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-dm-serif), serif',
                fontStyle: 'italic',
                fontSize: 'clamp(52px, 8vw, 100px)',
                color: '#EE3E30',
                lineHeight: 1.0,
                margin: '0 0 32px',
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              Nur du.
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                color: 'rgba(245,243,238,0.6)',
                lineHeight: 1.75,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              Von Einsteiger bis Wettkampf — erlebe ein Training, das dich wirklich fordert.
              Muay Thai, Boxen, Fitness und mehr in Ulm-Lehr.
            </p>

            {/* CTA Buttons — FFL style */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48, alignItems: 'center' }}>
              <Link
                href="/kurse"
                style={{
                  background: '#EE3E30',
                  color: '#fff',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: 40,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Kurse entdecken »
              </Link>
              <Link
                href="/ueber-uns"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#F5F3EE',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#EE3E30">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Über uns
              </Link>
            </div>

            {/* Social proof: stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* Avatar stack */}
                <div style={{ display: 'flex' }}>
                  {['U', 'S', 'M'].map((initial, i) => (
                    <div
                      key={initial}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: i === 0 ? '#EE3E30' : i === 1 ? '#1C1C1C' : '#2a2a2a',
                        border: '2px solid #0C0C0C',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: 11,
                        color: '#F5F3EE',
                        marginLeft: i > 0 ? -10 : 0,
                      }}
                    >
                      {initial}
                    </div>
                  ))}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: 11,
                      color: 'rgba(245,243,238,0.5)',
                      marginLeft: -10,
                    }}
                  >
                    +
                  </div>
                </div>
                <div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#EE3E30">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: 10,
                      letterSpacing: '0.06em',
                      color: 'rgba(245,243,238,0.45)',
                    }}
                  >
                    200+ Mitglieder
                  </span>
                </div>
              </div>

              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontStyle: 'italic',
                    fontSize: 28,
                    color: '#EE3E30',
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,243,238,0.4)',
                  }}
                >
                  Jahre Erfahrung
                </div>
              </div>
            </div>

            {/* Service category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {pills.map((pill) => (
                <Link
                  key={pill}
                  href="/kurse"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: 13,
                    fontWeight: 400,
                    color: 'rgba(245,243,238,0.7)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '7px 16px',
                    borderRadius: 40,
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                >
                  {pill}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .hero-content-grid { grid-template-columns: 1fr !important; max-width: 720px !important; }
          }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: '#141414',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          }}
        >
          {[
            { value: '10+', label: 'Jahre Erfahrung' },
            { value: '5+', label: 'Kampfsportarten' },
            { value: '200+', label: 'Aktive Mitglieder' },
            { value: 'Ulm', label: 'Standort' },
          ].map((s, i) => (
            <div
              key={s.value}
              style={{
                textAlign: 'center',
                padding: '16px 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  color: '#EE3E30',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,243,238,0.5)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KURSE TEASER ── */}
      <section style={{ background: '#0C0C0C', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#EE3E30',
              display: 'block',
              marginBottom: 12,
            }}
          >
            // Kurse & Angebote
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: '#F5F3EE',
              margin: '0 0 56px',
            }}
          >
            Dein Training. Dein Weg.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {courses.map((c) => (
              <div
                key={c.title}
                style={{
                  background: '#141414',
                  borderLeft: '3px solid #EE3E30',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: '#EE3E30',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#fff',
                    letterSpacing: '0.05em',
                  }}
                >
                  {c.initials}
                </div>
                <h3 style={{ fontFamily: 'var(--font-dm-serif), serif', fontSize: 22, color: '#F5F3EE', margin: 0 }}>
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 300,
                    fontSize: 14,
                    color: 'rgba(245,243,238,0.6)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
                <Link
                  href="/kurse"
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#EE3E30',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  Mehr erfahren →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜBER UNS TEASER ── */}
      <section
        style={{
          background: '#0C0C0C',
          padding: '96px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <blockquote
              style={{
                fontFamily: 'var(--font-dm-serif), serif',
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 3vw, 34px)',
                color: '#F5F3EE',
                lineHeight: 1.35,
                margin: '0 0 20px',
                borderLeft: '3px solid #EE3E30',
                paddingLeft: 24,
              }}
            >
              &ldquo;Vi Unlimited steht für grenzenloses Training — egal wo du startest.&rdquo;
            </blockquote>
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#EE3E30',
                paddingLeft: 24,
              }}
            >
              — Das ViUnlimited Team
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 300,
                fontSize: 16,
                color: 'rgba(245,243,238,0.65)',
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              Gegründet mit der Überzeugung, dass Sport keine Grenzen kennt — weder Alter, noch Fitness-Level. Unser Team aus erfahrenen Trainern begleitet dich vom ersten Training bis zum Wettkampf.
            </p>
            <Link
              href="/trainer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F5F3EE',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '12px 24px',
              }}
            >
              Unser Team kennenlernen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL / COMMUNITY ── */}
      <section style={{ background: '#141414', padding: '96px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#EE3E30',
              display: 'block',
              marginBottom: 12,
            }}
          >
            // Folg uns
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#F5F3EE',
              margin: '0 0 12px',
            }}
          >
            Wir sind auf Instagram & TikTok
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: 15,
              color: '#EE3E30',
              letterSpacing: '0.05em',
              marginBottom: 16,
            }}
          >
            @vi_unlimited_gym
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 300,
              fontSize: 15,
              color: 'rgba(245,243,238,0.55)',
              marginBottom: 40,
            }}
          >
            Schau dir aktuelle Trainingsvideos, Highlights und News an.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://instagram.com/vi_unlimited_gym"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid #EE3E30',
                color: '#F5F3EE',
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 28px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 2H8C4.686 2 2 4.686 2 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6zm4 14c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8zm-8-9a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm4.5-9a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              @vi_unlimited_gym
            </a>
            <a
              href="https://tiktok.com/@vi_unlimited_gym"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#F5F3EE',
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 28px',
              }}
            >
              <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.38a8.16 8.16 0 004.77 1.52V7.45a4.85 4.85 0 01-1-.76z" />
              </svg>
              @vi_unlimited_gym
            </a>
          </div>
        </div>
      </section>

      {/* ── KONTAKT CTA ── */}
      <section
        style={{
          background: '#0C0C0C',
          padding: '96px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#F5F3EE',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Bereit loszulegen?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 300,
              fontSize: 16,
              color: 'rgba(245,243,238,0.55)',
              marginBottom: 40,
            }}
          >
            Komm vorbei oder schreib uns — wir freuen uns auf dich.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
            {[
              { label: 'E-Mail', value: 'info@viunlimited.de' },
              { label: 'Adresse', value: 'Industriestraße 5/2, 89081 Ulm-Lehr' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#EE3E30',
                    display: 'block',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: 'rgba(245,243,238,0.7)' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/kontakt"
            style={{
              background: '#EE3E30',
              color: '#fff',
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 36px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 40,
            }}
          >
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </ScrollExpandMedia>
  );
}
