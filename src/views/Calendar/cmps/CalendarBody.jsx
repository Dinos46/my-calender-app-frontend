import { useHistory } from 'react-router-dom';
export const CalendarBody = ({
  day: { value, isCurrDay, date, event },
  onSelect,
  isDark,
}) => {
  const { push } = useHistory();

  const onMoveToSavePage = () => {
    if (!date) return;
    push(`/save/${event?._id || ''}`);
  };

  return (
    <button className='btn' onClick={onMoveToSavePage}>
      <div
        className={`day-tile ${value} ${isCurrDay && 'current'} flex ${
          isDark ? 'dark' : ''
        }`}
        onClick={() => onSelect(date)}
      >
        {value}
        {event && <span className='ev-title'>{event.description}</span>}
      </div>
    </button>
  );
};
