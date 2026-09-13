import { Link } from 'react-router-dom';
import { img } from '../data/data';
import Icon from './Icon';

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${img('photo-1534438327276-14e5300c3a48', 2000)})` }}
        role="img"
        aria-label="Man training with a barbell in a dark gym"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-kicker" style={{ animation: 'fadeUp 0.7s ease both' }}>
            Premium Fitness Club
          </span>
          <h1 className="hero-title">
            <span className="animated-line" style={{ animationDelay: '0.15s' }}>Forge Your</span>
            <span className="animated-line red" style={{ animationDelay: '0.3s' }}>Strongest Self.</span>
          </h1>
          <p className="hero-subtitle" style={{ animation: 'fadeUp 0.7s ease 0.45s both' }}>
            Train harder. Move stronger. Become unstoppable.
          </p>
          <div className="hero-buttons" style={{ animation: 'fadeUp 0.7s ease 0.6s both' }}>
            <Link to="/membership" className="btn btn--primary">
              Start Training
              <Icon name="arrowRight" size={18} />
            </Link>
            <Link to="/programs" className="btn btn--outline">
              View Programs
            </Link>
          </div>
        </div>
      </div>
  
      
    </section>
  );
}
