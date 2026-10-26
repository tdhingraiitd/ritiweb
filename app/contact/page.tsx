import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ritika Dhingra",
  description:
    "Work with Ritika Dhingra — book a consultation, schedule a workshop, or commission an artwork. Get in touch to start your project.",
};

export default function ContactPage() {
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
            {" Contact"}
          </div>{" "}
          <span className="eyebrow reveal">Contact</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Let's make something "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              remarkable.
            </em>
          </h1>{" "}
          <p className="lead reveal d2">
            Tell me about your project — a product, a brand, a workshop, or a commissioned artwork. I read
            every message personally.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        {" "}
        <div className="wrap contact-wrap">
          {" "}
          {/* FORM */}{" "}
          <div className="reveal">
            {" "}
            <form data-form="">
              {" "}
              <p className="form-success">
                Thank you — your message has been received. I'll get back to you within two business days.
              </p>{" "}
              <div className="field-2">
                {" "}
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required placeholder="Your full name" />
                </div>{" "}
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required placeholder="you@email.com" />
                </div>{" "}
              </div>{" "}
              <div className="field-2">
                {" "}
                <div className="field">
                  <label htmlFor="company">Company / Institution</label>
                  <input id="company" type="text" placeholder="Optional" />
                </div>{" "}
                <div className="field">
                  <label htmlFor="ptype">Project Type</label>{" "}
                  <select id="ptype">
                    <option value="">Select…</option>
                    <option>Product Design</option>
                    <option>UX Consulting</option>
                    <option>Design System</option>
                    <option>Branding / Graphic</option>
                    <option>Workshop / Teaching</option>
                    <option>Commissioned Artwork</option>
                    <option>Other</option>
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <div className="field-2">
                {" "}
                <div className="field">
                  <label htmlFor="budget">Budget</label>{" "}
                  <select id="budget">
                    <option value="">Select…</option>
                    <option>Under ₹5L</option>
                    <option>₹5L – ₹15L</option>
                    <option>₹15L – ₹30L</option>
                    <option>₹40L+</option>
                    <option>Not sure</option>
                  </select>{" "}
                </div>{" "}
                <div className="field">
                  <label htmlFor="timeline">Timeline</label>{" "}
                  <select id="timeline">
                    <option value="">Select…</option>
                    <option>ASAP</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Flexible</option>
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about your project, goals, and timeline…"
                />
              </div>{" "}
              <div className="btn-row">
                {" "}
                <button className="btn btn--accent" type="submit">
                  {"Send message "}
                  <span className="arr">→</span>
                </button>{" "}
                <a className="btn btn--ghost" href="#" download>
                  Download Resume
                </a>{" "}
              </div>{" "}
              <p className="form-note">
                {"Prefer email? Reach me directly at "}
                <a href="mailto:hello@ritikadhingra.com" style={{ color: "var(--accent)" }}>
                  hello@ritikadhingra.com
                </a>
              </p>{" "}
            </form>{" "}
          </div>{" "}
          {/* ASIDE */}{" "}
          <aside className="contact-aside reveal d1">
            {" "}
            <div className="info-block">
              <div className="k">Email</div>
              <div className="v">hello@ritikadhingra.com</div>
            </div>{" "}
            <div className="info-block">
              <div className="k">Based in</div>
              <div className="v">New Delhi · Working worldwide</div>
            </div>{" "}
            <div className="info-block">
              <div className="k">Availability</div>
              <div className="v">Open for select projects — 2026</div>
            </div>{" "}
            <div className="cta-cards">
              {" "}
              <a className="cta-card" href="#">
                <div>
                  <div className="t">Book Consultation</div>
                  <div className="d">30-min intro call via Google Calendar</div>
                </div>
                <span className="go">
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
              </a>{" "}
              <a className="cta-card" href="#">
                <div>
                  <div className="t">Schedule Workshop</div>
                  <div className="d">{"For teams, campuses & cohorts"}</div>
                </div>
                <span className="go">
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
              </a>{" "}
              <a className="cta-card" href="#">
                <div>
                  <div className="t">Commission Artwork</div>
                  <div className="d">Original pieces for home or office</div>
                </div>
                <span className="go">
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
              </a>{" "}
            </div>{" "}
            <div className="socials" style={{ marginTop: "1.8rem" }}>
              {" "}
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05C12.4 8.9 14 8 16 8c4 0 5 2.6 5 6V24h-4v-7c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.8V24H8V8z" />
                </svg>
              </a>{" "}
              <a href="https://behance.net" aria-label="Behance" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.2 7.5c1.6 0 3 .9 3 2.8 0 1-.5 1.7-1.3 2.1 1.1.3 1.7 1.2 1.7 2.4 0 2.1-1.7 3-3.6 3H2V7.5h6.2zM4.6 11.2h2.9c1.6 0 1.6-2.1 0-2.1H4.6v2.1zm0 5.2h3c1.8 0 1.8-2.4 0-2.4h-3v2.4zM22 13.6c0 .2 0 .4-.02.6h-5.6c.1 1.6 1.9 1.7 2.5 1 .2-.2.4-.3.6-.3h1.9c-.5 1.9-2.2 2.8-4.1 2.8-2.6 0-4.3-1.8-4.3-4.4 0-2.5 1.8-4.4 4.3-4.4 2.7 0 4.3 2.3 4.2 4.7zm-5.6-1.1h3.4c-.1-1.5-2-1.6-2.8-.9-.3.2-.5.5-.6.9zM15 8h4.7v1.2H15V8z" />
                </svg>
              </a>{" "}
              <a href="https://dribbble.com" aria-label="Dribbble" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M5 6.5c3 3.5 8 5 13.5 4.8M8.5 3.2c4 5 5.5 10.5 5.8 17M21 13c-5-1.5-9 .3-11.5 5.5" />
                </svg>
              </a>{" "}
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>{" "}
              <a href="mailto:hello@ritikadhingra.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </a>{" "}
            </div>{" "}
          </aside>{" "}
        </div>{" "}
      </section>
    </>
  );
}
