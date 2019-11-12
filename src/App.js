import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';
import BrowserInformation from './helpers/BrowserInformation'
import ContextComponent from './components/ContextComponent';
import About from './routes/About';
import Home from './routes/Home';
import BrowserNotSupported from './routes/BrowserNotSupported';
import ColorTheme from './constants/colors';

function App() {
  const { version, completeVersion, browserName, supported } = BrowserInformation();
  return (
    <HashRouter>
      <Switch>
        <ContextComponent exact path='/' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={Home} />
        <ContextComponent exact path='/about' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={About} />
        <ContextComponent exact path='/browser-not-supported' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={BrowserNotSupported} />
        <ContextComponent path='*' value={{ version, completeVersion, browserName, supported, colors: ColorTheme }} context={AppContext} Component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
