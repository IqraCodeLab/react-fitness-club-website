import { testimonials } from '../data/data';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './SectionTitle';

export default function TestimonialSection({ limit = 3 }) {
  const items = testimonials.slice(0, limit);

  return (
    <section className="section section--charcoal" aria-label="Member testimonials">
      <div className="container">
        <SectionTitle
          center
          kicker="Member Stories"
          title="Results That | Speak Loud"
          subtitle="Thousands of members have forged their strongest selves with us. Here is what they say."
        />
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
