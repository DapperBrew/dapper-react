import { hideModal } from './modals';


// action types
export const ADD_FERMENTABLE = 'ADD_FERMENTABLE';


// action creators
export const addFermentable = (id, weight) => (
  (dispatch) => {
    dispatch({
      type: ADD_FERMENTABLE,
      id,
      weight,
    });
    dispatch(hideModal());
  }
);
