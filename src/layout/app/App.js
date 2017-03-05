import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from '../../history';

import store from '../../store';

// components
import Main from '../main/Main';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import RequireAuth from '../auth/RequireAuth';

// actions
import { authenticateUser, confirmAuth } from '../../actions/auth';

const token = localStorage.getItem('token');

if (token) {
  // is there is a token, authenticate user
  store.dispatch(authenticateUser(true));
  // double check that the token is not fake
  store.dispatch(confirmAuth());
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={RequireAuth(Main)} />
      </Switch>
    </Router>
  </Provider>
);


export default App;
