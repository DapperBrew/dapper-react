import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from '../../history';


import store from '../../store';

import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const Dapper = () => (
  <div className="app">
    <Sidebar />
    <Main />
  </div>
);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Dapper} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
