import SectionHeading from "./SectionHeading";
import { PERKS } from "../data/content";

export default function Life() {
  return (
    <section className="section" id="life">
      <div className="container">
        <SectionHeading eyebrow="Perks & culture" title="Life at Zproo" />
        <div className="grid grid--3">
          {PERKS.map((p) => (
            <article className="card perk reveal" key={p.title}>
              <span>{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
