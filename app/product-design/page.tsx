import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Product Design — Ritika Dhingra",
  description:
    "Selected product design case studies by Ritika Dhingra — SaaS, mobile, enterprise, and government products with UX strategy, UI design, and design systems.",
};

export default function ProductDesignPage() {
  return (
    <>
      <section className="page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b1" data-parallax="0.1"></span>
          <span className="blob b3" data-parallax="0.16"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span>
            {" Product Design"}
          </div>{" "}
          <span className="eyebrow reveal">Product Design</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Digital products with "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              intent
            </em>
            .
          </h1>{" "}
          <p className="lead reveal d2">
            Case studies across SaaS, mobile, enterprise, consumer, and government products — built on
            research, systems thinking, and craft.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* WORK */}{" "}
      <section style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="reveal">
            {" "}
            <div className="search-bar">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>{" "}
              <input
                type="search"
                placeholder="Search projects…"
                data-search=".work-card"
                aria-label="Search projects"
              />{" "}
            </div>{" "}
            <div className="filters" data-filter-group="" data-filter-target=".work-card">
              {" "}
              <button className="filter active" data-f="all">
                All
              </button>{" "}
              <button className="filter" data-f="saas">
                SaaS
              </button>{" "}
              <button className="filter" data-f="mobile">
                Mobile
              </button>{" "}
              <button className="filter" data-f="enterprise">
                Enterprise
              </button>{" "}
              <button className="filter" data-f="government">
                Government
              </button>{" "}
              <button className="filter" data-f="consumer">
                Consumer
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid work-grid">
            {" "}
            <a
              className="work-card wide reveal"
              data-cat="saas enterprise"
              data-title="Atlas Analytics Platform Redesign"
              href="/project-atlas"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-4">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/gov22508/1280/760"
                  />
                </div>
                <span className="badge">SaaS · Enterprise</span>
              </div>{" "}
              <div className="meta">
                <h3>Atlas — Analytics Platform Redesign</h3>
                <span className="yr">2025</span>
              </div>{" "}
              <p className="excerpt">
                Rebuilding a complex enterprise analytics suite around a unified design system, cutting
                time-to-insight by 40%.
              </p>{" "}
            </a>{" "}
            <a
              className="work-card reveal d1"
              data-cat="mobile consumer"
              data-title="Meadow Wellness App"
              href="/project-meadow"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-1">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/system29205/1280/760"
                  />
                </div>
                <span className="badge">Mobile · Consumer</span>
              </div>{" "}
              <div className="meta">
                <h3>Meadow — Wellness App</h3>
                <span className="yr">2024</span>
              </div>{" "}
              <p className="excerpt">A calm, habit-forming wellness companion for a Series A startup.</p>{" "}
            </a>{" "}
            <a
              className="work-card reveal d2"
              data-cat="government"
              data-title="Civic One Public Services Portal"
              href="/project-civic"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-2">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/gov13730/1280/760"
                  />
                </div>
                <span className="badge">Government</span>
              </div>{" "}
              <div className="meta">
                <h3>Civic One — Public Services Portal</h3>
                <span className="yr">2024</span>
              </div>{" "}
              <p className="excerpt">
                Accessible digital services for citizens across a state government.
              </p>{" "}
            </a>{" "}
            <a
              className="work-card reveal"
              data-cat="saas enterprise"
              data-title="Ledger Fintech Dashboard"
              href="/project-ledger"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-6">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/gov1830/1280/760"
                  />
                </div>
                <span className="badge">SaaS · Fintech</span>
              </div>{" "}
              <div className="meta">
                <h3>Ledger — Fintech Dashboard</h3>
                <span className="yr">2023</span>
              </div>{" "}
              <p className="excerpt">
                A trustworthy, data-dense dashboard for financial operations teams.
              </p>{" "}
            </a>{" "}
            <a
              className="work-card reveal d1"
              data-cat="mobile consumer"
              data-title="Bloom Commerce App"
              href="/project-bloom"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-3">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/product5356/1280/760"
                  />
                </div>
                <span className="badge">Mobile · Commerce</span>
              </div>{" "}
              <div className="meta">
                <h3>Bloom — Commerce App</h3>
                <span className="yr">2023</span>
              </div>{" "}
              <p className="excerpt">A delightful shopping experience that lifted conversion by 28%.</p>{" "}
            </a>{" "}
            <a
              className="work-card wide reveal d2"
              data-cat="enterprise saas"
              data-title="Nova Enterprise Design System"
              href="/project-nova"
            >
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-5">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/system39898/1280/760"
                  />
                </div>
                <span className="badge">Design System</span>
              </div>{" "}
              <div className="meta">
                <h3>Nova — Enterprise Design System</h3>
                <span className="yr">2022</span>
              </div>{" "}
              <p className="excerpt">
                A scalable, accessible design system adopted across 40+ product teams.
              </p>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* WHAT I DELIVER */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Inside every case study</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              Problem, process, outcome.
            </h2>
            <p className="lead reveal d2">
              Each project is documented end-to-end — the challenge, how I approached it, the role I played,
              the tools used, and the measurable result.
            </p>
          </div>{" "}
          <div className="grid expertise-grid">
            {" "}
            <div className="xcard reveal">
              <span className="num">Problem</span>
              <h3>The challenge</h3>
              <p className="muted">Framing the real user and business problem before any pixels.</p>
            </div>{" "}
            <div className="xcard reveal d1">
              <span className="num">Process</span>
              <h3>The approach</h3>
              <p className="muted">Research, strategy, systems, prototypes, and validation.</p>
            </div>{" "}
            <div className="xcard reveal d2">
              <span className="num">Outcome</span>
              <h3>The result</h3>
              <p className="muted">Shipped products with measurable impact and clear value.</p>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section>
        {" "}
        <div className="wrap center" style={{ maxWidth: "760px" }}>
          {" "}
          <h2 className="h-xl reveal" style={{ marginBottom: "1.4rem" }}>
            Have a product to build or rethink?
          </h2>{" "}
          <div className="btn-row reveal d1" style={{ justifyContent: "center" }}>
            <a className="btn btn--solid" href="/contact">
              {"Start a project "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href="/consulting">
              See consulting services
            </a>
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
