import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => {
  return (
    <div className='loader'>
      <CircularProgress size={100} />
    </div>
  );
};
