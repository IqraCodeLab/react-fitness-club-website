import { useCallback, useEffect, useState } from 'react';
import { galleryItems, img } from '../data/data';
import GalleryCard from './GalleryCard';
import Icon from './Icon';
import Reveal from './Reveal';

export default function GallerySection({ items = galleryItems }) {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const goPrev = useCallback(() => {
    setActive((cur) => (cur === null ? null : (cur - 1 + items.length) % items.length));
  }, [items.length]);
  const goNext = useCallback(() => {
    setActive((cur) => (cur === null ? null : (cur + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, goPrev, goNext]);

  return (
    <div>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i % 3}>
            <GalleryCard item={item} onOpen={() => setActive(i)} />
          </Reveal>
        ))}
      </div>

      {active !== null && items[active] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[active].title} onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close lightbox" autoFocus>
            <Icon name="xClose" size={22} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <Icon name="arrowLeft" size={22} />
          </button>
          <img
            src={img(items[active].image, 1400)}
            alt={items[active].title}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <Icon name="arrowRight" size={22} />
          </button>
          <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
            <span className="gallery-tag">{items[active].category}</span>
            <h3>{items[active].title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
