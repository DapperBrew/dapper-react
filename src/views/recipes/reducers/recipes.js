import * as actions from '../actions/recipes';


const initialState = [];

const recipeEdit = (state = initialState, action) => {
  switch (action.type) {
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
        ...state,
        ...action.recipes,
      ];
    case actions.CLEAR_RECIPES:
      return initialState;
    default:
      return state;
  }
};

export default recipeEdit;
