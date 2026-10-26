import type { Metadata } from "next";
import FallbackImg from "@/components/FallbackImg";

export const metadata: Metadata = {
  title: "Insights — Ritika Dhingra",
  description:
    "Articles by Ritika Dhingra on UX, product design, teaching, creativity, art, design systems, and AI in design.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        {" "}
        <div className="hero-art" aria-hidden="true">
          <span className="blob b3" data-parallax="0.12"></span>
        </div>{" "}
        <div className="wrap">
          {" "}
          <div className="crumbs reveal">
            <a href="/">Home</a> <span>/</span>
            {" Insights"}
          </div>{" "}
          <span className="eyebrow reveal">Insights</span>{" "}
          <h1 className="display reveal d1" style={{ marginTop: "1rem" }}>
            {"Notes on design, teaching & "}
            <em className="serif" style={{ color: "var(--accent)" }}>
              creativity.
            </em>
          </h1>{" "}
          <p className="lead reveal d2">
            Thinking out loud about UX, product design, the studio, and where craft meets technology.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="reveal">
            {" "}
            <div className="filters" data-filter-group="" data-filter-target=".post">
              {" "}
              <button className="filter active" data-f="all">
                All
              </button>{" "}
              <button className="filter" data-f="ux">
                UX
              </button>{" "}
              <button className="filter" data-f="product">
                Product Design
              </button>{" "}
              <button className="filter" data-f="teaching">
                Teaching
              </button>{" "}
              <button className="filter" data-f="creativity">
                Creativity
              </button>{" "}
              <button className="filter" data-f="art">
                Art
              </button>{" "}
              <button className="filter" data-f="systems">
                Design Systems
              </button>{" "}
              <button className="filter" data-f="ai">
                AI in Design
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid blog-grid">
            {" "}
            <a className="post feature reveal" data-cat="ai product" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-art8">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/art8254/900/1180"
                  />
                </div>
              </div>{" "}
              <span className="cat">AI in Design</span>
              <h3>Designing with AI without losing the human</h3>{" "}
              <div className="info">
                <span>8 min read</span>
                <span>·</span>
                <span>Featured</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal d1" data-cat="ux" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-1">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/art77407/900/1180"
                  />
                </div>
              </div>{" "}
              <span className="cat">UX</span>
              <h3>The questions great UX research starts with</h3>{" "}
              <div className="info">
                <span>6 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal d2" data-cat="systems product" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-6">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/system6736/1280/760"
                  />
                </div>
              </div>{" "}
              <span className="cat">Design Systems</span>
              <h3>When to build a design system — and when not to</h3>{" "}
              <div className="info">
                <span>7 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal" data-cat="teaching" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-2">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/system53737/1280/760"
                  />
                </div>
              </div>{" "}
              <span className="cat">Teaching</span>
              <h3>What I learned teaching 600 design students</h3>{" "}
              <div className="info">
                <span>5 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal d1" data-cat="art creativity" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-art3">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/art47525/900/1180"
                  />
                </div>
              </div>{" "}
              <span className="cat">Art</span>
              <h3>Why I paint between product sprints</h3>{" "}
              <div className="info">
                <span>4 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal d2" data-cat="creativity" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-5">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&h=1180&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/art85013/900/1180"
                  />
                </div>
              </div>{" "}
              <span className="cat">Creativity</span>
              <h3>Building a creative practice that lasts</h3>{" "}
              <div className="info">
                <span>6 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal" data-cat="product ux" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-4">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/insights12010/1280/760"
                  />
                </div>
              </div>{" "}
              <span className="cat">Product Design</span>
              <h3>From discovery to launch: a practical map</h3>{" "}
              <div className="info">
                <span>9 min read</span>
              </div>{" "}
            </a>{" "}
            <a className="post reveal d1" data-cat="ux" href="#">
              {" "}
              <div className="thumb reveal-img">
                <div className="canvas cv-3">
                  <FallbackImg
                    className="ph"
                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1280&h=760&q=80"
                    alt=""
                    loading="lazy"
                    fallback="https://picsum.photos/seed/insights27465/1280/760"
                  />
                </div>
              </div>{" "}
              <span className="cat">UX</span>
              <h3>Microcopy is the interface you forgot to design</h3>{" "}
              <div className="info">
                <span>5 min read</span>
              </div>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* NEWSLETTER */}{" "}
      <section className="bg-alt">
        {" "}
        <div className="wrap">
          {" "}
          <div className="news reveal">
            {" "}
            <span className="blob b1" style={{ top: "-20%", right: "-10%" }}></span>{" "}
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Newsletter
            </span>{" "}
            <h2 className="h-lg" style={{ margin: "1rem 0 .6rem" }}>
              Get new essays in your inbox.
            </h2>{" "}
            <p>Occasional notes on design, teaching, and the studio. No spam, unsubscribe anytime.</p>{" "}
            <form className="news-form" data-form="">
              {" "}
              <input type="email" placeholder="your@email.com" required aria-label="Email address" />{" "}
              <button className="btn btn--accent" type="submit">
                {"Subscribe "}
                <span className="arr">→</span>
              </button>{" "}
            </form>{" "}
            <p className="form-success" style={{ marginTop: "1rem" }}>
              Thanks for subscribing — you'll hear from me soon.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
