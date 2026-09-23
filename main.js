/* ------------------------------------------------------------------
   Content
------------------------------------------------------------------- */
const IMG = 'assets/img/';

const PROJECTS = [
  {
    id: 'prestige',
    client: 'Prestige × Jan Černý',
    title: 'Match for Everyday',
    credits: [['Studio', 'Creepy Studio'], ['Role', 'Brand Creative'], ['Client', 'Prestige × Jan Societé']],
    tag: 'Campaign',
    problem: 'A footwear brand making shoes since the 1980s was launching a sneaker with a fashion designer. The risk was creating a collaboration that felt like a logo on someone else’s product.',
    solution: 'Built the concept around what the shoe actually was: a sneaker for everyday wear. Grounded it in the tennis heritage both sides could claim, then kept the designer and film crew working from the same story.',
    results: [['836,700', 'Views'], ['79%', 'Organic'], ['3.9×', 'ROAS']],
    notes: ['Full results on request.'],
    images: [
      ['prestige-1.jpg', 1600, 2000],
      ['prestige-2.jpg', 1599, 2000],
      ['prestige-3.jpg', 1600, 2000],
      // presentation slides: shown in Index + detail, not in the Work carousel
      ['prestige-4.jpg', 1800, 1016, 'deck'],
      ['prestige-5.jpg', 1800, 995, 'deck'],
      ['prestige-6.jpg', 1800, 990, 'deck'],
    ],
  },
  {
    id: 'unuo',
    client: 'UNUO',
    title: 'Worms',
    credits: [['Studio', 'Creepy Studio'], ['Role', 'Brand Creative']],
    tag: 'Distinctive brand asset',
    problem: 'A functional kidswear brand with nothing visually its own, in a category where everyone shows the same happy child in the same puddle.',
    solution: 'Built the distinctive asset around the worm: the thing that comes out when it rains and the thing adults flinch at. Rain stopped being a reason to stay in and became the signal that play starts outside.',
    results: [['14%', 'Growth in awareness after a year'], ['64%', 'Distinctiveness on the symbol']],
    notes: ['Concept by me; drawn by the studio’s designers.', 'Full results on request.'],
    images: [
      ['unuo-1.jpg', 1000, 1000],
      ['unuo-2.jpg', 754, 845],
      ['unuo-3.jpg', 610, 964],
    ],
  },
  {
    id: 'redzed',
    client: 'Redzed',
    title: 'Angels on Earth',
    credits: [['Format', 'Music video'], ['Year', '2026'], ['By', 'Patrik Soldan & Patrik Fica']],
    tag: 'Freelance',
    about: 'Set design, styling, behind-the-scenes photography and production coordination on shoot day, for the most-streamed Czech artist on Spotify.',
    images: [
      ['redzed-1.jpg', 1600, 2000],
      ['redzed-2.jpg', 1333, 2000],
      ['redzed-3.jpg', 1333, 2000],
      ['redzed-4.jpg', 1333, 2000],
      ['redzed-5.jpg', 1600, 2000],
    ],
  },
  {
    id: 'lukac',
    client: 'Šimon Lukáč',
    title: 'Rings, Butterflies & Spiders',
    credits: [['Format', 'Jewellery'], ['Jeweller', 'Šimon Lukáč'], ['By', 'Patrik Fica']],
    tag: 'Freelance',
    about: 'Styling, light make-up and on-set assistance across jewellery and fashion projects, including work with jeweller Šimon Lukáč. Being close to the camera taught me what styling does to a set.',
    images: [
      ['lukac-1.jpg', 1170, 1463],
      ['lukac-2.jpg', 1170, 1463],
      ['lukac-3.jpg', 1170, 1463],
      ['lukac-4.jpg', 1170, 1463],
    ],
  },
  {
    id: 'arqsit',
    client: 'ARQSIT',
    title: 'Wait for This One',
    credits: [['Studio', 'Creepy Studio'], ['Role', 'Brand Creative']],
    tag: 'Brand concept',
    problem: 'A metal-frame manufacturer that had built furniture for other brands for years decided to sell under its own name, with no name, positioning or finished product.',
    solution: 'Created the name of the brand. Research first, then a territory nobody was holding: design furniture for the places people wait. The brand turned waiting from the worst part of a public space into the best one, including in the name itself.',
    badge: 'Unreleased — waiting for launch',
    images: [
      ['arqsit-1.jpg', 1600, 908],
      ['arqsit-2.jpg', 1600, 882],
      ['arqsit-3.jpg', 1600, 877],
    ],
  },
  {
    id: 'aurean',
    client: 'AUREAN',
    title: 'Enrichment',
    credits: [['Studio', 'Creepy Studio'], ['Role', 'Brand Creative']],
    tag: 'Brand identity',
    problem: 'A luxury leather goods brand entering a category where bags are treated as seasonal accessories.',
    solution: 'Positioned the bag closer to jewellery, built around beauty, craftsmanship and permanence. Two white crocodiles became the symbol, referencing the value of white crocodile hide. Built the identity and brand manual in English.',
    notes: ['Full results on request.'],
    images: [
      ['aurean-1.jpg', 918, 1194],
      ['aurean-2.jpg', 734, 1194],
      ['aurean-3.jpg', 1422, 1600],
      ['aurean-4.jpg', 2000, 1151],
    ],
  },
];

