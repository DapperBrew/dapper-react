/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

// reducers
import rootReducer from './reducers/index';

const defaultState = {};


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk)),
  );

export default store;
