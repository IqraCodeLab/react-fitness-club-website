import { img } from '../data/data';
import Icon from './Icon';

export default function ProgramCard({ program, delay = 0 }) {
  return (
    <article className="program-card reveal is-visible" data-delay={delay}>
      <div className="program-card-img">
        <img src={img(program.image, 700)} alt={program.title} loading="lazy" />
        <div className="program-card-icon" aria-hidden="true">
          <Icon name={program.icon} size={22} />
        </div>
        <div className="program-card-overlay">
          <h3 className="program-card-title">{program.title}</h3>
          <p className="program-card-text">{program.excerpt}</p>
          <div className="program-card-meta">
            <span>
              <Icon name="clockSmall" size={13} />
              {program.duration}
            </span>
            <span>
              <Icon name="user" size={13} />
              {program.difficulty}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}