const INFO = {
  photo: ['profile-1.jpg', 1068, 1600],
  headline: '“Marika” (Brand Creative) between the idea and the set',
  about: [
    'Brand creative at Creepy Studio. I build brands from the thought up — names, positioning, campaign concepts and distinctive assets that give a brand something only it can own.',
    'Outside the studio I work on set: styling, set design, production coordination and behind-the-scenes photography for music videos, jewellery and fashion shoots. Being close to the camera taught me what an idea has to survive to end up on screen.',
  ],
  rows: [
    ['Studio', 'Creepy Studio — Brand Creative'],
    ['Freelance', 'Set design, styling, production, BTS photography'],
    ['Clients', 'Prestige, Jan Societé, UNUO, ARQSIT, AUREAN, Redzed, Šimon Lukáč'],
    ['Instagram', '<a class="uline" href="https://instagram.com/fruttidimari_" target="_blank" rel="noopener">@fruttidimari_</a>'],
    ['Email', '<a class="uline" href="mailto:hello@example.com">hello@example.com</a>'],
  ],
};

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const pad = (n) => String(n).padStart(2, '0');
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ------------------------------------------------------------------
   Build carousel
------------------------------------------------------------------- */
const track = $('#track');
const stage = $('#stage');
const slides = []; // { el, media, img, project, pIndex }

PROJECTS.forEach((p, pi) => {
  const photos = p.images.filter((im) => im[3] !== 'deck');
  const list = photos.length ? photos : [null];
  list.forEach((im, ii) => {
    const card = document.createElement('div');
    card.className = 'card' + (ii === 0 && pi > 0 ? ' card--gap' : '') + (ii === 0 ? ' is-first' : '');
    card.dataset.project = pi;

    if (im) {
      const [src, w, h] = im;
      // wide images (presentation slides) are capped in width so they fit on a phone
      if (w > h) {
        card.classList.add('card--wide');
        card.style.height = `min(var(--card-h), calc(var(--card-max-w) * ${(h / w).toFixed(4)}))`;
      }
      card.innerHTML = `
        <div class="card__media" style="aspect-ratio:${w}/${h}">
          <img src="${IMG + src}" alt="${p.client} — ${p.title}" loading="${slides.length < 6 ? 'eager' : 'lazy'}" draggable="false">
        </div>`;
    } else {
      card.innerHTML = `
        <div class="card__type">
          <small>${pad(pi + 1)} — ${p.tag}</small>
          <b>${p.client}</b>
          <small>${p.title}</small>
        </div>`;
    }
    const cap = document.createElement('div');
    cap.className = 'card__cap';
    // number + name under the photo, the project type sits on the ruler
    cap.innerHTML = `<span>${pad(pi + 1)}</span><span>${p.client}</span>`;
    card.appendChild(cap);

    track.appendChild(card);
    // wide slides are shown whole: no zoom / parallax that would crop their text
    const parallax = !card.classList.contains('card--wide');
    slides.push({ el: card, img: parallax ? card.querySelector('img') : null, pIndex: pi, center: 0, width: 0 });
  });
});


// Timeline ruler: a long tick + label where each project starts
const ruler = $('#ruler');
const rulerMarks = PROJECTS.map((p, pi) => {
  const el = document.createElement('div');
  el.className = 'ruler__mark';
  // the card caption carries number + name, the ruler just marks the type
  el.innerHTML = `<span class="ruler__label">(${p.tag})</span>`;
  ruler.appendChild(el);
  return { el, slide: slides.find((s) => s.pIndex === pi) };
});

