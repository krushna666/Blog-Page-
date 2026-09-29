# Zproo Careers & Blog Page (React)

A careers + blog site for **Zproo** (ZPROO EV Pvt. Ltd., Pune), built with **React + Vite** and styled after the redBus careers page flow.

## Run it
```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```
Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages or any static host.

## Sections
Hero (rotating headline) → marquee → About & animated stats → Values → **Founders** → **Teams** (tabs) → Life at Zproo → Journey timeline → **Blog** (filterable, posts open in a modal) → **Open roles** (search/filter, expandable cards, apply form) → Hiring process → FAQ → Footer.

## Custom cursor
`src/components/CustomCursor.jsx`: a dot that follows the mouse exactly plus a ring that trails behind with easing.
- Grows over links, buttons and cards
- Shows a label (e.g. **Apply**, **Read**, **View**) over any element with `data-cursor="Label"`
- Turns into a text bar over inputs and shrinks on click
- Turned off automatically on touch devices and for users who prefer reduced motion

## Hiring
Every "Apply" flow goes to **career@zproo.com**. The apply form opens the candidate's email app with a pre-filled subject and body, and the candidate attaches their résumé.

## Project structure
```
src/
  data/content.js      ← all text: founders, teams, blog posts, jobs, FAQ
  components/          ← one component per section + CustomCursor, Modal
  hooks/               ← useReveal, useCountUp, useScroll, useScrollSpy
  index.css            ← styles (colours are CSS variables at the top)
```
To add a job or blog post, add an entry to `JOBS` or `POSTS` in `src/data/content.js`.
