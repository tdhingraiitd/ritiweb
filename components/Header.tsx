"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const overHero = usePathname() === "/";
  return (
    <header className={overHero ? "nav nav--over-hero" : "nav"}>
      {" "}
      <div className="wrap">
        {" "}
        <a className="brand" href="/">
          <span className="dot"></span>Ritika Dhingra
        </a>{" "}
        <nav className="nav-links" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/product-design">Product Design</a>
          <a href="/artwork">Artwork</a>
          <a href="/teaching">Teaching</a>
          <a href="/consulting">Consulting</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
        </nav>{" "}
        <div className="nav-right">
          {" "}
          <button className="theme-toggle" data-theme-toggle="" aria-label="Toggle dark mode">
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>{" "}
          <a className="btn btn--solid nav-cta" href="/contact">
            Work With Me
          </a>{" "}
          <button className="burger" aria-label="Open menu">
            <span></span>
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