/* ------------------------------------------------------------------
   Carousel engine: drag / wheel / keys, lerped, snaps to cards
------------------------------------------------------------------- */
let pos = 0;       // rendered scroll position
let target = 0;    // desired scroll position
let minPos = 0, maxPos = 0;
let active = -1;
let snapTimer = null;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function measure() {
  const vw = innerWidth;
  slides.forEach((s) => {
    s.width = s.el.offsetWidth;
    s.center = s.el.offsetLeft + s.width / 2 - vw / 2;
  });
  minPos = slides[0].center;
  maxPos = slides[slides.length - 1].center;

  ruler.style.width = track.scrollWidth + 'px';
  rulerMarks.forEach(({ el, slide }) => { el.style.left = slide.el.offsetLeft + 'px'; });
}

function nearest(p) {
  let best = 0, d = Infinity;
  slides.forEach((s, i) => {
    const dd = Math.abs(s.center - p);
    if (dd < d) { d = dd; best = i; }
  });
  return best;
}

function goTo(i) {
  i = clamp(i, 0, slides.length - 1);
  target = slides[i].center;
}

function scheduleSnap(delay = 160) {
  clearTimeout(snapTimer);
  snapTimer = setTimeout(() => goTo(nearest(target)), delay);
}

// Drag
let dragging = false, startX = 0, startTarget = 0, moved = 0, lastX = 0, lastT = 0, vel = 0;

stage.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  dragging = true;
  moved = 0;
  startX = lastX = e.clientX;
  startTarget = target;
  lastT = performance.now();
  vel = 0;
  clearTimeout(snapTimer);
  stage.classList.add('is-dragging');
  stage.setPointerCapture(e.pointerId);
});

stage.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const now = performance.now();
  const dx = e.clientX - startX;
  moved = Math.max(moved, Math.abs(dx));
  let t = startTarget - dx * 1.15;
  // rubber-band at edges
  if (t < minPos) t = minPos - (minPos - t) * 0.35;
  if (t > maxPos) t = maxPos + (t - maxPos) * 0.35;
  target = t;
  const dt = Math.max(1, now - lastT);
  vel = lerp(vel, (e.clientX - lastX) / dt, 0.5);
  lastX = e.clientX;
  lastT = now;
});

function endDrag(e) {
  if (!dragging) return;
  dragging = false;
  stage.classList.remove('is-dragging');
  const projected = clamp(target - vel * 260, minPos, maxPos);
  goTo(nearest(projected));

  // treat as click if pointer barely moved
  if (moved < 6 && e.type === 'pointerup') {
    const card = document.elementsFromPoint(e.clientX, e.clientY).find((el) => el.classList && el.classList.contains('card'));
    if (card) openProject(+card.dataset.project);
  }
}
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);

// Wheel / trackpad
addEventListener('wheel', (e) => {
  if (document.body.classList.contains('is-open')) return;
  if (view !== 'work') return smoothWheel(e);
  e.preventDefault();
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  target = clamp(target + d * (e.deltaMode === 1 ? 30 : 1), minPos, maxPos);
  scheduleSnap(220);
}, { passive: false });

// Keyboard
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') return closePanel();
  if (isOpen()) {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    return;
  }
  if (view !== 'work') return;
  if (e.key === 'ArrowRight') goTo(active + 1);
  if (e.key === 'ArrowLeft') goTo(active - 1);
  if (e.key === 'Enter' && active > -1) openProject(slides[active].pIndex);
});

// Render loop
const logo = $('.logo');
let logoK = 0;

function tick() {
  pos = reduceMotion ? target : lerp(pos, target, 0.085);
  if (Math.abs(target - pos) < 0.05) pos = target;
  track.style.transform = `translate3d(${-pos}px,0,0)`;
  ruler.style.transform = `translate3d(${-pos}px,0,0)`;

  // parallax inside each image
  const vw = innerWidth;
  for (const s of slides) {
    if (!s.img) continue;
    const off = s.center - pos;
    if (Math.abs(off) > vw * 1.2) continue;
    const shift = clamp(-off / vw, -1, 1) * s.width * 0.022;
    s.img.style.transform = `translate3d(${shift}px,0,0) scale(1.05)`;
  }

  active = nearest(pos);
  updateScrollView();
  updateSound();

  // logo shrinks as a scrollable view scrolls down
  const scrolled = view === 'work' ? 0 : VIEWS[view].scrollTop;
  const k = clamp(scrolled / 240, 0, 1);
  logoK = reduceMotion ? k : lerp(logoK, k, 0.14);
  const minS = innerWidth < 700 ? 0.5 : 0.26;
  logo.style.setProperty('--s', (1 - (1 - minS) * logoK).toFixed(4));
  logo.style.setProperty('--y', `${(-logoK * 1.6).toFixed(3)}rem`);

  requestAnimationFrame(tick);
}

