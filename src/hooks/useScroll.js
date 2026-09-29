import { useEffect, useState } from "react";

/** Current scroll offset and page progress (0–100). */
export default function useScroll() {
  const [state, setState] = useState({ y: 0, progress: 0 });
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ y, progress: max > 0 ? (y / max) * 100 : 0 });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
}
