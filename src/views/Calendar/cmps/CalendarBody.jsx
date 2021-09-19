import { Link } from 'react-router-dom';
export const CalendarBody = ({
  day: { value, isCurrDay, date, event },
  onSelect,
  isDark,
}) => {
  // console.log(event);
  return (
    <Link to={`/save/${event?._id || ''}`}>
      <div
        className={`day-tile ${value} ${isCurrDay && 'current'} flex ${
          isDark ? 'dark' : ''
        }`}
        onClick={() => onSelect(date)}
      >
        {value}
        {event && <span className='ev-title'>{event.description}</span>}
      </div>
    </Link>
  );
};