/* ------------------------------------------------------------------
   Project detail — cover + neighbours on the left, article on the right
   (modelled on tlb.betteroff.studio/articles/…)
------------------------------------------------------------------- */
const panelBody = $('#panelBody');
const detail = $('#detail');
const detailSide = $('#detailSide');
const detailCursor = $('#detailCursor');
const relPrev = $('#relPrev'), relNext = $('#relNext');
const curNum = $('#curNum'), curTag = $('#curTag'), curImg = $('#curImg');
const EASE = 'cubic-bezier(.19, 1, .22, 1)';
let current = -1;

const isOpen = () => document.body.classList.contains('is-open');
const wrapIndex = (i) => (i + PROJECTS.length) % PROJECTS.length;

function cover(p) {
  const im = p.images[0];
  return im
    ? `<img src="${IMG + im[0]}" width="${im[1]}" height="${im[2]}" alt="${p.client} — ${p.title}">`
    : `<div class="cover-type">${p.client}</div>`;
}

function fig(p, im, n) {
  const [src, w, h] = im;
  return `<figure class="p-fig">
    <img src="${IMG + src}" width="${w}" height="${h}" loading="lazy" alt="${p.client} — ${p.title}">
    <figcaption class="mono"><span>${p.client}</span><span>${pad(n)}/${pad(p.images.length)}</span></figcaption>
  </figure>`;
}

// full-width first image, then alternating pairs, a leftover sits centred
function media(p) {
  const ims = p.images;
  if (!ims.length) return '';
  let out = `<div class="p-wide">${fig(p, ims[0], 1)}</div>`;
  let flip = false;
  for (let i = 1; i < ims.length; i += 2) {
    if (ims[i + 1]) {
      out += `<div class="p-row${flip ? ' p-row--flip' : ''}">${fig(p, ims[i], i + 1)}${fig(p, ims[i + 1], i + 2)}</div>`;
      flip = !flip;
    } else {
      out += `<div class="p-solo">${fig(p, ims[i], i + 1)}</div>`;
    }
  }
  return `<div class="p-media">${out}</div>`;
}

