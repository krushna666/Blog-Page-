import { useEffect, useState } from "react";
import Modal from "./Modal";
import { mailto } from "../data/content";

const EMPTY = { name: "", email: "", phone: "", link: "", exp: "Fresher / Intern", why: "" };

export default function ApplyModal({ job, open, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm(EMPTY);
      setError("");
    }
  }, [open]);

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError("Please enter a valid email address.");

    const subject = `Application: ${job.title} | ${form.name.trim()}`;
    const body = [
      "Hi Zproo Team,",
      "",
      `I'd like to apply for the ${job.title} role (${job.team}, ${job.loc}).`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `LinkedIn / Portfolio: ${form.link || "-"}`,
      `Experience: ${form.exp}`,
      "",
      "Why Zproo:",
      form.why || "-",
      "",
      "I've attached my résumé.",
      "",
      "Thanks,",
      form.name,
    ].join("\n");

    window.location.href = mailto(subject, body);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} labelledBy="applyTitle">
      <p className="eyebrow">Apply now</p>
      <h3 id="applyTitle">{job?.title}</h3>
      <form className="apply-form" onSubmit={submit} noValidate>
        <label>Full name<input name="name" value={form.name} onChange={set} required /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={set} required /></label>
        <label>Phone<input name="phone" type="tel" value={form.phone} onChange={set} /></label>
        <label>LinkedIn / Portfolio<input name="link" type="url" placeholder="https://" value={form.link} onChange={set} /></label>
        <label>
          Years of experience
          <select name="exp" value={form.exp} onChange={set}>
            <option>Fresher / Intern</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>
        </label>
        <label>
          Why Zproo?
          <textarea name="why" rows={3} placeholder="A few lines about you and why you'd like to join" value={form.why} onChange={set} />
        </label>
        <p className="form__error" role="alert">{error}</p>
        <button type="submit" className="btn btn--primary btn--block" data-cursor="Send">
          Send application to career@zproo.com
        </button>
        <p className="form__note">This opens your email app with everything filled in. Please attach your résumé before sending.</p>
      </form>
    </Modal>
  );
}
