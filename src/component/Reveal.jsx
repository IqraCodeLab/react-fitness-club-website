import { useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style }) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('is-visible');
    }
  }, [inView, ref]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-delay={delay}
      style={style}
    >
      {children}
    </Tag>
  );
}
