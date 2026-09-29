const CAREER_EMAIL = "career@zproo.com";

/* ================= DATA ================= */
const POSTS = [
  {
    id: "why-electric", cat: "ev", label: "EV & Tech",
    title: "Why every Zproo ride is 100% electric",
    excerpt: "We could have started with a mixed fleet. We chose not to, and here's why.",
    date: "Sep 2026", read: "4 min",
    body: `
      <p>When we started Zproo, the easy path was a mixed fleet: some electric, some fuel, and switch over "later". We decided against it on day one.</p>
      <h4>Clean from the first kilometre</h4>
      <p>An electric car has no tailpipe, so it gives off no exhaust on the road. For a city like Pune, where traffic and air quality affect everyone's day, that matters.</p>
      <h4>Better for drivers too</h4>
      <p>Charging costs less per kilometre than fuel, and EVs have fewer moving parts to maintain. That helps our driver partners keep more of what they earn.</p>
      <h4>A quieter ride</h4>
      <p>Riders keep telling us the same thing: it's calm. No engine noise, smooth acceleration, and a cabin that's comfortable for a work call.</p>
      <p>Going all-electric makes operations harder, especially charging and planning around range. It's also the reason many of our tech and ops roles exist.</p>`
  },
  {
    id: "first-hires", cat: "hiring", label: "Hiring",
    title: "What we look for in our first 50 hires",
    excerpt: "Ownership, curiosity and kindness. Here's what they look like in practice at Zproo.",
    date: "Sep 2026", read: "5 min",
    body: `
      <p>The first 50 people at a startup shape its culture for years. Here's what we look for.</p>
      <h4>1. Owners, not passengers</h4>
      <p>We want people who see a broken process and fix it without waiting for a ticket.</p>
      <h4>2. Curious about the problem</h4>
      <p>EV ride-hailing is new, so there's rarely a playbook to copy. The people who do well here ask "why" a lot.</p>
      <h4>3. Kind and direct</h4>
      <p>We give honest feedback, and we give it with respect.</p>
      <p>If that sounds like you, write to <a href="mailto:${CAREER_EMAIL}">${CAREER_EMAIL}</a>. We read every email.</p>`
  },
  {
    id: "day-in-ops", cat: "culture", label: "Culture",
    title: "A day in Zproo Operations",
    excerpt: "From the 6 AM charging check to the late-evening demand peak, a day with the team that keeps Pune moving.",
    date: "Aug 2026", read: "6 min",
    body: `
      <p><strong>6:00 AM:</strong> The day starts at the charging hub. Every vehicle's battery level is checked before the morning rush.</p>
      <p><strong>8:30 AM:</strong> Hinjawadi and the IT corridors light up with ride requests. The team watches demand live and moves vehicles to where riders are waiting.</p>
      <p><strong>1:00 PM:</strong> Onboarding session for new driver partners: app training, EV driving tips and our safety standards.</p>
      <p><strong>6:00 PM:</strong> Evening peak. Charging is scheduled so that no car runs low when riders need it most.</p>
      <p><strong>9:00 PM:</strong> A quick wrap-up: what went well, what broke, and what we'll fix tomorrow.</p>
      <p>It's fast, hands-on work, and you see your impact on the street right away.</p>`
  },
  {
    id: "founders-note", cat: "culture", label: "Culture",
    title: "A note from our founders",
    excerpt: "Ronak Kumar and Dhanraj Garg on why they started Zproo and the kind of company they want to build.",
    date: "Jul 2026", read: "3 min",
    body: `
      <p>We started Zproo because we believe clean transport should be the everyday choice, not a luxury.</p>
      <p>Building a ride network from scratch is hard. Vehicles, charging, drivers, riders and software all have to work together, every minute of every day. We can't do it alone.</p>
      <p>We want Zproo to be a place where people are trusted with real responsibility early, where good ideas win regardless of title, and where everyone can point at a street in Pune and say "I helped make that cleaner."</p>
      <p>If that excites you, come build with us.</p>
      <p><em>Ronak &amp; Dhanraj</em></p>`
  },
  {
    id: "charging-tech", cat: "ev", label: "EV & Tech",
    title: "Solving range anxiety with smart dispatch",
    excerpt: "How we use battery data to make sure the car that picks you up can finish the trip.",
    date: "Jun 2026", read: "5 min",
    body: `
      <p>A fuel car can refuel in five minutes. An EV can't, so our dispatch system has to plan ahead.</p>
      <h4>Battery-aware matching</h4>
      <p>When you book, we don't just look for the nearest car. We check whether it has enough charge for your trip plus a safe buffer.</p>
      <h4>Charging in the quiet hours</h4>
      <p>Using past demand, we suggest charging windows to drivers so vehicles top up when requests are low.</p>
      <p>Interested in problems like this? Our Technology team is hiring. See the open roles below.</p>`
  },
  {
    id: "interns", cat: "hiring", label: "Hiring",
    title: "Internships at Zproo: real work from week one",
    excerpt: "Our interns ship features, run pilots and present to the founders. Here's how the program works.",
    date: "May 2026", read: "3 min",
    body: `
      <p>An internship at Zproo isn't about making coffee. Every intern gets a real project with a clear owner and a real outcome.</p>
      <h4>How it works</h4>
      <p>You're paired with a mentor, get a 3–6 month project, and present your results to the founders at the end.</p>
      <h4>Who can apply</h4>
      <p>Final-year students and recent graduates in engineering, business, design or marketing. Email <a href="mailto:${CAREER_EMAIL}?subject=Internship%20Application">${CAREER_EMAIL}</a> with the subject "Internship Application".</p>`
  }
];

