import { useState } from 'react';
import { faqs } from '../data/data';
import Icon from './Icon';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function FAQ({ showTitle = true }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="section section--charcoal" aria-label="Frequently asked questions">
      <div className="container">
        {showTitle && (
          <SectionTitle
            center
            kicker="FAQ"
            title="Questions? | We Got Answers"
            subtitle="Everything you need to know about membership, training and life at IronForge."
          />
        )}
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i % 4} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
              >
                {faq.question}
                <span className="faq-icon" aria-hidden="true">
                  <Icon name="chevronDown" size={16} />
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className="faq-answer"
                style={{ maxHeight: openIndex === i ? '400px' : '0px' }}
              >
                <p>{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
