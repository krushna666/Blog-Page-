# Zproo Careers & Blog Page

A single-page careers + blog site for **Zproo** (ZPROO EV Pvt. Ltd., Pune), styled after the redBus careers page flow.

## Sections
Hero (rotating headline) → marquee → About & animated stats → Values → **Founders** → **Teams** (tabs) → Life at Zproo → Journey timeline → **Blog** (filterable, opens posts in a modal) → **Open roles** (search/filter, expandable cards, apply form) → Hiring process → FAQ → Footer.

## Hiring
Every "Apply" flow sends to **career@zproo.com**. The apply form opens the candidate's email app with a pre-filled subject and body, and the candidate attaches their résumé.

## Editing content
- Blog posts: the `POSTS` array in `script.js`
- Job openings: the `JOBS` array in `script.js`
- Founders / teams / perks: `index.html`
- Colours: CSS variables at the top of `styles.css`

## Run
No build step. Open `index.html` in a browser, or host the folder on GitHub Pages, Netlify, etc.
