import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Olive Valley — Artwork by Ritika Dhingra",
  description:
    "Olive Valley — Mixed media, 80 × 80 cm. An imagined valley rendered in olive, moss, and charcoal. Collage fragments and palette-knife texture give the surface a quiet, geological depth.",
};

export default function ArtworkOliveValleyPage() {
  return (
    <>
      <section className="cs-page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b1" data-parallax="0.1"></span>
          <span className="blob b2" data-parallax="0.15"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span> <a href="/artwork">Artwork</a> <span>/</span>
            {" Olive Valley"}
          </div>{" "}
          <div className="split" style={{ alignItems: "start", marginTop: "1rem" }}>
            {" "}
            <div className="carousel reveal-img" data-carousel="">
              {" "}
              <div className="carousel-track">
                {" "}
                <div className="carousel-slide">
                  <div className="canvas cv-art2">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1000&h=1250&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/olive-valley0/1000/1250"
                    />
                  </div>
                </div>{" "}
                <div className="carousel-slide">
                  <div className="canvas cv-art2">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&h=1250&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/olive-valley1/1000/1250"
                    />
                  </div>
                </div>{" "}
                <div className="carousel-slide">
                  <div className="canvas cv-art2">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&h=1250&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/olive-valley2/1000/1250"
                    />
                  </div>
                </div>{" "}
              </div>{" "}
              <button className="carousel-btn prev" type="button" aria-label="Previous image">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>{" "}
              <button className="carousel-btn next" type="button" aria-label="Next image">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>{" "}
              <div className="carousel-count">
                <span className="cur">1</span>/<span className="tot">3</span>
              </div>{" "}
              <div className="carousel-dots"></div>{" "}
            </div>{" "}
            <div>
              {" "}
              <span className="eyebrow reveal">Mixed media</span>{" "}
              <h1 className="h-xl reveal d1" style={{ margin: "1rem 0 1.2rem" }}>
                Olive Valley
              </h1>{" "}
              <p className="lead reveal d2">
                An imagined valley rendered in olive, moss, and charcoal. Collage fragments and palette-knife
                texture give the surface a quiet, geological depth.
              </p>{" "}
              <div className="reveal d3" style={{ borderTop: "1px solid var(--border)", margin: "1.8rem 0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: ".85rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="muted">Medium</span>
                  <span style={{ fontWeight: "500", textAlign: "right" }}>Mixed media</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: ".85rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="muted">Dimensions</span>
                  <span style={{ fontWeight: "500", textAlign: "right" }}>80 × 80 cm</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: ".85rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="muted">Year</span>
                  <span style={{ fontWeight: "500", textAlign: "right" }}>2024</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: ".85rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="muted">Availability</span>
                  <span style={{ fontWeight: "500", textAlign: "right" }}>
                    <span className="tag-status sold" style={{ position: "static" }}>
                      Sold
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: ".85rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span className="muted">Price</span>
                  <span style={{ fontWeight: "500", textAlign: "right" }}>Sold</span>
                </div>
              </div>{" "}
              <div className="btn-row reveal d4">
                {" "}
                <a
                  className="btn btn--accent"
                  href="#"
                  data-wa=""
                  data-wa-text={
                    'Hi Ritika, I love "Olive Valley" (now sold) — I\'d like to commission a similar piece. Can we discuss?'
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: ".1rem" }}
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm-2.79 6.16c.16 0 .32 0 .46.01.14.01.34-.06.54.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.62 1.02 1.33 1.66.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14-.2.56-1.16 1.07-1.62 1.14-.41.06-.94.08-1.51-.1a8.4 8.4 0 0 1-1.37-.51c-2.41-1.04-3.98-3.46-4.1-3.62-.12-.16-.98-1.3-.98-2.49s.62-1.77.84-2.01c.22-.24.48-.3.64-.3z" />
                  </svg>
                  Commission Similar
                </a>{" "}
                <a className="btn btn--solid" href="/contact">
                  {"Enquire via form "}
                  <span className="arr">→</span>
                </a>{" "}
              </div>{" "}
              <p className="form-note reveal d4" style={{ marginTop: "1rem" }}>
                {"Worldwide shipping & certificate of authenticity included. Commissions welcome."}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            <span className="eyebrow reveal">More from the studio</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              Related works
            </h2>
          </div>{" "}
          <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {" "}
            <a className="work-card reveal d1" href="/artwork-warm-horizon">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-art3">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/art9451/900/1180"
                  />
                </div>
                <span className="badge">Acrylic on canvas</span>
              </div>{" "}
              <div className="meta">
                <h3>Warm Horizon</h3>
                <span className="yr">2024</span>
              </div>{" "}
            </a>
            <a className="work-card reveal d2" href="/artwork-midnight-field">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-art4">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/ink39277/900/1180"
                  />
                </div>
                <span className="badge">Ink on paper</span>
              </div>{" "}
              <div className="meta">
                <h3>Midnight Field</h3>
                <span className="yr">2024</span>
              </div>{" "}
            </a>
            <a className="work-card reveal d3" href="/artwork-spiral-bloom">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-art5">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/ink11682/900/1180"
                  />
                </div>
                <span className="badge">Mixed media</span>
              </div>{" "}
              <div className="meta">
                <h3>Spiral Bloom</h3>
                <span className="yr">2025</span>
              </div>{" "}
            </a>{" "}
          </div>{" "}
          <div className="reveal" style={{ marginTop: "2.4rem" }}>
            <a className="link-arrow" href="/artwork">
              {"Back to full gallery "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
