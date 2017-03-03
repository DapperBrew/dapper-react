import { combineReducers } from 'redux';

import ui from './ui';
import data from './data';
import auth from './auth';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';

const rootReducer = combineReducers({
  ui,
  recipeEdit,
  data,
  auth,
});

export default rootReducer;
