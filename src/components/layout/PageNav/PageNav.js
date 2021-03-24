import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './PageNav.module.scss';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
  titleTwo: {
    flexGrow: 8,
  },
}));


const Component = () => {
  const logIn = useSelector(state => state.posts.login);
  let btnLog;
  let btnUserList;

  if (logIn === 'false'){
    btnLog = <Button href={'https://google.com'} variant="outlined" color="inherit">Login</Button>;
  }else{
    btnLog = <Button href={'/'} color="inherit">Logout</Button>;
    btnUserList = <Button href={'/user'} className={styles.color_menu} >Lista użytkownika</Button>;
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={useStyles().title}>
          <Button href={'/'} className={styles.color_menu} >Lista Ogólna</Button>
        </Typography>
        <Typography variant="h6" className={useStyles().titleTwo}>
          {btnUserList}
        </Typography>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </MenuItem>
        {btnLog}
      </Toolbar>
    </AppBar >
  );
};

export {
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent,
};