import SectionHeading from "./SectionHeading";
import { VALUES } from "../data/content";

export default function Values() {
  return (
    <section className="section section--tint" id="values">
      <div className="container">
        <SectionHeading eyebrow="What drives us" title="Our values" />
        <div className="grid grid--4">
          {VALUES.map((v) => (
            <article className="card value reveal" key={v.title}>
              <div className="value__icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
