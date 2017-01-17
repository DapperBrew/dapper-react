import isInteger from 'lodash/isInteger';
import uniqueId from 'lodash/uniqueId';
import { hideModal } from './modals';


// action types
export const ADD_FERMENTABLE_SUCCESS = 'ADD_FERMENTABLE_SUCCESS';
export const ADD_FERMENTABLE_ERROR = 'ADD_FERMENTABLE_ERROR';
export const REMOVE_FERMENTABLE = 'REMOVE_FERMENTABLE';


// action creators
export const addFermentable = (id, weight) => (
  (dispatch) => {
    if (id && weight && isInteger(Number(weight))) {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        weight,
      });
      dispatch(hideModal());
    } else {
      dispatch({
        type: ADD_FERMENTABLE_ERROR,
      });
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
