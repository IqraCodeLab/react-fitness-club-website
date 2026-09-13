import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
