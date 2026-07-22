const projects = [
  {name:"NIVEA", brand:"NIVEA", logo:"images/logo-nivea.svg", category:"live", year:"2026", software:"—", desc:"Live streaming campaign untuk NIVEA dengan interaksi real-time yang engaging.", image:"images/NIVEA.jpg"},
  {name:"OLAY", brand:"OLAY", logo:"images/logo-olay.svg", category:"live", year:"2026", software:"—", desc:"Sesi live streaming OLAY yang menghadirkan pengalaman beauty interaktif secara langsung.", image:"images/OLAY TIKTOK.jpg"},
  {name:"OLAY", brand:"OLAY", logo:"images/logo-olay.svg", category:"live", year:"2026", software:"—", desc:"Kampanye live OLAY di platform digital dengan konten kreatif dan audiens yang terlibat.", image:"images/OLAY TIKTOK 2.jpg"},
  {name:"P&G", brand:"P&G", logo:"images/logo-pg.svg", category:"live", year:"2026", software:"—", desc:"Live shopping P&G yang memadukan brand story dengan pengalaman belanja langsung.", image:"images/P&G SHOPEE.jpg"},
  {name:"SENKA", brand:"SENKA", logo:null, category:"live", year:"2026", software:"—", desc:"Live streaming SENKA dengan fokus pada skincare routine dan interaksi audiens.", image:"images/SENKA.jpg"},
  {name:"SKIN1004", brand:"SKIN1004", logo:"images/logo-skin1004.png", category:"live", year:"2026", software:"—", desc:"Live brand activation SKIN1004 yang memperkenalkan produk ke pasar baru.", image:"images/SKIN1004.jpg"}
];

const gradients = [
  'linear-gradient(135deg,#0a2e28 0%,#061a14 40%,#0d4035 80%,#18e0a3 100%)',
  'linear-gradient(160deg,#071c33 0%,#040d1a 40%,#0f2d54 80%,#2f7fdb 100%)',
  'linear-gradient(110deg,#0d2b26 0%,#061a16 40%,#144a3e 80%,#5be89a 100%)',
  'linear-gradient(140deg,#081a30 0%,#040d1a 30%,#1a3d6e 80%,#6fd0f2 100%)',
  'linear-gradient(125deg,#0a2e28 0%,#061a14 30%,#0d4035 70%,#18e0a3 100%)',
  'linear-gradient(150deg,#071c33 0%,#040d1a 50%,#0f2d54 80%,#2f7fdb 100%)',
];

const track = document.getElementById('gallery-track');
const cards = [];

// ---------- Build cards ----------

// 1. About CTA
{
  const el = document.createElement('div');
  el.className = 'project-card cta';
  el.style.background = 'linear-gradient(135deg,#0b0b0f 0%,#0a120e 50%,#071c33 100%)';
  el.dataset.section = 'about';
  el.innerHTML = `
    <div class="cta-label">About</div>
    <div class="cta-title">Ranggaraar</div>
    <div class="cta-text">
      Digital designer & visual artist. Crafting calm, detailed, slightly cinematic visual experiences — blending design, motion, and storytelling.
    </div>
    <a class="cta-btn" href="index.html" style="color:rgba(255,255,255,0.35);border-color:rgba(255,255,255,0.12);">View Portfolio →</a>
  `;
  track.appendChild(el);
  cards.push(el);
}

// 2-7. Project cards
projects.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'project-card';
  el.style.background = gradients[i % gradients.length];
  el.dataset.index = i;
  el.dataset.section = 'project';
  const num = String(i + 1).padStart(2, '0');
  el.innerHTML = `
    <img class="card-bg" src="${p.image}" alt="${p.name}" loading="lazy" aria-hidden="true">
    <div class="card-overlay"></div>
    <span class="card-number">${num}</span>
    <h2 class="card-title">${p.name}</h2>
    <p class="card-desc">${p.desc.split('.')[0]}.</p>
    <span class="card-year">${p.year}</span>
  `;
  track.appendChild(el);
  cards.push(el);
});

