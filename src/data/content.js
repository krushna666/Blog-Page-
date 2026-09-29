export const CAREER_EMAIL = "career@zproo.com";

export const mailto = (subject, body) => {
  const params = [];
  if (subject) params.push("subject=" + encodeURIComponent(subject));
  if (body) params.push("body=" + encodeURIComponent(body));
  return `mailto:${CAREER_EMAIL}${params.length ? "?" + params.join("&") : ""}`;
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "founders", label: "Founders" },
  { id: "teams", label: "Teams" },
  { id: "life", label: "Life at Zproo" },
  { id: "blog", label: "Blog" },
  { id: "jobs", label: "Open Roles" },
];

export const HERO_WORDS = ["clean mobility", "electric rides", "greener cities", "your career"];

export const MARQUEE = ["Ride Electrified", "Zero Tailpipe Emissions", "Built in Pune", "Ownership over Titles", "Customer First"];

export const STATS = [
  { count: 100, suffix: "%", label: "Electric fleet" },
  { count: 0, suffix: "", label: "Tailpipe emissions" },
  { count: 2025, suffix: "", label: "Founded" },
  { count: 24, suffix: "×7", label: "Rides, day & night" },
];

export const VALUES = [
  { icon: "🌱", title: "Planet first", text: "Every decision we make is measured against one question: does it make travel cleaner?" },
  { icon: "🤝", title: "Riders & drivers", text: "We win only when riders feel safe and drivers earn fairly. Both are our customers." },
  { icon: "🚀", title: "Own it", text: "No waiting for permission. See a problem, pick it up, ship a fix, share what you learned." },
  { icon: "💡", title: "Stay curious", text: "EV mobility is new territory. We experiment, measure honestly and keep learning." },
];

export const FOUNDERS = [
  {
    initials: "RK", name: "Ronak Kumar", role: "Co-Founder & Director",
    quote: "Electric mobility shouldn't be a premium choice. It should be the default way a city moves.",
    bio: "Ronak leads Zproo's vision and growth, from building the ride network to shaping how the company scales across Pune and beyond. He looks for people who care about impact as much as execution.",
    tags: ["Vision", "Growth", "Partnerships"],
  },
  {
    initials: "DG", name: "Dhanraj Garg", role: "Co-Founder & Director", alt: true,
    quote: "Great service comes from great people on the ground. Take care of the team and the team takes care of the rider.",
    bio: "Dhanraj drives operations and the on-ground experience, including fleet, driver partners and day-to-day service quality. He's building a culture where everyone owns the rider's journey.",
    tags: ["Operations", "Fleet", "People"],
  },
];

export const TEAMS = [
  {
    id: "tech", name: "Technology", icon: "⌨️", motto: "Ship small, ship often, watch it run.",
    text: "We build the rider app, the driver app, and the systems that match trips, set prices and track every vehicle's battery. You'll work across mobile, backend and data, and see your code on the road within days.",
    points: ["Rider & driver mobile apps", "Dispatch & routing engine", "Battery & fleet telemetry", "Data & analytics"],
  },
  {
    id: "ops", name: "Operations", icon: "🔋", motto: "Every car charged, every ride on time.",
    text: "Operations keeps the city moving: onboarding driver partners, keeping the fleet charged and serviced, and making sure there's a Zproo nearby when a rider needs one.",
    points: ["Fleet & charging management", "Driver partner onboarding", "City launch playbooks", "Safety & compliance"],
  },
  {
    id: "growth", name: "Growth & Marketing", icon: "📣", motto: "Make green the obvious choice.",
    text: "Tell Pune why going electric is the smarter ride. From brand and social to referrals and corporate partnerships, this team turns first rides into daily habits.",
    points: ["Brand & social media", "Performance marketing", "Corporate & campus tie-ups", "Community events"],
  },
  {
    id: "cx", name: "Customer Experience", icon: "💬", motto: "Every ticket is a chance to earn trust.",
    text: "The voice of our riders and drivers. CX solves problems in real time and feeds what it hears back into product and operations so the same issue doesn't come up twice.",
    points: ["Rider & driver support", "Quality & feedback loops", "Trust & safety", "Help center content"],
  },
  {
    id: "biz", name: "Business & Finance", icon: "📊", motto: "Clean rides, clean numbers.",
    text: "Unit economics, pricing, fundraising and people operations. This team makes sure every kilometre we drive builds a sustainable business.",
    points: ["Finance & unit economics", "Strategy & pricing", "HR & talent", "Legal & admin"],
  },
];

