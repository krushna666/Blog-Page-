import { MARQUEE } from "../data/content";

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span key={i}>{t}<span className="marquee__bolt">⚡</span></span>
        ))}
      </div>
    </div>
  );
}
