import {
  SHOW_MODAL,
  HIDE_MODAL,
  LOAD_MODAL,
  RESET_MODAL,
  SEARCH_UPDATE,
  SELECT_ITEM,
  UPDATE_WEIGHT,
  ERROR_MODAL,
} from '../actions/modals';

const initialState = {
  modalOpen: false,
  searchTerm: '',
  selectedItem: '',
  itemWeight: '',
  searchTableHeaders: '',
  searchTableCells: '',
  searchKeys: '',
  modalLoaded: false,
  modalError: '',
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalName: action.name,
        modalLoaded: false,
      };
    case HIDE_MODAL:
      return initialState;
    case RESET_MODAL:
      return {
        ...state,
        searchTerm: '',
        selectedItem: '',
        itemWeight: '',
        modalError: '',
      };
    case LOAD_MODAL:
      return {
        ...state,
        searchTableHeaders: action.payload.searchTableHeaders,
        searchTableCells: action.payload.searchTableCells,
        searchKeys: action.payload.searchKeys,
        modalLoaded: true,
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
    case UPDATE_WEIGHT:
      return {
        ...state,
        itemWeight: action.weight,
      };
    case ERROR_MODAL:
      return {
        ...state,
        modalError: action.error,
        modalErrorField: action.field,
      };
    default:
      return state;
  }
};

export default modals;