const JOBS = [
  { title: "Android Developer", team: "Technology", loc: "Pune (On-site)", type: "Full-time", exp: "2–4 yrs",
    about: "Build and scale the Zproo rider and driver Android apps used across Pune every day.",
    resp: ["Develop new features in Kotlin with clean, testable code", "Improve app performance, reliability and offline behaviour", "Work with design and backend to ship features end to end"],
    req: ["2+ years of Android development in Kotlin", "Experience with REST APIs, maps or location services", "A published app on the Play Store is a plus"] },
  { title: "Backend Engineer (Node.js)", team: "Technology", loc: "Pune (Hybrid)", type: "Full-time", exp: "2–5 yrs",
    about: "Own the services behind booking, dispatch, pricing and payments.",
    resp: ["Design and build scalable APIs and services", "Work on real-time matching and battery-aware dispatch", "Own monitoring, alerting and uptime for your services"],
    req: ["Strong Node.js / TypeScript skills", "Experience with SQL and NoSQL databases", "An understanding of distributed systems basics"] },
  { title: "Data Analyst", team: "Technology", loc: "Pune (Hybrid)", type: "Full-time", exp: "1–3 yrs",
    about: "Turn ride, fleet and battery data into decisions.",
    resp: ["Build dashboards for ops, growth and leadership", "Analyse demand patterns and charging efficiency", "Run and measure A/B experiments"],
    req: ["Strong SQL and Excel / Google Sheets", "Experience with Python or a BI tool (Metabase, Power BI, etc.)", "Clear written communication"] },
  { title: "Fleet Operations Manager", team: "Operations", loc: "Pune (On-site)", type: "Full-time", exp: "3–6 yrs",
    about: "Keep the Zproo fleet charged, serviced and on the road.",
    resp: ["Manage vehicle uptime, maintenance and charging schedules", "Lead the on-ground fleet team", "Track and improve fleet KPIs"],
    req: ["3+ years in fleet, logistics or mobility operations", "Comfortable with data and spreadsheets", "EV experience is a big plus"] },
  { title: "Driver Partner Onboarding Executive", team: "Operations", loc: "Pune (On-site)", type: "Full-time", exp: "0–2 yrs",
    about: "Be the first face our driver partners meet at Zproo.",
    resp: ["Source, verify and onboard new driver partners", "Run app and EV training sessions", "Handle driver queries and support"],
    req: ["Good communication in Marathi, Hindi and English", "Freshers with the right attitude are welcome", "A two-wheeler and a valid licence are preferred"] },
  { title: "Growth Marketing Manager", team: "Growth & Marketing", loc: "Pune (Hybrid)", type: "Full-time", exp: "3–5 yrs",
    about: "Drive rider acquisition and retention across digital and offline channels.",
    resp: ["Plan and run performance campaigns", "Build referral, corporate and campus programs", "Track CAC, retention and campaign ROI"],
    req: ["3+ years in growth for a consumer app", "Hands-on with Meta and Google Ads", "Creative, data-driven and scrappy"] },
  { title: "Social Media & Content Intern", team: "Growth & Marketing", loc: "Pune (On-site)", type: "Internship", exp: "Fresher",
    about: "Tell the Zproo story on LinkedIn, Instagram and beyond.",
    resp: ["Create posts, reels and blog content", "Cover team events and rider stories", "Track engagement and suggest improvements"],
    req: ["A strong eye for design and writing", "Familiar with Canva or similar tools", "Available for 3–6 months"] },
  { title: "Customer Support Associate", team: "Customer Experience", loc: "Pune (On-site)", type: "Full-time", exp: "0–2 yrs",
    about: "Help riders and drivers by phone, chat and email.",
    resp: ["Resolve rider and driver issues quickly and kindly", "Escalate safety concerns right away", "Share recurring feedback with product and ops"],
    req: ["Fluent in English and Hindi; Marathi is a plus", "Patient, empathetic and a good listener", "Open to rotational shifts"] },
  { title: "Finance & Accounts Executive", team: "Business & Finance", loc: "Pune (On-site)", type: "Full-time", exp: "1–3 yrs",
    about: "Keep our books clean and help us understand our unit economics.",
    resp: ["Handle accounting, payables and reconciliation", "Support GST and compliance filings", "Prepare monthly MIS reports"],
    req: ["B.Com / M.Com / CA Inter", "Working knowledge of Tally or Zoho Books", "Strong attention to detail"] },
  { title: "HR & Talent Acquisition Executive", team: "Business & Finance", loc: "Pune (On-site)", type: "Full-time", exp: "1–3 yrs",
    about: "Help us find and look after the people who build Zproo.",
    resp: ["Run hiring end to end, from sourcing to offer", "Own onboarding and employee engagement", "Maintain HR policies and records"],
    req: ["1+ years in HR or recruitment, ideally at a startup", "Great communicator and organiser", "Passionate about culture"] }
];

