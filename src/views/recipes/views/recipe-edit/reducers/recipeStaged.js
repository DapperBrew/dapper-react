import reject from 'lodash/reject';
import { ADD_FERMENTABLE_SUCCESS, REMOVE_FERMENTABLE } from '../actions/recipeStaged';


const recipeEdit = (state = { fermentables: [] }, action) => {
  switch (action.type) {
    case ADD_FERMENTABLE_SUCCESS:
      return {
        ...state,
        fermentables: [
          ...state.fermentables,
          {
            id: action.id,
            key: action.key,
            weight: action.weight,
          },
        ],
      };
    case REMOVE_FERMENTABLE:
      return {
        ...state,
        fermentables: reject(state.fermentables, { key: action.key }),
      };
    default:
      return state;
  }
};

export default recipeEdit;
