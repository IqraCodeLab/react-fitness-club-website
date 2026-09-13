import { useMemo, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import GallerySection from '../component/GallerySection';
import SectionTitle from '../component/SectionTitle';
import CTASection from '../component/CTASection';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import { galleryCategories, galleryItems, heroImages } from '../data/data';

export default function Gallery() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () =>
      category === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category]
  );

  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.gallery}
          title="Inside | The Forge"
          crumbs={[{ name: 'Gallery' }]}
        />

        <section className="section" aria-label="Gym gallery">
          <div className="container">
            <SectionTitle
              center
              kicker="Gallery"
              title="Moments From | The Floor"
              subtitle="Sweat, steel and community — a look inside daily life at IronForge."
            />
            <div className="filter-bar" role="tablist" aria-label="Filter gallery by category">
              {galleryCategories.map((cat) => (
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
            <GallerySection items={filtered} />
          </div>
        </section>

        <CTASection
          image="photo-1540497077202-7c8a3999166f"
          kicker="Come See It Live"
          title="Pictures Don't | Do It Justice"
          buttonText="Book A Tour"
        />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
