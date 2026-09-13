import { useMemo, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', range: 'Below 18.5', band: 'u' };
  if (bmi < 25) return { label: 'Normal', range: '18.5 - 24.9', band: 'n' };
  if (bmi < 30) return { label: 'Overweight', range: '25 - 29.9', band: 'o' };
  return { label: 'Obese', range: '30 and above', band: 'ob' };
}

export default function BMISection() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState('');

  const bmi = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!height || !weight || h <= 0 || w <= 0) return null;
    const m = unit === 'metric' ? h / 100 : (h * 2.54) / 100;
    let kg = w;
    if (unit === 'imperial') kg = w * 0.453592;
    const value = kg / (m * m);
    return Math.round(value * 10) / 10;
  }, [height, weight, unit]);

  const category = bmi ? getCategory(bmi) : null;

  const handleCalculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || h <= 0 || !w || w <= 0) {
      setError('Please enter valid height and weight values.');
      return;
    }
    setError('');
  };

  return (
    <section className="section section--charcoal" aria-label="BMI calculator">
      <div className="container">
        <Reveal className="bmi-wrap">
          <div>
            <span className="kicker">BMI Calculator</span>
            <h2 className="section-title">Know Your | Numbers</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Body Mass Index helps you understand where you stand and where to focus next.
              Enter your details below.
            </p>
            <div className="bmi-tabs" role="group" aria-label="Measurement units">
              <button
                type="button"
                className={`filter-btn ${unit === 'metric' ? 'active' : ''}`}
                onClick={() => setUnit('metric')}
              >
                Metric (cm / kg)
              </button>
              <button
                type="button"
                className={`filter-btn ${unit === 'imperial' ? 'active' : ''}`}
                onClick={() => setUnit('imperial')}
              >
                Imperial (in / lb)
              </button>
            </div>
            <form className="bmi-form" onSubmit={handleCalculate} noValidate>
              <div className="form-group">
                <label htmlFor="bmi-height">
                  Height {unit === 'metric' ? '(cm)' : '(inches)'}
                </label>
                <input
                  id="bmi-height"
                  type="number"
                  step="0.1"
                  min="0"
                  className="input"
                  placeholder={unit === 'metric' ? 'e.g. 175' : 'e.g. 69'}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  aria-label="Height"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bmi-weight">
                  Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                </label>
                <input
                  id="bmi-weight"
                  type="number"
                  step="0.1"
                  min="0"
                  className="input"
                  placeholder={unit === 'metric' ? 'e.g. 75' : 'e.g. 165'}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  aria-label="Weight"
                />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn--primary">
                Calculate BMI
                <Icon name="bolt" size={16} />
              </button>
            </form>
          </div>

          <div className="bmi-result" aria-live="polite">
            {bmi ? (
              <>
                <div className="bmi-score">{bmi}</div>
                <div className="bmi-category">{category.label}</div>
                <div className="bmi-range">Healthy range: {category.range}</div>
                <div className="bmi-scale" aria-hidden="true">
                  <span className={`u ${category.band === 'u' ? 'active' : ''}`} />
                  <span className={`n ${category.band === 'n' ? 'active' : ''}`} />
                  <span className={`o ${category.band === 'o' ? 'active' : ''}`} />
                  <span className={`ob ${category.band === 'ob' ? 'active' : ''}`} />
                </div>
                <div className="bmi-labels">
                  <span>Under</span>
                  <span>Normal</span>
                  <span>Over</span>
                  <span>Obese</span>
                </div>
              </>
            ) : (
              <>
                <div className="bmi-score">--</div>
                <div className="bmi-category">Enter your details</div>
                <div className="bmi-range">Your BMI result will appear here</div>
                <div className="bmi-scale" aria-hidden="true">
                  <span className="u" />
                  <span className="n" />
                  <span className="o" />
                  <span className="ob" />
                </div>
                <div className="bmi-labels">
                  <span>Under</span>
                  <span>Normal</span>
                  <span>Over</span>
                  <span>Obese</span>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
