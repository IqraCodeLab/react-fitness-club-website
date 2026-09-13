import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isValid) {
      setStatus({ type: 'err', msg: 'Please enter a valid email address.' });
      return;
    }
    setStatus({ type: 'ok', msg: 'You are in! Watch your inbox for training tips.' });
    setEmail('');
  };

  return (
    <section className="section" aria-label="Newsletter signup">
      <div className="container">
        <Reveal className="newsletter">
          <div>
            <h2>Get Stronger, Weekly.</h2>
            <p>Training tips, nutrition advice and exclusive offers. No spam, just gains.</p>
          </div>
          <div>
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--primary">
                Subscribe
                <Icon name="send" size={16} />
              </button>
            </form>
            <div
              className={`newsletter-msg ${status?.type === 'ok' ? 'ok' : status?.type === 'err' ? 'err' : ''}`}
              role="status"
            >
              {status?.msg}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
