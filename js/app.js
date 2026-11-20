/* ============================================================
   THE NOVA UNION — app.js : renders js/data.js into the page
   ============================================================ */
'use strict';

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ============================================================
   SEAL GENERATOR — monochrome hand-drawn SVG seals per faction.
   When the real emblem files arrive, set `emblem` in data.js and
   they will be used instead of the seal.
   ============================================================ */
function glyphSVG(hint) {
  const S = 'stroke="#f2f2f2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const F = 'fill="#f2f2f2"';
  switch (hint) {
    case 'CROWN':
      return `<polygon points="-38,18 -44,-18 -18,2 0,-30 18,2 44,-18 38,18" ${F}/><rect x="-38" y="26" width="76" height="8" ${F}/>`;
    case 'SHIELD': // Agency — shield with horizontal bar
      return `<path d="M0,-38 L34,-26 L34,4 C34,28 18,40 0,46 C-18,40 -34,28 -34,4 L-34,-26 Z" ${S}/><rect x="-34" y="-4" width="68" height="14" ${F}/>`;
    case 'TORCH': // Coalition — torch in laurel
      return `<path d="M0,-34 C14,-18 12,-6 0,4 C-12,-6 -14,-18 0,-34 Z" ${F}/><path d="M-10,10 L10,10 L6,34 L-6,34 Z" ${S}/><path d="M-22,44 L22,44" ${S}/>`;
    case 'KNOT-STAR': // Brigade — five-pointed star
      return `<polygon points="0,-40 10.6,-13.8 38.9,-13.5 16.8,3.6 24.7,30.9 0,15 -24.7,30.9 -16.8,3.6 -38.9,-13.5 -10.6,-13.8" fill="none" stroke="#f2f2f2" stroke-width="5" stroke-linejoin="round"/>`;
    case 'TANK': // Armored — tank silhouette
      return `<rect x="-40" y="8" width="80" height="16" rx="8" ${F}/><polygon points="-32,8 -22,-8 14,-8 22,8" ${F}/><polygon points="-14,-8 -6,-22 16,-22 22,-8" ${F}/><rect x="18" y="-18" width="30" height="6" ${F}/>`;
    case 'STAR-OF-LIFE': // Medics — six-armed star
      return [0, 60, 120].map(a => `<rect x="-6.5" y="-40" width="13" height="80" rx="2" transform="rotate(${a})" ${F}/>`).join('');
    case 'WINGS': // Legion — spread eagle wings
      return `<polygon points="0,-8 12,-16 34,-26 52,-14 30,-8 48,2 24,2 36,14 8,6 0,10 -8,6 -36,14 -24,2 -48,2 -30,-8 -52,-14 -34,-26 -12,-16" ${F}/><circle cx="0" cy="-14" r="5" ${F}/>`;
    case 'SCYTHE': // Reapers — scythe
      return `<path d="M-26,38 L14,-16" ${S} stroke-width="7"/><path d="M14,-16 C34,-26 44,-34 46,-46 C26,-42 0,-34 -10,-14 C6,-24 20,-26 14,-16 Z" ${F}/>`;
    case 'SHIELD-FILLED': // Guards — filled shield with star
      return `<path d="M0,-40 L36,-28 L36,2 C36,30 20,42 0,48 C-20,42 -36,30 -36,2 L-36,-28 Z" ${F}/><polygon points="0,-16 5.2,-1.4 21.6,-1.1 8.9,8.7 13.6,24.3 0,15.2 -13.6,24.3 -8.9,8.7 -21.6,-1.1 -5.2,-1.4" fill="#111111"/>`;
    case 'SABERS': // Military Police — crossed sabers
      return `<path d="M-30,32 C-8,8 10,-12 34,-30" ${S} stroke-width="6"/><path d="M30,32 C8,8 -10,-12 -34,-30" ${S} stroke-width="6"/><path d="M-30,32 l-6,8 M30,32 l6,8" ${S} stroke-width="6"/>`;
    case 'QUESTION': // Holland — record pending
      return `<text y="26" text-anchor="middle" font-family="'Black Ops One', Impact, sans-serif" font-size="76" fill="#f2f2f2">?</text>`;
    case 'UNION-EAGLE': // Nova Union master seal — spread wings + triquetra
      return `<path d="M0,-6 C8,-12 16,-20 22,-30 C30,-22 38,-20 46,-24 C42,-12 36,-4 24,0 C34,2 40,8 44,16 C32,14 18,12 8,6 L0,14 L-8,6 C-18,12 -32,14 -44,16 C-40,8 -34,2 -24,0 C-36,-4 -42,-12 -46,-24 C-38,-20 -30,-22 -22,-30 C-16,-20 -8,-12 0,-6 Z" ${F}/>`;
    default:
      return `<circle cx="0" cy="0" r="26" ${S}/>`;
  }
}

