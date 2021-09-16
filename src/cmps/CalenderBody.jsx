export const CalenderBody = ({
  day: { value, isCurrDay, date, event },
  onSelect,
}) => {
  return (
    <div
      className={`day-tile ${value} ${isCurrDay && 'current'} flex`}
      onClick={() => onSelect(date)}
    >
      <h3>{value}</h3>
      <p>{event?.description}</p>
    </div>
  );
};
