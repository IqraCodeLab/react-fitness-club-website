import { img } from '../data/data';
import Breadcrumb from './Breadcrumb';

export default function Banner({ image, title, crumbs = [] }) {
  const parts = title.split('|');
  return (
    <section className="banner" aria-label={`${title.replace(/\|/g, '')} page header`}>
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${img(image, 1920)})` }}
        role="img"
        aria-label="IronForge gym facility"
      />
      <div className="banner-overlay" aria-hidden="true" />
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title">
            {parts.map((part, i) =>
              i % 2 === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i} className="banner-title-accent">
                  {part}
                </span>
              )
            )}
          </h1>
          <Breadcrumb items={crumbs} />
        </div>
      </div>
    </section>
  );
}
