// action types
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const RESET_MODAL = 'RESET_MODAL';
export const ERROR_MODAL = 'ERROR_MODAL';
export const SEARCH_UPDATE = 'SEARCH_UPDATE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const UPDATE_FERMENTABLE_UNIT = 'UPDATE_UNIT';

export const UPDATE_HOP_WEIGHT = 'UPDATE_HOP_WEIGHT';
export const UPDATE_HOP_TIME = 'UPDATE_HOP_TIME';
export const UPDATE_HOP_STAGE = 'UPDATE_HOP_STAGE';
export const UPDATE_HOP_TYPE = 'UPDATE_HOP_TYPE';

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
    HEADER: ['Name', 'Type', 'Color'],
    CELL_ITEMS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'supplier', 'supplierId'],
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

export const updateWeight = weight => ({
  type: UPDATE_WEIGHT,
  weight,
});

export const updateFermentableUnit = unit => ({
  type: UPDATE_FERMENTABLE_UNIT,
  unit,
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
  type: 'UPDATE_HOP_TYPE',
  hopType,
});
