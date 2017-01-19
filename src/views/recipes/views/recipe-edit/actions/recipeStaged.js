import uniqueId from 'lodash/uniqueId';
import isFinite from 'lodash/isFinite';
import { hideModal, resetModal, ERROR_MODAL } from './modals';


// action types
export const SET_STYLE = 'SET_STYLE';
export const SET_NAME = 'SET_NAME';
export const SET_EFFICIENCY = 'SET_EFFICIENCY';
export const SET_BOIL_TIME = 'SET_BOIL_TIME';
export const SET_BATCH_SIZE = 'SET_BATCH_SIZE';
export const SET_RECIPE_TYPE = 'SET_RECIPE_TYPE';
export const ADD_FERMENTABLE_SUCCESS = 'ADD_FERMENTABLE_SUCCESS';
export const ADD_FERMENTABLE_ERROR = 'ADD_FERMENTABLE_ERROR';
export const REMOVE_FERMENTABLE = 'REMOVE_FERMENTABLE';


export const setStyle = style => ({
  type: SET_STYLE,
  style,
});

export const setName = name => ({
  type: SET_NAME,
  name,
});

export const setEfficiency = eff => ({
  type: SET_EFFICIENCY,
  eff,
});

export const setBoilTime = time => ({
  type: SET_BOIL_TIME,
  time,
});

export const setBatchSize = size => ({
  type: SET_BATCH_SIZE,
  size,
});

export const setRecipeType = recipeType => ({
  type: SET_RECIPE_TYPE,
  recipeType,
});

export const addFermentable = (id, weight, reset) => (
  (dispatch) => {
    if (!id) { // check if an item is selected
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (!weight) { // check for weight input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a weight.',
        field: 'weight',
      });
    } else if (isFinite(Number(weight)) === false) { // check if weight is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Weight must be a number',
        field: 'weight',
      });
    } else if (reset === true) { // if there is a reset flag
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        weight,
      });
      dispatch(resetModal());
    } else {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        weight,
      });
      dispatch(hideModal());
    }
  }
);

export const removeFermentable = key => (
  dispatch => (
    dispatch({
      type: REMOVE_FERMENTABLE,
      key,
    })
  )
);
