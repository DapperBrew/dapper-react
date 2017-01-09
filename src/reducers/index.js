import { combineReducers } from 'redux';

import header from './header';
import recipeCreate from '../views/recipes/views/recipe-create/reducers';

const rootReducer = combineReducers({
  header,
  recipeCreate,
});

export default rootReducer;
