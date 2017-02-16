// action types
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const RESET_MODAL = 'RESET_MODAL';
export const ERROR_MODAL = 'ERROR_MODAL';
export const SEARCH_UPDATE = 'SEARCH_UPDATE';
export const SELECT_ITEM = 'SELECT_ITEM';

export const UPDATE_FERMENTABLE_WEIGHT = 'UPDATE_FERMENTABLE_WEIGHT';
export const UPDATE_FERMENTABLE_WEIGHT_UNIT = 'UPDATE_FERMENTABLE_WEIGHT_UNIT';
export const UPDATE_FERMENTABLE_COLOR = 'UPDATE_FERMENTABLE_COLOR';
export const UPDATE_FERMENTABLE_POTENTIAL = 'UPDATE_FERMENTABLE_POTENTIAL';
export const UPDATE_FERMENTABLE_MALTSTER = 'UPDATE_FERMENTABLE_MALTSTER';

export const UPDATE_HOP_WEIGHT = 'UPDATE_HOP_WEIGHT';
export const UPDATE_HOP_TIME = 'UPDATE_HOP_TIME';
export const UPDATE_HOP_STAGE = 'UPDATE_HOP_STAGE';
export const UPDATE_HOP_TYPE = 'UPDATE_HOP_TYPE';
export const UPDATE_HOP_ALPHA = 'UPDATE_HOP_ALPHA';

export const UPDATE_MISC_AMOUNT = 'UPDATE_MISC_AMOUNT';
export const UPDATE_MISC_AMOUNT_UNIT = 'UPDATE_MISC_AMOUNT_UNIT';
export const UPDATE_MISC_TIME = 'UPDATE_MISC_TIME';
export const UPDATE_MISC_TIME_UNIT = 'UPDATE_MISC_TIME_UNIT';
export const UPDATE_MISC_STAGE = 'UPDATE_MISC_STAGE';

// other constants
export const modalInfo = {
  FERMENTABLE: {
    NAME: 'FERMENTABLE',
    SEARCH_TABLE_HEADER: ['Name', 'Type', 'Color'],
    SEARCH_TABLE_CELLS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'type'],
  },
  HOP: {
    NAME: 'HOP',
    SEARCH_TABLE_HEADER: ['Name', 'Type', 'Alphas'],
    SEARCH_TABLE_CELLS: ['name', 'type', 'alpha'],
    SEARCH_KEYS: ['name'],
  },
  YEAST: {
    NAME: 'YEAST',
    SEARCH_TABLE_HEADER: ['Name', 'ID', 'Supplier', 'Form'],
    SEARCH_TABLE_CELLS: ['name', 'supplierId', 'supplier', 'form'],
    SEARCH_KEYS: ['name', 'type'],
  },
  MISC: {
    NAME: 'MISC',
    SEARCH_TABLE_HEADER: ['Name', 'Type', 'Purpose'],
    SEARCH_TABLE_CELLS: ['name', 'type', 'useFor'],
    SEARCH_KEYS: ['name', 'type', 'stage', 'useFor'],
  },
};

// action creators
export const showModal = name => ({
  type: SHOW_MODAL,
  name,
});

export const hideModal = name => ({
  type: HIDE_MODAL,
  name,
});

export const resetModal = () => ({
  type: RESET_MODAL,
});

export const errorModal = (error, field) => ({
  type: ERROR_MODAL,
  error,
  field,
});

export const updateSearch = term => ({
  type: SEARCH_UPDATE,
  term,
});

export const selectItem = item => ({
  type: SELECT_ITEM,
  item,
});

// Fermentable modal actions
export const updateFermentableWeight = weight => ({
  type: UPDATE_FERMENTABLE_WEIGHT,
  weight,
});

export const updateFermentableWeightUnit = unit => ({
  type: UPDATE_FERMENTABLE_WEIGHT_UNIT,
  unit,
});

export const updateFermentableColor = srm => ({
  type: UPDATE_FERMENTABLE_COLOR,
  srm,
});

export const updateFermentablePotential = ppg => ({
  type: UPDATE_FERMENTABLE_POTENTIAL,
  ppg,
});

export const updateFermentableMaltster = maltster => ({
  type: UPDATE_FERMENTABLE_MALTSTER,
  maltster,
});

// Hop modal actions
export const updateHopWeight = weight => ({
  type: UPDATE_HOP_WEIGHT,
  weight,
});

export const updateHopTime = time => ({
  type: UPDATE_HOP_TIME,
  time,
});

export const updateHopStage = stage => ({
  type: UPDATE_HOP_STAGE,
  stage,
});

export const updateHopType = hopType => ({
  type: UPDATE_HOP_TYPE,
  hopType,
});

export const updateHopAlpha = hopAlpha => ({
  type: UPDATE_HOP_ALPHA,
  hopAlpha,
});

// Misc modal actions
export const updateMiscAmount = amount => ({
  type: UPDATE_MISC_AMOUNT,
  amount,
});

export const updateMiscAmountUnit = unit => ({
  type: UPDATE_MISC_AMOUNT_UNIT,
  unit,
});

export const updateMiscTime = time => ({
  type: UPDATE_MISC_TIME,
  time,
});

export const updateMiscTimeUnit = unit => ({
  type: UPDATE_MISC_TIME_UNIT,
  unit,
});

export const updateMiscStage = stage => ({
  type: UPDATE_MISC_STAGE,
  stage,
});
