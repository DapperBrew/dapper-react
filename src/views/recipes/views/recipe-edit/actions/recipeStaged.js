import uuid from 'uuid/v4';
import isFinite from 'lodash/isFinite';
import { hideModal, resetModal, ERROR_MODAL } from './modals';

// external actions

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
export const EDIT_FERMENTABLE_SUCCESS = 'EDIT_FERMENTABLE_SUCCESS';
export const REMOVE_FERMENTABLE = 'REMOVE_FERMENTABLE';
export const ADD_HOP_SUCCESS = 'ADD_HOP_SUCCESSS';
export const ADD_HOP_ERROR = 'ADD_HOP_ERROR';
export const EDIT_HOP_SUCCESS = 'EDIT_HOP_SUCCESS';
export const REMOVE_HOP = 'REMOVE_HOP';
export const ADD_YEAST_SUCCESS = 'ADD_YEAST_SUCCESSS';
export const ADD_YEAST_ERROR = 'ADD_YEAST_ERROR';
export const EDIT_YEAST_SUCCESS = 'EDIT_YEAST_SUCCESSS';
export const REMOVE_YEAST = 'REMOVE_YEAST';
export const ADD_MISC_SUCCESS = 'ADD_MISC_SUCCESSS';
export const EDIT_MISC_SUCCESS = 'EDIT_MISC_SUCCESSS';
export const ADD_MISC_ERROR = 'ADD_MISC_ERROR';
export const REMOVE_MISC = 'REMOVE_MISC';
export const SET_RECIPE_NOTES = 'SET_RECIPE_NOTES';
export const SET_MASH_TEMP = 'SET_MASH_TEMP';
export const RESET_STAGED = 'RESET_STAGED';
export const LOAD_STAGED = 'LOAD_STAGED';
export const SET_STAGED_MODE = 'SET_STAGED_MODE';

export const setStagedMode = stagedMode => ({
  type: SET_STAGED_MODE,
  stagedMode,
});

export const resetStaged = () => ({
  type: RESET_STAGED,
});

export const loadStaged = recipe => ({
  type: LOAD_STAGED,
  recipe,
});

export const setStyle = id => (
  (dispatch, getState) => {
    const style = getState().data.styles[id].name;
    dispatch({
      type: SET_STYLE,
      style,
      id,
    });
  }
);

export const setName = name => ({
  type: SET_NAME,
  name,
});

// export const setEquipmentProfile = profile => ({
//   type: SET_EQUIPMENT_PROFILE,
//   profile,
// });

export const setEquipmentProfile = id => (
  (dispatch, getState) => {
    const name = getState().equipments[id].name;
    dispatch({
      type: SET_EQUIPMENT_PROFILE,
      name,
      id,
    });
  }
);

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
    if (!id) { // check if an item is selected (and not custom)
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
        fermentableName: currentFermentable.name,
        key: uuid(),
        fermentableWeight,
        fermentableWeightUnit,
        fermentableColor,
        fermentablePotential,
        fermentableMaltster,
        fermentableType: currentFermentable.type,
        fermentableInMash: currentFermentable.inMash,
        fermentableAfterBoil: currentFermentable.afterBoil,
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

export const addCustomFermentable = (
  fermentableName,
  fermentableWeight,
  fermentableWeightUnit,
  fermentableColor,
  fermentablePotential,
  fermentableMaltster,
  fermentableType,
  fermentableInMash,
  fermentableAfterBoil,
) => (
  (dispatch) => {
    if (!fermentableName) { // check for name input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a name.',
        field: 'name',
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
    } else if (!fermentableType) { // check type is selected
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select a fermentable type',
        field: 'type',
      });
    } else {
      dispatch({
        type: ADD_FERMENTABLE_SUCCESS,
        key: uuid(),
        fermentableName,
        fermentableWeight,
        fermentableWeightUnit,
        fermentableColor,
        fermentablePotential,
        fermentableMaltster,
        fermentableType,
        fermentableInMash,
        fermentableAfterBoil,
      });
      dispatch(hideModal());
    }
  }
);

