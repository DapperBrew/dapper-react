import * as actions from '../actions/abv';

const initialState = {
  originalGravity: '',
  finalGravity: '',
};

const calc = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ORIGINAL_GRAVITY:
      return {
        ...state,
        originalGravity: action.gravity,
      };
    case actions.SET_FINAL_GRAVITY:
      return {
        ...state,
        finalGravity: action.gravity,
      };
    default:
      return state;
  }
};

export default calc;
