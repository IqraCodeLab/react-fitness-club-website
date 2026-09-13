import { useState } from 'react';
import { scheduleDays } from '../data/data';
import ScheduleTable from './ScheduleTable';
import SectionTitle from './SectionTitle';

export default function ScheduleSection({ showTitle = true }) {
  const [activeDay, setActiveDay] = useState(scheduleDays[0]);

  return (
    <section className="section" aria-label="Class schedule">
      <div className="container">
        {showTitle && (
          <SectionTitle
            center
            kicker="Weekly Schedule"
            title="Plan Your | Training Week"
            subtitle="50+ classes every week across every discipline. Pick a day and book your spot."
          />
        )}
        <div className="schedule-tabs" role="tablist" aria-label="Days of the week">
          {scheduleDays.map((day) => (
            <button
              key={day}
              type="button"
              role="tab"
              aria-selected={activeDay === day}
              className={`schedule-tab ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <ScheduleTable day={activeDay} />
      </div>
    </section>
  );
}
