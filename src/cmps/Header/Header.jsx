//UI COMPONNETS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ChangeMode } from '../ChangeMode/ChangeMode';
//GET STATE
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Header = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    dark: {
      backgroundColor: '#a513d8',
      color: '#fbfbfb',
    },
    light: {
      backgroundColor: '#fbfbfb',
      color: '#191011',
    },
    menuButton: {
      color: isDark ? '#fbfbfb' : '#191011',
      marginRight: theme.spacing(2),
    },
    title: {
      color: isDark ? '#fbfbfb' : '#191011',
      flexGrow: 1,
    },
    backgroundColor: {
      backgroundColor: 'inherit',
    },
  }));
  const classes = useStyles();
  const goToHomePage = () => {
    history.push('/');
  };
  return (
    <header className={isDark ? classes.dark : classes.light}>
      <AppBar position='static' className={classes.backgroundColor}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            <button className='btn' onClick={goToHomePage}>
              MyCalendar
            </button>
          </Typography>
          <ChangeMode />
        </Toolbar>
      </AppBar>
    </header>
  );
};
