import * as actions from '../actions/modals';

const initialState = {
  modalOpen: false,
  searchTerm: '',
  selectedItem: '',
  itemWeight: '',
  fermentableUnit: 'lb',
  searchTableHeaders: '',
  searchTableCells: '',
  searchKeys: '',
  modalLoaded: false,
  modalError: '',
  hopStage: 'boil',
  hopTime: '',
  hopWeight: '',
  hopType: 'pellet',
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalName: action.name,
        modalLoaded: false,
      };
    case actions.HIDE_MODAL:
      return initialState;
    case actions.RESET_MODAL:
      return {
        ...state,
        searchTerm: '',
        selectedItem: '',
        itemWeight: '',
        modalError: '',
        modalErrorField: '',
        fermentableUnit: 'lb',
        hopStage: 'boil',
        hopTime: '',
        hopWeight: '',
        hopType: 'pellet',
      };
    case actions.LOAD_MODAL:
      return {
        ...state,
        searchTableHeaders: action.payload.searchTableHeaders,
        searchTableCells: action.payload.searchTableCells,
        searchKeys: action.payload.searchKeys,
        modalLoaded: true,
      };
    case actions.SEARCH_UPDATE:
      return {
        ...state,
        searchTerm: action.term,
      };
    case actions.SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.item,
      };
    case actions.UPDATE_WEIGHT:
      return {
        ...state,
        itemWeight: action.weight,
      };
    case actions.UPDATE_FERMENTABLE_UNIT:
      return {
        ...state,
        fermentableUnit: action.unit,
      };
    case actions.UPDATE_HOP_WEIGHT:
      return {
        ...state,
        hopWeight: action.weight,
      };
    case actions.UPDATE_HOP_TIME:
      return {
        ...state,
        hopTime: action.time,
      };
    case actions.UPDATE_HOP_STAGE:
      return {
        ...state,
        hopStage: action.stage,
      };
    case actions.UPDATE_HOP_TYPE:
      return {
        ...state,
        hopType: action.hopType,
      };
    case actions.ERROR_MODAL:
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
