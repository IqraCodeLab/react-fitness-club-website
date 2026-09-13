import { stats } from '../data/data';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import Reveal from './Reveal';

function StatItem({ stat }) {
  const [ref, inView] = useInView();
  const value = useCountUp(stat.value, 2000, inView);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {value}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function CounterSection({ data = stats }) {
  return (
    <section className="stats" aria-label="Gym statistics">
      <div className="container">
        <Reveal className="stats-grid">
          {data.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
