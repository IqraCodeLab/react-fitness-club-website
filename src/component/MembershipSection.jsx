import { useState } from 'react';
import { plans } from '../data/data';
import MembershipCard from './MembershipCard';
import PlanModal from './PlanModal';
import SectionTitle from './SectionTitle';

export default function MembershipSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section" aria-label="Membership plans">
      <div className="container">
        <SectionTitle
          center
          kicker="Membership Plans"
          title="Choose Your | Training Plan"
          subtitle="Simple, flexible plans with no hidden fees. Upgrade, pause or cancel anytime."
        />
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <MembershipCard key={plan.id} plan={plan} delay={i} onSelect={setSelected} />
          ))}
        </div>
        <PlanModal plan={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}