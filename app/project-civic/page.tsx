import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Civic One — Public Services Portal — Ritika Dhingra",
  description:
    "Accessible, plain-language digital services for citizens across a state government — built to WCAG AA.",
};

export default function ProjectCivicPage() {
  return (
    <>
      <section className="cs-page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b1" data-parallax="0.1"></span>
          <span className="blob b3" data-parallax="0.16"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span> <a href="/product-design">Product Design</a> <span>/</span>
            {" Civic One"}
          </div>{" "}
          <span className="eyebrow reveal">Government · 2024</span>{" "}
          <h1 className="display reveal d1">Public Services Portal</h1>{" "}
          <p className="lead reveal d2">
            Accessible, plain-language digital services for citizens across a state government — built to WCAG
            AA.
          </p>{" "}
          <div className="big-img reveal-img">
            <div className="canvas cv-2">
              <FallbackImg
                className="ph"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1280&h=760&q=80"
                alt=""
                loading="lazy"
                fallback="https://picsum.photos/seed/gov44718/1280/760"
              />
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="cs-metabar reveal">
            {" "}
            <div className="cell">
              <div className="k">Role</div>
              <div className="v">{"UX Lead & Consultant"}</div>
            </div>{" "}
            <div className="cell">
              <div className="k">Duration</div>
              <div className="v">9 months</div>
            </div>{" "}
            <div className="cell">
              <div className="k">Year</div>
              <div className="v">2024</div>
            </div>{" "}
            <div className="cell">
              <div className="k">Category</div>
              <div className="v">Government</div>
            </div>{" "}
          </div>{" "}
          <div className="cs-body">
            {" "}
            <div className="cs-sec reveal">
              <span className="eyebrow">Problem</span>
              <p>
                Citizens struggled to access essential services online. Forms were confusing, inconsistent
                across departments, and inaccessible to many — pushing people back to in-person queues and
                call centres.
              </p>
              <p>
                The mandate was a single, trustworthy portal that worked for everyone, including users with
                disabilities and low digital literacy.
              </p>
            </div>{" "}
            <div className="cs-sec reveal">
              <span className="eyebrow">Process</span>
              <p>
                I led accessibility audits and contextual research, then simplified more than 30 service
                journeys into consistent, guided flows. Plain-language content replaced bureaucratic jargon,
                and a robust, WCAG-AA component library ensured every department shipped from the same
                accessible foundation.
              </p>
              <p>
                Designs were tested with assistive-technology users and iterated until task completion was
                reliable across devices and abilities.
              </p>
            </div>{" "}
            <div className="cs-sec reveal">
              <span className="eyebrow">Gallery</span>{" "}
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
                <a
                  className="figma-link"
                  href="https://www.figma.com/file/REPLACE-civic/Ritika-Dhingra-Civic"
                  target="_blank"
                  rel="noopener"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#1abcfe" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill="#0acf83" d="M9 24a3 3 0 0 0 3-3v-3H9a3 3 0 1 0 0 6z" />
                    <path fill="#ff7262" d="M9 12h3v6H9a3 3 0 1 1 0-6z" />
                    <path fill="#f24e1e" d="M9 0H6a3 3 0 0 0 0 6h3V0z" />
                    <path fill="#a259ff" d="M9 6H6a3 3 0 1 0 0 6h3V6z" />
                    <path fill="#ff7262" d="M15 0h-3v6h3a3 3 0 1 0 0-6z" />
                  </svg>
                  Open the full Figma file
                </a>
              </div>{" "}
              <div className="cs-gallery">
                <div className="g reveal-img">
                  <div className="canvas cv-art1">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=900&h=1180&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/art7276/900/1180"
                    />
                  </div>
                </div>
                <div className="g reveal-img">
                  <div className="canvas cv-art3">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=900&h=1180&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/art41005/900/1180"
                    />
                  </div>
                </div>
                <div className="g reveal-img">
                  <div className="canvas cv-art5">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&h=1180&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/art17765/900/1180"
                    />
                  </div>
                </div>
                <div className="g reveal-img">
                  <div className="canvas cv-art8">
                    <FallbackImg
                      className="ph"
                      src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&h=1180&q=80"
                      alt=""
                      loading="lazy"
                      fallback="https://picsum.photos/seed/art45320/900/1180"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="cs-sec reveal">
              <span className="eyebrow">Outcome</span>
              <p>
                The portal now serves millions of citizens with dramatically higher success rates and far
                fewer fallbacks to offline channels.
              </p>{" "}
              <div className="cs-result">
                <div className="r">
                  <div className="n">89%</div>
                  <div className="t">Task completion (from 58%)</div>
                </div>
                <div className="r">
                  <div className="n">AA</div>
                  <div className="t">WCAG conformance</div>
                </div>
                <div className="r">
                  <div className="n">30+</div>
                  <div className="t">Services unified</div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="cs-sec reveal">
              <span className="eyebrow">{"Technologies & Tools"}</span>{" "}
              <div className="cs-tags" style={{ marginTop: ".3rem" }}>
                <span>Figma</span>
                <span>WCAG 2.1</span>
                <span>Axe</span>
                <span>Design System</span>
              </div>{" "}
            </div>{" "}
            <div className="cs-cta-bar reveal">
              {" "}
              <a
                className="btn btn--accent"
                href="#"
                data-wa=""
                data-wa-text="Hi Ritika, I just read your Civic One case study and would love to connect and discuss a similar project."
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
                Discuss on WhatsApp
              </a>{" "}
              <a
                className="btn btn--figma"
                href="https://www.figma.com/file/REPLACE-civic/Ritika-Dhingra-Civic"
                target="_blank"
                rel="noopener"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#1abcfe" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill="#0acf83" d="M9 24a3 3 0 0 0 3-3v-3H9a3 3 0 1 0 0 6z" />
                  <path fill="#ff7262" d="M9 12h3v6H9a3 3 0 1 1 0-6z" />
                  <path fill="#f24e1e" d="M9 0H6a3 3 0 0 0 0 6h3V0z" />
                  <path fill="#a259ff" d="M9 6H6a3 3 0 1 0 0 6h3V6z" />
                  <path fill="#ff7262" d="M15 0h-3v6h3a3 3 0 1 0 0-6z" />
                </svg>
                View in Figma
              </a>{" "}
              <a className="btn btn--solid" href="/contact">
                {"Start a project "}
                <span className="arr">→</span>
              </a>{" "}
              <a className="btn btn--ghost" href="/product-design">
                All projects
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            <span className="eyebrow reveal">Keep exploring</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              More work
            </h2>
          </div>{" "}
          <div className="grid next-grid">
            {" "}
            <a className="work-card reveal" href="/project-meadow">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-1">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/mobile12968/900/1180"
                  />
                </div>
                <span className="badge">Previous</span>
              </div>{" "}
              <div className="meta">
                <h3>Meadow</h3>
                <span className="yr">2024</span>
              </div>{" "}
            </a>{" "}
            <a className="work-card reveal d1" href="/project-ledger">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-6">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/product47484/1280/760"
                  />
                </div>
                <span className="badge">Next</span>
              </div>{" "}
              <div className="meta">
                <h3>Ledger</h3>
                <span className="yr">2023</span>
              </div>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
