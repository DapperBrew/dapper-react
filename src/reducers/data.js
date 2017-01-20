import * as actions from '../actions/data';

const initialState = {
  fermentables: {},
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actions.DATA_SUCCESS:
      return {
        ...state,
        loaded: true,
      };
    case actions.FERMENTABLES_SUCCESS:
      return {
        ...state,
        fermentables: action.data.entities.fermentables,
      };
    case actions.HOPS_SUCCESS:
      return {
        ...state,
        hops: action.data.entities.hops,
      };
    case actions.YEASTS_SUCCESS:
      return {
        ...state,
        yeasts: action.data.entities.yeasts,
      };
    case actions.STYLES_SUCCESS:
      return {
        ...state,
        styles: action.data.entities.styles,
      };
    default:
      return state;
  }
};

export default data;
