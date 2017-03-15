import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import data from './data';
import auth from './auth';
import user from './user';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';
import recipes from '../views/recipes/reducers/recipes';
import flags from './flags';
import equipments from '../views/equipment/reducers/equipment';

const rootReducer = combineReducers({
  ui,
  recipeEdit,
  data,
  auth,
  user,
  recipes,
  flags,
  equipments,
  form: formReducer,
});

export default rootReducer;
