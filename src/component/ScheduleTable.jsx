import { useState } from 'react';
import { schedule } from '../data/data';
import Icon from './Icon';

function BookButton() {
  const [booked, setBooked] = useState(false);
  return (
    <button
      type="button"
      className="schedule-book"
      disabled={booked}
      onClick={() => setBooked(true)}
      aria-pressed={booked}
    >
      {booked ? 'Booked!' : 'Book Class'}
    </button>
  );
}

export default function ScheduleTable({ day }) {
  const dayData = schedule.find((d) => d.day === day) || { day, classes: [] };

  return (
    <div className="schedule-wrap">
      <h3 className="schedule-day-title">
        <Icon name="calendar" size={18} />
        {dayData.day}
      </h3>
      <div className="table-scroll">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Class</th>
              <th>Trainer</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dayData.classes.map((cls, i) => (
              <tr key={`${cls.name}-${cls.time}-${i}`}>
                <td className="schedule-time">{cls.time}</td>
                <td className="schedule-class">{cls.name}</td>
                <td>{cls.trainer}</td>
                <td>
                  <span className="schedule-level">{cls.level}</span>
                </td>
                <td>
                  <BookButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
