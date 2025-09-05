// ===== Scrollspy for active sidebar link =====
const links = Array.from(document.querySelectorAll('.nav-link'));
const sections = links.map(a => document.querySelector(a.getAttribute('href')));

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = '#' + entry.target.id;
    const link = links.find(a => a.getAttribute('href') === id);
    if (link) link.setAttribute('aria-current', entry.isIntersecting ? 'true' : 'false');
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

sections.forEach(sec => sec && spy.observe(sec));