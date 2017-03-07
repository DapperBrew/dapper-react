import * as actions from '../actions/recipes';

const initialState = {};

const recipeEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_RECIPE_SUCCESS:
      return [
        ...state,
        {
          id: action.id,
          ...action.recipeStaged,
        },
      ];
    default:
      return state;
  }
};

export default recipeEdit;
