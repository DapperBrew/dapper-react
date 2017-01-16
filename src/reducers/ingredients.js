import { FERMENTABLES_SUCCESS } from '../actions/ingredients';

const initialState = {
  fermentables: {},
};

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case FERMENTABLES_SUCCESS:
      return {
        ...state,
        fermentables: action.data.entities.fermentables,
      };
    default:
      return state;
  }
};

export default ingredients;
