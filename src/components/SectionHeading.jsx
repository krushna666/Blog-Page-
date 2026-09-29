export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <>
      <p className="eyebrow center reveal">{eyebrow}</p>
      <h2 className="section__title center reveal">{title}</h2>
      {lead && <p className="section__lead center reveal">{lead}</p>}
    </>
  );
}
