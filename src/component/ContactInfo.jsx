import { contactInfo } from '../data/data';
import Icon from './Icon';

const items = [
  { icon: 'pin', title: 'Address', value: contactInfo.address, href: null },
  { icon: 'phone', title: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: 'mail', title: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: 'hours', title: 'Opening Hours', value: contactInfo.hours, href: null },
];

export default function ContactInfo() {
  return (
    <aside className="contact-info-card" aria-label="Contact information">
      {items.map((item) => (
        <div key={item.title} className="contact-info-item">
          <div className="contact-info-icon">
            <Icon name={item.icon} size={22} />
          </div>
          <div>
            <h3>{item.title}</h3>
            {item.href ? (
              <a href={item.href}>{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
