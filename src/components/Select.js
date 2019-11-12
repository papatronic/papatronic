import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../styles/select.css';

const useStyles = makeStyles(theme => ({
  select: {
    minWidth: '100%',
    fontSize: '0.3em',
    marginTop: theme.spacing(2),
  },
  formControl: {
    fontSize: 'calc(1em + 1vw)',
    display: 'flex',
    minWidth: '100%',
    maxWidth: '100%'
  },
}));


function MySelect(props) {
  const classes = useStyles();
  const formClassName = `${classes.formControl} FormSize`;
  const selectClassName =  `${classes.select} SelectSize`
  return (
    <FormControl className={formClassName}>
      <Select
        value={props.selectedMarket}
        onChange={props.handleOnChange}
        displayEmpty
        name="markets"
        className={selectClassName}
      >
        {props.markets.map(market => <MenuItem style={{fontSize: '0.8em'}} key={market.id} value={market.id}>{market.city}</MenuItem>)}
      </Select>
      <FormHelperText style={{fontSize: '0.3em'}}>Seleccione un lugar</FormHelperText>
    </FormControl>
  );
}

export default MySelect;