// Ring text drawn on a full circle (repeated to fill circumference)
function sealSVG({ name, motto, glyph, size = 120, idSuffix = '' }) {
  const arcId = `seal-arc-${(name + idSuffix).replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
  const ring = `${name.toUpperCase()}  •  ${motto.toUpperCase()}  •  `;
  return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" role="img" aria-label="${esc(name)} seal">
    <defs>
      <path id="${arcId}" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"/>
    </defs>
    <circle cx="100" cy="100" r="96" fill="#111111"/>
    <circle cx="100" cy="100" r="96" fill="none" stroke="#f2f2f2" stroke-width="3"/>
    <circle cx="100" cy="100" r="52" fill="none" stroke="#f2f2f2" stroke-width="2.4"/>
    <text font-family="'Oswald', Impact, sans-serif" font-weight="600" font-size="13.5" letter-spacing="3.1" fill="#f2f2f2">
      <textPath href="#${arcId}" textLength="463" lengthAdjust="spacingAndGlyphs">${esc(ring)}</textPath>
    </text>
    <g transform="translate(100,98)">${glyphSVG(glyph)}</g>
    <polygon transform="translate(100,26) scale(0.16) translate(-50,-50)" points="50,4 60,36.25 93.7,35.8 66.2,55.25 77,87.2 50,67 23,87.2 33.8,55.25 6.3,35.8 40,36.25" fill="#f2f2f2" opacity="0.9"/>
  </svg>`;
}

function unionSealSVG(size = 150) {
  return sealSVG({ name: 'THE NOVA UNION', motto: 'STRENGTH THROUGH UNITY', glyph: 'UNION-EAGLE', size, idSuffix: 'master' });
}
const factionSealSVG = (f, size = 120) =>
  sealSVG({ name: f.name, motto: (FACTION_MOTTOS[f.id] || 'THE NOVA UNION'), glyph: f.sealHint, size, idSuffix: f.id });

/* Medal disc — size/rays scale with level (1 bronze … 7 grand) */
function medalSVG(level) {
  const rays = level >= 6, big = level >= 5;
  const starPts = '30,8 36.9,25.4 56.9,25.7 41.2,37.3 47.5,55.6 30,44.8 12.5,55.6 18.8,37.3 3.1,25.7 23.1,25.4';
  return `<svg viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15 0 h12 v20 h-12 Z M33 0 h12 v20 h-12 Z" fill="#111111" stroke="#f2f2f2" stroke-width="1.5"/>
    ${rays ? '<g stroke="#f2f2f2" stroke-width="2" opacity="0.9"><line x1="30" y1="6" x2="30" y2="14"/><line x1="8" y1="18" x2="14" y2="24"/><line x1="52" y1="18" x2="46" y2="24"/></g>' : ''}
    <circle cx="30" cy="46" r="${big ? 17 : 15}" fill="#111111" stroke="#f2f2f2" stroke-width="2.2"/>
    <polygon points="${starPts}" transform="translate(0,${big ? -8 : -7}) scale(${big ? 0.78 : 0.66}) translate(17.5,17.5)" fill="#f2f2f2"/>
  </svg>`;
}

/* Small ribbon for honoree medals (kept simple) */
const honoreeMedalSVG = () => medalSVG(3);

/* ============================================================
   CONFIG-DRIVEN BITS
   ============================================================ */
$('#foundingYear') && ($('#foundingYear').textContent = NOVA_CONFIG.lastUpdated);
$('#footerMotto').textContent = `${NOVA_CONFIG.motto} — THE NOVA UNION`;
if ($('#aboutUpdated')) $('#aboutUpdated').textContent = NOVA_CONFIG.lastUpdated;
if ($('#lastUpdated')) $('#lastUpdated').textContent = NOVA_CONFIG.lastUpdated;
['discordMain', 'discordMP', 'discordAgency', 'discordGuards'].forEach(k => {
  $$(`[data-discord="${k}"]`).forEach(a => { a.href = NOVA_CONFIG[k]; });
});
$('#forumReport').href  = NOVA_CONFIG.forumReportUrl;
$('#forumSuggest').href = NOVA_CONFIG.forumSuggestUrl;

