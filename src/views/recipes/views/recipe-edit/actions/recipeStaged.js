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
export const ADD_MISC_SUCCESS = 'ADD_MISC_SUCCESSS';
export const ADD_MISC_ERROR = 'ADD_MISC_ERROR';
export const REMOVE_MISC = 'REMOVE_MISC';
export const SET_RECIPE_NOTES = 'SET_RECIPE_NOTES';


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

export const setRecipeNotes = notes => ({
  type: SET_RECIPE_NOTES,
  notes,
});

export const addFermentable = (
  id,
  fermentableWeight,
  fermentableWeightUnit,
  fermentableColor,
  fermentablePotential,
  fermentableMaltster,
  reset,
) => (
  (dispatch, getState) => {
    const currentFermentable = getState().data.fermentables[id];
    if (!id) { // check if an item is selected
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (!fermentableWeight) { // check for weight input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a weight.',
        field: 'weight',
      });
    } else if (isFinite(Number(fermentableWeight)) === false) { // check if weight is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Weight must be a number',
        field: 'weight',
      });
    } else if (!fermentableColor) { // check for color input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a color (SRM).',
        field: 'color',
      });
    } else if (isFinite(Number(fermentableColor)) === false) { // check if color is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Color must be a number',
        field: 'color',
      });
    } else if (!fermentablePotential) { // check for fermentation potential input (ppg)
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a potential (ppg).',
        field: 'potential',
      });
    } else if (isFinite(Number(fermentablePotential)) === false) { // check if potential is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Potential (ppg) must be a number',
        field: 'Potential',
      });
    } else {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        id,
        key: uniqueId(),
        fermentableWeight,
        fermentableWeightUnit,
        fermentableColor,
        fermentablePotential,
        fermentableMaltster,
        fermentableType: currentFermentable.type,
        inMash: currentFermentable.inMash,
        afterBoil: currentFermentable.afterBoil,
      });
      if (reset) {
        // if reset is true, only reset the modal (don't close it)
        dispatch(resetModal());
      } else {
        dispatch(hideModal());
      }
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

export const addHop = (id, hopWeight, hopTime, hopStage, hopType, hopAlpha, reset) => (
  (dispatch) => {
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
    } else if (!hopAlpha) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a Alpha Acid %.',
        field: 'alpha',
      });
    } else if (isFinite(Number(hopAlpha)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Alpha Acid % must be a number',
        field: 'alpha',
      });
    } else {
      dispatch({
        type: ADD_HOP_SUCCESS,
        id,
        key: uniqueId(),
        hopWeight,
        hopTime,
        hopStage,
        hopType,
        hopAlpha,
      });
      if (reset) {
        // if reset is true, only reset the modal (don't close it)
        dispatch(resetModal());
      } else {
        dispatch(hideModal());
      }
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
  (dispatch, getState) => {
    if (!id) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else {
      const { attenuationMin, attenuationMax } = getState().data.yeasts[id];
      const yeastAvgAttenuation = ((attenuationMin + attenuationMax) / 2).toFixed(0);
      dispatch({
        type: ADD_YEAST_SUCCESS,
        id,
        averageAttenuation: yeastAvgAttenuation,
        key: uniqueId(),
      });
      if (reset) {
        // if reset is true, only reset the modal (don't close it)
        dispatch(resetModal());
      } else {
        dispatch(hideModal());
      }
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

export const addMisc = (
  id,
  miscAmount,
  miscAmountUnit,
  miscTime,
  miscTimeUnit,
  miscStage,
  reset,
) => (
  (dispatch) => {
    if (!id) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (!miscAmount) { // check for weight input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input an amount.',
        field: 'amount',
      });
    } else if (isFinite(Number(miscAmount)) === false) { // check if weight is number
      dispatch({
        type: ERROR_MODAL,
        error: 'Amount must be a number',
        field: 'amount',
      });
    } else if (!miscTime) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a time.',
        field: 'time',
      });
    } else if (isFinite(Number(miscTime)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Time must be a number',
        field: 'time',
      });
    } else {
      dispatch({
        type: ADD_MISC_SUCCESS,
        id,
        key: uniqueId(),
        miscAmount,
        miscAmountUnit,
        miscTime,
        miscTimeUnit,
        miscStage,
      });
      if (reset) {
        // if reset is true, only reset the modal (don't close it)
        dispatch(resetModal());
      } else {
        dispatch(hideModal());
      }
    }
  }
);

export const removeMisc = key => (
  dispatch => (
    dispatch({
      type: REMOVE_MISC,
      key,
    })
  )
);
