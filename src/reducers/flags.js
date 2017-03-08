// import actions
import { RECIPES_SUCCESS } from '../views/recipes/actions/recipes';
import * as actions from '../actions/flags';

// initial state
const initialState = {
  recipesLoaded: false,
};

const flags = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_SUCCESS :
      return {
        ...state,
        recipesLoaded: true,
      };
    case actions.CLEAR_FLAGS :
      return initialState;
    default:
      return state;
  }
};

export default flags;
