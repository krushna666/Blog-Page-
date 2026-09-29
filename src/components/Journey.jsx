import SectionHeading from "./SectionHeading";
import { TIMELINE } from "../data/content";

export default function Journey() {
  return (
    <section className="section section--tint" id="journey">
      <div className="container">
        <SectionHeading eyebrow="Our story" title="The journey so far" />
        <ol className="timeline">
          {TIMELINE.map((t) => (
            <li className="timeline__item reveal" key={t.title}>
              <span className={`timeline__dot${t.next ? " timeline__dot--next" : ""}`} />
              <div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
