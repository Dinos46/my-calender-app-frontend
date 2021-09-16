import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const CalenderHeader = ({ date, onNext, onPrev }) => {
  return (
    <section className='calender-header flex'>
      <button className='btn' onClick={onPrev}>
        <ArrowBackIosIcon />
      </button>
      <h2>{date}</h2>
      <button className='btn' onClick={onNext}>
        <ArrowForwardIosIcon />
      </button>
    </section>
  );
};
