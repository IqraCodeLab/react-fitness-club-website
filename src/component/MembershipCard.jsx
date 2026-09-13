import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function MembershipCard({ plan, delay = 0, onSelect }) {
  const handle = () => onSelect && onSelect(plan);

  return (
    <article
      className={`plan-card reveal is-visible ${plan.featured ? 'plan-card--featured' : ''} ${onSelect ? 'plan-card--clickable' : ''}`}
      data-delay={delay}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={handle}
      onKeyDown={(e) => {
        if (!onSelect) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handle();
        }
      }}
    >
      {plan.featured && <span className="plan-badge">Most Popular</span>}
      <h3 className="plan-name">{plan.name}</h3>
      <p className="plan-tagline">{plan.tagline}</p>
      <div className="plan-price">
        <span className="currency">$</span>
        <span className={`amount ${plan.featured ? 'amount--featured' : ''}`}>{plan.price}</span>
        <span className="period">/month</span>
      </div>
      <ul className="plan-features">
        {plan.features.map((feature) => (
          <li key={feature} className="plan-feature">
            <Icon name="check" size={16} />
            {feature}
          </li>
        ))}
      </ul>
      {onSelect ? (
        <button
          type="button"
          className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'} btn--block`}
          aria-haspopup="dialog"
          onClick={(e) => {
            e.stopPropagation();
            handle();
          }}
        >
          {plan.cta}
        </button>
      ) : (
        <Link
          to="/membership"
          className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'} btn--block`}
          aria-label={`Choose ${plan.name} plan`}
        >
          {plan.cta}
        </Link>
      )}
    </article>
  );
}