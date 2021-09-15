import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: '#fbfbfb',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'inherit',
    },
    title: {
      flexGrow: 1,
      color: 'inherit',
    },
    backgroundColor: {
      backgroundColor: '#a513d8',
    },
  }));
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position='static' className={classes.backgroundColor}>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            Header
          </Typography>
          <IconButton
            edge='start'
            className={classes.menuButton}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </header>
  );
};
