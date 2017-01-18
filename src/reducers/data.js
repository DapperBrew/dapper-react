import { FERMENTABLES_SUCCESS, STYLES_SUCCESS, DATA_SUCCESS } from '../actions/data';

const initialState = {
  fermentables: {},
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return {
        ...state,
        loaded: true,
      };
    case FERMENTABLES_SUCCESS:
      return {
        ...state,
        fermentables: action.data.entities.fermentables,
      };
    case STYLES_SUCCESS:
      return {
        ...state,
        styles: action.data.entities.styles,
      };
    default:
      return state;
  }
};

export default data;
