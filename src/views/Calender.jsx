import { useState, useEffect } from 'react';
import { CalenderHeader } from '../cmps/CalenderHeader';
import { CalenderBody } from '../cmps/CalenderBody';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../store/slices/eventSlice';
import { createCalenderDays } from '../services/calenderService';

export const Calender = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.event.events);
  const evForDate = (date) => {
    console.log(date);
    return state.find((ev) => ev.date === date);
  };

  const [monthNav, setMonthNav] = useState(0);
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
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    const date = new Date();
    if (monthNav !== 0) {
      date.setMonth(new Date().getMonth() + monthNav);
    }
    const month = date.getMonth();
    const year = date.getFullYear();
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
    const daysArr = createCalenderDays(emptyDaySquare, evForDate, monthNav);
    setDays(daysArr);
  }, [monthNav, state]);

  const onNextMonth = () => setMonthNav(monthNav + 1);
  const onPrevMonth = () => setMonthNav(monthNav - 1);
  const onSelect = (date) => {
    console.log(date);
    setselectedDay(date);
  };

  return (
    <section className='calender-app'>
      <CalenderHeader
        date={dateToDisplay}
        onNext={onNextMonth}
        onPrev={onPrevMonth}
      />
      <div className='calender grid'>
        {weekDays.map((day) => {
          const shortDayName = day.replace('day', '');
          return (
            <h3 key={day} className={`day ${day}`}>
              {shortDayName}
            </h3>
          );
        })}
        {days.map((day, idx) => (
          <CalenderBody day={day} key={day.value + idx} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};
