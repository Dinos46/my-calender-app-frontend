export const CalenderBody = ({
  day: { value, isCurrDay, date, event },
  onSelect,
  isDark,
}) => {
  return (
    <div
      className={`day-tile ${value} ${isCurrDay && 'current'} flex`}
      onClick={() => onSelect(date)}
    >
      <h3 className={isDark ? 'dark' : ''}>{value}</h3>
      <p>{event?.description}</p>
    </div>
  );
};
