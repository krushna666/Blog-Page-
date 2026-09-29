import SectionHeading from "./SectionHeading";
import { FAQS } from "../data/content";

export default function Faq() {
  return (
    <section className="section section--tint" id="faq">
      <div className="container container--narrow">
        <SectionHeading eyebrow="Questions?" title="Frequently asked" />
        <div className="faq">
          {FAQS.map((f) => (
            <details className="reveal" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
