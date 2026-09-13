import { Link } from 'react-router-dom';
import { img } from '../data/data';
import Icon from './Icon';
import Reveal from './Reveal';

export default function CTASection({
  image = 'photo-1550345332-09e3ac987658',
  kicker = 'Ready To Start?',
  title = 'Your Body Can. | Your Mind Will.',
  text = 'Join IronForge today and get your first training session free. Our coaches will assess your goals and build the perfect plan to start your transformation.',
  buttonText = 'Join IronForge',
  buttonLink = '/membership',
}) {
  return (
    <section
      className="cta-section section"
      aria-label="Join IronForge"
      style={{ backgroundImage: `url(${img(image, 1920)})` }}
    >
      <div className="cta-overlay" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="cta-kicker">{kicker}</span>
          <h2 className="cta-title">
            {title.split('|').map((part, i) =>
              i % 2 === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i} className="cta-title-accent">
                  {part}
                </span>
              )
            )}
          </h2>
          <p className="cta-text">{text}</p>
          <Link to={buttonLink} className="btn btn--primary">
            {buttonText}
            <Icon name="arrowRight" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
