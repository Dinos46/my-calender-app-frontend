import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../store/slices/themeSlice';
import { ChangeMode } from './ChangeMode';

export const Header = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isDark);
  }, [isDark]);
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
  return (
    <header className={isDark ? classes.dark : classes.light}>
      <AppBar position='static' className={classes.backgroundColor}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            MyCalender
          </Typography>
          <IconButton
            edge='start'
            className={classes.menuButton}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <ChangeMode />
        </Toolbar>
      </AppBar>
    </header>
  );
};
