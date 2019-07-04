import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';
import BrowserInformation from './helpers/BrowserInformation'
import ContextComponent from './components/ContextComponent';
import About from './routes/About';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import BrowserNotSupported from './routes/BrowserNotSupported';
import ColorTheme from './constants/colors';

function App() {
  const { version, completeVersion, browserName, supported } = BrowserInformation();
  return (
    <HashRouter>
      <Switch>
        <ContextComponent Component={Home} context={AppContext} value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} exact path='/' />
        <ContextComponent exact path='/about' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={About} />
        <ContextComponent exact path='/browser-not-supported' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={BrowserNotSupported} />
        <ContextComponent Component={NotFound} value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} />
      </Switch>
    </HashRouter>
  );
}

export default App;
