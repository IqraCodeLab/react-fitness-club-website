import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Breadcrumb({ items }) {
  return (
    <nav className="banner-breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span className="sep" aria-hidden="true">
        <Icon name="chevronRight" size={14} />
      </span>
      {items.map((item, i) =>
        item.path ? (
          <span key={i}>
            <Link to={item.path}>{item.name}</Link>
            <span className="sep" aria-hidden="true">
              <Icon name="chevronRight" size={14} />
            </span>
          </span>
        ) : (
          <span key={i} aria-current="page">
            {item.name}
          </span>
        )
      )}
    </nav>
  );
}
