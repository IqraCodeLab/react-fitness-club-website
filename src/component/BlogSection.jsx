import { blogPosts } from '../data/data';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal from './Reveal';

export default function BlogSection({ limit = 3 }) {
  const items = blogPosts.slice(0, limit);

  return (
    <section className="section" aria-label="Latest from the blog">
      <div className="container">
        <SectionTitle
          center
          kicker="Iron Insights"
          title="Latest From | The Blog"
          subtitle="Training guides, nutrition tips and recovery science from our expert coaches."
        />
        <div className="blog-grid">
          {items.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i % 3} />
          ))}
        </div>
        <Reveal style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/blog" className="btn btn--outline">
            View All Articles
            <Icon name="arrowRight" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