function renderArticle(pi) {
  const p = PROJECTS[pi];
  const block = (k, v) => v ? `<dl class="p-block"><dt class="mono">${k}</dt><dd>${v}</dd></dl>` : '';
  const words = p.title.split(' ').map((w) => `<span class="w"><span>${w}</span></span>`).join(' ');
  panelBody.innerHTML = `
    <div class="p-meta mono">
      <div class="mask"><span class="p-pill js-slide">${p.tag}</span></div>
      <div class="mask"><span class="js-slide" style="display:block">(${p.client})</span></div>
    </div>
    <h1 class="p-title">${words}</h1>
    <div class="p-content js-fade-up">
      <dl class="p-credits">
        ${p.credits.map(([k, v]) => `<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}
      </dl>
      <div class="p-text">
        ${block('Problem', p.problem)}
        ${block('Solution', p.solution)}
        ${block('Role', p.about)}
      </div>
      ${p.results ? `<dl class="p-stats">${p.results.map(([n, l]) =>
        `<div><dt>${n}</dt><dd class="mono">${l}</dd></div>`).join('')}</dl>` : ''}
      ${p.badge ? `<p class="p-badge mono">${p.badge}</p>` : ''}
      ${(p.notes || []).length ? `<div class="p-notes mono">${p.notes.map((n) => `<p>${n}</p>`).join('')}</div>` : ''}
      ${media(p)}
    </div>`;
  panelBody.scrollTop = 0;

  // left side
  const prev = PROJECTS[wrapIndex(pi - 1)], next = PROJECTS[wrapIndex(pi + 1)];
  relPrev.innerHTML = cover(prev);
  relNext.innerHTML = cover(next);
  curImg.innerHTML = cover(p);
  curNum.textContent = pad(pi + 1);
  curTag.textContent = `${p.tag} (${p.client})`;
  $('#nextLink').textContent = `Next: ${next.client}`;
}

function animateArticle(delay, dir) {
  if (reduceMotion || !panelBody.animate) return;
  const up = (el, d, i = 0, stagger = 0.075) => el.animate(
    [{ transform: 'translate3d(0,105%,0)' }, { transform: 'none' }],
    { duration: 1150, easing: EASE, delay: (d + i * stagger) * 1000, fill: 'backwards' });

  panelBody.querySelectorAll('.js-slide').forEach((el, i) => up(el, delay, i, 0.1));
  panelBody.querySelectorAll('.p-title .w > span').forEach((el, i) => up(el, delay + 0.2, i));
  panelBody.querySelectorAll('.js-fade-up').forEach((el) => el.animate(
    [{ opacity: 0, transform: 'translate3d(0,5rem,0)' }, { opacity: 1, transform: 'none' }],
    { duration: 1150, easing: EASE, delay: (delay + 0.35) * 1000, fill: 'backwards' }));

  up(curNum, delay, 0); up(curTag, delay, 1, 0.1);
  if (dir) {
    // switching project: covers slide in from the side we're heading to
    [relPrev, curImg, relNext].forEach((el) => el.animate(
      [{ transform: `translate3d(${dir * 40}%,0,0)`, opacity: 0 }, { transform: 'none', opacity: 1 }],
      { duration: 1000, easing: EASE }));
  } else {
    curImg.animate([{ transform: 'scale(.9)', opacity: 0 }, { transform: 'none', opacity: 1 }],
      { duration: 1150, easing: EASE, delay: 150 });
    [relPrev, relNext].forEach((el, i) => el.animate(
      [{ transform: `translate3d(${i ? 30 : -30}%,0,0)`, opacity: 0 }, { transform: 'none', opacity: 1 }],
      { duration: 1150, easing: EASE, delay: 250 }));
  }
}

function openProject(pi, dir = 0, { fromHistory = false } = {}) {
  const p = PROJECTS[pi];
  if (!p) return;
  const firstSlide = slides.findIndex((s) => s.pIndex === pi);
  if (view === 'work' && firstSlide > -1 && slides[active]?.pIndex !== pi) goTo(firstSlide);

  const wasOpen = isOpen();
  current = pi;
  renderArticle(pi);
  document.body.classList.add('is-open');
  detail.setAttribute('aria-hidden', 'false');
  // opening adds a history entry (so phone "back" closes it); switching projects doesn't
  if (!fromHistory) setHash(p.id, { push: !wasOpen, detail: true });
  animateArticle(wasOpen ? 0.1 : 0.45, wasOpen ? dir : 0);
}

// silent: just hide (used by the router / menu); otherwise behave like "back"
function closePanel({ silent = false } = {}) {
  if (!isOpen()) return;
  document.body.classList.remove('is-open');
  detail.setAttribute('aria-hidden', 'true');
  if (silent) return;
  if (history.state && history.state.detail) history.back();
  else setHash(view === 'work' ? '' : view);
}

function setHash(h, { push = false, detail = false } = {}) {
  const url = h ? '#' + h : location.pathname + location.search;
  history[push ? 'pushState' : 'replaceState']({ detail }, '', url);
}

// browser / phone back + forward
addEventListener('popstate', () => {
  const hash = location.hash.slice(1);
  const pi = PROJECTS.findIndex((p) => p.id === hash);
  if (pi > -1) return openProject(pi, 0, { fromHistory: true });
  closePanel({ silent: true });
  const v = VIEWS[hash] ? hash : 'work';
  if (v !== view) setView(v, { hash: false });
});

const step = (d) => openProject(wrapIndex(current + d), d);

$('#close').addEventListener('click', (e) => { e.preventDefault(); closePanel(); });
$('#nextLink').addEventListener('click', (e) => { e.preventDefault(); step(1); });
relPrev.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); step(-1); });
relNext.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); step(1); });
$('#ctrlPrev').addEventListener('click', () => step(-1));
$('#ctrlNext').addEventListener('click', () => step(1));
$('#ctrlClose').addEventListener('click', closePanel);
detailSide.addEventListener('click', (e) => {
  if (!e.target.closest('.detail__cur')) closePanel();
});
detailSide.addEventListener('mousemove', (e) => {
  detailCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY - 8}px, 0)`;
});

