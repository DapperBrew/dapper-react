import { normalize } from 'normalizr';
import { hideModal } from './modals';
import { recipeFermentableListSchema } from '../../../../../actions/schemas';


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
