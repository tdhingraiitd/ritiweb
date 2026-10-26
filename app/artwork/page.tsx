import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Artwork — Ritika Dhingra",
  description:
    "Contemporary paintings and mixed media by Ritika Dhingra — abstract, landscape, acrylic, ink, and canvas works. Exhibited across galleries and held in private collections.",
};

export default function ArtworkPage() {
  return (
    <>
      <section className="page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b1" data-parallax="0.1"></span>
          <span className="blob b2" data-parallax="0.14"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span>
            {" Artwork"}
          </div>{" "}
          <span className="eyebrow reveal">Contemporary Art</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Painting what words "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              can't.
            </em>
          </h1>{" "}
          <p className="lead reveal d2">
            Abstract and mixed-media works exploring memory, landscape, and feeling — exhibited across
            galleries and held in private collections worldwide.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* GALLERY */}{" "}
      <section style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="filters reveal" data-filter-group="" data-filter-target=".art-item">
            {" "}
            <button className="filter active" data-f="all">
              All
            </button>{" "}
            <button className="filter" data-f="abstract">
              Abstract
            </button>{" "}
            <button className="filter" data-f="landscape">
              Landscape
            </button>{" "}
            <button className="filter" data-f="acrylic">
              Acrylic
            </button>{" "}
            <button className="filter" data-f="mixed">
              Mixed Media
            </button>{" "}
            <button className="filter" data-f="ink">
              Ink
            </button>{" "}
            <button className="filter" data-f="canvas">
              Canvas
            </button>{" "}
          </div>{" "}
          <div className="masonry">
            {" "}
            <a
              className="art-item reveal"
              data-cat="abstract acrylic canvas"
              data-title="Terracotta Dawn"
              href="/artwork-terracotta-dawn"
            >
              {" "}
              <div className="canvas cv-art1 art-a">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink7232/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Terracotta Dawn</h4>
                <div className="med">Acrylic on canvas · 90 × 120 cm</div>
                <div className="row">
                  <span className="price">₹85,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d1"
              data-cat="landscape mixed"
              data-title="Olive Valley"
              href="/artwork-olive-valley"
            >
              {" "}
              <div className="canvas cv-art2 art-b">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/landscape60740/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Olive Valley</h4>
                <div className="med">Mixed media · 80 × 80 cm</div>
                <div className="row">
                  <span className="price">Sold</span>
                  <span className="tag-status sold">Sold</span>
                </div>
                <span className="art-mini-btn">Commission Similar</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d2"
              data-cat="abstract canvas"
              data-title="Warm Horizon"
              href="/artwork-warm-horizon"
            >
              {" "}
              <div className="canvas cv-art3 art-c">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art42555/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Warm Horizon</h4>
                <div className="med">Acrylic on canvas · 100 × 70 cm</div>
                <div className="row">
                  <span className="price">₹64,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal"
              data-cat="ink abstract"
              data-title="Midnight Field"
              href="/artwork-midnight-field"
            >
              {" "}
              <div className="canvas cv-art4 art-d">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink90057/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Midnight Field</h4>
                <div className="med">Ink on paper · 60 × 42 cm</div>
                <div className="row">
                  <span className="price">₹38,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d1"
              data-cat="abstract mixed"
              data-title="Spiral Bloom"
              href="/artwork-spiral-bloom"
            >
              {" "}
              <div className="canvas cv-art5 art-a">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink16256/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Spiral Bloom</h4>
                <div className="med">Mixed media · 110 × 110 cm</div>
                <div className="row">
                  <span className="price">₹1,20,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d2"
              data-cat="landscape canvas acrylic"
              data-title="Beige Coast"
              href="/artwork-beige-coast"
            >
              {" "}
              <div className="canvas cv-art6 art-b">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/landscape49770/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Beige Coast</h4>
                <div className="med">Acrylic on canvas · 90 × 60 cm</div>
                <div className="row">
                  <span className="price">Sold</span>
                  <span className="tag-status sold">Sold</span>
                </div>
                <span className="art-mini-btn">Commission Similar</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal"
              data-cat="abstract ink"
              data-title="Quiet Tide"
              href="/artwork-quiet-tide"
            >
              {" "}
              <div className="canvas cv-art7 art-c">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink17997/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Quiet Tide</h4>
                <div className="med">{"Ink & wash · 70 × 50 cm"}</div>
                <div className="row">
                  <span className="price">₹46,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d1"
              data-cat="abstract mixed canvas"
              data-title="Fragments"
              href="/artwork-fragments"
            >
              {" "}
              <div className="canvas cv-art8 art-d">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink4800/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Fragments</h4>
                <div className="med">Mixed media on canvas · 120 × 90 cm</div>
                <div className="row">
                  <span className="price">₹1,40,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d2"
              data-cat="abstract acrylic canvas"
              data-title="Ember"
              href="/artwork-ember"
            >
              {" "}
              <div className="canvas cv-art9 art-a">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art82844/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Ember</h4>
                <div className="med">Acrylic on canvas · 80 × 100 cm</div>
                <div className="row">
                  <span className="price">₹72,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal"
              data-cat="landscape mixed"
              data-title="Sienna Hills"
              href="/artwork-sienna-hills"
            >
              {" "}
              <div className="canvas cv-3 art-b">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/landscape65970/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Sienna Hills</h4>
                <div className="med">Mixed media · 75 × 75 cm</div>
                <div className="row">
                  <span className="price">₹58,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d1"
              data-cat="abstract canvas"
              data-title="Soft Static"
              href="/artwork-soft-static"
            >
              {" "}
              <div className="canvas cv-5 art-c">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art50840/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Soft Static</h4>
                <div className="med">Acrylic on canvas · 100 × 80 cm</div>
                <div className="row">
                  <span className="price">Sold</span>
                  <span className="tag-status sold">Sold</span>
                </div>
                <span className="art-mini-btn">Commission Similar</span>
              </div>{" "}
            </a>{" "}
            <a
              className="art-item reveal d2"
              data-cat="ink abstract"
              data-title="Undergrowth"
              href="/artwork-undergrowth"
            >
              {" "}
              <div className="canvas cv-6 art-a">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink85184/900/1180"
                />
              </div>{" "}
              <div className="art-overlay">
                <h4>Undergrowth</h4>
                <div className="med">Ink on paper · 65 × 48 cm</div>
                <div className="row">
                  <span className="price">₹34,000</span>
                  <span className="tag-status avail">Available</span>
                </div>
                <span className="art-mini-btn">Request Details</span>
              </div>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* EXHIBITIONS */}{" "}
      <section className="bg-alt" id="exhibitions">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Exhibitions</span>
            <h2 className="h-xl reveal d1" style={{ marginTop: "1rem" }}>
              {"Shown & celebrated."}
            </h2>
            <p className="lead reveal d2">
              A selection of solo and group exhibitions across galleries and art fairs.
            </p>
          </div>{" "}
          <div className="split" style={{ alignItems: "start" }}>
            {" "}
            <div className="timeline reveal">
              {" "}
              <div className="tl-item">
                <div className="yr">2025</div>
                <h4>Quiet Spectrums — Solo Show</h4>
                <div className="place">Gallery Maya · New Delhi</div>
                <div className="hl">
                  Featured in the city's contemporary art week; opening-night sell-out of the abstract series.
                </div>
                <span className="count">18 works</span>
              </div>{" "}
              <div className="tl-item">
                <div className="yr">2024</div>
                <h4>{"Earth & Ember — Group Exhibition"}</h4>
                <div className="place">The Loft Collective · Mumbai</div>
                <div className="hl">Three large-format canvases acquired into private collections.</div>
                <span className="count">6 works</span>
              </div>{" "}
              <div className="tl-item">
                <div className="yr">2023</div>
                <h4>New Abstraction — Art Fair</h4>
                <div className="place">India Art Pavilion · Bengaluru</div>
                <div className="hl">Awarded the Emerging Artist mention by the curatorial panel.</div>
                <span className="count">10 works</span>
              </div>{" "}
              <div className="tl-item">
                <div className="yr">2022</div>
                <h4>Between Lines — Duo Show</h4>
                <div className="place">Atelier Nord · Goa</div>
                <div className="hl">A meditation on landscape and memory in ink and mixed media.</div>
                <span className="count">12 works</span>
              </div>{" "}
            </div>{" "}
            <div className="reveal d1">
              {" "}
              <div className="xcard" style={{ marginBottom: "1.5rem" }}>
                <span className="num">{"Awards & Highlights"}</span>
                <h3 style={{ fontSize: "1.4rem" }}>Recognition</h3>
                <ul className="about-list" style={{ columns: "1", marginTop: "1rem" }}>
                  <li>Emerging Artist Mention — India Art Pavilion, 2023</li>
                  <li>Featured Artist — Contemporary Art Week, 2025</li>
                  <li>Works held in 30+ private collections</li>
                  <li>Commissioned for two corporate headquarters</li>
                </ul>
              </div>{" "}
              <div className="xcard">
                <span className="num">Commissions</span>
                <h3 style={{ fontSize: "1.4rem" }}>Make it yours</h3>
                <p className="muted">
                  Commission an original piece scaled and toned for your space — from intimate studies to
                  large statement canvases.
                </p>
                <a className="btn btn--accent" href="/contact" style={{ marginTop: "1.2rem" }}>
                  Commission Artwork →
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* INSTAGRAM FEED */}{" "}
      <section id="feed">
        {" "}
        <div className="wrap">
          {" "}
          <div
            className="section-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "none",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {" "}
            <div>
              <span className="eyebrow reveal">From the studio</span>
              <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
                Latest on Instagram
              </h2>
            </div>{" "}
            <a className="link-arrow reveal d2" href="https://instagram.com" target="_blank" rel="noopener">
              {"@ritika.studio "}
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
            </a>{" "}
          </div>{" "}
          <div className="grid" style={{ gridTemplateColumns: "repeat(6,1fr)" }}>
            {" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art1" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art20434/900/1180"
                />
              </div>
            </a>{" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art5" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art24559/900/1180"
                />
              </div>
            </a>{" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art3" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art63671/900/1180"
                />
              </div>
            </a>{" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art8" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art22952/900/1180"
                />
              </div>
            </a>{" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art4" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art76365/900/1180"
                />
              </div>
            </a>{" "}
            <a
              className="reveal-img"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              style={{ aspectRatio: "1", borderRadius: "14px", overflow: "hidden" }}
            >
              <div className="canvas cv-art7" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/art18789/900/1180"
                />
              </div>
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
