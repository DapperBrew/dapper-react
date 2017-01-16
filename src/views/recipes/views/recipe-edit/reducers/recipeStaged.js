import { ADD_FERMENTABLE } from '../actions/recipeStaged';

const recipeEdit = (state = { fermentables: [] }, action) => {
  switch (action.type) {
    case ADD_FERMENTABLE:
      return {
        ...state,
        fermentables: [
          ...state.fermentables,
          {
            id: action.id,
            weight: action.weight,
          },
        ],
      };
    default:
      return state;
  }
};

export default recipeEdit;