/* Leadership render */
const leadershipEl = $('#leadershipGrid');
if (leadershipEl && typeof LEADERSHIP !== 'undefined') {
  leadershipEl.innerHTML = LEADERSHIP.map(l => `
    <div class="leader-tile">
      <h4 class="leader-title">${esc(l.title)}</h4>
      <p class="leader-body">${esc(l.body)}</p>
    </div>`).join('');
}

/* ============================================================
   INLINE YOUTUBE PLAYER — plays on the page, no redirect
   ============================================================ */
function youtubeId(raw) {
  const s = String(raw || '').trim();
  const patterns = [
    /youtu\.be\/([^?&#/]+)/i,
    /(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)([^?&#/]+)/i
  ];
  for (const re of patterns) { const m = s.match(re); if (m) return m[1]; }
  return '';
}
function youtubeEmbedUrl(raw, autoplay = true) {
  const id = youtubeId(raw);
  if (!id) return '';
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}`;
}
function openVideoPlayer(raw, title) {
  const src = youtubeEmbedUrl(raw);
  if (!src) return;
  $('#videoModalTitle').textContent = title || 'NOW PLAYING';
  $('#videoEmbed').innerHTML = `<iframe src="${src}" title="${esc(title || 'Video player')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  openModal('#videoModal');
}

/* National anthem — official recording, plays inline */
const anthemPlay = $('#anthemPlay');
if (anthemPlay && typeof NOVA_CONFIG !== 'undefined' && NOVA_CONFIG.anthemUrl) {
  anthemPlay.addEventListener('click', () => openVideoPlayer(NOVA_CONFIG.anthemUrl, 'NOW PLAYING — NATIONAL ANTHEM OF THE NOVA UNION'));
}

/* Video of the day (paste youtube URL in js/data.js → VIDEO_OF_DAY) */
const videoWatchEl = $('#videoWatch');
if (videoWatchEl && typeof VIDEO_OF_DAY !== 'undefined' && VIDEO_OF_DAY) {
  videoWatchEl.hidden = false;
  const id = youtubeId(VIDEO_OF_DAY);
  if (id) videoWatchEl.style.setProperty('--video-thumb', `url("https://i.ytimg.com/vi/${id}/hqdefault.jpg")`);
  videoWatchEl.addEventListener('click', () => openVideoPlayer(VIDEO_OF_DAY, 'NOW PLAYING — VIDEO OF THE DAY'));
}

/* ───────── Social fronts ───────── */
const socialGrid = $('#socialGrid');
if (socialGrid) socialGrid.innerHTML = ''; // socials moved to Discord fronts — handled below

/* ───────── President / Vice-President callout ───────── */
$('#presidencySlate').innerHTML = `
  <div class="slate-col">
    <div class="slate-title">THE 3-PART PRESIDENCY</div>
    ${PRESIDENTS.map(p => `<div class="slate-name"><span class="slate-tick"></span>${esc(p.name)}<span class="slate-role">${esc(p.role)}</span></div>`).join('')}
  </div>
  <div class="slate-divider" aria-hidden="true"></div>
  <div class="slate-col">
    <div class="slate-title">THE 2-PART VICE PRESIDENCY</div>
    ${VICE_PRESIDENTS.map(p => `<div class="slate-name vp"><span class="slate-tick"></span>${esc(p.name)}<span class="slate-role">${esc(p.role)}</span></div>`).join('')}
  </div>`;

/* ───────── Stat band ───────── */
$('#statBar').innerHTML = UNION_STATS.map(s => `
  <div class="stat-cell"><span class="stat-num">${esc(s.num)}</span><span class="stat-label">${esc(s.label)}</span></div>`).join('');

/* ───────── Announcements: local defaults + optional remote JSON ───────── */
function renderAnnouncements(list) {
  $('#tickerTrack').textContent = list.map(a => `[${a.tag}] ${a.text}`).join('   •   ');
  $('#noticeList').innerHTML = list.map(a => `
    <li><span class="notice-date">${esc(a.date)}</span><span><strong>${esc(a.tag)}</strong> — ${esc(a.text)}</span></li>`).join('');
}
renderAnnouncements(ANNOUNCEMENTS);
if (NOVA_CONFIG.announcementsUrl) {
  fetch(NOVA_CONFIG.announcementsUrl, { cache: 'no-store' })
    .then(r => r.ok ? r.json() : Promise.reject(new Error('bad status')))
    .then(list => { if (Array.isArray(list) && list.length) renderAnnouncements(list); })
    .catch(() => {});
}

/* ───────── Nova News ───────── */
$('#newsGrid').innerHTML = NEWS.map(n => `
  <button class="news-card" data-news-id="${esc(n.id)}" aria-label="Read dispatch: ${esc(n.headline)}">
    <span class="news-cat"><span>${esc(n.cat)}</span><span>${esc(n.date)}</span></span>
    <span class="news-body">
      <span class="news-headline">${esc(n.headline)}</span>
      <span class="news-dek">${esc(n.dek)}</span>
      <span class="news-date">Tap to read the full dispatch →</span>
    </span>
  </button>`).join('');

/* ───────── National Honors roll [PLACEHOLDER] ───────── */
$('#honorsGrid').innerHTML = HONOREES.map(h => `
  <div class="honoree">
    <div class="honoree-medal">${honoreeMedalSVG()}</div>
    <div class="honoree-name">${esc(h.name)}</div>
    <div class="honoree-rank">${esc(h.rank)}</div>
    <div class="honoree-citation">“${esc(h.citation)}”</div>
  </div>`).join('');

/* ───────── Org tree ───────── */
/* org tree — inline emblems */
const orgEmblem = (f, size) => f.emblem
  ? `<img class="org-thumb" src="${esc(f.emblem)}" alt="${esc(f.name)} emblem" width="${size}" height="${size}">`
  : factionSealSVG(f, size);
const branchEmblemOf = b => orgEmblem(FACTIONS.find(f => f.name.toUpperCase() === b.branch.toUpperCase()) || FACTIONS[0], 40);

$('#orgTree').innerHTML = `
  <div class="org-root">
    <img class="org-seal-img" src="assets/nova-union-seal.png" alt="The Nova Union master seal">
    <div class="org-root-name">THE NOVA UNION</div>
    <div class="org-root-motto">${esc(NOVA_CONFIG.motto)} — RE-ESTABLISHED MILITARIZED NATION</div>
  </div>
  <div class="org-branches">
    ${ORG_TREE.map(b => `
      <div class="org-branch">
        <div class="org-branch-head">${branchEmblemOf(b)}<span>${esc(b.branch)}<span class="org-branch-blurb">${esc(b.blurb)}</span></span></div>
        <ul class="org-children">
          ${b.children.map(id => {
            const f = FACTIONS.find(x => x.id === id);
            return f ? `<li><button class="org-child" data-open-faction="${esc(f.id)}">${orgEmblem(f, 32)}<span>${esc(f.name)}</span></button></li>` : '';
          }).join('')}
        </ul>
      </div>`).join('')}
  </div>`;

/* ───────── Division cards (grouped by branch) ───────── */
$('#factionGroups').innerHTML = ORG_TREE.map(branch => `
  <div class="faction-group">
    <h3 class="faction-branch">${esc(branch.branch)}<span class="faction-branch-blurb">${esc(branch.blurb)}</span></h3>
    <div class="division-grid">
      ${branch.children.map(id => {
        const f = FACTIONS.find(x => x.id === id);
        if (!f) return '';
        const emblem = f.emblem
          ? `<img class="faction-emblem" src="${esc(f.emblem)}" alt="${esc(f.name)} emblem">`
          : factionSealSVG(f, 150);
        return `
        <article class="division-card" data-faction="${esc(f.id)}">
          <div class="division-banner seal-banner">${emblem}</div>
          <div class="division-body">
            <h4 class="division-name">${esc(f.name)}</h4>
            <p class="division-motto">${esc(FACTION_MOTTOS[f.id] || '')}</p>
            <p class="division-line"><strong>Mandate</strong>${esc(f.mandate.split('. ')[0] + '.')}</p>
            <p class="division-line"><strong>Eligibility</strong>${esc(f.eligibility)}</p>
            <button class="dossier-btn" data-open-faction="${esc(f.id)}">OPEN FULL DOSSIER →</button>
          </div>
        </article>`;
      }).join('')}
    </div>
  </div>`).join('');

function openFactionModal(id) {
  const f = FACTIONS.find(x => x.id === id);
  if (!f) return;
  const emblem = f.emblem
    ? `<img class="dossier-emblem" src="${esc(f.emblem)}" alt="${esc(f.name)} emblem">`
    : factionSealSVG(f, 170);
  const discordBtn = f.discord
    ? `<a class="btn btn-solid dark dossier-discord" href="${esc(NOVA_CONFIG[f.discord])}" target="_blank" rel="noopener">JOIN THE ${esc(f.name.replace(/^The /, '').toUpperCase())} DISCORD →</a>`
    : '';
  $('#factionModalBody').innerHTML = `
    <div class="dossier-top">
      <div class="dossier-seal">${emblem}</div>
      <div>
        <p class="dossier-branch">${esc(f.branch)}</p>
        <h3 class="dossier-title" id="factionModalTitle">${esc(f.name)}</h3>
        <p class="dossier-motto">${esc(FACTION_MOTTOS[f.id] || '')}</p>
        ${discordBtn}
      </div>
    </div>
    <div class="dossier-block"><h4>Mandate</h4><p>${esc(f.mandate)}</p></div>
    <div class="dossier-block"><h4>Structure</h4><p>${esc(f.structure)}</p></div>
    <div class="dossier-block"><h4>Eligibility</h4><p>${esc(f.eligibility)}</p></div>
    ${f.docs.length ? `<div class="dossier-block"><h4>Official Documents</h4>${f.docs.map(d => `<a class="doc-link" href="${esc(d.href)}" target="_blank" rel="noopener">DOC // ${esc(d.label)}</a>`).join('')}</div>` : ''}`;
  openModal('#factionModal');
}

/* ───────── Rank groups ───────── */
$('#rankGroups').innerHTML = RANK_GROUPS.map(g => `
  <div class="rank-group">
    <div class="rank-group-head"><span class="rank-group-name">${esc(g.group)}</span><span class="rank-group-blurb">${esc(g.blurb)}</span></div>
    <ul class="rank-rows">
      ${g.rows.map(r => `<li><span class="rank-row-name">${esc(r.name)}</span><span class="rank-row-note">${esc(r.note)}</span></li>`).join('')}
    </ul>
  </div>`).join('');

/* ───────── Minimum rank requirements ───────── */
$('#requirementsTable tbody').innerHTML = REQUIREMENTS.map(r => `
  <tr><td class="rank-name">${esc(r.faction)}</td><td class="req-min">${esc(r.min)}</td><td>${esc(r.note)}</td></tr>`).join('');

/* ───────── Medals ───────── */
$('#medalsGrid').innerHTML = MEDALS.map(m => `
  <article class="medal-card">
    <div class="medal-disc">${medalSVG(m.level)}</div>
    <div class="medal-info">
      <span class="medal-tier">${esc(m.tier)}</span>
      <h3 class="medal-name">${esc(m.name)}</h3>
      <p class="medal-summary">${esc(m.summary)}</p>
      <p class="medal-earn-title">HOW TO EARN</p>
      <ul class="medal-earn">${m.earn.map(e => `<li>${esc(e)}</li>`).join('')}</ul>
    </div>
  </article>`).join('');

/* ============================================================
   MODALS
   ============================================================ */
let lastFocus = null;
function openModal(sel) {
  lastFocus = document.activeElement;
  const modal = $(sel);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const closer = $('.modal-close', modal);
  if (closer) closer.focus();
}
function closeModal(modal) {
  if (modal.id === 'videoModal') {
    const embed = $('#videoEmbed', modal);
    if (embed) embed.innerHTML = ''; // stop playback on close
  }
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
$$('.modal').forEach(modal => {
  modal.addEventListener('click', e => { if (e.target.hasAttribute('data-close-modal')) closeModal(modal); });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') $$('.modal:not([hidden])').forEach(closeModal);
});

document.addEventListener('click', e => {
  const factionBtn = e.target.closest('[data-open-faction]');
  if (factionBtn) { openFactionModal(factionBtn.dataset.openFaction); return; }
  const newsCard = e.target.closest('[data-news-id]');
  if (newsCard) {
    const n = NEWS.find(x => x.id === newsCard.dataset.newsId);
    if (!n) return;
    $('#newsModalBody').innerHTML = `
      <div class="news-modal-cat">${esc(n.cat)} — ${esc(n.date)}</div>
      <h3 class="news-modal-title" id="newsModalTitle">${esc(n.headline)}</h3>
      <div class="news-modal-body">${n.body.map(p => `<p>${esc(p)}</p>`).join('')}</div>
      <div class="news-modal-sign">${esc(n.sign)}</div>`;
    openModal('#newsModal');
  }
});