/* ------------------------------------------------------------------
   Views: Work / Index / About
------------------------------------------------------------------- */
const VIEWS = {
  work: $('#stage'),
  index: $('#viewIndex'),
  about: $('#viewAbout'),
};
let view = 'work';

function setView(v, { hash = true } = {}) {
  if (!VIEWS[v]) v = 'work';
  view = v;
  document.body.dataset.view = v;
  Object.entries(VIEWS).forEach(([k, el]) => el.classList.toggle('is-current', k === v));
  document.querySelectorAll('.menu a').forEach((a) => a.classList.toggle('is-active', a.dataset.view === v));
  if (v !== 'work') {
    VIEWS[v].scrollTop = 0;
    sv.cur = sv.target = sv.vel = 0;
  }
  animateIn(v);
  if (hash) setHash(v === 'work' ? '' : v);
}

document.querySelectorAll('.menu a').forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const v = a.dataset.view;
    const wasOpen = isOpen();
    closePanel({ silent: true });
    if (v === view && !wasOpen) return;
    setView(v, { hash: false });
    setHash(v === 'work' ? '' : v, { push: true });
  }));

// Index: every image in a grid, a label where each project starts
VIEWS.index.innerHTML = `<div class="tl-grid">${PROJECTS.map((p, pi) => {
  const label = `<div class="tl-label"><div class="tl-label__in"><span>${pad(pi + 1)}</span>${p.client}</div></div>`;
  if (!p.images.length) {
    return `<div class="tl-item" data-p="${pi}">${label}<div class="tl-type">${p.client}</div></div>`;
  }
  return p.images.map(([src, w, h], ii) => `
    <div class="tl-item" data-p="${pi}">
      ${ii === 0 ? label : ''}
      <img src="${IMG + src}" width="${w}" height="${h}" loading="lazy" alt="${p.client} — ${p.title}">
    </div>`).join('');
}).join('')}</div>`;

// About (soft pink page)
const [aSrc, aW, aH] = INFO.photo;
VIEWS.about.innerHTML = `
  <p class="ab-kicker">(ABOUT)</p>
  <h2 class="ab-big">${INFO.headline}</h2>
  <div class="ab-grid">
    <img class="ab-photo" src="${IMG + aSrc}" width="${aW}" height="${aH}" loading="lazy" alt="Portrait of Marika">
    <div class="ab-text">
      ${INFO.about.map((t) => `<p>${t}</p>`).join('')}
      <div class="ab-rows">
        ${INFO.rows.map(([k, v]) => `<dl class="p-block"><dt>${k}</dt><dd>${v}</dd></dl>`).join('')}
      </div>
    </div>
  </div>`;

// Clicking an image in Index opens the project panel
VIEWS.index.addEventListener('click', (e) => {
  const item = e.target.closest('[data-p]');
  if (!item) return;
  e.preventDefault();
  openProject(+item.dataset.p);
});

/* ------------------------------------------------------------------
   Smooth scroll + tilt + entry animation (Index)
   — rows lean back in 3D with scroll speed, like tlb.betteroff.studio/articles
------------------------------------------------------------------- */
const sv = { cur: 0, target: 0, prev: 0, vel: 0, animating: false };
const TILT = {
  index: [...VIEWS.index.querySelectorAll('.tl-item')],
};

function smoothWheel(e) {
  const el = VIEWS[view];
  if (!el || reduceMotion || e.ctrlKey) return;
  e.preventDefault();
  if (!sv.animating) sv.cur = sv.target = el.scrollTop;
  const max = el.scrollHeight - el.clientHeight;
  sv.target = clamp(sv.target + e.deltaY * (e.deltaMode === 1 ? 30 : 1), 0, max);
  sv.animating = true;
}

function updateScrollView() {
  const el = VIEWS[view];
  if (view === 'work' || !el) return;

  if (sv.animating) {
    sv.cur = lerp(sv.cur, sv.target, 0.125);
    if (Math.abs(sv.target - sv.cur) < 0.3) { sv.cur = sv.target; sv.animating = false; }
    el.scrollTop = sv.cur;
  } else {
    sv.cur = sv.target = el.scrollTop; // native scroll: touch, keys, scrollbar
  }

  const d = sv.cur - sv.prev;
  sv.prev = sv.cur;
  sv.vel = lerp(sv.vel, d, 0.2);

  const list = TILT[view];
  if (!list || reduceMotion) return;
  const deg = clamp(sv.vel * 0.18, -9, 9);
  const t = Math.abs(deg) < 0.01 ? '' : `perspective(1200px) rotateX(${deg.toFixed(3)}deg)`;
  for (const item of list) item.style.transform = t;
}

