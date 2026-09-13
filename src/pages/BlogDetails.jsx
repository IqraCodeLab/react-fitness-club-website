import { Link, useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
import Reveal from '../component/Reveal';
import Newsletter from '../component/Newsletter';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';
import { blogPosts, img } from '../data/data';

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <>
        <Header />
        <main id="main">
          <section className="notfound">
            <div className="notfound-code">404</div>
            <h1>Article Not Found</h1>
            <p>The article you are looking for does not exist or was moved.</p>
            <Link to="/blog" className="btn btn--primary">
              Back To Blog
              <Icon name="arrowRight" size={16} />
            </Link>
          </section>
        </main>
        <Footer />
        <BackToTop />
      </>
    );
  }

  const idx = blogPosts.findIndex((p) => p.id === post.id);
  const prev = blogPosts[idx - 1];
  const next = blogPosts[idx + 1];

  return (
    <>
      <Header />
      <main id="main">
        <Banner
          image={post.image}
          title={post.title.split(' ').slice(0, 2).join(' ')}
          crumbs={[{ name: 'Blog', path: '/blog' }, { name: post.title }]}
        />

        <section className="section" aria-label={post.title}>
          <div className="container">
            <article className="blog-detail">
              <Reveal className="blog-detail-hero">
                <img src={img(post.image, 1600)} alt={post.title} />
              </Reveal>
              <div className="blog-detail-head">
                <span className="kicker">{post.category}</span>
                <h2 className="section-title">{post.title}</h2>
                <div className="blog-detail-meta">
                  <span>
                    <Icon name="calendar" size={16} />
                    {post.date}
                  </span>
                  <span>
                    <Icon name="clock" size={16} />
                    {post.readTime}
                  </span>
                  <span>
                    <Icon name="user" size={16} />
                    {post.author}
                  </span>
                </div>
              </div>
              <div className="blog-detail-body">
                <p className="blog-detail-lead">{post.excerpt}</p>
                {post.content.map((section, i) => (
                  <div key={i}>
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                  </div>
                ))}
                <div className="blog-detail-tip">
                  <strong>Coach's tip:</strong> results come from consistency, not perfection. Show
                  up, do the work, and let the process stack.
                </div>
              </div>
              <div className="blog-author">
                <img src={img(post.authorImage, 200)} alt={post.author} />
                <div>
                  <strong>{post.author}</strong>
                  <span>IronForge Certified Coach</span>
                </div>
              </div>

              <div className="blog-pagination" aria-label="More articles">
                {prev && (
                  <Link to={`/blog/${prev.id}`} className="pagination-btn" style={{ width: 'auto', padding: '0 18px' }} aria-label={`Previous article: ${prev.title}`}>
                    <Icon name="arrowLeft" size={16} />
                  </Link>
                )}
                <Link to="/blog" className="pagination-btn" aria-label="All articles">
                  <Icon name="grid" size={16} />
                </Link>
                {next && (
                  <Link to={`/blog/${next.id}`} className="pagination-btn" style={{ width: 'auto', padding: '0 18px' }} aria-label={`Next article: ${next.title}`}>
                    <Icon name="arrowRight" size={16} />
                  </Link>
                )}
              </div>
            </article>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
