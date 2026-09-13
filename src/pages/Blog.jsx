import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import SectionTitle from '../component/SectionTitle';
import BlogCard from '../component/BlogCard';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import { blogPosts, heroImages } from '../data/data';

export default function Blog() {
  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={heroImages.blog}
          title="Iron | Insights"
          crumbs={[{ name: 'Blog' }]}
        />

        <section className="section" aria-label="Blog articles">
          <div className="container">
            <SectionTitle
              center
              kicker="Training. Nutrition. Recovery."
              title="Knowledge | Is Power"
              subtitle="Practical guides and science-backed advice from the IronForge coaching team."
            />
            <div className="blog-grid">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={i % 3} />
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
