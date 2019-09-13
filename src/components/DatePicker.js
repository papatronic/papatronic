import React from 'react';
import MomentUtils from '@date-io/moment';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import 'moment/locale/es';

const theme = createMuiTheme({
  typography: {
    fontSize: '0.5em'
  }
});

export default function MyDatePicker(props) {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider locale='es' utils={MomentUtils}>
        <DatePicker
          locale='es'
          style={{minWidth: '80%', maxWidth: '80%', fontSize: '0.5em'}}
          variant='inline'
          label='Seleccione fecha de pronóstico'
          value={props.selectedDate}
          onChange={props.onChange}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}