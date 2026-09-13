import { useMemo, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import Reveal from '../component/Reveal';
import ProgramCard from '../component/ProgramCard';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';
import { programs, programCategories, heroImages, img } from '../data/data';

const categoryDescriptions = {
  Strength: 'Build raw power with barbells, dumbbells and progressive overload.',
  Fitness: 'Conditioning programs that torch calories and build an unstoppable engine.',
  Specialized: 'Targeted coaching for specific goals, disciplines and athletic performance.',
};

export default function Programs() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () =>
      category === 'All'
        ? programs
        : programs.filter((p) => p.category === category),
    [category]
  );

  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.programs}
          title="Our | Programs"
          crumbs={[{ name: 'Programs' }]}
        />

        <section className="section" aria-label="Training programs">
          <div className="container">
            <SectionTitle
              center
              kicker="Train Your Way"
              title="Find Your | Program"
              subtitle={categoryDescriptions[category] || 'Explore every program we offer, from strength to specialized coaching.'}
            />
            <div className="filter-bar" role="tablist" aria-label="Filter programs by category">
              {programCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  className={`filter-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="programs-grid">
              {filtered.map((program, i) => (
                <ProgramCard key={program.id} program={program} delay={i % 4} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--charcoal" aria-label="Program feature">
          <div className="container">
            <div className="about-preview">
              <div className="about-preview-content">
                <SectionTitle kicker="Coach Led" title="Every Rep | Coached" />
                <Reveal delay={1}>
                  <p className="about-preview-text">
                    Every IronForge program is designed by our coaching team and led by certified
                    specialists. Whether you are chasing a new deadlift record or your first pull-up,
                    you will have a plan, a coach and a community behind you.
                  </p>
                  <div className="about-preview-features">
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="award" size={18} /></span>
                      Certified coaches
                    </div>
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="target" size={18} /></span>
                      Goal-based plans
                    </div>
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="users" size={18} /></span>
                      Group & private
                    </div>
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="clock" size={18} /></span>
                      Flexible timing
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal className="about-preview-media">
                <img
                  className="main-img"
                  src={img('photo-1517963879433-6ad2b056d712', 900)}
                  alt="CrossFit training session at IronForge"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <CTASection
          image="photo-1549719386-74dfcbf7dbed"
          kicker="Find Your Program"
          title="Pick Your Path | Start Today"
          buttonText="Join IronForge"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
