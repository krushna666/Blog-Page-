import SectionHeading from "./SectionHeading";
import { STEPS } from "../data/content";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading eyebrow="How we hire" title="Our hiring process" />
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={s.title}>
              <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
