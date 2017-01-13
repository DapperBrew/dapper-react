import { combineReducers } from 'redux';

import modals from './modals';
import recipeStaged from './recipeStaged';
import loadData from './loadData';

const recipeEdit = combineReducers({
  modals,
  recipeStaged,
  loadData,
});

export default recipeEdit;
