"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "32px",
            background: "#0f0f10",
            color: "white",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <section style={{ maxWidth: 600, textAlign: "center" }}>
            <p style={{ color: "#ef3b2d", fontWeight: 700, letterSpacing: "0.16em" }}>
              GANXING SYSTEM RECOVERY
            </p>
            <h1 style={{ marginTop: 20, fontSize: 38 }}>We are restoring this page</h1>
            <p style={{ color: "#b5b5b8", lineHeight: 1.7 }}>
              Please retry in a moment. / 页面正在恢复，请稍后重试。
            </p>
            <button
              type="button"
              onClick={reset}
              style={{
                marginTop: 24,
                minHeight: 48,
                border: 0,
                borderRadius: 999,
                padding: "0 28px",
                background: "#df3428",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Retry / 重试
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
