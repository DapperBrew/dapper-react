import * as actions from '../actions/modals';

const initialState = {
  searchTerm: '',
  selectedItem: '',
  itemIndex: '',
  fermentableWeight: '',
  fermentableWeightUnit: 'lb',
  fermentableColor: '',
  fermentablePotential: '',
  fermentableMaltster: '',
  fermentableName: '',
  fermentableType: '',
  fermentableInMash: '',
  fermentableAfterBoil: '',
  searchTableHeaders: '',
  searchTableCells: '',
  searchKeys: '',
  modalError: '',
  hopStage: 'boil',
  hopTime: '',
  hopWeight: '',
  hopType: 'pellet',
  hopAlpha: '',
  hopName: '',
  yeastAttenuation: '',
  yeastMinTemp: '',
  yeastMaxTemp: '',
  yeastName: '',
  yeastSupplier: '',
  yeastSupplierId: '',
  miscAmount: '',
  miscAmountUnit: 'oz',
  miscTime: '',
  miscTimeUnit: 'min',
  miscStage: 'boil',
  miscName: '',
  modalIsEdit: false,
  modalIsCustom: false,
  modalKey: '',
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
    case actions.SHOW_EDIT_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalName: action.name,
        modalKey: action.key,
        modalIsEdit: true,
        modalLoaded: false,
      };
    case actions.SHOW_CUSTOM_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalName: action.name,
        modalIsCustom: true,
        modalLoaded: false,
      };
    case actions.HIDE_MODAL:
      return initialState;
    case actions.RESET_MODAL:
      return {
        ...state,
        ...initialState,
      };
    // case actions.LOAD_MODAL:
    //   return {
    //     ...state,
    //     searchTableHeaders: action.payload.searchTableHeaders,
    //     searchTableCells: action.payload.searchTableCells,
    //     searchKeys: action.payload.searchKeys,
    //     modalLoaded: true,
    //   };
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
    case actions.UPDATE_ITEM_INDEX:
      return {
        ...state,
        itemIndex: action.index,
      };
    case actions.UPDATE_FERMENTABLE_WEIGHT:
      return {
        ...state,
        fermentableWeight: action.weight,
      };
    case actions.UPDATE_FERMENTABLE_WEIGHT_UNIT:
      return {
        ...state,
        fermentableWeightUnit: action.unit,
      };
    case actions.UPDATE_FERMENTABLE_COLOR:
      return {
        ...state,
        fermentableColor: action.srm,
      };
    case actions.UPDATE_FERMENTABLE_POTENTIAL:
      return {
        ...state,
        fermentablePotential: action.ppg,
      };
    case actions.UPDATE_FERMENTABLE_MALTSTER:
      return {
        ...state,
        fermentableMaltster: action.maltster,
      };
    case actions.UPDATE_FERMENTABLE_NAME:
      return {
        ...state,
        fermentableName: action.name,
      };
    case actions.UPDATE_FERMENTABLE_TYPE:
      return {
        ...state,
        fermentableType: action.fType,
      };
    case actions.UPDATE_FERMENTABLE_IN_MASH:
      return {
        ...state,
        fermentableInMash: action.inMash,
      };
    case actions.UPDATE_FERMENTABLE_AFTER_BOIL:
      return {
        ...state,
        fermentableAfterBoil: action.afterBoil,
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
    case actions.UPDATE_HOP_ALPHA:
      return {
        ...state,
        hopAlpha: action.alpha,
      };
    case actions.UPDATE_HOP_NAME:
      return {
        ...state,
        hopName: action.name,
      };
    case actions.UPDATE_YEAST_ATTENUATION:
      return {
        ...state,
        yeastAttenuation: action.attenuation,
      };
    case actions.UPDATE_YEAST_MIN_TEMP:
      return {
        ...state,
        yeastMinTemp: action.temp,
      };
    case actions.UPDATE_YEAST_MAX_TEMP:
      return {
        ...state,
        yeastMaxTemp: action.temp,
      };
    case actions.UPDATE_YEAST_NAME:
      return {
        ...state,
        yeastName: action.name,
      };
    case actions.UPDATE_YEAST_SUPPLIER:
      return {
        ...state,
        yeastSupplier: action.supplier,
      };
    case actions.UPDATE_YEAST_SUPPLIER_ID:
      return {
        ...state,
        yeastSupplierId: action.id,
      };
    case actions.UPDATE_MISC_AMOUNT:
      return {
        ...state,
        miscAmount: action.amount,
      };
    case actions.UPDATE_MISC_AMOUNT_UNIT:
      return {
        ...state,
        miscAmountUnit: action.unit,
      };
    case actions.UPDATE_MISC_TIME:
      return {
        ...state,
        miscTime: action.time,
      };
    case actions.UPDATE_MISC_TIME_UNIT:
      return {
        ...state,
        miscTimeUnit: action.unit,
      };
    case actions.UPDATE_MISC_STAGE:
      return {
        ...state,
        miscStage: action.stage,
      };
    case actions.UPDATE_MISC_NAME:
      return {
        ...state,
        miscName: action.name,
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
