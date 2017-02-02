import uniqueId from 'lodash/uniqueId';
import isFinite from 'lodash/isFinite';
import { hideModal, resetModal, ERROR_MODAL } from './modals';


// action types
export const SET_STYLE = 'SET_STYLE';
export const SET_NAME = 'SET_NAME';
export const SET_EQUIPMENT_PROFILE = 'SET_EQUIPMENT_PROFILE';
export const SET_EFFICIENCY = 'SET_EFFICIENCY';
export const SET_EFFICIENCY_TYPE = 'SET_EFFICIENCY_TYPE';
export const SET_BOIL_TIME = 'SET_BOIL_TIME';
export const SET_BOIL_VOLUME = 'SET_BOIL_VOLUME';
export const SET_BATCH_VOLUME = 'SET_BATCH_VOLUME';
export const SET_POST_BOIL_VOLUME = 'SET_POST_BOIL_VOLUME';
export const SET_RECIPE_TYPE = 'SET_RECIPE_TYPE';
export const ADD_FERMENTABLE_SUCCESS = 'ADD_FERMENTABLE_SUCCESS';
export const ADD_FERMENTABLE_ERROR = 'ADD_FERMENTABLE_ERROR';
export const REMOVE_FERMENTABLE = 'REMOVE_FERMENTABLE';
export const ADD_HOP_SUCCESS = 'ADD_HOP_SUCCESSS';
export const ADD_HOP_ERROR = 'ADD_HOP_ERROR';
export const REMOVE_HOP = 'REMOVE_HOP';
export const ADD_YEAST_SUCCESS = 'ADD_YEAST_SUCCESSS';
export const ADD_YEAST_ERROR = 'ADD_YEAST_ERROR';
export const REMOVE_YEAST = 'REMOVE_YEAST';


export const setStyle = style => ({
  type: SET_STYLE,
  style,
});

export const setName = name => ({
  type: SET_NAME,
  name,
});

export const setEquipmentProfile = profile => ({
  type: SET_EQUIPMENT_PROFILE,
  profile,
});

export const setEfficiency = eff => ({
  type: SET_EFFICIENCY,
  eff,
});

export const setEfficiencyType = eff => ({
  type: SET_EFFICIENCY_TYPE,
  eff,
});

export const setBoilTime = time => ({
  type: SET_BOIL_TIME,
  time,
});

export const setBoilVolume = volume => ({
  type: SET_BOIL_VOLUME,
  volume,
});

export const setBatchVolume = volume => ({
  type: SET_BATCH_VOLUME,
  volume,
});

export const setPostBoilVolume = volume => ({
  type: SET_POST_BOIL_VOLUME,
  volume,
});

export const setRecipeType = recipeType => ({
  type: SET_RECIPE_TYPE,
  recipeType,
});

export const addFermentable = (id, weight, unit, reset) => (
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
        unit,
      });
      dispatch(resetModal());
    } else {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        weight,
        unit,
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

export const addHop = (id, hopWeight, hopTime, hopStage, hopType, reset) => (
  (dispatch, getState) => {
    if (!id) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (!hopWeight) { // check for weight input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a weight.',
        field: 'weight',
      });
    } else if (isFinite(Number(hopWeight)) === false) { // check if weight is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Weight must be a number',
        field: 'weight',
      });
    } else if (!hopTime) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a time.',
        field: 'time',
      });
    } else if (isFinite(Number(hopTime)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Time must be a number',
        field: 'time',
      });
    } else if (reset === true) { // if there is a reset flag
      const currentHop = getState().data.hops[id];
      const hopAA = (currentHop.alphaAcidMax + currentHop.alphaAcidMin) / 2;
      dispatch({
        type: ADD_HOP_SUCCESS,
        id,
        key: uniqueId(),
        hopWeight,
        hopTime,
        hopStage,
        hopType,
        hopAA,
      });
      dispatch(resetModal());
    } else {
      const currentHop = getState().data.hops[id];
      const hopAA = ((currentHop.alphaAcidMax + currentHop.alphaAcidMin) / 2).toFixed(1);
      dispatch({
        type: ADD_HOP_SUCCESS,
        id,
        key: uniqueId(),
        hopWeight,
        hopTime,
        hopStage,
        hopType,
        hopAA,
      });
      dispatch(hideModal());
    }
  }
);

export const removeHop = key => (
  dispatch => (
    dispatch({
      type: REMOVE_HOP,
      key,
    })
  )
);

export const addYeast = (id, reset) => (
  (dispatch) => {
    if (!id) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (reset === true) { // if there is a reset flag
      dispatch({
        type: ADD_YEAST_SUCCESS,
        id,
        key: uniqueId(),
      });
      dispatch(resetModal());
    } else {
      dispatch({
        type: ADD_YEAST_SUCCESS,
        id,
        key: uniqueId(),
      });
      dispatch(hideModal());
    }
  }
);

export const removeYeast = key => (
  dispatch => (
    dispatch({
      type: REMOVE_YEAST,
      key,
    })
  )
);
