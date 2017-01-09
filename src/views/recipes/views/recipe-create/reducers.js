import { combineReducers } from 'redux';
import {
  SHOW_MODAL,
  HIDE_MODAL,
  LOAD_MODAL,
  SEARCH_UPDATE,
  SELECT_ITEM,
  ADD_FERMENTABLE,
} from './actions';

const initialState = {
  modalOpen: false,
  searchTerm: '',
  selectedItem: '',
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalName: action.name,
      };
    case HIDE_MODAL:
      return initialState;
    case LOAD_MODAL:
      return {
        ...state,
        searchTableHeaders: action.payload.searchTableHeaders,
        searchTableCells: action.payload.searchTableCells,
        searchKeys: action.payload.searchKeys,
      };
    case SEARCH_UPDATE:
      return {
        ...state,
        searchTerm: action.term,
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.item,
      };
    default:
      return state;
  }
};

const initialNewRecipe = {
  fermentables: [],
};

const newRecipe = (state = initialNewRecipe, action) => {
  switch (action.type) {
    case ADD_FERMENTABLE:
      return {
        ...state,
        fermentable: {
          ...state.fermentable,
          [action.id]: {
            weight: action.weight,
          },
        },
      };
    default:
      return state;
  }
};

const recipeCreate = combineReducers({
  modals,
  newRecipe,
});


export default recipeCreate;
