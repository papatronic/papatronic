import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './routes/Home';

function App({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
