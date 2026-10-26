import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Consulting — Ritika Dhingra",
  description:
    "Design consulting by Ritika Dhingra — product strategy, UX audits, UI modernization, design systems, and product discovery workshops for startups and enterprises.",
};

export default function ConsultingPage() {
  return (
    <>
      <section className="page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b1" data-parallax="0.1"></span>
          <span className="blob b2" data-parallax="0.15"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span>
            {" Consulting"}
          </div>{" "}
          <span className="eyebrow reveal">Design Consulting</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Strategy that turns ideas into "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              products.
            </em>
          </h1>{" "}
          <p className="lead reveal d2">
            I partner with startups, enterprises, and institutions to define what to build, fix what isn't
            working, and scale design that lasts.
          </p>{" "}
          <div className="btn-row reveal d3" style={{ marginTop: "2rem" }}>
            <a className="btn btn--accent" href="/contact">
              {"Book a Consultation "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href="/product-design">
              See case studies
            </a>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SERVICES */}{" "}
      <section style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Services</span>
            <h2 className="h-xl reveal d1" style={{ marginTop: "1rem" }}>
              How I can help.
            </h2>
          </div>{" "}
          <div className="svc reveal">
            {" "}
            <div className="svc-row">
              <div className="idx">01</div>
              <div>
                <h3>Product Strategy</h3>
                <p className="muted">
                  Helping startups define their product — vision, priorities, roadmaps, and the bets worth
                  making.
                </p>
              </div>
              <a className="go" href="/contact">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>{" "}
            <div className="svc-row">
              <div className="idx">02</div>
              <div>
                <h3>UX Audit</h3>
                <p className="muted">
                  Finding usability issues with heuristic and research-based audits, delivered as a
                  prioritised action plan.
                </p>
              </div>
              <a className="go" href="/contact">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>{" "}
            <div className="svc-row">
              <div className="idx">03</div>
              <div>
                <h3>UI Modernization</h3>
                <p className="muted">
                  Redesigning existing applications into clean, modern, accessible experiences without losing
                  what works.
                </p>
              </div>
              <a className="go" href="/contact">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>{" "}
            <div className="svc-row">
              <div className="idx">04</div>
              <div>
                <h3>Design Systems</h3>
                <p className="muted">
                  Scalable, token-driven enterprise design systems with governance, documentation, and
                  adoption support.
                </p>
              </div>
              <a className="go" href="/contact">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>{" "}
            <div className="svc-row">
              <div className="idx">05</div>
              <div>
                <h3>Product Workshops</h3>
                <p className="muted">
                  Facilitated discovery sessions that align teams and turn fuzzy ideas into concrete plans.
                </p>
              </div>
              <a className="go" href="/contact">
                <svg
                  width="18"
                  height="18"
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
        </div>{" "}
      </section>{" "}
      {/* PROCESS */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Engagement</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              A clear path from problem to impact.
            </h2>
          </div>{" "}
          <div className="reveal">
            <div className="process">
              {" "}
              <div className="pstep">
                <span className="n">01</span>
                <h4>Discover</h4>
                <p>Understand the business, users, and constraints.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">02</span>
                <h4>Diagnose</h4>
                <p>Audit, research, and surface the real problems.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">03</span>
                <h4>Define</h4>
                <p>Strategy, priorities, and a focused plan.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">04</span>
                <h4>Design</h4>
                <p>Systems and experiences that solve them.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">05</span>
                <h4>Deliver</h4>
                <p>Ship, measure, and hand over with confidence.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">06</span>
                <h4>Enable</h4>
                <p>Upskill your team to carry it forward.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">07</span>
                <h4>Iterate</h4>
                <p>Refine based on real-world signals.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">08</span>
                <h4>Scale</h4>
                <p>Grow what works across the organisation.</p>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* WHO */}{" "}
      <section>
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Who I work with</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              Trusted by teams of every size.
            </h2>
          </div>{" "}
          <div className="grid expertise-grid">
            {" "}
            <article className="xcard reveal">
              <span className="glow"></span>
              <h3 style={{ fontSize: "1.4rem" }}>Startups</h3>
              <p className="muted">From idea to MVP to product-market fit — design as a growth lever.</p>
            </article>{" "}
            <article className="xcard reveal d1">
              <span className="glow"></span>
              <h3 style={{ fontSize: "1.4rem" }}>Enterprises</h3>
              <p className="muted">Modernising legacy products and scaling design across teams.</p>
            </article>{" "}
            <article className="xcard reveal d2">
              <span className="glow"></span>
              <h3 style={{ fontSize: "1.4rem" }}>Institutions</h3>
              <p className="muted">Accessible, trustworthy digital services for the public good.</p>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TESTIMONIAL FEATURE */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap center" style={{ maxWidth: "880px" }}>
          {" "}
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Client
          </span>{" "}
          <h2
            className="display reveal d1"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.4rem)", margin: "1.4rem 0", lineHeight: "1.15" }}
          >
            "She reframed our entire product. Clarity where we had chaos — and a system our team still lives
            by."
          </h2>{" "}
          <div
            className="who reveal d2"
            style={{ display: "flex", alignItems: "center", gap: ".9rem", justifyContent: "center" }}
          >
            <span className="avatar av-1"></span>
            <div style={{ textAlign: "left" }}>
              <div className="nm" style={{ fontWeight: "600" }}>
                Arjun Mehta
              </div>
              <div className="rl muted" style={{ fontSize: ".85rem" }}>
                Founder, Meadow
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section>
        {" "}
        <div className="wrap center" style={{ maxWidth: "760px" }}>
          {" "}
          <h2 className="h-xl reveal" style={{ marginBottom: "1.4rem" }}>
            Let's define what to build next.
          </h2>{" "}
          <div className="btn-row reveal d1" style={{ justifyContent: "center" }}>
            <a className="btn btn--solid" href="/contact">
              {"Book a Consultation "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href="/contact">
              Download Resume
            </a>
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
