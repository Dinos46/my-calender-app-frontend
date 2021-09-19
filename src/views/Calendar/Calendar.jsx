import { useState, useEffect } from 'react';
//GET STATE
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedEv } from '../../store/slices/eventSlice';
import { getAllEvents } from '../../store/thunks/eventThunk';
//COMPONENTS
import { CalendarHeader } from '../Calendar/cmps/CalendarHeader';
import { CalendarBody } from '../Calendar/cmps/CalendarBody';
import { Loader } from '../../cmps/loader/Loader';
//CALENDAR LOGIC
import { createCalendarDays } from '../../services/calendarService';

export const Calendar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.event.events);
  const status = useSelector((state) => state.event.status);
  const isDark = useSelector((state) => state.theme.isDark);
  const evForDate = (date) => {
    if (date) {
      const evDate = state?.find((ev) => ev?.date === date);
      return evDate;
    }
  };
  const [monthNav, setMonthNav] = useState(0);
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
    if (isDark) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [dispatch, isDark]);

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
    const daysArr = createCalendarDays(emptyDaySquare, evForDate, monthNav);
    setDays(daysArr);
  }, [state, monthNav]);

  const onNextMonth = () => setMonthNav(monthNav + 1);
  const onPrevMonth = () => setMonthNav(monthNav - 1);
  const onSelect = (date) => {
    dispatch(setSelectedEv(date));
  };
  if (status === 'failed') return <h2>cant get data, somthing went wrong</h2>;
  if (status === 'loading') return <Loader />;
  return (
    <section className='calendar-app'>
      <CalendarHeader
        date={dateToDisplay}
        onNext={onNextMonth}
        onPrev={onPrevMonth}
      />
      <div className='calendar grid'>
        {weekDays.map((day) => {
          const shortDayName = day.replace('day', '');
          return (
            <h3 key={day} className={`day ${day} ${isDark ? 'dark' : ''}`}>
              {shortDayName}
            </h3>
          );
        })}
        {days?.map((day, idx) => (
          <CalendarBody
            day={day}
            key={day.value + idx}
            onSelect={onSelect}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
};
