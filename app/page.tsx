import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Ritika Dhingra — Designer · Educator · Consultant · Artist",
  description:
    "Ritika Dhingra is a multidisciplinary product designer, design educator, UX consultant, and contemporary artist. Designing meaningful digital products, visual identities, and artistic experiences.",
  authors: [
    {
      name: "Ritika Dhingra",
    },
  ],
  openGraph: {
    title: "Ritika Dhingra — Designer · Educator · Consultant · Artist",
    description: "Designing meaningful digital products, visual identities, and artistic experiences.",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ritika Dhingra",
  jobTitle: ["Product Designer", "Design Educator", "UX Consultant", "Contemporary Artist"],
  description: "Multidisciplinary designer, educator, consultant and artist.",
  sameAs: ["https://linkedin.com", "https://behance.net", "https://dribbble.com", "https://instagram.com"],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <section className="hero hero--img">
        {" "}
        <div className="hero-art" aria-hidden="true">
          {" "}
          <div className="hero-bg">
            {" "}
            <FallbackImg
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=2000&q=80"
              alt=""
              loading="eager"
              fallback="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2000&q=80"
              onFail="hide"
            />{" "}
          </div>{" "}
          <span className="blob b1" data-parallax="0.12"></span>{" "}
          <span className="blob b3" data-parallax="0.18"></span>{" "}
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="hero-roles reveal">
            {" "}
            <span>Designer</span>
            <span>Educator</span>
            <span>Product Design Consultant</span>
            <span>Artist</span>{" "}
          </div>{" "}
          <h1 className="display">
            <span data-split="">Designing meaningful digital products, visual identities, and</span>{" "}
            <span className="accent">artistic experiences.</span>
          </h1>{" "}
          <p className="lead hero-intro reveal d2">
            I help startups, enterprises, and institutions transform ideas into intuitive digital experiences
            — while also creating contemporary artworks exhibited across galleries and private collections.
          </p>{" "}
          <div className="btn-row reveal d3">
            {" "}
            <a className="btn btn--solid" href="/product-design">
              {"View Portfolio "}
              <span className="arr">→</span>
            </a>{" "}
            <a className="btn btn--accent" href="/artwork">
              {"Explore Paintings "}
              <span className="arr">→</span>
            </a>{" "}
            <a className="btn btn--ghost" href="/contact">
              Work With Me
            </a>{" "}
          </div>{" "}
          <div className="hero-scroll reveal d4">
            <span className="mouse"></span>
            {" Scroll to explore"}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TRUSTED BY */}{" "}
      <div className="trustband">
        {" "}
        <div className="wrap">
          {" "}
          <div className="tb-label reveal">{"Trusted by startups, enterprises & institutions"}</div>{" "}
          <div className="tb-logos reveal d1">
            {" "}
            <span className="tb-logo">
              <span className="tb-mk">N</span>Northwind
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">A</span>Atlas
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">M</span>Meadow
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">C</span>Civic One
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">B</span>Bloom
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">L</span>Ledger
            </span>{" "}
            <span className="tb-logo">
              <span className="tb-mk">Nv</span>Nova
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ABOUT */}{" "}
      <section id="about">
        {" "}
        <div className="wrap split">
          {" "}
          <div className="reveal-img portrait">
            {" "}
            <div className="canvas cv-art4">
              <img
                className="ph"
                src="/assets/img/ritika-portrait.jpg"
                alt="Portrait of Ritika Dhingra"
                width="1000"
                height="1250"
                loading="lazy"
              />
            </div>{" "}
            <div className="frame"></div>{" "}
          </div>{" "}
          <div>
            {" "}
            <span className="eyebrow reveal">About</span>{" "}
            <h2 className="h-lg reveal d1" style={{ marginTop: "1.2rem" }}>
              {"A designer who thinks like a strategist and creates like an "}
              <em className="serif" style={{ color: "var(--accent)" }}>
                artist.
              </em>
            </h2>{" "}
            <p className="lead reveal d2" style={{ marginTop: "1.4rem" }}>
              Product designer, UI/UX consultant, design mentor, guest lecturer, creative strategist and
              contemporary artist. I move fluidly between boardrooms, classrooms and the studio — connecting
              strategy, craft and emotion.
            </p>{" "}
            <ul className="about-list reveal d3" style={{ marginTop: "1.8rem" }}>
              {" "}
              <li>Product Designer</li>
              <li>UX Consultant</li> <li>Design Mentor</li>
              <li>Guest Lecturer</li> <li>Creative Strategist</li>
              <li>Contemporary Artist</li>{" "}
            </ul>{" "}
            <div className="btn-row reveal d4" style={{ marginTop: "2rem" }}>
              {" "}
              <a className="link-arrow" href="/consulting">
                {"More about my practice "}
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
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* STATS */}{" "}
      <section
        className="bg-alt"
        style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}
      >
        {" "}
        <div className="wrap stats">
          {" "}
          <div className="stat reveal">
            <div className="n">
              <span data-count="10" data-suffix="+">
                0
              </span>
            </div>
            <div className="l">Years of practice</div>
          </div>{" "}
          <div className="stat reveal d1">
            <div className="n">
              <span data-count="120" data-suffix="+">
                0
              </span>
            </div>
            <div className="l">{"Products & projects shipped"}</div>
          </div>{" "}
          <div className="stat reveal d2">
            <div className="n">
              <span data-count="14" data-suffix="">
                0
              </span>
            </div>
            <div className="l">{"Exhibitions & shows"}</div>
          </div>{" "}
          <div className="stat reveal d3">
            <div className="n">
              <span data-count="600" data-suffix="+">
                0
              </span>
            </div>
            <div className="l">Students mentored</div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* PILLARS */}{" "}
      <section id="pillars">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            {" "}
            <span className="eyebrow reveal">Three practices, one vision</span>{" "}
            <h2 className="h-xl reveal d1" style={{ marginTop: "1.2rem" }}>
              Choose your path in.
            </h2>{" "}
            <p className="lead reveal d2">
              Whether you're a founder, a college, a gallery, or a collector — here's where to find the work
              most relevant to you.
            </p>{" "}
          </div>{" "}
          <div className="grid pillars">
            {" "}
            <a className="pillar reveal" href="/product-design">
              {" "}
              <div className="canvas cv-1">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/insights31859/1280/760"
                />
              </div>{" "}
              <div className="pc">
                <h3>Product Design</h3>
                <p>{"Strategy, UX & UI for startups, enterprise, and government products."}</p>
                <span className="link-arrow">
                  {"Explore work "}
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
                </span>
              </div>{" "}
            </a>{" "}
            <a className="pillar reveal d1" href="/artwork">
              {" "}
              <div className="canvas cv-art1">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&h=1180&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/ink34823/900/1180"
                />
              </div>{" "}
              <div className="pc">
                <h3>Artwork</h3>
                <p>{"Contemporary paintings & mixed media — exhibited and collected."}</p>
                <span className="link-arrow">
                  {"View gallery "}
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
                </span>
              </div>{" "}
            </a>{" "}
            <a className="pillar reveal d2" href="/teaching">
              {" "}
              <div className="canvas cv-6">
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach34698/1280/760"
                />
              </div>{" "}
              <div className="pc">
                <h3>{"Teaching & Workshops"}</h3>
                <p>{"Guest lectures, mentorship & corporate design training."}</p>
                <span className="link-arrow">
                  {"Learn more "}
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
                </span>
              </div>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* EXPERTISE */}{" "}
      <section className="bg-alt" id="expertise">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            {" "}
            <span className="eyebrow reveal">Expertise</span>{" "}
            <h2 className="h-xl reveal d1" style={{ marginTop: "1.2rem" }}>
              Capabilities across design.
            </h2>{" "}
            <p className="lead reveal d2">
              A full-stack design practice spanning strategy, interface, brand, and the studio.
            </p>{" "}
          </div>{" "}
          <div className="grid expertise-grid">
            {" "}
            <article className="xcard reveal">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="num">01</span>
              <h3>Product Design</h3>
              <p className="muted">
                From zero to launch — strategy that turns ambiguity into clear, usable products.
              </p>
              <ul className="tags">
                <li>UX Strategy</li>
                <li>Product Discovery</li>
                <li>Wireframes</li>
                <li>User Flows</li>
                <li>Design Thinking</li>
                <li>Design Systems</li>
              </ul>
            </article>{" "}
            <article className="xcard reveal d1">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <span className="num">02</span>
              <h3>UI Design</h3>
              <p className="muted">Interfaces that feel effortless across every surface and scale.</p>
              <ul className="tags">
                <li>Mobile Apps</li>
                <li>SaaS</li>
                <li>Dashboards</li>
                <li>Enterprise Software</li>
                <li>Government Products</li>
                <li>Consumer Apps</li>
              </ul>
            </article>{" "}
            <article className="xcard reveal d2">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="10.5" r="2.5" />
                  <circle cx="8.5" cy="7.5" r="2.5" />
                  <circle cx="6.5" cy="12.5" r="2.5" />
                  <path d="M12 22a10 10 0 1 1 0-20" />
                </svg>
              </div>
              <span className="num">03</span>
              <h3>Graphic Design</h3>
              <p className="muted">Identities and creatives that make brands unforgettable.</p>
              <ul className="tags">
                <li>Branding</li>
                <li>Marketing Creatives</li>
                <li>Campaign Design</li>
                <li>Pitch Decks</li>
                <li>Visual Identity</li>
              </ul>
            </article>{" "}
            <article className="xcard reveal">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16v12H5.2L4 17.2V4z" />
                  <path d="M8 9h8M8 12h5" />
                </svg>
              </div>
              <span className="num">04</span>
              <h3>Social Media Strategy</h3>
              <p className="muted">Consistent, intentional brand presence that drives engagement.</p>
              <ul className="tags">
                <li>Brand Positioning</li>
                <li>Content Strategy</li>
                <li>Creative Direction</li>
                <li>Visual Consistency</li>
                <li>Engagement Design</li>
              </ul>
            </article>{" "}
            <article className="xcard reveal d1">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" />
                </svg>
              </div>
              <span className="num">05</span>
              <h3>{"Workshops & Teaching"}</h3>
              <p className="muted">Sharing craft as guest faculty and mentor to emerging designers.</p>
              <ul className="tags">
                <li>Guest Lecturer</li>
                <li>Design Mentor</li>
                <li>Portfolio Reviews</li>
                <li>UX Workshops</li>
                <li>Corporate Training</li>
              </ul>
            </article>{" "}
            <article className="xcard reveal d2">
              <span className="glow"></span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19c-4 3-9 1-9-4 0-6 5-11 11-11 3 0 5 2 5 5 0 4-4 6-7 6-2 0-3-1-3-3s2-3 3-2" />
                </svg>
              </div>
              <span className="num">06</span>
              <h3>Contemporary Art</h3>
              <p className="muted">Paintings and mixed media bridging emotion and form.</p>
              <ul className="tags">
                <li>Paintings</li>
                <li>Mixed Media</li>
                <li>Abstract Art</li>
                <li>Exhibitions</li>
                <li>Private Collections</li>
                <li>Commissions</li>
              </ul>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SELECTED WORK PREVIEW (stacking showcase) */}{" "}
      <section id="work">
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
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {" "}
            <div style={{ maxWidth: "600px" }}>
              {" "}
              <span className="eyebrow reveal">Selected Work</span>{" "}
              <h2 className="h-xl reveal d1" style={{ marginTop: "1.2rem" }}>
                Recent projects.
              </h2>{" "}
            </div>{" "}
            <a className="link-arrow reveal d2" href="/product-design">
              {"All case studies "}
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
          <div className="showcase">
            {" "}
            <article className="show-row t-green reveal">
              {" "}
              <div className="show-left">
                {" "}
                <h3>Rebuilding analytics around clarity and speed</h3>{" "}
                <p>
                  A complex enterprise analytics suite rebuilt on a unified design system — cutting
                  time-to-insight and unifying every product line.
                </p>{" "}
                <div className="btn-row">
                  <a className="btn btn--dark" href="/project-atlas">
                    View Case Study →
                  </a>
                </div>{" "}
              </div>{" "}
              <div className="show-right">
                {" "}
                <div className="mock-card">
                  {" "}
                  <div className="mtop">
                    {" "}
                    <div>
                      {" "}
                      <h4>Atlas — Analytics Platform Redesign</h4>{" "}
                      <p className="md">
                        A scalable web platform to manage data, products, and operational workflows.
                      </p>{" "}
                      <div className="meta">
                        {"Role: "}
                        <b>Lead Product Designer</b>
                        <br />
                        {"Scope: "}
                        <b>UX · UI · Design System</b>
                        <br />
                        {"Platform: "}
                        <b>Web Dashboard</b>
                      </div>{" "}
                    </div>{" "}
                    <div className="mock-shot reveal-img">
                      <div className="canvas cv-4">
                        <FallbackImg
                          className="ph"
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&h=570&q=80"
                          alt=""
                          loading="lazy"
                          fallback="https://picsum.photos/seed/hs1/760/570"
                        />
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="show-stats">
                  <div className="s">
                    <div className="n">40%</div>
                    <div className="t">Faster time-to-insight</div>
                  </div>
                  <div className="s">
                    <div className="n">35%</div>
                    <div className="t">Fewer support tickets</div>
                  </div>
                </div>{" "}
              </div>{" "}
            </article>{" "}
            <article className="show-row t-peach reveal">
              {" "}
              <div className="show-left">
                {" "}
                <h3>A wellness app that feels calm, not gamified</h3>{" "}
                <p>
                  A habit-forming wellness companion for a Series A startup — designed around quiet rituals
                  rather than streaks and noise.
                </p>{" "}
                <div className="btn-row">
                  <a className="btn btn--dark" href="/project-meadow">
                    View Case Study →
                  </a>
                </div>{" "}
              </div>{" "}
              <div className="show-right">
                {" "}
                <div className="mock-card alt">
                  {" "}
                  <div className="mtop">
                    {" "}
                    <div>
                      {" "}
                      <h4>Meadow — Wellness App</h4>{" "}
                      <p className="md">
                        A soothing, behaviour-science-led mobile experience people return to daily.
                      </p>{" "}
                      <div className="meta">
                        {"Role: "}
                        <b>Product Designer</b>
                        <br />
                        {"Scope: "}
                        <b>UX · UI Design</b>
                        <br />
                        {"Platform: "}
                        <b>{"iOS & Android"}</b>
                      </div>{" "}
                    </div>{" "}
                    <div className="mock-shot reveal-img">
                      <div className="canvas cv-1">
                        <FallbackImg
                          className="ph"
                          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=760&h=570&q=80"
                          alt=""
                          loading="lazy"
                          fallback="https://picsum.photos/seed/hs2/760/570"
                        />
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="show-stats">
                  <div className="s">
                    <div className="n">46%</div>
                    <div className="t">Day-30 retention</div>
                  </div>
                  <div className="s">
                    <div className="n">4.8★</div>
                    <div className="t">Average rating</div>
                  </div>
                </div>{" "}
              </div>{" "}
            </article>{" "}
            <article className="show-row t-beige reveal">
              {" "}
              <div className="show-left">
                {" "}
                <h3>Accessible public services for every citizen</h3>{" "}
                <p>
                  A WCAG-AA portal that turned confusing, inconsistent government forms into clear, guided
                  journeys served to millions.
                </p>{" "}
                <div className="btn-row">
                  <a className="btn btn--dark" href="/project-civic">
                    View Case Study →
                  </a>
                </div>{" "}
              </div>{" "}
              <div className="show-right">
                {" "}
                <div className="mock-card">
                  {" "}
                  <div className="mtop">
                    {" "}
                    <div>
                      {" "}
                      <h4>Civic One — Public Services Portal</h4>{" "}
                      <p className="md">
                        Plain-language, accessible digital services unified across departments.
                      </p>{" "}
                      <div className="meta">
                        {"Role: "}
                        <b>{"UX Lead & Consultant"}</b>
                        <br />
                        {"Scope: "}
                        <b>UX · Accessibility</b>
                        <br />
                        {"Platform: "}
                        <b>Web</b>
                      </div>{" "}
                    </div>{" "}
                    <div className="mock-shot reveal-img">
                      <div className="canvas cv-2">
                        <FallbackImg
                          className="ph"
                          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=760&h=570&q=80"
                          alt=""
                          loading="lazy"
                          fallback="https://picsum.photos/seed/hs3/760/570"
                        />
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="show-stats">
                  <div className="s">
                    <div className="n">89%</div>
                    <div className="t">Task completion</div>
                  </div>
                  <div className="s">
                    <div className="n">AA</div>
                    <div className="t">WCAG conformance</div>
                  </div>
                </div>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* PROCESS */}{" "}
      <section className="bg-alt" id="process">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            {" "}
            <span className="eyebrow reveal">Process</span>{" "}
            <h2 className="h-xl reveal d1" style={{ marginTop: "1.2rem" }}>
              How the work happens.
            </h2>{" "}
            <p className="lead reveal d2">
              A rigorous yet flexible path from first question to lasting impact.
            </p>{" "}
          </div>{" "}
          <div className="reveal">
            {" "}
            <div className="process">
              {" "}
              <div className="pstep">
                <span className="n">01</span>
                <h4>Discover</h4>
                <p>Immersing in the problem, users, and business context.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">02</span>
                <h4>Research</h4>
                <p>Interviews, audits, and evidence over assumptions.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">03</span>
                <h4>Strategy</h4>
                <p>Framing direction, priorities, and success metrics.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">04</span>
                <h4>Design</h4>
                <p>Systems, flows, and interfaces with intent.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">05</span>
                <h4>Prototype</h4>
                <p>Making ideas tangible to feel and test.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">06</span>
                <h4>Testing</h4>
                <p>Validating with real users, iterating fast.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">07</span>
                <h4>Launch</h4>
                <p>Shipping polished, accessible experiences.</p>
              </div>{" "}
              <div className="pstep">
                <span className="n">08</span>
                <h4>Iterate</h4>
                <p>Measuring, learning, and refining over time.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TESTIMONIALS */}{" "}
      <section id="testimonials">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            {" "}
            <span className="eyebrow reveal">Testimonials</span>{" "}
            <h2 className="h-xl reveal d1" style={{ marginTop: "1.2rem" }}>
              {"Words from clients, students & founders."}
            </h2>{" "}
          </div>{" "}
          <div className="grid t-grid">
            {" "}
            <article className="tcard reveal">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "Ritika reframed our entire product. She brought clarity where we had chaos and a design
                system our team still lives by."
              </p>
              <div className="who">
                <span className="avatar av-1"></span>
                <div>
                  <div className="nm">Arjun Mehta</div>
                  <div className="rl">Founder, Meadow (Startup)</div>
                </div>
              </div>
            </article>{" "}
            <article className="tcard reveal d1">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "The most engaging guest lecturer our students have had. She makes design thinking tangible
                and inspiring."
              </p>
              <div className="who">
                <span className="avatar av-2"></span>
                <div>
                  <div className="nm">Dr. Neha Kapoor</div>
                  <div className="rl">HoD, Design Faculty</div>
                </div>
              </div>
            </article>{" "}
            <article className="tcard reveal d2">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "Her work bridges discipline and emotion. The commissioned piece is the centrepiece of our
                collection."
              </p>
              <div className="who">
                <span className="avatar av-3"></span>
                <div>
                  <div className="nm">Isabella Rossi</div>
                  <div className="rl">Private Collector</div>
                </div>
              </div>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap center" style={{ maxWidth: "840px" }}>
          {" "}
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Let's collaborate
          </span>{" "}
          <h2
            className="display reveal d1"
            style={{ margin: "1.4rem 0", fontSize: "clamp(2.2rem,6vw,4.6rem)" }}
          >
            {"Have an idea worth "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              designing
            </em>
            ?
          </h2>{" "}
          <p className="lead reveal d2" style={{ margin: "0 auto 2.2rem", maxWidth: "54ch" }}>
            Whether it's a product, a brand, a workshop, or a commissioned artwork — I'd love to hear about
            it.
          </p>{" "}
          <div className="btn-row reveal d3" style={{ justifyContent: "center" }}>
            {" "}
            <a className="btn btn--solid" href="/contact">
              {"Start a project "}
              <span className="arr">→</span>
            </a>{" "}
            <a className="btn btn--ghost" href="/artwork">
              Commission artwork
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* READY TO START BAND */}{" "}
      <section style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="start-cta reveal">
            {" "}
            <svg
              className="sc-rings"
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              {" "}
              <g fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2">
                {" "}
                <circle cx="820" cy="-40" r="260" />
                <circle cx="820" cy="-40" r="380" /> <circle cx="1060" cy="540" r="220" />
                <circle cx="1060" cy="540" r="340" />{" "}
              </g>{" "}
            </svg>{" "}
            <div className="sc-left">
              {" "}
              <span className="eyebrow sc-eyebrow">Let's build something great</span>{" "}
              <h2>Ready to start your next project?</h2>{" "}
              <a className="btn btn--ink" href="/contact">
                Contact Me
              </a>{" "}
            </div>{" "}
            <div className="book">
              {" "}
              <div className="k">
                <span className="d"></span>Available for project
              </div>{" "}
              <h3>Quick 15-minute call</h3> <p>Pick a time that works for you.</p>{" "}
              <a className="btn btn--accent" href="/contact">
                Book a free call
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
