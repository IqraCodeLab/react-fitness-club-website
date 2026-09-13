import { img } from '../data/data';
import Icon from './Icon';

export default function GalleryCard({ item, onOpen }) {
  return (
    <div className="gallery-item" onClick={() => onOpen(item)} role="button" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(item);
        }
      }}
      aria-label={`Open ${item.title} in lightbox`}
    >
      <img src={img(item.image, 800)} alt={item.title} loading="lazy" />
      <div className="gallery-zoom" aria-hidden="true">
        <Icon name="zoom" size={18} />
      </div>
      <div className="gallery-item-overlay">
        <span className="gallery-tag">{item.category}</span>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}
