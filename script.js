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