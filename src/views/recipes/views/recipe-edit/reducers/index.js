import { combineReducers } from 'redux';

import modals from './modals';
import recipeStaged from './recipeStaged';

const recipeEdit = combineReducers({
  modals,
  recipeStaged,
});

export default recipeEdit;
