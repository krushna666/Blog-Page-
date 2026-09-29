import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, select, summary, label, [role='button'], [data-cursor]";
const TEXT_INPUT = "input, textarea";

/**
 * Custom cursor: a small dot that tracks the pointer exactly and a ring
 * that trails behind it with easing. Over links/buttons/cards the ring
 * grows; elements with `data-cursor="Label"` show that label inside it.
 * Disabled on touch devices and for users who prefer reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState({ hover: false, text: false, label: "", hidden: true, down: false });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...mouse };
    let raf;

    const loop = () => {
      // Ease the ring towards the pointer for the trailing effect
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMode((m) => (m.hidden ? { ...m, hidden: false } : m));
    };
    const onOver = (e) => {
      const t = e.target;
      const labelled = t.closest("[data-cursor]");
      setMode((m) => ({
        ...m,
        text: !!t.closest(TEXT_INPUT),
        hover: !!t.closest(INTERACTIVE),
        label: labelled ? labelled.dataset.cursor : "",
      }));
    };
    const onLeave = () => setMode((m) => ({ ...m, hidden: true }));
    const onDown = () => setMode((m) => ({ ...m, down: true }));
    const onUp = () => setMode((m) => ({ ...m, down: false }));

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  const cls = [
    mode.hover && "is-hover",
    mode.label && "has-label",
    mode.text && "is-text",
    mode.hidden && "is-hidden",
    mode.down && "is-down",
  ].filter(Boolean).join(" ");

  return (
    <div className={`cursor ${cls}`} aria-hidden="true">
      <div className="cursor__pos" ref={ringRef}>
        <div className="cursor__ring">
          <span className="cursor__label">{mode.label}</span>
        </div>
      </div>
      <div className="cursor__pos" ref={dotRef}>
        <div className="cursor__dot" />
      </div>
    </div>
  );
}
