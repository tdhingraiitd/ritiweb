import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Teaching & Workshops — Ritika Dhingra",
  description:
    "Ritika Dhingra teaches design thinking, UX, product design, interaction design, human-centered design, and portfolio building as a guest lecturer, mentor, and corporate trainer.",
};

export default function TeachingPage() {
  return (
    <>
      <section className="page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b2" data-parallax="0.1"></span>
          <span className="blob b3" data-parallax="0.16"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span>
            {" Teaching & Workshops"}
          </div>{" "}
          <span className="eyebrow reveal">{"Teaching & Workshops"}</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Growing the next generation of "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              designers.
            </em>
          </h1>{" "}
          <p className="lead reveal d2">
            As guest faculty, mentor, and corporate trainer, I help students and teams think clearly, design
            with empathy, and build portfolios that open doors.
          </p>{" "}
          <div className="btn-row reveal d3" style={{ marginTop: "2rem" }}>
            <a className="btn btn--accent" href="/contact">
              {"Schedule a Workshop "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href="/contact">
              Invite as Guest Lecturer
            </a>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap stats">
          {" "}
          <div className="stat reveal">
            <div className="n">
              <span data-count="600" data-suffix="+">
                0
              </span>
            </div>
            <div className="l">Students mentored</div>
          </div>{" "}
          <div className="stat reveal d1">
            <div className="n">
              <span data-count="40" data-suffix="+">
                0
              </span>
            </div>
            <div className="l">Workshops delivered</div>
          </div>{" "}
          <div className="stat reveal d2">
            <div className="n">
              <span data-count="12" data-suffix="">
                0
              </span>
            </div>
            <div className="l">Partner institutions</div>
          </div>{" "}
          <div className="stat reveal d3">
            <div className="n">
              <span data-count="95" data-suffix="%">
                0
              </span>
            </div>
            <div className="l">Would recommend</div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TOPICS */}{" "}
      <section>
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">What I teach</span>
            <h2 className="h-xl reveal d1" style={{ marginTop: "1rem" }}>
              {"Topics & sessions."}
            </h2>
            <p className="lead reveal d2">
              Tailored for design schools, universities, bootcamps, and in-house product teams.
            </p>
          </div>{" "}
          <div className="grid expertise-grid">
            {" "}
            <article className="xcard reveal">
              <span className="glow"></span>
              <span className="num">01</span>
              <h3>Design Thinking</h3>
              <p className="muted">Reframing problems and generating ideas through human-centered methods.</p>
            </article>{" "}
            <article className="xcard reveal d1">
              <span className="glow"></span>
              <span className="num">02</span>
              <h3>UX</h3>
              <p className="muted">Research, journeys, and usability — designing for real people.</p>
            </article>{" "}
            <article className="xcard reveal d2">
              <span className="glow"></span>
              <span className="num">03</span>
              <h3>Product Design</h3>
              <p className="muted">From discovery to launch: building products that matter.</p>
            </article>{" "}
            <article className="xcard reveal">
              <span className="glow"></span>
              <span className="num">04</span>
              <h3>Interaction Design</h3>
              <p className="muted">Motion, feedback, and the craft of intuitive interfaces.</p>
            </article>{" "}
            <article className="xcard reveal d1">
              <span className="glow"></span>
              <span className="num">05</span>
              <h3>Human-Centered Design</h3>
              <p className="muted">Empathy and inclusion as the foundation of good design.</p>
            </article>{" "}
            <article className="xcard reveal d2">
              <span className="glow"></span>
              <span className="num">06</span>
              <h3>Portfolio Building</h3>
              <p className="muted">Telling your story and presenting work that gets you hired.</p>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FORMATS */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Formats</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              Ways to work together.
            </h2>
          </div>{" "}
          <div className="svc reveal">
            {" "}
            <div className="svc-row">
              <div className="idx">01</div>
              <div>
                <h3>Guest Lecturer</h3>
                <p className="muted">Keynote sessions and lectures at design schools and universities.</p>
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
                <h3>Design Mentor</h3>
                <p className="muted">One-on-one and cohort mentorship for emerging designers.</p>
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
                <h3>Portfolio Reviews</h3>
                <p className="muted">Actionable critique to sharpen students' and juniors' portfolios.</p>
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
                <h3>UX Workshops</h3>
                <p className="muted">Hands-on, practical workshops on research, IA, and usability.</p>
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
                <h3>Corporate Design Training</h3>
                <p className="muted">Upskilling product and marketing teams in design fundamentals.</p>
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
      {/* CLASSROOM GALLERY */}{" "}
      <section>
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">In the room</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              {"Classroom & workshop sessions."}
            </h2>
          </div>{" "}
          <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-4" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach62781/1280/760"
                />
              </div>
            </div>{" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-2" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach65065/1280/760"
                />
              </div>
            </div>{" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-5" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach46663/1280/760"
                />
              </div>
            </div>{" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-6" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach90405/1280/760"
                />
              </div>
            </div>{" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-1" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach60621/1280/760"
                />
              </div>
            </div>{" "}
            <div
              className="reveal-img"
              style={{ aspectRatio: "4/3", borderRadius: "18px", overflow: "hidden" }}
            >
              <div className="canvas cv-3" style={{ height: "100%" }}>
                <FallbackImg
                  className="ph"
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1280&h=760&q=80"
                  alt=""
                  loading="lazy"
                  fallback="https://picsum.photos/seed/teach66238/1280/760"
                />
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TESTIMONIALS */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="section-head">
            <span className="eyebrow reveal">Voices</span>
            <h2 className="h-lg reveal d1" style={{ marginTop: "1rem" }}>
              {"From students & faculty."}
            </h2>
          </div>{" "}
          <div className="grid t-grid">
            {" "}
            <article className="tcard reveal">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "Her portfolio review changed how I present my work. I landed my first design role weeks
                later."
              </p>
              <div className="who">
                <span className="avatar av-4"></span>
                <div>
                  <div className="nm">Sana Iyer</div>
                  <div className="rl">Design Student</div>
                </div>
              </div>
            </article>{" "}
            <article className="tcard reveal d1">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "The most engaging guest lecturer our students have had — practical, warm, and deeply
                knowledgeable."
              </p>
              <div className="who">
                <span className="avatar av-2"></span>
                <div>
                  <div className="nm">Dr. Neha Kapoor</div>
                  <div className="rl">Head of Design Faculty</div>
                </div>
              </div>
            </article>{" "}
            <article className="tcard reveal d2">
              <div className="stars">★★★★★</div>
              <p className="quote">
                "Our corporate UX workshop with Ritika levelled up the whole product team in two days."
              </p>
              <div className="who">
                <span className="avatar av-5"></span>
                <div>
                  <div className="nm">Rahul Verma</div>
                  <div className="rl">Product Lead, Enterprise</div>
                </div>
              </div>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section>
        {" "}
        <div className="wrap center" style={{ maxWidth: "760px" }}>
          {" "}
          <h2 className="h-xl reveal" style={{ marginBottom: "1.4rem" }}>
            Bring a workshop to your team or campus.
          </h2>{" "}
          <div className="btn-row reveal d1" style={{ justifyContent: "center" }}>
            <a className="btn btn--solid" href="/contact">
              {"Schedule Workshop "}
              <span className="arr">→</span>
            </a>
            <a className="btn btn--ghost" href="/contact">
              Invite as Guest Lecturer
            </a>
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
