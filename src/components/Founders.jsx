import SectionHeading from "./SectionHeading";
import { FOUNDERS } from "../data/content";

export default function Founders() {
  return (
    <section className="section" id="founders">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the founders"
          lead="Two people who decided Pune's rides should run on electricity, and then went and built it."
        />
        <div className="founders">
          {FOUNDERS.map((f) => (
            <article className="founder reveal" key={f.name}>
              <div className={`founder__avatar${f.alt ? " founder__avatar--alt" : ""}`} aria-hidden="true">
                {f.initials}
              </div>
              <div className="founder__body">
                <h3>{f.name}</h3>
                <p className="founder__role">{f.role}</p>
                <blockquote>"{f.quote}"</blockquote>
                <p>{f.bio}</p>
                <ul className="tags">{f.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
