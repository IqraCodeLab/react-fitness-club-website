import { Link } from 'react-router-dom';
import { img } from '../data/data';
import Icon from './Icon';

export default function BlogCard({ post, delay = 0 }) {
  return (
    <article className="blog-card reveal is-visible" data-delay={delay}>
      <Link to={`/blog/${post.id}`} className="blog-card-img" aria-label={`Read ${post.title}`}>
        <img src={img(post.image, 800)} alt={post.title} loading="lazy" />
        <span className="blog-card-cat">{post.category}</span>
        <div className="blog-card-overlay">
          <div className="blog-card-meta">
            <span>
              <Icon name="calendar" size={13} />
              {post.date}
            </span>
            <span>
              <Icon name="clock" size={13} />
              {post.readTime}
            </span>
          </div>
          <h3 className="blog-card-title">{post.title}</h3>
          <span className="blog-card-link">
            Read More
            <Icon name="arrowRight" size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}