export const editFermentable = (
  itemIndex,
  fermentableName,
  fermentableWeight,
  fermentableWeightUnit,
  fermentableColor,
  fermentablePotential,
  fermentableMaltster,
  fermentableType,
  fermentableInMash,
  fermentableAfterBoil,
) => (
  (dispatch) => {
    if (!fermentableName) { // check for name
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
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
    } else if (!fermentableType) { // check if type is chosen
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select a fermentable type',
        field: 'type',
      });
    } else {
      dispatch({
        type: EDIT_FERMENTABLE_SUCCESS,
        itemIndex,
        key: uuid(),
        fermentableName,
        fermentableWeight,
        fermentableWeightUnit,
        fermentableColor,
        fermentablePotential,
        fermentableMaltster,
        fermentableType,
        fermentableInMash,
        fermentableAfterBoil,
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


export const addHop = (id, hopWeight, hopTime, hopStage, hopType, hopAlpha, reset) => (
  (dispatch, getState) => {
    const currentHops = getState().data.hops[id];
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
        key: uuid(),
        hopName: currentHops.name,
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

export const addCustomHop = (hopName, hopWeight, hopTime, hopStage, hopType, hopAlpha) => (
  (dispatch) => {
    if (!hopName) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
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
        key: uuid(),
        hopName,
        hopWeight,
        hopTime,
        hopStage,
        hopType,
        hopAlpha,
      });
      dispatch(hideModal());
    }
  }
);

export const editHop = (itemIndex, hopName, hopWeight, hopTime, hopStage, hopType, hopAlpha) => (
  (dispatch) => {
    if (!hopName) { // check for weight input
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
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
        type: EDIT_HOP_SUCCESS,
        itemIndex,
        key: uuid(),
        hopName,
        hopWeight,
        hopTime,
        hopStage,
        hopType,
        hopAlpha,
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

export const addYeast = (id, yeastAttenuation, yeastMinTemp, yeastMaxTemp, reset) => (
  (dispatch, getState) => {
    const currentYeast = getState().data.yeasts[id];
    if (!id) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please select an item.',
        field: 'select',
      });
    } else if (!yeastAttenuation) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input an attenuation %.',
        field: 'attenuation',
      });
    } else if (isFinite(Number(yeastAttenuation)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Attenuation must be a number',
        field: 'attenuation',
      });
    } else if (!yeastMinTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a minimum temperature',
        field: 'mintemp',
      });
    } else if (isFinite(Number(yeastMinTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Min temperature must be a number',
        field: 'mintemp',
      });
    } else if (!yeastMaxTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a maximum temperature',
        field: 'maxtemp',
      });
    } else if (isFinite(Number(yeastMaxTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Maximum temperature must be a number',
        field: 'maxtemp',
      });
    } else {
      dispatch({
        type: ADD_YEAST_SUCCESS,
        key: uuid(),
        yeastName: currentYeast.name,
        yeastSupplier: currentYeast.supplier,
        yeastSupplierId: currentYeast.supplierId,
        yeastAttenuation,
        yeastMinTemp,
        yeastMaxTemp,
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

export const addCustomYeast = (
  yeastName,
  yeastAttenuation,
  yeastMinTemp,
  yeastMaxTemp,
  yeastSupplier,
  yeastSupplierId,
) => (
  (dispatch) => {
    if (!yeastName) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
      });
    } else if (!yeastAttenuation) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input an attenuation %.',
        field: 'attenuation',
      });
    } else if (isFinite(Number(yeastAttenuation)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Attenuation must be a number',
        field: 'attenuation',
      });
    } else if (!yeastMinTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a minimum temperature',
        field: 'mintemp',
      });
    } else if (isFinite(Number(yeastMinTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Min temperature must be a number',
        field: 'mintemp',
      });
    } else if (!yeastMaxTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a maximum temperature',
        field: 'maxtemp',
      });
    } else if (isFinite(Number(yeastMaxTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Maximum temperature must be a number',
        field: 'maxtemp',
      });
    } else {
      dispatch({
        type: ADD_YEAST_SUCCESS,
        key: uuid(),
        yeastName,
        yeastSupplier,
        yeastSupplierId,
        yeastAttenuation,
        yeastMinTemp,
        yeastMaxTemp,
      });
      dispatch(hideModal());
    }
  }
);

export const editYeast = (
  itemIndex,
  yeastName,
  yeastAttenuation,
  yeastMinTemp,
  yeastMaxTemp,
  yeastSupplier,
  yeastSupplierId,
) => (
  (dispatch) => {
    if (!yeastAttenuation) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input an attenuation %.',
        field: 'attenuation',
      });
    } else if (isFinite(Number(yeastAttenuation)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Attenuation must be a number',
        field: 'attenuation',
      });
    } else if (!yeastMinTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a minimum temperature',
        field: 'mintemp',
      });
    } else if (isFinite(Number(yeastMinTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Min temperature must be a number',
        field: 'mintemp',
      });
    } else if (!yeastMaxTemp) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please input a maximum temperature',
        field: 'maxtemp',
      });
    } else if (isFinite(Number(yeastMaxTemp)) !== true) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Maximum temperature must be a number',
        field: 'maxtemp',
      });
    } else {
      dispatch({
        type: EDIT_YEAST_SUCCESS,
        key: uuid(),
        itemIndex,
        yeastName,
        yeastSupplier,
        yeastSupplierId,
        yeastAttenuation,
        yeastMinTemp,
        yeastMaxTemp,
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

export const addMisc = (
  id,
  miscAmount,
  miscAmountUnit,
  miscTime,
  miscTimeUnit,
  miscStage,
  reset,
) => (
  (dispatch, getState) => {
    const currentMisc = getState().data.miscs[id];
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
        key: uuid(),
        miscName: currentMisc.name,
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

export const addCustomMisc = (
  miscName,
  miscAmount,
  miscAmountUnit,
  miscTime,
  miscTimeUnit,
  miscStage,
) => (
  (dispatch) => {
    if (!miscName) {
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
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
        key: uuid(),
        miscName,
        miscAmount,
        miscAmountUnit,
        miscTime,
        miscTimeUnit,
        miscStage,
      });
      dispatch(hideModal());
    }
  }
);

export const editMisc = (
  itemIndex,
  miscName,
  miscAmount,
  miscAmountUnit,
  miscTime,
  miscTimeUnit,
  miscStage,
) => (
  (dispatch) => {
    if (!miscName) { // check for name
      dispatch({
        type: ERROR_MODAL,
        error: 'Please enter a name.',
        field: 'name',
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
        type: EDIT_MISC_SUCCESS,
        itemIndex,
        miscName,
        key: uuid(),
        miscAmount,
        miscAmountUnit,
        miscTime,
        miscTimeUnit,
        miscStage,
      });
      dispatch(hideModal());
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

export const setMashTemp = temp => (
  dispatch => (
    dispatch({
      type: SET_MASH_TEMP,
      temp,
    })
  )
);
