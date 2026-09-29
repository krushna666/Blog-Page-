import { useEffect, useRef } from "react";

/** Always mounted so it can animate both in and out; `open` toggles visibility. */
export default function Modal({ open, onClose, wide, labelledBy, children }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.classList.add("no-scroll");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => boxRef.current?.querySelector("input, .modal__close")?.focus(), 50);
    return () => {
      clearTimeout(t);
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`modal${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open} aria-labelledby={labelledBy}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className={`modal__box${wide ? " modal__box--wide" : ""}`} ref={boxRef}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
}
