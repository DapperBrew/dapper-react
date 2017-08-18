import { combineReducers } from 'redux';

import abv from './abv';

const calc = combineReducers({
  abv,
});

export default calc;
