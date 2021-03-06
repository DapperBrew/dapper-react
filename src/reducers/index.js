// import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import data from './data';
import auth from './auth';
import user from './user';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';
import recipes from '../views/recipes/reducers/recipes';
import flags from './flags';
import equipmentStaged from '../views/equipment/reducers/equipmentStaged';
import equipments from '../views/equipment/reducers/equipments';
import calc from '../views/calculators/reducers';

const config = {
  key: 'primary',
  debug: true,
  storage,
};

const rootReducer = persistCombineReducers(config, {
  ui,
  recipeEdit,
  data,
  auth,
  user,
  recipes,
  flags,
  equipmentStaged,
  equipments,
  calc,
  form: formReducer,
});

export default rootReducer;
