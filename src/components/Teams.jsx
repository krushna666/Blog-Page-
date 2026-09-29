import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { TEAMS } from "../data/content";

export default function Teams() {
  const [active, setActive] = useState(TEAMS[0].id);
  const team = TEAMS.find((t) => t.id === active);

  return (
    <section className="section section--dark" id="teams">
      <div className="container">
        <SectionHeading eyebrow="Find your place" title="Our teams" />
        <div className="tabs reveal" role="tablist">
          {TEAMS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === active}
              className={`tab${t.id === active ? " is-active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>
        {/* key forces a remount so the enter animation replays on every switch */}
        <div className="panel is-active" key={team.id} role="tabpanel">
          <div className="panel__text">
            <h3>{team.name}</h3>
            <p>{team.text}</p>
            <ul className="checks">{team.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <div className="panel__card">
            <span className="panel__big">{team.icon}</span>
            <p>“{team.motto}”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
