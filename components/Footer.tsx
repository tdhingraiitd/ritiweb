export default function Footer() {
  return (
    <footer className="footer">
      {" "}
      <div className="wrap">
        {" "}
        <div className="footer-top">
          {" "}
          <div className="footer-cta">
            <h2>Designing what comes next.</h2>
            <p className="muted" style={{ maxWidth: "40ch" }}>
              Product design, brand, teaching, and contemporary art — from one curious practice.
            </p>{" "}
            <div className="socials" style={{ marginTop: "1.6rem" }}>
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
              <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.1-3.8a4.7 4.7 0 0 0-4.9 4.7c0 .9.3 1.5.7 2 .2.2.2.3.1.5l-.2.9c-.1.3-.3.4-.6.2-1.2-.5-1.7-1.9-1.7-3.4 0-2.5 2.1-5.5 6.3-5.5 3.4 0 5.6 2.4 5.6 5.1 0 3.5-1.9 6.1-4.8 6.1-1 0-1.9-.5-2.2-1.1l-.6 2.4c-.2.8-.7 1.7-1.1 2.3A10 10 0 1 0 12 2z" />
                </svg>
              </a>{" "}
              <a href="mailto:hello@ritikadhingra.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="/product-design">Product Design</a>
            <a href="/artwork">Artwork</a>
            <a href="/teaching">{"Teaching & Workshops"}</a>
            <a href="/consulting">Consulting</a>
            <a href="/insights">Insights</a>
          </div>{" "}
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="/contact">Work With Me</a>
            <a href="/contact">Book Consultation</a>
            <a href="/contact">Schedule Workshop</a>
            <a href="/artwork">Commission Artwork</a>
            <a href="mailto:hello@ritikadhingra.com">hello@ritikadhingra.com</a>
          </div>{" "}
        </div>{" "}
        <div className="footer-bottom">
          <span>
            {"© "}
            <span data-year="">2026</span>
            {" Ritika Dhingra. All rights reserved."}
          </span>
          <span>{"Designed & built with intention."}</span>
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
