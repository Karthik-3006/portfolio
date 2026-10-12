export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow-pill">{eyebrow}</span>}
      <h1>{title}</h1>
      <span className="heading-divider" aria-hidden="true" />
      {description && <p>{description}</p>}
    </div>
  );
}