/* ================= HELPERS ================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ================= NAV ================= */
const nav = $("#nav");
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");
const progress = $("#progress");
const toTop = $("#toTop");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", open);
});
$$("a", navLinks).forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-scrolled", y > 30);
  toTop.classList.toggle("is-visible", y > 600);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    $$(".nav__links a:not(.btn)").forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
["about", "founders", "teams", "life", "blog", "jobs"].forEach((id) => sectionObserver.observe(document.getElementById(id)));

/* ================= REVEAL ON SCROLL ================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    // Stagger siblings that appear together
    const siblings = $$(":scope > .reveal", el.parentElement);
    const i = Math.max(0, siblings.indexOf(el));
    el.style.transitionDelay = Math.min(i, 6) * 80 + "ms";
    el.classList.add("is-visible");
    revealObserver.unobserve(el);
  });
}, { threshold: 0.12 });
const observeReveals = (root = document) => $$(".reveal:not(.is-visible)", root).forEach((el) => revealObserver.observe(el));

/* ================= HERO WORD ROTATOR ================= */
(() => {
  const words = $$(".rotator__word");
  let i = 0;
  setInterval(() => {
    const cur = words[i];
    cur.classList.remove("is-active");
    cur.classList.add("is-leaving");
    setTimeout(() => cur.classList.remove("is-leaving"), 500);
    i = (i + 1) % words.length;
    words[i].classList.add("is-active");
  }, 2400);
})();

/* ================= COUNTERS ================= */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const start = target > 1000 ? target - 25 : 0;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });
$$("[data-count]").forEach((el) => counterObserver.observe(el));

/* ================= TEAM TABS ================= */
$$(".tab").forEach((tab) => tab.addEventListener("click", () => {
  $$(".tab").forEach((t) => t.classList.toggle("is-active", t === tab));
  $$(".panel").forEach((p) => p.classList.toggle("is-active", p.dataset.panel === tab.dataset.tab));
}));

/* ================= MODALS ================= */
let lastFocus = null;
function openModal(modal) {
  lastFocus = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  setTimeout(() => ($("input, .modal__close", modal) || modal).focus(), 50);
}
function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}
$$(".modal").forEach((m) => $$("[data-close]", m).forEach((b) => b.addEventListener("click", () => closeModal(m))));
addEventListener("keydown", (e) => {
  if (e.key === "Escape") $$(".modal.is-open").forEach(closeModal);
});

/* ================= BLOG ================= */
const blogGrid = $("#blogGrid");
blogGrid.innerHTML = POSTS.map((p) => `
  <article class="card post post--${p.cat} reveal" data-cat="${p.cat}" data-id="${p.id}" tabindex="0" role="button" aria-label="Read: ${esc(p.title)}">
    <div class="post__band"></div>
    <div class="post__inner">
      <span class="post__cat">${esc(p.label)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.excerpt)}</p>
      <div class="post__meta"><span>${p.date} · ${p.read} read</span><span class="post__more">Read →</span></div>
    </div>
  </article>`).join("");

const postModal = $("#postModal");
function openPost(id) {
  const p = POSTS.find((x) => x.id === id);
  if (!p) return;
  $("#postMeta").textContent = `${p.label} · ${p.date} · ${p.read} read`;
  $("#postTitle").textContent = p.title;
  $("#postBody").innerHTML = p.body; // trusted static content
  openModal(postModal);
}
blogGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".post");
  if (card) openPost(card.dataset.id);
});
blogGrid.addEventListener("keydown", (e) => {
  const card = e.target.closest(".post");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openPost(card.dataset.id); }
});

