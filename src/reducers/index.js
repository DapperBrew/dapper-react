import { combineReducers } from 'redux';

import header from './header';
import recipeEdit from '../views/recipes/views/recipe-edit/reducers/index';

const rootReducer = combineReducers({
  header,
  recipeEdit,
});

export default rootReducer;
