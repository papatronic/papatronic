import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='*' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
