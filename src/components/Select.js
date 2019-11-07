import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  select: {
    minWidth: '100%',
    fontSize: '0.3em',
    marginTop: theme.spacing(2),
  },
  formControl: {
    fontSize: 'calc(1em + 1vw)',
    display: 'flex',
    minWidth: '80%',
    maxWidth: '80%'
  },
}));


function MySelect(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={props.selectedMarket}
        onChange={props.handleOnChange}
        displayEmpty
        name="markets"
        className={classes.select}
      >
        <MenuItem style={{fontSize: '0.8em'}} value="" disabled>
          <em>Central de Abastos, Guadalajara...</em>
        </MenuItem>
        {props.markets.map(market => <MenuItem style={{fontSize: '0.8em'}} key={market.key} value={market.value}>{market.text}</MenuItem>)}
      </Select>
      <FormHelperText style={{fontSize: '0.3em'}}>Seleccione un lugar</FormHelperText>
    </FormControl>
  );
}

export default MySelect;