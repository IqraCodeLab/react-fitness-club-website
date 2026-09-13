import { trainers } from '../data/data';
import TrainerCard from './TrainerCard';
import SectionTitle from './SectionTitle';

export default function TrainersSection({ limit = 4 }) {
  const items = trainers.slice(0, limit);

  return (
    <section className="section section--graphite" aria-label="Our trainers">
      <div className="container">
        <SectionTitle
          center
          kicker="Meet The Coaches"
          title="Train With | The Best"
          subtitle="Internationally certified, competition-tested coaches dedicated to your progress."
        />
        <div className="trainers-grid">
          {items.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} delay={i % 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
