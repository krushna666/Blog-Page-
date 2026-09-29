import useCountUp from "../hooks/useCountUp";
import { STATS } from "../data/content";

function Stat({ count, suffix, label }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="stat reveal">
      <span className="stat__num" ref={ref}>{value}{suffix}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__text">
          <p className="eyebrow reveal">Who we are</p>
          <h2 className="section__title reveal">A cleaner ride for every journey</h2>
          <p className="reveal">
            Zproo (ZPROO EV Private Limited) started in 2025 in Hinjawadi, Pune with a simple belief: getting
            around your city shouldn't cost the planet. We run a fully electric ride network, so every trip
            booked on Zproo is a zero-emission trip.
          </p>
          <p className="reveal">
            We're still early, which means the people who join now shape the product, the culture and the way
            we grow. If you want real ownership and fast learning, this is the place.
          </p>
        </div>
        <div className="stats">
          {STATS.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
