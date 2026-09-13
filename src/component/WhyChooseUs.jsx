import { whyChooseUs } from '../data/data';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function WhyChooseUs({ showTitle = false }) {
  return (
    <section className="section" aria-label="Why choose IronForge">
      <div className="container">
        {showTitle && (
          <SectionTitle
            center
            kicker="Why IronForge"
            title="The | Difference"
            subtitle="We are not just a gym. We are a standard."
          />
        )}
        <div className="why-grid">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i % 3} className="why-card">
              <div className="why-card-icon">
                <Icon name={item.icon} size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
