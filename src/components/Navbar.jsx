import { useState } from "react";
import useScroll from "../hooks/useScroll";
import useScrollSpy from "../hooks/useScrollSpy";
import { NAV_LINKS } from "../data/content";

const SPY_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { y, progress } = useScroll();
  const active = useScrollSpy(SPY_IDS);
  const close = () => setOpen(false);

  return (
    <header className={`nav${y > 30 ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="Zproo home">
          <span className="logo__bolt">⚡</span>zproo<span className="logo__tag">careers</span>
        </a>
        <nav className={`nav__links${open ? " is-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-current" : ""} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#jobs" className="btn btn--sm btn--primary" onClick={close}>Join Us</a>
        </nav>
        <button
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className="progress" style={{ width: `${progress}%` }} />
    </header>
  );
}
