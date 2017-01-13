import axios from 'axios';

// action constants

export const INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS';
export const INGREDIENTS_ERROR = 'INGREDIENTS_FAILURE';

export const FERMENTABLES_REQUEST = 'FERMENTABLES_REQUEST';
export const FERMENTABLES_SUCCESS = 'FERMENTABLES_SUCCESS';
export const FERMENTABLES_ERROR = 'FERMENTABLES_ERROR';

export const requestIngredients = () => ({
  type: INGREDIENTS_REQUEST,
});

export const receiveIngredients = () => ({
  type: INGREDIENTS_SUCCESS,
  data: 'test',
});

export const errorIngredients = error => ({
  type: INGREDIENTS_ERROR,
  data: error,
});


export const requestFermentables = fermentables => ({
  type: FERMENTABLES_REQUEST,
  data: fermentables,
});

export const receiveFermentables = ingredients => ({
  type: FERMENTABLES_SUCCESS,
  data: ingredients,
});

export const errorFermentables = error => ({
  type: FERMENTABLES_ERROR,
  data: error,
});

export const fetchFermentables = () => (
  (dispatch) => {
    dispatch(requestFermentables());
    axios({
      url: `${process.env.REACT_APP_API_URL}/fermentables`,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then((response) => {
        dispatch(receiveFermentables(response.data));
      })
      .catch((response) => {
        dispatch(errorFermentables(response.data));
      });
  }
);

export const fetchIngredients = () => (
  (dispatch) => {
    dispatch(requestIngredients());
    Promise.resolve()
      .then(() => {
        dispatch(fetchFermentables());
      })
      .then(() => {
        dispatch(receiveIngredients());
      })
      .catch((response) => {
        dispatch(errorIngredients(response.data));
      });
  }
);
