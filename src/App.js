import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Predict from './routes/Predict';
import BrowserNotSupported from './routes/BrowserNotSupported';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/predict' component={Predict} />
        <Route exact path='/browser-not-supported' component={BrowserNotSupported} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
