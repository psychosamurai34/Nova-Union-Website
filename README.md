# THE NOVA UNION — Official Group Website
Black & white propaganda site for the Nova Union VRChat milsim nation. Real lore loaded: presidency, org chart, ranks, medals, requirements, honors, and Nova News.

## Open it
Double-click `index.html` — works straight from your desktop. (Fonts come from the internet; offline falls back to Impact/Courier New.)

## Everything is editable in `js/data.js`
| What | Where |
|---|---|
| Discord invites (Union / MP / Agency / Guards) | `NOVA_CONFIG.discord*` |
| Forum URLs (report member / suggest website additions) | LIVE — `NOVA_CONFIG.forumReportUrl` (justice form) / `forumSuggestUrl` (suggestion docket) — both are published Google Forms |
| Motto, last-updated date, VRChat groups | `NOVA_CONFIG` |
| 3-part presidency & 2-part vice presidency | `PRESIDENTS` / `VICE_PRESIDENTS` |
| Org chart (3 branches) | `ORG_TREE` |
| Factions: mandates, structure, eligibility, docs, Discord | `FACTIONS` (+ `FACTION_MOTTOS`) |
| Official ranks (6 groups, E/O/G/TNA + Leadership) | `RANK_GROUPS` |
| Minimum rank requirements | `REQUIREMENTS` |
| The 7 Nova Union medals & how to earn | `MEDALS` |
| UNION WIRE ticker + Notice Board | `ANNOUNCEMENTS` |
| Nova News dispatches | `NEWS` |
| National Honors roll [sample] | `HONOREES` |
| Stat band | `UNION_STATS` |

Docs in `docs/`: `recruitment-manual.md` and `legion-act.md` (transcribed).

## Real emblems (when you have the image files)
Faction seals on the site are generated monochrome SVGs drawn from your emblem art. To use the real ones:
1. Save each emblem PNG into `assets/emblems/` (e.g. `armored.png`).
2. In `js/data.js`, add `emblem: 'assets/emblems/armored.png'` to that faction in `FACTIONS`.
The site automatically shows the image instead of the seal (cards + dossiers).

## Announcements "off the website"
Site visitors always see the UNION WIRE ticker + Notice Board. Two ways to publish:
1. Edit `ANNOUNCEMENTS` in `js/data.js`.
2. Host a small JSON anywhere public (e.g. raw GitHub Gist): `[{ "tag": "NOTICE", "date": "NOV 15", "text": "..." }]` and paste its URL into `NOVA_CONFIG.announcementsUrl`. Visitors get remote announcements without touching the site.

## Forums (external)
Section 08 links out to `forumReportUrl` and `forumSuggestUrl` — point them at Discourse/Flarum/Google Groups/Discord forums. They open in a new tab.

## Hosting (free)
Netlify Drop / Cloudflare Pages / GitHub Pages — it's fully static. Drag the folder or push the repo; done.

## TODOs
- [ ] Real forum URLs (report / suggest)
- [ ] Real social fronts (only the 4 Discords provided so far)
- [ ] Real emblem files → `assets/emblems/` + `emblem:` in data.js
- [ ] Real this-week honorees (`HONOREES` currently a sample)
- [ ] Nova Holland mandate ("record pending" as provided)
- [ ] Anything marked [PLACEHOLDER]
