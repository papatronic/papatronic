import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from 'moment';

moment.locale('es', {
  months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mie_Jue_Vie_Sa'.split('_'),
  weekdaysShort: 'do._lun._ma._mie._jue._vie._sa.'.split('_'),
  weekdays: 'domingo_lunes_martes_miercoles_jueves_viernes_sabado'.split('_'),
  weekdaysParseExact : true,
});

ReactDOM.render(<App/>, document.getElementById('root'));