import { img } from '../data/data';
import Icon from './Icon';

export default function TrainerCard({ trainer, delay = 0 }) {
  return (
    <article className="trainer-card reveal is-visible" data-delay={delay}>
      <div className="trainer-card-img">
        <img src={img(trainer.image, 700)} alt={`${trainer.name}, ${trainer.role}`} loading="lazy" />
        <div className="trainer-social" aria-label={`${trainer.name} social links`}>
          <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
          <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
          <a href="#" aria-label="Twitter"><Icon name="twitter" size={16} /></a>
        </div>
        <div className="trainer-card-caption">
          <h3>{trainer.name}</h3>
          <p className="trainer-role">{trainer.role}</p>
          <div className="trainer-card-meta">
            <span>
              <Icon name="clock" size={13} />
              {trainer.experience}
            </span>
            <span>
              <Icon name="award" size={13} />
              Certified
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}