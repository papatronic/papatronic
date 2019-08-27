import React from 'react';
import MaterialRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Radio(props) {
  return <FormControlLabel labelPlacement="end" value={props.value} label={props.label} control={<MaterialRadio color={props.color}/>} />
}

export default Radio;