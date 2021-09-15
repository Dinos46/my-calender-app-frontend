import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const CalenderHeader = ({ date }) => {
  return (
    <section className='calender-header flex'>
      <button className='btn'>
        <ArrowBackIosIcon />
      </button>
      <h2>{date}</h2>
      <button className='btn'>
        <ArrowForwardIosIcon />
      </button>
    </section>
  );
};
