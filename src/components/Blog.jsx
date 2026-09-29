import { useCallback, useState } from "react";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import { BLOG_FILTERS, CAREER_EMAIL, POSTS, mailto } from "../data/content";

function PostBody({ blocks }) {
  return blocks.map((b, i) => {
    if (b.h) return <h4 key={i}>{b.h}</h4>;
    if (b.email)
      return (
        <p key={i}>
          {b.email} <a href={mailto(b.subject)}>{CAREER_EMAIL}</a>
        </p>
      );
    return (
      <p key={i}>
        {b.lead && <strong>{b.lead} </strong>}
        {b.p}
      </p>
    );
  });
}

export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [post, setPost] = useState(null);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const show = (p) => {
    setPost(p);
    setOpen(true);
  };
  const visible = POSTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="section" id="blog">
      <div className="container">
        <SectionHeading eyebrow="From the Zproo blog" title="Stories, updates & insights" />
        <div className="filters reveal">
          {BLOG_FILTERS.map((f) => (
            <button key={f.id} className={`chip${filter === f.id ? " is-active" : ""}`} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>

        {/* key on the grid remounts the cards so they animate in on every filter change */}
        <div className="grid grid--3" key={filter}>
          {visible.map((p) => (
            <article
              key={p.id}
              className={`card post post--${p.cat} reveal`}
              tabIndex={0}
              role="button"
              data-cursor="Read"
              aria-label={`Read: ${p.title}`}
              onClick={() => show(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  show(p);
                }
              }}
            >
              <div className="post__band" />
              <div className="post__inner">
                <span className="post__cat">{p.label}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="post__meta">
                  <span>{p.date} · {p.read} read</span>
                  <span className="post__more">Read →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={close} wide labelledBy="postTitle">
        {post && (
          <>
            <p className="eyebrow">{post.label} · {post.date} · {post.read} read</p>
            <h3 id="postTitle">{post.title}</h3>
            <div className="post__body"><PostBody blocks={post.body} /></div>
          </>
        )}
      </Modal>
    </section>
  );
}
