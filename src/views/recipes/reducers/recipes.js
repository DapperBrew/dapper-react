import { REHYDRATE } from 'redux-persist/constants';
import * as actions from '../actions/recipes';

const initialState = {};

const recipeEdit = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.recipes; // eslint-disable-line
      if (incoming) return { ...state, ...incoming };

      return state;
    case actions.SAVE_RECIPE_SUCCESS:
      return {
        ...state,
        [action.id]: action.recipe,
      };
    case actions.RECIPES_SUCCESS:
      return action.recipes.entities.recipes;
    case actions.EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        [action.itemIndex]: action.recipe,
      };
    case actions.CLEAR_RECIPES:
      return initialState;
    default:
      return state;
  }
};

export default recipeEdit;
