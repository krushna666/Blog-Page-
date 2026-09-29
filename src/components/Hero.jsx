import { useEffect, useState } from "react";
import { HERO_WORDS } from "../data/content";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const leaving = (index - 1 + HERO_WORDS.length) % HERO_WORDS.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <p className="eyebrow reveal">We're hiring in Pune</p>
        <h1 className="hero__title reveal">
          Build the future of<br />
          <span className="rotator">
            {HERO_WORDS.map((w, i) => (
              <span
                key={w}
                className={`rotator__word${i === index ? " is-active" : ""}${i === leaving ? " is-leaving" : ""}`}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>
        <p className="hero__sub reveal">
          At Zproo, every ride is 100% electric. We're a young, fast-moving team making everyday travel
          cleaner, quieter and more affordable, and we're looking for people who want to build it with us.
        </p>
        <div className="hero__cta reveal">
          <a href="#jobs" className="btn btn--primary" data-cursor="Explore">View Open Roles →</a>
          <a href="#founders" className="btn btn--ghost">Meet the Founders</a>
        </div>
        <a href="#about" className="scroll-hint" aria-label="Scroll down"><span /></a>
      </div>
    </section>
  );
}
