import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import Reveal from '../component/Reveal';
import AboutStats from '../component/AboutStats';
import WhyChooseUs from '../component/WhyChooseUs';
import TestimonialSection from '../component/TestimonialSection';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';
import { img, facilities, coreValues, heroImages } from '../data/data';

export default function About() {
  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.about}
          title="About <span>IronForge</span>"
          crumbs={[{ name: 'About' }]}
        />

        <section className="section" aria-label="Our story">
          <div className="container">
            <div className="about-preview">
              <Reveal className="about-preview-media">
                <div className="about-exp-badge">
                  <strong>EST.</strong>
                  <span>Since 2014</span>
                </div>
                <img
                  className="main-img"
                  src={img('photo-1517836357463-d25dfeac3438', 900)}
                  alt="IronForge gym training floor with equipment"
                  loading="lazy"
                />
                <img
                  className="float-img"
                  src={img('photo-1540497077202-7c8a3999166f', 600)}
                  alt="Athlete training on battle ropes"
                  loading="lazy"
                />
              </Reveal>
              <div className="about-preview-content">
                <SectionTitle kicker="Our Story" title="Forged From | Sweat & Steel" />
                <Reveal delay={1}>
                  <p className="about-preview-text">
                    IronForge Fitness started in 2014 with a single squat rack, a battered boxing
                    bag and one belief: everyone deserves a gym that treats them like an athlete.
                    What began as a small garage gym has grown into a premium fitness club with
                    thousands of members and a coaching team that competes at national level.
                  </p>
                  <p className="about-preview-text">
                    We never forgot where we came from. The same intensity, the same no-excuses
                    attitude and the same family atmosphere that filled that first room still drives
                    every session on our floor today.
                  </p>
                  <div className="about-preview-features">
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="flame" size={18} /></span>
                      Built on intensity
                    </div>
                    <div className="about-feature">
                      <span className="about-feature-icon"><Icon name="users" size={18} /></span>
                      Powered by community
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--charcoal" aria-label="Mission and vision">
          <div className="container">
            <SectionTitle center kicker="Purpose" title="Our Mission | & Vision" />
            <div className="mission-grid">
              <Reveal className="mission-card">
                <div className="why-card-icon">
                  <Icon name="target" size={26} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower every member to become the strongest version of themselves — physically
                  and mentally — through elite coaching, world-class facilities and a community that
                  never lets anyone train alone.
                </p>
              </Reveal>
              <Reveal delay={1} className="mission-card">
                <div className="why-card-icon">
                  <Icon name="bolt" size={26} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted fitness brand in the region — a place where beginners
                  feel welcome, athletes find their edge, and every person walks out stronger than
                  they walked in.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Core values">
          <div className="container">
            <SectionTitle center kicker="What We Stand For" title="Core | Values" />
            <div className="why-grid">
              {coreValues.map((value, i) => (
                <Reveal key={value.title} delay={i % 4} className="why-card">
                  <div className="why-card-icon">
                    <Icon name={value.icon} size={26} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <AboutStats />

        <section className="section section--charcoal" aria-label="Facilities">
          <div className="container">
            <SectionTitle
              center
              kicker="Facilities"
              title="Built To | Perform"
              subtitle="Everything you need to train, recover and dominate — under one roof."
            />
            <div className="why-grid">
              {facilities.map((facility, i) => (
                <Reveal key={facility.title} delay={i % 3} className="why-card">
                  <div className="why-card-icon">
                    <Icon name={facility.icon} size={26} />
                  </div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs showTitle />

        <TestimonialSection />

        <CTASection
          image="photo-1517963879433-6ad2b056d712"
          kicker="Become Part Of The Family"
          title="Your Story | Starts Here"
          buttonText="Join IronForge"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
