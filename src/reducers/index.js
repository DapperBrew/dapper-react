import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import data from './data';
import auth from './auth';
import user from './user';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';

const rootReducer = combineReducers({
  ui,
  recipeEdit,
  data,
  auth,
  user,
  form: formReducer,
});

export default rootReducer;
