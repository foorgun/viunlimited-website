import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Shop — ViUnlimited",
};

// TODO — connect to real shop/WooCommerce API
const products = [
  { name: "ViUnlimited Rashguard", price: "49,90 €", category: "Bekleidung", initials: "RG" },
  { name: "ViUnlimited T-Shirt", price: "29,90 €", category: "Bekleidung", initials: "TS" },
  { name: "Muay Thai Handschuhe 12oz", price: "79,90 €", category: "Equipment", initials: "HG" },
  { name: "Bandagen 4m", price: "14,90 €", category: "Equipment", initials: "BD" },
  { name: "Schienbeinschoner Pro", price: "59,90 €", category: "Equipment", initials: "SS" },
  { name: "ViUnlimited Hoodie", price: "69,90 €", category: "Bekleidung", initials: "HD" },
];

export default function Shop() {
  return (
    <>
      <PageHero
        eyebrow="// Shop"
        title="Shop"
        subtitle="Bekleidung und Equipment — direkt aus dem Gym."
      />

      <section style={{ background: "#0C0C0C", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {products.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "#141414",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Product image placeholder */}
                <div
                  style={{
                    height: 240,
                    background: "#1C1C1C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.04)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontStyle: "italic",
                      fontSize: 48,
                      color: "rgba(238,62,48,0.15)",
                    }}
                  >
                    {p.initials}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,243,238,0.3)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "2px 6px",
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontSize: 18,
                      color: "#F5F3EE",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-serif), serif",
                        fontStyle: "italic",
                        fontSize: 20,
                        color: "#EE3E30",
                      }}
                    >
                      {p.price}
                    </span>
                    <button
                      style={{
                        background: "#EE3E30",
                        color: "#fff",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        border: "none",
                        padding: "8px 14px",
                        cursor: "pointer",
                      }}
                    >
                      Kaufen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              background: "#141414",
              border: "1px solid rgba(238,62,48,0.2)",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              gap: 16,
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
              }}
            >
              TODO
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: "rgba(245,243,238,0.45)",
              }}
            >
              Shop-Integration mit WooCommerce / echtem Backend ausstehend.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
