import { useState } from 'react';
import Icon from './Icon';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    else if (!/^[+0-9\s()-]{7,20}$/.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <div className="contact-form-card">
      {sent && (
        <div className="form-success" role="status">
          <Icon name="check" size={18} />
          Thank you! Your message has been sent. Our team will reply within 24 hours.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="input"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="input"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">Phone</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="input"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="input"
              value={form.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </div>
          <div className="form-group full">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className="input"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>
        </div>
        <button type="submit" className="btn btn--primary">
          Send Message
          <Icon name="send" size={16} />
        </button>
      </form>
    </div>
  );
}
