import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from 'moment-timezone';

moment.locale('es');

ReactDOM.render(<App />, document.getElementById('root'));