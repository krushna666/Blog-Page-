import { useCallback, useState } from "react";
import SectionHeading from "./SectionHeading";
import ApplyModal from "./ApplyModal";
import { CAREER_EMAIL, JOBS, JOB_TEAMS, mailto } from "../data/content";

function Job({ job, open, onToggle, onApply }) {
  return (
    <article className={`job${open ? " is-open" : ""}`}>
      <button className="job__head" aria-expanded={open} onClick={onToggle} data-cursor={open ? "Close" : "View"}>
        <div>
          <div className="job__title">{job.title}</div>
          <div className="job__meta">
            <span>{job.team}</span><span>{job.loc}</span><span>{job.type}</span><span>{job.exp}</span>
          </div>
        </div>
        <span className="job__chev" aria-hidden="true">+</span>
      </button>
      <div className="job__body">
        <div>
          <div className="job__content">
            <p>{job.about}</p>
            <h5>What you'll do</h5>
            <ul>{job.resp.map((r) => <li key={r}>{r}</li>)}</ul>
            <h5>What we're looking for</h5>
            <ul>{job.req.map((r) => <li key={r}>{r}</li>)}</ul>
            <div className="job__actions">
              <button className="btn btn--primary btn--sm" onClick={onApply} data-cursor="Apply">Apply now</button>
              <a className="btn btn--outline btn--sm" href={mailto(`Application: ${job.title}`)}>Email résumé directly</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Jobs() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("all");
  const [openTitle, setOpenTitle] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const closeApply = useCallback(() => setApplyOpen(false), []);

  const q = query.trim().toLowerCase();
  const list = JOBS.filter(
    (j) =>
      (team === "all" || j.team === team) &&
      (!q || [j.title, j.team, j.loc, j.type, j.about].join(" ").toLowerCase().includes(q))
  );

  return (
    <section className="section section--tint" id="jobs">
      <div className="container">
        <SectionHeading eyebrow="Open positions" title="Find your next role" />

        <div className="jobbar reveal">
          <input
            type="search"
            placeholder="Search roles, e.g. Android, Operations…"
            aria-label="Search roles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select aria-label="Filter by team" value={team} onChange={(e) => setTeam(e.target.value)}>
            <option value="all">All teams</option>
            {JOB_TEAMS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <p className="jobcount">{list.length} open role{list.length === 1 ? "" : "s"}</p>

        <div className="jobs">
          {list.length ? (
            list.map((j) => (
              <Job
                key={j.title}
                job={j}
                open={openTitle === j.title}
                onToggle={() => setOpenTitle((t) => (t === j.title ? null : j.title))}
                onApply={() => {
                  setApplyJob(j);
                  setApplyOpen(true);
                }}
              />
            ))
          ) : (
            <p className="empty">
              No roles match your search yet. Send a general application to{" "}
              <a href={mailto("General Application - Zproo")}>{CAREER_EMAIL}</a>.
            </p>
          )}
        </div>

        <div className="cta-box reveal">
          <h3>Don't see a role that fits?</h3>
          <p>We're always happy to meet great people. Send your résumé and tell us how you'd help Zproo.</p>
          <a className="btn btn--primary" href={mailto("General Application - Zproo")} data-cursor="Email">
            Email {CAREER_EMAIL}
          </a>
        </div>
      </div>

      <ApplyModal job={applyJob} open={applyOpen} onClose={closeApply} />
    </section>
  );
}
