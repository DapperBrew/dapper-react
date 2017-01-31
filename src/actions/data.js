import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schemas';

// action constants

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const STYLES_REQUEST = 'STYLES_REQUEST';
export const STYLES_SUCCESS = 'STYLES_SUCCESS';
export const STYLES_ERROR = 'STYLES_ERROR';

export const FERMENTABLES_REQUEST = 'FERMENTABLES_REQUEST';
export const FERMENTABLES_SUCCESS = 'FERMENTABLES_SUCCESS';
export const FERMENTABLES_ERROR = 'FERMENTABLES_ERROR';

export const HOPS_REQUEST = 'HOPS_REQUEST';
export const HOPS_SUCCESS = 'HOPS_SUCCESS';
export const HOPS_ERROR = 'HOPS_ERROR';

export const YEASTS_REQUEST = 'YEASTS_REQUEST';
export const YEASTS_SUCCESS = 'YEASTS_SUCCESS';
export const YEASTS_ERROR = 'YEASTS_ERROR';


export const requestData = () => ({
  type: DATA_REQUEST,
});

export const receiveData = () => ({
  type: DATA_SUCCESS,
});

export const errorData = error => ({
  type: DATA_ERROR,
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

export const requestHops = hops => ({
  type: HOPS_REQUEST,
  data: hops,
});

export const receiveHops = hops => ({
  type: HOPS_SUCCESS,
  data: hops,
});

export const errorHops = error => ({
  type: HOPS_ERROR,
  data: error,
});

export const requestYeasts = yeasts => ({
  type: YEASTS_REQUEST,
  data: yeasts,
});

export const receiveYeasts = yeasts => ({
  type: YEASTS_SUCCESS,
  data: yeasts,
});

export const errorYeasts = error => ({
  type: YEASTS_ERROR,
  data: error,
});

export const requestStyles = styles => ({
  type: STYLES_REQUEST,
  data: styles,
});

export const receiveStyles = styles => ({
  type: STYLES_SUCCESS,
  data: styles,
});

export const errorStyles = styles => ({
  type: STYLES_ERROR,
  data: styles,
});


export const fetchStyles = () => (
  (dispatch) => {
    dispatch(requestStyles());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/styles`,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
    .then(response => normalize(response.data, schema.styleListSchema))
    .then(response => dispatch(receiveStyles(response)))
    .catch((response) => {
      dispatch(errorStyles(response.data));
      console.error(response);
    });
  }
);

const fetchFermentables = () => (
  (dispatch) => {
    dispatch(requestFermentables());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/fermentables`,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => normalize(response.data, schema.fermentableListSchema))
      .then(response => dispatch(receiveFermentables(response)))
      .catch((response) => {
        dispatch(errorFermentables(response.data));
        throw response;
      });
  }
);

const fetchHops = () => (
  (dispatch) => {
    dispatch(requestHops());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/hops`,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => normalize(response.data, schema.hopListSchema))
      .then(response => dispatch(receiveHops(response)))
      .catch((response) => {
        dispatch(errorHops(response.data));
        throw response;
      });
  }
);

const fetchYeasts = () => (
  (dispatch) => {
    dispatch(requestYeasts());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/yeasts`,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => normalize(response.data, schema.yeastListSchema))
      .then(response => dispatch(receiveYeasts(response)))
      .catch((response) => {
        dispatch(errorYeasts(response.data));
        throw response;
      });
  }
);

export const fetchData = () => (
  (dispatch) => {
    dispatch(requestData());
    Promise.resolve()
      .then(() => dispatch(fetchFermentables()))
      .then(() => dispatch(fetchHops()))
      .then(() => dispatch(fetchYeasts()))
      .then(() => dispatch(receiveData()))
      .catch((response) => {
        dispatch(errorData(response.data));
        console.error(response);
      });
  }
);
