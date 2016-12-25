/* eslint-disable no-underscore-dangle, max-len */
import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  header: {
    title: 'Dashboard',
  },
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
