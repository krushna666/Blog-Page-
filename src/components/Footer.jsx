import useScroll from "../hooks/useScroll";
import { CAREER_EMAIL } from "../data/content";

export default function Footer() {
  const { y } = useScroll();
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <a href="#top" className="logo logo--light"><span className="logo__bolt">⚡</span>zproo</a>
            <p>Ride Electrified. 100% electric rides for a cleaner India.</p>
            <p className="muted">ZPROO EV Private Limited · Hinjawadi, Pune, Maharashtra</p>
          </div>
          <div>
            <h5>Explore</h5>
            <a href="#founders">Founders</a>
            <a href="#teams">Teams</a>
            <a href="#blog">Blog</a>
            <a href="#jobs">Open Roles</a>
          </div>
          <div>
            <h5>Connect</h5>
            <a href={`mailto:${CAREER_EMAIL}`}>{CAREER_EMAIL}</a>
            <a href="https://www.linkedin.com/company/zproo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.zproo.com/" target="_blank" rel="noopener noreferrer">zproo.com</a>
          </div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Zproo. All rights reserved.</p>
      </footer>
      <a href="#top" className={`to-top${y > 600 ? " is-visible" : ""}`} aria-label="Back to top" data-cursor="Top">↑</a>
    </>
  );
}
