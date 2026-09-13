import { programs } from '../data/data';
import ProgramCard from './ProgramCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ProgramsSection({ limit = 8 }) {
  const items = programs.slice(0, limit);

  return (
    <section className="section section--charcoal" aria-label="Our programs">
      <div className="container">
        <SectionTitle
          center
          kicker="Our Programs"
          title="Train Your Way | To Greatness"
          subtitle="From strength and muscle building to CrossFit and boxing — find the program that matches your goals."
        />
        <div className="programs-grid">
          {items.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={i % 4} />
          ))}
        </div>
        <Reveal className="section-head--center" style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/programs" className="btn btn--outline">
            View All Programs
            <Icon name="arrowRight" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
