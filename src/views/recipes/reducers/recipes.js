import { REHYDRATE } from 'redux-persist/constants';
import * as actions from '../actions/recipes';

const initialState = [];

const recipeEdit = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.recipes; // eslint-disable-line
      if (incoming) return [...state, ...incoming];

      return state;
    case actions.SAVE_RECIPE_SUCCESS:
      return [
        ...state,
        {
          id: action.id,
          ...action.recipe,
        },
      ];
    case actions.RECIPES_SUCCESS:
      return [
        ...action.recipes,
      ];
    case actions.EDIT_RECIPE_SUCCESS:
      return [
        ...state.slice(0, action.itemIndex),
        action.recipe,
        ...state.slice(action.itemIndex + 1),
      ];
    case actions.CLEAR_RECIPES:
      return initialState;
    default:
      return state;
  }
};

export default recipeEdit;
