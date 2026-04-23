// ── DOM references ───────────────────────────────
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');   // FIX: was used but never declared
const navbar     = document.getElementById('navbar');
const contactForm = document.getElementById('contactForm'); // FIX: element now exists in HTML
 
// ── Hamburger toggle ─────────────────────────────
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
 
// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
 
// ── Scroll reveal ────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));
 
// ── Progress bars ────────────────────────────────
const fills = document.querySelectorAll('.bar-fill');
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width;
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => barObs.observe(f));
 
// ── Navbar scroll tint ───────────────────────────
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor =
    window.scrollY > 60 ? 'rgba(0,229,255,.12)' : 'var(--border)';
});
 
// ── Contact form ─────────────────────────────────
// FIX: guard with if-check so no crash if section is absent
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent (demo)');
    this.reset();
  });
}
<script>
    /* Cursor */
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animCursor() {
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('a,button,.skill-list li,.project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '0.8';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '0.5';
      });
    });

    /* Typing effect */
    const phrases = [
      'Web Security Researcher',
      'Ethical Hacker in Training',
      'CTF Player',
      'Network Enthusiast',
    ];
    let pi = 0, ci = 0, del = false;
    const typed = document.getElementById('typed');
    function type() {
      const phrase = phrases[pi];
      if (!del) {
        typed.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { del = true; setTimeout(type, 1800); return; }
      } else {
        typed.textContent = phrase.slice(0, --ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(type, del ? 40 : 80);
    }
    type();

    /* Scroll reveal */
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* Active nav link */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur
          ? 'var(--green)' : '';
      });
    });
  </script>
