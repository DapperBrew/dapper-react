import { combineReducers } from 'redux';

import ui from './ui';
import ingredients from './ingredients';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';

const rootReducer = combineReducers({
  ui,
  recipeEdit,
  ingredients,
});

export default rootReducer;