export const PERKS = [
  { icon: "🏥", title: "Health cover", text: "Medical insurance for you and your family." },
  { icon: "📈", title: "Early-team growth", text: "Bigger scope, faster. Your role grows as fast as you do." },
  { icon: "🚗", title: "Free Zproo rides", text: "Monthly ride credits to get to work, electrically." },
  { icon: "🎓", title: "Learning budget", text: "Courses, books and conferences, on us." },
  { icon: "🕒", title: "Flexible hours", text: "We care about outcomes, not when you badge in." },
  { icon: "🎉", title: "Team rituals", text: "Friday demos, monthly outings and launch-day celebrations." },
];

export const TIMELINE = [
  { title: "The idea", text: "Two founders ask why city rides still burn fuel when electric is ready." },
  { title: "Sep 2025: Zproo is born", text: "ZPROO EV Private Limited is incorporated in Hinjawadi, Pune." },
  { title: "First rides in Pune", text: "Electric rides go live with our first driver partners." },
  { title: "Next: you", text: "We're growing the team to take Zproo across the city and beyond.", next: true },
];

export const BLOG_FILTERS = [
  { id: "all", label: "All" },
  { id: "culture", label: "Culture" },
  { id: "ev", label: "EV & Tech" },
  { id: "hiring", label: "Hiring" },
];

/* Post body blocks: { h } heading, { p, lead? } paragraph, { email, subject? } apply line */
export const POSTS = [
  {
    id: "why-electric", cat: "ev", label: "EV & Tech",
    title: "Why every Zproo ride is 100% electric",
    excerpt: "We could have started with a mixed fleet. We chose not to, and here's why.",
    date: "Sep 2026", read: "4 min",
    body: [
      { p: "When we started Zproo, the easy path was a mixed fleet: some electric, some fuel, and switch over \"later\". We decided against it on day one." },
      { h: "Clean from the first kilometre" },
      { p: "An electric car has no tailpipe, so it gives off no exhaust on the road. For a city like Pune, where traffic and air quality affect everyone's day, that matters." },
      { h: "Better for drivers too" },
      { p: "Charging costs less per kilometre than fuel, and EVs have fewer moving parts to maintain. That helps our driver partners keep more of what they earn." },
      { h: "A quieter ride" },
      { p: "Riders keep telling us the same thing: it's calm. No engine noise, smooth acceleration, and a cabin that's comfortable for a work call." },
      { p: "Going all-electric makes operations harder, especially charging and planning around range. It's also the reason many of our tech and ops roles exist." },
    ],
  },
  {
    id: "first-hires", cat: "hiring", label: "Hiring",
    title: "What we look for in our first 50 hires",
    excerpt: "Ownership, curiosity and kindness. Here's what they look like in practice at Zproo.",
    date: "Sep 2026", read: "5 min",
    body: [
      { p: "The first 50 people at a startup shape its culture for years. Here's what we look for." },
      { h: "1. Owners, not passengers" },
      { p: "We want people who see a broken process and fix it without waiting for a ticket." },
      { h: "2. Curious about the problem" },
      { p: "EV ride-hailing is new, so there's rarely a playbook to copy. The people who do well here ask \"why\" a lot." },
      { h: "3. Kind and direct" },
      { p: "We give honest feedback, and we give it with respect." },
      { email: "If that sounds like you, write to us. We read every email:" },
    ],
  },
  {
    id: "day-in-ops", cat: "culture", label: "Culture",
    title: "A day in Zproo Operations",
    excerpt: "From the 6 AM charging check to the late-evening demand peak, a day with the team that keeps Pune moving.",
    date: "Aug 2026", read: "6 min",
    body: [
      { lead: "6:00 AM:", p: "The day starts at the charging hub. Every vehicle's battery level is checked before the morning rush." },
      { lead: "8:30 AM:", p: "Hinjawadi and the IT corridors light up with ride requests. The team watches demand live and moves vehicles to where riders are waiting." },
      { lead: "1:00 PM:", p: "Onboarding session for new driver partners: app training, EV driving tips and our safety standards." },
      { lead: "6:00 PM:", p: "Evening peak. Charging is scheduled so that no car runs low when riders need it most." },
      { lead: "9:00 PM:", p: "A quick wrap-up: what went well, what broke, and what we'll fix tomorrow." },
      { p: "It's fast, hands-on work, and you see your impact on the street right away." },
    ],
  },
  {
    id: "founders-note", cat: "culture", label: "Culture",
    title: "A note from our founders",
    excerpt: "Ronak Kumar and Dhanraj Garg on why they started Zproo and the kind of company they want to build.",
    date: "Jul 2026", read: "3 min",
    body: [
      { p: "We started Zproo because we believe clean transport should be the everyday choice, not a luxury." },
      { p: "Building a ride network from scratch is hard. Vehicles, charging, drivers, riders and software all have to work together, every minute of every day. We can't do it alone." },
      { p: "We want Zproo to be a place where people are trusted with real responsibility early, where good ideas win regardless of title, and where everyone can point at a street in Pune and say \"I helped make that cleaner.\"" },
      { p: "If that excites you, come build with us." },
      { p: "— Ronak & Dhanraj" },
    ],
  },
  {
    id: "charging-tech", cat: "ev", label: "EV & Tech",
    title: "Solving range anxiety with smart dispatch",
    excerpt: "How we use battery data to make sure the car that picks you up can finish the trip.",
    date: "Jun 2026", read: "5 min",
    body: [
      { p: "A fuel car can refuel in five minutes. An EV can't, so our dispatch system has to plan ahead." },
      { h: "Battery-aware matching" },
      { p: "When you book, we don't just look for the nearest car. We check whether it has enough charge for your trip plus a safe buffer." },
      { h: "Charging in the quiet hours" },
      { p: "Using past demand, we suggest charging windows to drivers so vehicles top up when requests are low." },
      { p: "Interested in problems like this? Our Technology team is hiring. See the open roles below." },
    ],
  },
  {
    id: "interns", cat: "hiring", label: "Hiring",
    title: "Internships at Zproo: real work from week one",
    excerpt: "Our interns ship features, run pilots and present to the founders. Here's how the program works.",
    date: "May 2026", read: "3 min",
    body: [
      { p: "An internship at Zproo isn't about making coffee. Every intern gets a real project with a clear owner and a real outcome." },
      { h: "How it works" },
      { p: "You're paired with a mentor, get a 3–6 month project, and present your results to the founders at the end." },
      { h: "Who can apply" },
      { p: "Final-year students and recent graduates in engineering, business, design or marketing." },
      { email: "Email us with the subject \"Internship Application\":", subject: "Internship Application" },
    ],
  },
];

