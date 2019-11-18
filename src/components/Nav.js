import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InstitutionName, About } from '../constants/strings';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '0.9em',
    [theme.breakpoints.down('1000')]: {
      fontSize: '0.6em',
    }
  },
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {InstitutionName}
        </Typography>
        <Button onClick={props.handleOpen} color="inherit">{About}</Button>
      </Toolbar>
    </AppBar>
  );
}