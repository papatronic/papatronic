import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function MyRadio(props) {
  const classes = useStyles();
  return (
    <FormControl>
      <RadioGroup 
        className={classes.group}
        value={props.value}
        onChange={props.onChange}
        row
      >
        {props.radios.map(radio => {
          return <FormControlLabel
            value={radio.value}
            control={<Radio/>}
            label={radio.label}
            key={radio.key}
          />
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default MyRadio;