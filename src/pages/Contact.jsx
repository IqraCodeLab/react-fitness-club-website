import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import ContactInfo from '../component/ContactInfo';
import ContactForm from '../component/ContactForm';
import Reveal from '../component/Reveal';
import FAQ from '../component/FAQ';
import BackToTop from '../component/BackToTop';
import { heroImages } from '../data/data';

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.contact}
          title="Get In | Touch"
          crumbs={[{ name: 'Contact' }]}
        />

        <section className="section" aria-label="Contact us">
          <div className="container">
            <SectionTitle
              center
              kicker="Contact"
              title="We'd Love | To Hear From You"
              subtitle="Questions about membership, classes or personal training? Reach out — our team replies within 24 hours."
            />
            <div className="contact-grid">
              <Reveal>
                <ContactInfo />
              </Reveal>
              <Reveal delay={1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--charcoal" aria-label="Location map">
          <div className="container">
            <SectionTitle center kicker="Find Us" title="Visit | The Forge" />
            <Reveal className="contact-map">
              <iframe
                className="contact-map-frame"
                title="IronForge Fitness location - 123 Fitness Avenue, Karachi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=66.95%2C24.80%2C67.05%2C24.90&layer=mapnik&marker=24.86%2C67.00"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <FAQ />

        <Reveal style={{ textAlign: 'center' }} className="section">
          <div className="container">
            <h2 className="section-title">Follow The | Movement</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Tag @ironforgefitness in your training photos — the best ones make the wall.
            </p>
            <a
              className="btn btn--primary"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Join The Community
            </a>
          </div>
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
