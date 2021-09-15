import { useState, useEffect } from 'react';
import { CalenderHeader } from '../cmps/CalenderHeader';

export const Calender = () => {
  const [currMonth, setCurrMonth] = useState(8);
  const [selectedDay, setselectedDay] = useState(null);
  const [days, setDays] = useState([]);
  const [dateToDisplay, setDateToDisplay] = useState('');
  const weekDays = [
    'sunday',
    'monday',
    'tuseday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    setCurrMonth(month);
    const day = date.getDate();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);
    const dateStr = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    setDateToDisplay(
      `${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`
    );
    const emptyDaySquare = weekDays.indexOf(
      dateStr.split(', ')[0].toLocaleLowerCase()
    );
    const daysArr = [];
    for (let i = 1; i <= emptyDaySquare + daysInMonth; i++) {
      const dayStr = `${month + 1}/${i - emptyDaySquare}/${year}`;
      if (i > emptyDaySquare) {
        daysArr.push({
          value: i - emptyDaySquare,
          isCurrDay: i - emptyDaySquare === day,
          date: dayStr,
        });
      } else {
        daysArr.push({
          value: 'empty',
          isCurrDay: null,
          date: '',
        });
      }
      setDays(daysArr);
    }
  }, [currMonth]);

  return (
    <section className='calender-app'>
      <CalenderHeader date={dateToDisplay} />
      <div className='calender grid'>
        {weekDays.map((day) => (
          <h3 key={day} className={`day ${day}`}>
            {day}
          </h3>
        ))}
      </div>
    </section>
  );
};