function animateIn(v) {
  const list = v === 'work' ? slides.map((s) => s.el) : TILT[v];
  if (!list || reduceMotion || !list[0].animate) return;
  const wh = innerHeight;
  const ease = 'cubic-bezier(.19, 1, .22, 1)';
  requestAnimationFrame(() => {
    let n = 0;
    for (const el of list) {
      const r = el.getBoundingClientRect();
      if (r.top > wh || r.bottom < 0 || r.right < 0 || r.left > innerWidth) continue;
      el.animate(
        [{ transform: `translate3d(0, ${wh - r.top}px, 0) scale(.9)` }, { transform: 'none' }],
        { duration: 1150, easing: ease, delay: 150 + n * 35, fill: 'backwards' }
      );
      n++;
    }
    VIEWS[v].querySelectorAll('.tl-label__in').forEach((el, i) => {
      el.animate(
        [{ transform: 'translate3d(0, 105%, 0)' }, { transform: 'none' }],
        { duration: 1150, easing: ease, delay: 600 + i * 60, fill: 'backwards' }
      );
    });
  });
}

/* ------------------------------------------------------------------
   Logotype: her disciplines cycle under the name
------------------------------------------------------------------- */
const ROLES = ['(Brand Creative)', '(Concept)', '(Naming)', '(Styling)', '(Set Design)'];
const logoRoles = $('#logoRoles');
let roleI = 0;
setInterval(() => {
  if (document.hidden) return;
  roleI = (roleI + 1) % ROLES.length;
  if (reduceMotion || !logoRoles.animate) { logoRoles.textContent = ROLES[roleI]; return; }
  const out = logoRoles.animate(
    [{ transform: 'none' }, { transform: 'translate3d(0,-105%,0)' }],
    { duration: 450, easing: 'cubic-bezier(.7,0,.84,0)', fill: 'forwards' });
  out.onfinish = () => {
    logoRoles.textContent = ROLES[roleI];
    out.cancel();
    logoRoles.animate([{ transform: 'translate3d(0,105%,0)' }, { transform: 'none' }],
      { duration: 900, easing: EASE });
  };
}, 2400);

// Cursor label over the carousel: "Drag" on empty space, "Open — Client" over a card
const cursorEl = $('#cursor');
stage.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  const card = e.target.closest?.('.card');
  cursorEl.textContent = dragging ? 'Drag' : card ? `Open — ${PROJECTS[+card.dataset.project].client}` : 'Drag';
  cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  cursorEl.classList.add('is-on');
});
stage.addEventListener('pointerleave', () => cursorEl.classList.remove('is-on'));

/* ------------------------------------------------------------------
   Sound: soft ticks while scrolling, a tiny press/release tap on click.
   Short sine blips synthesised with Web Audio (same approach and
   values as kolektiv-one.webflow.io). Browsers only allow audio after
   the first click / key press, so it wakes up then.
------------------------------------------------------------------- */
const SOUNDS = {
  press:   { volume: 0.08,  ms: 24, freq: 6200, noise: 0.06, power: 4.4 },
  release: { volume: 0.05,  ms: 18, freq: 7600, noise: 0.04, power: 5 },
  tick:    { volume: 0.035, ms: 14, freq: 5200, noise: 0.05, power: 5 },
};
const sound = { ctx: null, buffers: {}, last: {} };

function makeBuffer(ctx, { ms, freq, noise, power }) {
  const n = Math.max(1, Math.floor(ctx.sampleRate * ms / 1000));
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < n; i++) {
    const env = Math.pow(1 - i / n, power);
    ch[i] = (Math.sin(2 * Math.PI * freq * i / ctx.sampleRate) + (Math.random() * 2 - 1) * noise) * env;
  }
  return buf;
}

function wakeAudio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  if (!sound.ctx) {
    sound.ctx = new AC();
    for (const k in SOUNDS) sound.buffers[k] = makeBuffer(sound.ctx, SOUNDS[k]);
  }
  if (sound.ctx.state === 'suspended') sound.ctx.resume();
}

