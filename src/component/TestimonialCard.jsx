import { img } from '../data/data';
import Icon from './Icon';

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <figure className="testimonial-card reveal is-visible" data-delay={delay}>
      <Icon name="quote" size={44} className="testimonial-quote-icon" />
      <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name={i < testimonial.rating ? 'star' : 'starOutline'} size={16} />
        ))}
      </div>
      <blockquote className="testimonial-text">"{testimonial.text}"</blockquote>
      <figcaption className="testimonial-author">
        <img src={img(testimonial.image, 200)} alt={testimonial.name} loading="lazy" />
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
