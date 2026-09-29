import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they scroll into view, staggering
 * siblings that enter together. Watches the DOM so elements rendered
 * later (filtered blog cards, job lists) are picked up too.
 */
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
          el.style.transitionDelay = Math.min(Math.max(0, siblings.indexOf(el)), 6) * 80 + "ms";
          el.classList.add("is-visible");
          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    const scan = () => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