$$("#blogFilters .chip").forEach((chip) => chip.addEventListener("click", () => {
  $$("#blogFilters .chip").forEach((c) => c.classList.toggle("is-active", c === chip));
  const f = chip.dataset.filter;
  $$(".post", blogGrid).forEach((card) => {
    const show = f === "all" || card.dataset.cat === f;
    card.classList.toggle("is-hidden", !show);
    if (show) { card.classList.remove("is-visible"); void card.offsetWidth; card.style.transitionDelay = "0ms"; card.classList.add("is-visible"); }
  });
}));

/* ================= JOBS ================= */
const jobList = $("#jobList");
const jobSearch = $("#jobSearch");
const jobTeam = $("#jobTeam");
const jobCount = $("#jobCount");

function renderJobs() {
  const q = jobSearch.value.trim().toLowerCase();
  const team = jobTeam.value;
  const list = JOBS
    .map((j, idx) => ({ ...j, idx }))
    .filter((j) => (team === "all" || j.team === team) &&
      (!q || [j.title, j.team, j.loc, j.type, j.about].join(" ").toLowerCase().includes(q)));

  jobCount.textContent = `${list.length} open role${list.length === 1 ? "" : "s"}`;

  if (!list.length) {
    jobList.innerHTML = `<p class="empty">No roles match your search yet. Send a general application to <a href="mailto:${CAREER_EMAIL}">${CAREER_EMAIL}</a>.</p>`;
    return;
  }

  jobList.innerHTML = list.map((j) => `
    <article class="job" data-idx="${j.idx}">
      <button class="job__head" aria-expanded="false">
        <div>
          <div class="job__title">${esc(j.title)}</div>
          <div class="job__meta"><span>${esc(j.team)}</span><span>${esc(j.loc)}</span><span>${esc(j.type)}</span><span>${esc(j.exp)}</span></div>
        </div>
        <span class="job__chev" aria-hidden="true">+</span>
      </button>
      <div class="job__body"><div><div class="job__content">
        <p>${esc(j.about)}</p>
        <h5>What you'll do</h5><ul>${j.resp.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
        <h5>What we're looking for</h5><ul>${j.req.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
        <div class="job__actions">
          <button class="btn btn--primary btn--sm" data-apply="${j.idx}">Apply now</button>
          <a class="btn btn--outline btn--sm" href="mailto:${CAREER_EMAIL}?subject=${encodeURIComponent("Application: " + j.title)}">Email résumé directly</a>
        </div>
      </div></div></div>
    </article>`).join("");
}

jobList.addEventListener("click", (e) => {
  const applyBtn = e.target.closest("[data-apply]");
  if (applyBtn) { openApply(JOBS[+applyBtn.dataset.apply]); return; }
  const head = e.target.closest(".job__head");
  if (!head) return;
  const job = head.parentElement;
  const open = !job.classList.contains("is-open");
  $$(".job.is-open", jobList).forEach((j) => { j.classList.remove("is-open"); $(".job__head", j).setAttribute("aria-expanded", "false"); });
  job.classList.toggle("is-open", open);
  head.setAttribute("aria-expanded", open);
});
jobSearch.addEventListener("input", renderJobs);
jobTeam.addEventListener("change", renderJobs);

/* ================= APPLY FORM → mailto ================= */
const applyModal = $("#applyModal");
const applyForm = $("#applyForm");
const formError = $("#formError");
let currentJob = null;

function openApply(job) {
  currentJob = job;
  $("#applyTitle").textContent = job.title;
  applyForm.reset();
  formError.textContent = "";
  openModal(applyModal);
}

applyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(applyForm));
  if (!d.name.trim()) { formError.textContent = "Please enter your name."; return; }
  if (!/^\S+@\S+\.\S+$/.test(d.email.trim())) { formError.textContent = "Please enter a valid email address."; return; }
  formError.textContent = "";

  const subject = `Application: ${currentJob.title} | ${d.name.trim()}`;
  const body = [
    `Hi Zproo Team,`,
    ``,
    `I'd like to apply for the ${currentJob.title} role (${currentJob.team}, ${currentJob.loc}).`,
    ``,
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "-"}`,
    `LinkedIn / Portfolio: ${d.link || "-"}`,
    `Experience: ${d.exp}`,
    ``,
    `Why Zproo:`,
    d.why || "-",
    ``,
    `I've attached my résumé.`,
    ``,
    `Thanks,`,
    d.name
  ].join("\n");

  window.location.href = `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  closeModal(applyModal);
});

/* ================= INIT ================= */
renderJobs();
observeReveals();
$("#year").textContent = new Date().getFullYear();
