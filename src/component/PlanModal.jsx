import { useEffect } from 'react';
import Icon from './Icon';

export default function PlanModal({ plan, onClose }) {
  useEffect(() => {
    if (!plan) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [plan, onClose]);

  if (!plan) return null;

  return (
    <div
      className="plan-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${plan.name} plan selected`}
      onClick={onClose}
    >
      <div className="plan-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="plan-modal-close" onClick={onClose} aria-label="Close popup" autoFocus>
          <Icon name="xClose" size={20} />
        </button>
        <span className="plan-modal-badge">Membership Selected</span>
        <h3 className="plan-modal-title">{plan.name}</h3>
        <p className="plan-modal-price">
          $<strong>{plan.price}</strong> <span>/month</span>
        </p>
        <p className="plan-modal-msg">
          Great choice! Our team will reach out to you shortly to activate your{' '}
          <strong>{plan.name}</strong> plan. For any questions, call us any time.
        </p>
        <ul className="plan-modal-features">
          {plan.features.slice(0, 4).map((feature) => (
            <li key={feature}>
              <Icon name="check" size={14} />
              {feature}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn--primary btn--block" onClick={onClose}>
          Confirm & Close
        </button>
      </div>
    </div>
  );
}