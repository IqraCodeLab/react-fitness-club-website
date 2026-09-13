import Reveal from './Reveal';

export default function SectionTitle({ kicker, title, subtitle, center = false, className = '' }) {
  const accentParts = title.split('|');

  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''} ${className}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="section-title">
        {accentParts.map((part, i) =>
          i % 2 === 0 ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="accent">
              {part}
            </span>
          )
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