// 8. Skills CTA
{
  const el = document.createElement('div');
  el.className = 'project-card cta';
  el.style.background = 'linear-gradient(160deg,#0b0b0f 0%,#071c33 30%,#0a2e28 100%)';
  el.dataset.section = 'skills';
  el.innerHTML = `
    <div class="cta-label">Skills</div>
    <div class="cta-title">Tools & Expertise</div>
    <div class="skills-grid">
      <span>UI/UX Design</span>
      <span>Motion Design</span>
      <span>Brand Identity</span>
      <span>Live Streaming</span>
      <span>Video Editing</span>
      <span>Frontend Dev</span>
    </div>
  `;
  track.appendChild(el);
  cards.push(el);
}

// 9. Contact CTA
{
  const el = document.createElement('div');
  el.className = 'project-card cta';
  el.style.background = 'linear-gradient(140deg,#0b0b0f 0%,#0a2e28 30%,#071c33 100%)';
  el.dataset.section = 'contact';
  el.innerHTML = `
    <div class="cta-label">Contact</div>
    <div class="cta-title">Get in Touch</div>
    <div class="cta-text">
      Have a project in mind or just want to say hi? Reach out and let's create something together.
    </div>
    <a class="cta-btn" href="mailto:ranggaraar@gmail.com">ranggaraar@gmail.com</a>
    <div style="margin-top:10px">
      <a class="cta-btn" href="https://wa.me/6281649166545" target="_blank" style="color:rgba(255,255,255,0.35);border-color:rgba(255,255,255,0.12);font-size:10px;">WhatsApp</a>
    </div>
  `;
  track.appendChild(el);
  cards.push(el);
}

const sectionIndex = {
  index: 0,
  about: 0,
  skills: cards.length - 2,
  contact: cards.length - 1,
};

// ---------- Lenis horizontal ----------
const isMobile = window.matchMedia('(pointer:coarse)').matches || window.innerWidth < 768;
let lenis = null;

if (!isMobile) {
  const wrap = document.getElementById('gallery-wrap');
  const track = document.getElementById('gallery-track');

  track.style.width = (cards.length * 440) + 'px';

  try {
    lenis = new window.Lenis({
      wrapper: wrap,
      content: track,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      duration: 1.5,
      easing: t => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });
    console.log('Lenis OK');
  } catch (e) {
    console.error('Lenis failed:', e);
  }

  // ---------- Chromatic aberration ----------
  let caCurrent = 0;

  function raf(time) {
    if (lenis) lenis.raf(time);

    const vel = lenis ? Math.abs(lenis.velocity || 0) : 0;
    const target = Math.min(vel * 0.5, 10);
    caCurrent += (target - caCurrent) * 0.12;
    if (caCurrent < 0.01) caCurrent = 0;
    document.documentElement.style.setProperty('--ca', caCurrent + 'px');

    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
} else {
  const wrap = document.getElementById('gallery-wrap');
  wrap.style.overflowX = 'auto';
  wrap.style.overflowY = 'hidden';
  wrap.style.webkitOverflowScrolling = 'touch';
}

// ---------- Nav links ----------
document.querySelectorAll('#nav-tr a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;
    const idx = sectionIndex[target];
    if (idx === undefined) return;
    const card = cards[idx];
    if (!card) return;

    if (lenis) {
      lenis.scrollTo(card.offsetLeft, {
        duration: 1.2,
        easing: t => 1 - Math.pow(1 - t, 3),
      });
    } else {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  });
});

// ---------- Custom cursor (desktop only) ----------
if (!isMobile) {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.opacity = '1';
  const label = document.createElement('span');
  label.className = 'cursor-label';
  label.textContent = 'VIEW';
  cursor.appendChild(label);

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function lerpCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(lerpCursor);
  }
  lerpCursor();

  document.body.style.cursor = 'none';

  document.querySelectorAll('.project-card:not(.cta)').forEach(card => {
    card.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    card.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}
