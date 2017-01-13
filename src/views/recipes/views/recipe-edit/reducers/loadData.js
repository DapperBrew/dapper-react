import {
  INGREDIENTS_SUCCESS,
  FERMENTABLES_SUCCESS,
} from '../actions/loadData';

const initialState = {};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case FERMENTABLES_SUCCESS:
      return {
        ...state,
        fermentables: action.data,
      };
    default:
      return state;
  }
};

export default loadData;