export const JOB_TEAMS = ["Technology", "Operations", "Growth & Marketing", "Customer Experience", "Business & Finance"];

export const JOBS = [
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
    req: ["1+ years in HR or recruitment, ideally at a startup", "Great communicator and organiser", "Passionate about culture"] },
];

export const STEPS = [
  { title: "Apply", text: "Email your résumé to career@zproo.com or use the Apply button on a role." },
  { title: "Intro call", text: "A 20-minute chat with our talent team about you and the role." },
  { title: "Skills round", text: "A practical task or conversation based on real Zproo problems." },
  { title: "Meet the founders", text: "A conversation with Ronak or Dhanraj about culture and goals." },
  { title: "Offer", text: "We aim to share a decision within a week of your final round." },
];

export const FAQS = [
  { q: "How do I apply?", a: "Click \"Apply\" on any role and fill in the short form. It opens an email to career@zproo.com with your details. Attach your résumé and hit send. You can also email us directly." },
  { q: "Where is Zproo based?", a: "Our office is in Hinjawadi, Pune, Maharashtra. Most roles are on-site or hybrid, since we work closely with our on-ground operations." },
  { q: "Do you hire freshers and interns?", a: "Yes. We look for curiosity and ownership, not just years of experience. Check the internship listings or send a general application." },
  { q: "How long does the process take?", a: "Usually 2–3 weeks from application to offer. We'll keep you updated at every step." },
  { q: "I want to become a Zproo driver partner. Is this the right page?", a: "This page is for team roles. For driver partnerships, email career@zproo.com with the subject \"Driver Partner Enquiry\" and our operations team will reach out." },
];
