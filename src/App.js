import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { BrowserContext } from './contexts/BrowserContext';
import BrowserInformation from './helpers/BrowserInformation'
import ContextComponent from './components/ContextComponent';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Predict from './routes/Predict';
import BrowserNotSupported from './routes/BrowserNotSupported';
import './App.css';

function App() {
  const { version, completeVersion, browserName, supported } = BrowserInformation();
  return (
    <HashRouter>
      <Switch>
        <ContextComponent Component={Home} context={BrowserContext} value={{ version, completeVersion, browserName, supported }} exact path='/' />
        <ContextComponent exact path='/predict' value={{ version, completeVersion, browserName, supported }} context={BrowserContext} Component={Predict} />
        <ContextComponent exact path='/browser-not-supported' value={{ version, completeVersion, browserName, supported }} context={BrowserContext} Component={BrowserNotSupported} />
        <ContextComponent Component={NotFound} value={{ version, completeVersion, browserName, supported }} context={BrowserContext} />
      </Switch>
    </HashRouter>
  );
}

export default App;
