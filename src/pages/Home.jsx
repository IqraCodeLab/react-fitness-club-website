import Header from '../component/Header';
import Footer from '../component/Footer';
import HeroSection from '../component/HeroSection';
import CounterSection from '../component/CounterSection';
import AboutPreview from '../component/AboutPreview';
import ProgramsSection from '../component/ProgramsSection';
import WhyChooseUs from '../component/WhyChooseUs';
import TrainersSection from '../component/TrainersSection';
import MembershipSection from '../component/MembershipSection';
import TestimonialSection from '../component/TestimonialSection';
import GallerySection from '../component/GallerySection';
import BlogSection from '../component/BlogSection';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import SectionTitle from '../component/SectionTitle';
import Reveal from '../component/Reveal';
import { Link } from 'react-router-dom';
import Icon from '../component/Icon';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutPreview />
        <CounterSection />
        <ProgramsSection />
        <WhyChooseUs />
        <TrainersSection />
        <MembershipSection />
        <TestimonialSection />
        <section className="section section--charcoal" aria-label="Gym gallery">
          <div className="container">
            <SectionTitle
              center
              kicker="Inside The Forge"
              title="Step Inside | IronForge"
              subtitle="A look at our facility, training floor and the community that makes it loud."
            />
            <GallerySection items={[
              { id: 1, category: 'Gym', image: 'photo-1534438327276-14e5300c3a48', title: 'Main Training Floor' },
              { id: 2, category: 'Training', image: 'photo-1583454110551-21f2fa2afe61', title: 'Barbell Session' },
              { id: 3, category: 'Equipment', image: 'photo-1581009146145-b5ef050c2e1e', title: 'Free Weights Zone' },
              { id: 4, category: 'Training', image: 'photo-1517963879433-6ad2b056d712', title: 'CrossFit WOD' },
              { id: 5, category: 'Gym', image: 'photo-1517836357463-d25dfeac3438', title: 'Evening on the Floor' },
              { id: 6, category: 'Events', image: 'photo-1526506118085-60ce8714f8c5', title: 'Challenge Day' },
            ]} />
            <Reveal style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link to="/gallery" className="btn btn--outline">
                View Full Gallery
                <Icon name="arrowRight" size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
        <BlogSection />
        <CTASection />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
