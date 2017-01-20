// action types
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const LOAD_MODAL = 'LOAD_MODAL';
export const RESET_MODAL = 'RESET_MODAL';
export const ERROR_MODAL = 'ERROR_MODAL';
export const SEARCH_UPDATE = 'SEARCH_UPDATE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const UPDATE_FERMENTABLE_UNIT = 'UPDATE_UNIT';

// other constants
export const modalInfo = {
  FERMENTABLE: {
    NAME: 'FERMENTABLE',
    SEARCH_TABLE_HEADER: ['Name', 'Type', 'Color'],
    SEARCH_TABLE_CELLS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'type'],
  },
  HOP: {
    HEADER: ['Name', 'Type', 'Color'],
    CELL_ITEMS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'type'],
  },
  MISC: {
    HEADER: ['Name', 'Type', 'Color'],
    CELL_ITEMS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'type'],
  },
  YEAST: {
    HEADER: ['Name', 'Type', 'Color'],
    CELL_ITEMS: ['name', 'type', 'srm'],
    SEARCH_KEYS: ['name', 'type'],
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

export const loadModal = (searchTableHeaders, searchTableCells, searchKeys) => ({
  type: LOAD_MODAL,
  payload: {
    searchTableHeaders,
    searchTableCells,
    searchKeys,
  },
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
