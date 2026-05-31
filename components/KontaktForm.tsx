"use client";

export default function KontaktForm() {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      onSubmit={(e) => e.preventDefault()}
    >
      {[
        { id: "name", label: "Name", type: "text", placeholder: "Dein Name" },
        { id: "email", label: "E-Mail", type: "email", placeholder: "deine@email.de" },
      ].map((f) => (
        <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label
            htmlFor={f.id}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(245,243,238,0.45)",
            }}
          >
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            placeholder={f.placeholder}
            style={{
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#F5F3EE",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 14,
              padding: "12px 14px",
              outline: "none",
              width: "100%",
            }}
          />
        </div>
      ))}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          htmlFor="message"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,243,238,0.45)",
          }}
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Was möchtest du uns mitteilen?"
          style={{
            background: "#141414",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#F5F3EE",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            padding: "12px 14px",
            outline: "none",
            resize: "vertical",
            width: "100%",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: "#EE3E30",
          color: "#fff",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          border: "none",
          padding: "16px 28px",
          cursor: "pointer",
          alignSelf: "flex-start",
        }}
      >
        Nachricht senden →
      </button>
    </form>
  );
}
