import { Link } from 'react-router-dom';
import { img } from '../data/data';
import Icon from './Icon';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const features = [
  { icon: 'dumbbell', text: 'World-class equipment' },
  { icon: 'award', text: 'Certified expert trainers' },
  { icon: 'users', text: 'Supportive community' },
  { icon: 'clock', text: 'Flexible 24/7 access' },
];

export default function AboutPreview() {
  return (
    <section className="section" aria-label="About IronForge Fitness">
      <div className="container">
        <div className="about-preview">
          <Reveal className="about-preview-media">
            <div className="about-exp-badge">
              <strong>EST.</strong>
              <span>Since 2014</span>
            </div>
            <img
              className="main-img"
              src={img('photo-1574680096145-d05b474e2155', 900)}
              alt="Athlete training with kettlebells at IronForge"
              loading="lazy"
            />
            <img
              className="float-img"
              src={img('photo-1583454110551-21f2fa2afe61', 600)}
              alt="Member performing a barbell squat"
              loading="lazy"
            />
          </Reveal>

          <div className="about-preview-content">
            <SectionTitle
              kicker="About IronForge"
              title="More Than A Gym | It's A Brotherhood"
            />
            <Reveal delay={1}>
              <p className="about-preview-text">
                IronForge Fitness was built for one reason — to help people become the strongest
                version of themselves. From the first barbell to the final rep, we combine elite
                coaching, premium equipment and a community that refuses to let you quit.
              </p>
              <div className="about-preview-features">
                {features.map((f) => (
                  <div key={f.text} className="about-feature">
                    <span className="about-feature-icon">
                      <Icon name={f.icon} size={18} />
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn--primary">
                Discover Our Story
                <Icon name="arrowRight" size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