function play(type, gainMul = 1) {
  const { ctx } = sound;
  if (!ctx || ctx.state !== 'running') return;
  const now = performance.now();
  if (now - (sound.last[type] || 0) < 28) return;
  sound.last[type] = now;
  const cfg = SOUNDS[type];
  const src = ctx.createBufferSource();
  const g = ctx.createGain();
  src.buffer = sound.buffers[type];
  g.gain.setValueAtTime(cfg.volume * gainMul, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + cfg.ms / 1000);
  src.connect(g).connect(ctx.destination);
  src.start();
}

const playTick = (strength = 0.5) => play('tick', 0.6 + strength * 0.6);

addEventListener('keydown', wakeAudio, { capture: true, passive: true });
document.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  wakeAudio();
  play('press');
}, { capture: true, passive: true });
document.addEventListener('pointerup', (e) => {
  if (e.button !== 0) return;
  play('release');
}, { capture: true, passive: true });

// scroll ticks: one tick per stretch of distance travelled
const TICK_STEP = { work: 42, index: 70 };
let tickAcc = 0, tickLastPos = 0, tickLastView = '';
function updateSound() {
  const p = view === 'work' ? pos : sv.cur;
  if (view !== tickLastView) { tickLastView = view; tickLastPos = p; tickAcc = 0; return; }
  const d = Math.abs(p - tickLastPos);
  tickLastPos = p;
  if (isOpen() || view === 'about') { tickAcc = 0; return; }
  tickAcc += d;
  const step = TICK_STEP[view] || 60;
  if (tickAcc >= step) {
    tickAcc %= step;
    playTick(clamp(d / 40, 0, 1));
  }
}

/* ------------------------------------------------------------------
   Scribble: a pen line follows the cursor and fades out behind it
   (a nod to Marika's drawings). Mouse only.
------------------------------------------------------------------- */
const scribble = document.createElement('canvas');
scribble.className = 'scribble';
scribble.setAttribute('aria-hidden', 'true');
document.body.appendChild(scribble);
const sctx = scribble.getContext('2d');
const trail = [];
const TRAIL_LIFE = 700;

function sizeScribble() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  scribble.width = innerWidth * dpr;
  scribble.height = innerHeight * dpr;
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  sctx.lineCap = 'round';
  sctx.lineJoin = 'round';
}
sizeScribble();
addEventListener('resize', sizeScribble);

addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || reduceMotion) return;
  const last = trail[trail.length - 1];
  const now = performance.now();
  const speed = last ? Math.hypot(e.clientX - last.x, e.clientY - last.y) / Math.max(1, now - last.t) : 0;
  // a little hand wobble, thinner when moving fast like a real pen
  trail.push({
    x: e.clientX + (Math.random() - 0.5) * 1.2,
    y: e.clientY + (Math.random() - 0.5) * 1.2,
    t: now,
    w: clamp(2.6 - speed * 0.9, 0.9, 2.6),
  });
});

function drawScribble() {
  const now = performance.now();
  while (trail.length && now - trail[0].t > TRAIL_LIFE) trail.shift();
  sctx.clearRect(0, 0, innerWidth, innerHeight);
  sctx.strokeStyle = '#fff';
  for (let i = 1; i < trail.length - 1; i++) {
    const a = trail[i - 1], b = trail[i], c = trail[i + 1];
    const life = 1 - (now - b.t) / TRAIL_LIFE;
    sctx.globalAlpha = life;
    sctx.lineWidth = b.w * (0.4 + life * 0.6);
    sctx.beginPath();
    sctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
    sctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2);
    sctx.stroke();
  }
  sctx.globalAlpha = 1;
  requestAnimationFrame(drawScribble);
}
requestAnimationFrame(drawScribble);

/* ------------------------------------------------------------------
   Boot
------------------------------------------------------------------- */
function boot() {
  measure();
  pos = target = minPos;
  requestAnimationFrame(tick);
  requestAnimationFrame(() => document.body.classList.add('is-ready'));

  const hash = location.hash.slice(1);
  const pi = PROJECTS.findIndex((p) => p.id === hash);
  setView(VIEWS[hash] ? hash : 'work', { hash: false });
  if (pi > -1) openProject(pi);
}

addEventListener('resize', () => {
  const i = active < 0 ? 0 : active;
  measure();
  pos = target = slides[i].center;
});

// Card widths come from aspect-ratio, so we can measure right away;
// wait for the font so the logotype animates in with the right face.
(document.fonts ? document.fonts.ready : Promise.resolve()).then(boot);
