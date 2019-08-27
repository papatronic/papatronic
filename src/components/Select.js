import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

function Select(props) {
  return (
    <FormControl>
        <InputLabel>Ej. Culiacán</InputLabel>
        <MaterialSelect value={props.markets[0].value}>
          {props.markets.map(market => <MenuItem key={market.value} value={market.value}>{market.text}</MenuItem>)}
        </MaterialSelect>
        <FormHelperText>Seleccione lugar</FormHelperText>
    </FormControl>
  );
}

export default Select;