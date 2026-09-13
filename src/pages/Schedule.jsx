import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import ScheduleSection from '../component/ScheduleSection';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import { heroImages } from '../data/data';

export default function Schedule() {
  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.schedule}
          title="Class | Schedule"
          crumbs={[{ name: 'Schedule' }]}
        />
        <ScheduleSection showTitle={false} />
        <CTASection
          image="photo-1526506118085-60ce8714f8c5"
          kicker="Find Your Class"
          title="See You On | The Floor"
          buttonText="Join IronForge"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
