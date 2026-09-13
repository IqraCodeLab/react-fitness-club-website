import { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import Reveal from '../component/Reveal';
import MembershipCard from '../component/MembershipCard';
import PlanModal from '../component/PlanModal';
import FAQ from '../component/FAQ';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';
import { plans, planComparison, heroImages } from '../data/data';

function Check() {
  return <Icon name="check" size={18} />;
}

function Cross() {
  return <Icon name="x" size={18} />;
}

function Cell({ value }) {
  if (value === true) return <Check />;
  if (value === false) return <Cross />;
  return <span>{value}</span>;
}

export default function Membership() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.membership}
          title="Membership | Plans"
          crumbs={[{ name: 'Membership' }]}
        />

        <section className="section" aria-label="Membership plans">
          <div className="container">
            <SectionTitle
              center
              kicker="Pricing"
              title="Invest In | Yourself"
              subtitle="Simple, transparent pricing. No hidden fees, no lock-in contracts — just results."
            />
            <div className="plans-grid">
              {plans.map((plan, i) => (
                <MembershipCard key={plan.id} plan={plan} delay={i} onSelect={setSelected} />
              ))}
            </div>
            <PlanModal plan={selected} onClose={() => setSelected(null)} />
          </div>
        </section>

        <section className="section section--charcoal" aria-label="Plan comparison">
          <div className="container">
            <SectionTitle
              center
              kicker="Compare"
              title="Choose The | Right Plan"
              subtitle="Still deciding? Here is exactly what you get with each membership."
            />
            <Reveal className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic</th>
                    <th className="col-featured">Pro</th>
                    <th>Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td><Cell value={row.basic} /></td>
                      <td className="col-featured"><Cell value={row.pro} /></td>
                      <td><Cell value={row.elite} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal style={{ textAlign: 'center', marginTop: '44px' }}>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                Not sure which plan fits? Book a free trial day and tour the floor.
              </p>
              <a className="btn btn--primary" href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
                Talk To Our Team
                <Icon name="phone" size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <FAQ />

        <CTASection
          image="photo-1581009146145-b5ef050c2e1e"
          kicker="No Risk, All Reward"
          title="Start With | A Free Trial"
          text="Your first training session is on us. Come in, meet the coaches and feel the IronForge difference."
          buttonText="Claim Free Trial"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
