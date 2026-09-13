import { Link } from 'react-router-dom';
import { brand, navLinks, contactInfo, scheduleDays } from '../data/data';
import Icon from './Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              IRON<span>FORGE</span>
            </Link>
            <p>
              Premium fitness club built for people who refuse to settle. Train harder, move
              stronger and become unstoppable — at IronForge Fitness.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <Icon name="chevronRight" size={12} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />Strength Training</Link></li>
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />CrossFit</Link></li>
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />HIIT & Cardio</Link></li>
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />Boxing</Link></li>
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />Personal Training</Link></li>
              <li><Link to="/programs"><Icon name="chevronRight" size={12} />Weight Loss</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Icon name="pin" size={18} />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Icon name="hours" size={18} />
                <span>Mon–Sun · 5:00 AM – 12:00 AM</span>
              </li>
              <li>
                <Icon name="calendar" size={18} />
                <span>{scheduleDays[0]} – {scheduleDays[6]} classes weekly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {brand.full}. All rights reserved. Built with iron.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">About</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
