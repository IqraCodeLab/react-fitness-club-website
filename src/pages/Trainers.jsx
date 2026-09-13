import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import Reveal from '../component/Reveal';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';
import { trainers, heroImages, img } from '../data/data';

export default function Trainers() {
  const [active, setActive] = useState(trainers[0].id);
  const trainer = trainers.find((t) => t.id === active) || trainers[0];

  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.trainers}
          title="Meet The | Coaches"
          crumbs={[{ name: 'Trainers' }]}
        />

        <section className="section" aria-label="Our trainers">
          <div className="container">
            <SectionTitle
              center
              kicker="The Coaching Team"
              title="Certified. Experienced. | Obsessed With Your Progress."
              subtitle="Every IronForge coach is internationally certified and genuinely invested in your results. Select a coach to learn more."
            />
            <div className="trainers-grid">
              {trainers.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className={`trainer-card trainer-card--selectable reveal is-visible ${active === t.id ? 'trainer-card--active' : ''}`}
                  data-delay={i % 4}
                  onClick={() => setActive(t.id)}
                  aria-pressed={active === t.id}
                  aria-label={`View ${t.name} profile`}
                >
                  <div className="trainer-card-img">
                    <img src={img(t.image, 700)} alt={`${t.name}, ${t.role}`} loading="lazy" />
                    <div className="trainer-social" aria-hidden="true">
                      <span className="trainer-social-tag">
                        <Icon name="arrowRight" size={16} />
                        View Profile
                      </span>
                    </div>
                    <div className="trainer-card-caption">
                      <h3>{t.name}</h3>
                      <p className="trainer-role">{t.role}</p>
                      <div className="trainer-card-meta">
                        <span>
                          <Icon name="clock" size={13} />
                          {t.experience}
                        </span>
                        <span>
                          <Icon name="award" size={13} />
                          Certified
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--charcoal" aria-label={`${trainer.name} profile`}>
          <div className="container">
            <Reveal className="trainer-detail">
              <div className="trainer-detail-img">
                <img src={img(trainer.image, 900)} alt={`${trainer.name}, ${trainer.role}`} loading="lazy" />
              </div>
              <div className="trainer-detail-body">
                <SectionTitle kicker="Coach Spotlight" title={trainer.name} />
                <p className="trainer-role">{trainer.role}</p>
                <p>{trainer.bio}</p>
                <div className="trainer-detail-quote">"{trainer.quote}"</div>
                <div className="trainer-card-meta" style={{ justifyContent: 'flex-start' }}>
                  <span>
                    <Icon name="clock" size={16} />
                    {trainer.experience} experience
                  </span>
                  <span>
                    <Icon name="award" size={16} />
                    {trainer.certification}
                  </span>
                </div>
                <div className="trainer-spec-list">
                  {trainer.specialties.map((s) => (
                    <span key={s} className="trainer-spec">
                      {s}
                    </span>
                  ))}
                </div>
                <Link to="/membership" className="btn btn--primary">
                  Train With {trainer.name.split(' ')[0]}
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection
          image="photo-1571902943202-507ec2618e8f"
          kicker="Find Your Coach"
          title="Train With | The Best"
          buttonText="Join IronForge"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
