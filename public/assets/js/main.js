/* =========================================================
   Ritika Dhingra — Portfolio interactions
   ========================================================= */
(function () {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== WhatsApp config — CHANGE THIS NUMBER =====
     Use full international format, digits only (country code + number),
     no “+”, spaces, or dashes. Example for India: 919812345678 */
  const WA_NUMBER = '919999999999';
  const WA_DEFAULT_MSG = "Hi Ritika, I came across your portfolio and would love to connect and discuss a project.";
  const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || WA_DEFAULT_MSG)}`;
  const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.74c0 4.47-3.64 8.11-8.11 8.11h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.04 8.04 0 0 1-1.24-4.29c0-4.47 3.64-8.11 8.1-8.11zm-2.79 4.36c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41-.14-.01-.3-.01-.46-.01z"/></svg>';

  function bindWhatsApp() {
    // Floating button (one per page)
    if (!document.querySelector('.wa-float')) {
      const a = document.createElement('a');
      a.className = 'wa-float';
      a.href = waLink();
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', 'Chat on WhatsApp');
      a.innerHTML = WA_ICON;
      document.body.appendChild(a);
    }
    // Add WhatsApp icon to each socials cluster (before email if present)
    document.querySelectorAll('.socials').forEach((box) => {
      if (box.querySelector('a.wa')) return;
      const a = document.createElement('a');
      a.className = 'wa';
      a.href = waLink();
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', 'WhatsApp');
      a.innerHTML = WA_ICON;
      const email = box.querySelector('a[href^="mailto"]');
      if (email) box.insertBefore(a, email); else box.appendChild(a);
    });
    // Any element marked data-wa gets a proper link + prefilled message
    document.querySelectorAll('[data-wa]').forEach((el) => {
      el.setAttribute('href', waLink(el.getAttribute('data-wa-text') || ''));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem('rd-theme'); } catch (e) { return null; } })();
  if (saved) root.setAttribute('data-theme', saved);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme', 'dark');

  function bindTheme() {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('rd-theme', next); } catch (e) {}
      });
    });
  }

  /* ---------- Nav scroll state + progress ---------- */
  function bindScroll() {
    const nav = document.querySelector('.nav');
    const progress = document.querySelector('.progress');
    const toTop = document.querySelector('.to-top');
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 30);
      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
      if (toTop) toTop.classList.toggle('show', y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
  }

  /* ---------- Mobile menu ---------- */
  function bindMenu() {
    const burger = document.querySelector('.burger');
    if (!burger) return;
    burger.addEventListener('click', () => document.body.classList.toggle('menu-open'));
    document.querySelectorAll('.mobile-menu a').forEach((a) =>
      a.addEventListener('click', () => document.body.classList.remove('menu-open'))
    );
  }

  /* ---------- Reveal on scroll ---------- */
  function bindReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-img, .tr');
    if (!('IntersectionObserver' in window) || reduced) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Text reveal split ---------- */
  function splitText() {
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (el.dataset.done) return;
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w) => `<span class="w"><i>${w}</i></span>`).join(' ');
      el.classList.add('tr');
      el.dataset.done = '1';
    });
  }

  /* ---------- Parallax blobs ---------- */
  function bindParallax() {
    if (reduced) return;
    const blobs = document.querySelectorAll('[data-parallax]');
    if (!blobs.length) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        blobs.forEach((b) => {
          const sp = parseFloat(b.dataset.parallax) || 0.15;
          b.style.transform = `translate3d(0, ${y * sp}px, 0)`;
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Counters ---------- */
  function bindCounters() {
    const nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1400; const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (Number.isInteger(target) ? Math.round(target * eased) : (target * eased).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (reduced) { nums.forEach((n) => (n.textContent = n.dataset.count + (n.dataset.suffix || ''))); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nums.forEach((n) => io.observe(n));
  }

  /* ---------- Filters (generic) ---------- */
  function bindFilters() {
    document.querySelectorAll('[data-filter-group]').forEach((group) => {
      const buttons = group.querySelectorAll('.filter');
      const targetSel = group.dataset.filterTarget;
      const items = document.querySelectorAll(targetSel);
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          buttons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          const f = btn.dataset.f;
          items.forEach((it) => {
            const cats = (it.dataset.cat || '').split(' ');
            const show = f === 'all' || cats.includes(f);
            it.classList.toggle('hide', !show);
          });
        });
      });
    });
  }

  /* ---------- Search ---------- */
  function bindSearch() {
    document.querySelectorAll('[data-search]').forEach((input) => {
      const items = document.querySelectorAll(input.dataset.search);
      input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        items.forEach((it) => {
          const txt = (it.dataset.title || it.textContent).toLowerCase();
          it.classList.toggle('hide', q && !txt.includes(q));
        });
      });
    });
  }

  /* ---------- Case study modal ---------- */
  function bindModal() {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    const panel = modal.querySelector('.modal-panel-content');
    const open = (data) => {
      panel.innerHTML = data;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
    document.querySelectorAll('[data-case]').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const tpl = document.getElementById(card.dataset.case);
        if (tpl) open(tpl.innerHTML);
      });
    });
    modal.addEventListener('click', (e) => {
      if (e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Forms ---------- */
  function bindForms() {
    document.querySelectorAll('[data-form]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ok = form.querySelector('.form-success');
        if (ok) { ok.classList.add('show'); ok.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); }
        form.reset();
        setTimeout(() => ok && ok.classList.remove('show'), 6000);
      });
    });
  }

  /* ---------- Custom cursor ---------- */
  function bindCursor() {
    if (window.matchMedia('(hover: none)').matches || reduced) return;
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    let rx = 0, ry = 0, mx = 0, my = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll('a, button, .work-card, .art-item, .xcard, .pillar, .filter').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  /* ---------- Artwork carousel ---------- */
  function bindCarousel() {
    document.querySelectorAll('[data-carousel]').forEach((c) => {
      const track = c.querySelector('.carousel-track');
      const slides = Array.from(c.querySelectorAll('.carousel-slide'));
      if (!track || slides.length <= 1) { c.setAttribute('data-single', ''); return; }
      let idx = 0;
      const dotsWrap = c.querySelector('.carousel-dots');
      const cur = c.querySelector('.carousel-count .cur');
      const tot = c.querySelector('.carousel-count .tot');
      if (tot) tot.textContent = slides.length;
      if (dotsWrap) {
        slides.forEach((_, i) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to image ' + (i + 1));
          if (i === 0) b.classList.add('active');
          b.addEventListener('click', () => go(i));
          dotsWrap.appendChild(b);
        });
      }
      function go(i) {
        idx = (i + slides.length) % slides.length;
        track.style.transform = 'translateX(' + (-idx * 100) + '%)';
        if (dotsWrap) Array.from(dotsWrap.children).forEach((d, j) => d.classList.toggle('active', j === idx));
        if (cur) cur.textContent = idx + 1;
      }
      const prev = c.querySelector('.carousel-btn.prev');
      const next = c.querySelector('.carousel-btn.next');
      if (prev) prev.addEventListener('click', () => go(idx - 1));
      if (next) next.addEventListener('click', () => go(idx + 1));
      // swipe
      let x0 = null;
      c.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
      c.addEventListener('touchend', (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
        x0 = null;
      });
      // keyboard when focused/hovered
      c.tabIndex = 0;
      c.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') go(idx - 1);
        else if (e.key === 'ArrowRight') go(idx + 1);
      });
    });
  }

  /* ---------- Active nav link ---------- */
  function markActive() {
    const clean = (p) => p.replace(/\/+$/, '') || '/';
    const path = clean(location.pathname);
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((a) => {
      if (clean(a.getAttribute('href') || '') === path) a.classList.add('active');
    });
  }

  /* ---------- Year ---------- */
  function setYear() {
    document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  function init() {
    bindTheme(); bindScroll(); bindMenu(); splitText(); bindReveal();
    bindParallax(); bindCounters(); bindFilters(); bindSearch();
    bindModal(); bindForms(); markActive(); setYear(); bindWhatsApp(); bindCarousel();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
