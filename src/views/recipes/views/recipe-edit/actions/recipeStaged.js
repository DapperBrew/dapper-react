import isInteger from 'lodash/isInteger';
import uniqueId from 'lodash/uniqueId';
import { hideModal, resetModal, ERROR_MODAL } from './modals';


// action types
export const ADD_FERMENTABLE_SUCCESS = 'ADD_FERMENTABLE_SUCCESS';
export const ADD_FERMENTABLE_ERROR = 'ADD_FERMENTABLE_ERROR';
export const REMOVE_FERMENTABLE = 'REMOVE_FERMENTABLE';


// action creators
export const addFermentable2 = (id, weight, reset) => (
  (dispatch) => {
    if (id && weight && isInteger(Number(weight))) {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        weight,
      });
      if (reset) {
        dispatch(resetModal());
      } else {
        dispatch(hideModal());
      }
    } else {
      dispatch({
        type: ADD_FERMENTABLE_ERROR,
      });
    }
  }
);

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
    } else if (isInteger(Number(weight)) === false) { // check if weight is number
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
