import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schemas';
import history from '../../../history';

// constants
export const SAVE_EQUIPMENT_REQUEST = 'SAVE_EQUIPMENT_REQUEST';
export const SAVE_EQUIPMENT_SUCCESS = 'SAVE_EQUIPMENT_SUCCESS';
export const SAVE_EQUIPMENT_ERROR = 'SAVE_EQUIPMENT_ERROR';

export const EQUIPMENT_LIST_REQUEST = 'EQUIPMENT_LIST_REQUEST';
export const EQUIPMENT_LIST_SUCCESS = 'EQUIPMENT_LIST_SUCCESS';
export const EQUIPMENT_LIST_ERROR = 'EQUIPMENT_LIST_ERROR';

export const EQUIPMENT_PROFILE_REQUEST = 'EQUIPMENT_PROFILE_REQUEST';
export const EQUIPMENT_PROFILE_SUCCESS = 'EQUIPMENT_PROFILE_SUCCESS';
export const EQUIPMENT_PROFILE_ERROR = 'EQUIPMENT_PROFILE_ERROR';

export const EDIT_EQUIPMENT_REQUEST = 'EDIT_EQUIPMENT_REQUEST';
export const EDIT_EQUIPMENT_SUCCESS = 'EDIT_EQUIPMENT_SUCCESS';
export const EDIT_EQUIPMENT_ERROR = 'EDIT_EQUIPMENT_ERROR';

export const RESET_EQUIPMENT_PROFILE = 'RESET_EQUIPMENT_PROFILE';

export const EQ_SET_NAME = 'EQ_SET_NAME';
export const EQ_SET_RECIPE_TYPE = 'EQ_SET_RECIPE_TYPE';
export const EQ_SET_EFFICIENCY = 'EQ_SET_EFFICIENCY';
export const EQ_SET_BATCH_SIZE = 'EQ_SET_BATCH_SIZE';
export const EQ_SET_MASH_TUN_VOLUME = 'EQ_SET_MASH_TUN_VOLUME';
export const EQ_SET_MASH_TUN_WEIGHT = 'EQ_SET_MASH_TUN_WEIGHT';
export const EQ_SET_MASH_TUN_MATERIAL = 'EQ_SET_MASH_TUN_MATERIAL';
export const EQ_SET_MASH_TUN_DEADSPACE = 'EQ_SET_MASH_TUN_DEADSPACE';
export const EQ_SET_MASH_THICKNESS = 'EQ_SET_MASH_THICKNESS';
export const EQ_SET_LAUTER_TUN_DEADSPACE = 'EQ_SET_LAUTER_TUN_DEADSPACE';
export const EQ_SET_MASH_TEMP_ADJUST = 'EQ_SET_MASH_TEMP_ADJUST';
export const EQ_SET_BOIL_TIME = 'EQ_SET_BOIL_TIME';
export const EQ_SET_BOIL_OFF = 'EQ_SET_BOIL_OFF';
export const EQ_SET_BOIL_TOP_UP = 'EQ_SET_BOIL_TOP_UP';
export const EQ_SET_TRUB_LOSS = 'EQ_SET_TRUB_LOSS';
export const EQ_SET_FERMENTER_LOSS = 'EQ_SET_FERMENTER_LOSS';
export const EQ_SET_FERMENTER_TOP_UP = 'EQ_SET_FERMENTER_TOP_UP';
export const EQ_SET_SPECIFIC_HEAT = 'EQ_SET_SPECIFIC_HEAT';
export const EQ_SET_BOIL_TEMP = 'EQ_SET_BOIL_TEMP';
export const EQ_SET_WORT_SHRINKAGE = 'EQ_SET_WORT_SHRINKAGE';
export const EQ_SET_GRAIN_VOLUME = 'EQ_SET_GRAIN_VOLUME';
export const EQ_SET_GRAIN_ABSORPTION = 'EQ_SET_GRAIN_ABSORPTION';
export const EQ_SET_ENABLE_ADVANCED = 'EQ_SET_ENABLE_ADVANCED';

export const EQ_SET_STAGED_MODE = 'EQ_SET_STAGED_MODE';
export const EQ_LOAD_STAGED = 'EQ_LOAD_STAGED';
export const EQ_CLEAR_EQUIPMENT = 'EQ_CLEAR_EQUIPMENT';

export const clearEqEquipment = () => ({
  type: EQ_CLEAR_EQUIPMENT,
});

export const setEqStagedMode = stagedMode => ({
  type: EQ_SET_STAGED_MODE,
  stagedMode,
});

export const loadEqStaged = equipment => ({
  type: EQ_LOAD_STAGED,
  equipment,
});

// ACTIONS (INPUTS)
export const setEqName = name => ({
  type: EQ_SET_NAME,
  name,
});

export const setEqType = recipeType => ({
  type: EQ_SET_RECIPE_TYPE,
  recipeType,
});

export const setEqEfficiency = efficiency => ({
  type: EQ_SET_EFFICIENCY,
  efficiency,
});

export const setEqBatchSize = size => ({
  type: EQ_SET_BATCH_SIZE,
  size,
});

export const setEqMashTunVolume = volume => ({
  type: EQ_SET_MASH_TUN_VOLUME,
  volume,
});

export const setEqMashTunWeight = weight => ({
  type: EQ_SET_MASH_TUN_WEIGHT,
  weight,
});

export const setEqMashTunMaterial = material => ({
  type: EQ_SET_MASH_TUN_MATERIAL,
  material,
});

export const setEqMashTunDeadspace = deadspace => ({
  type: EQ_SET_MASH_TUN_DEADSPACE,
  deadspace,
});

export const setEqMashThickness = thickness => ({
  type: EQ_SET_MASH_THICKNESS,
  thickness,
});

export const setEqLauterTunDeadspace = deadspace => ({
  type: EQ_SET_LAUTER_TUN_DEADSPACE,
  deadspace,
});

export const setEqMashTempAdjust = adjust => ({
  type: EQ_SET_MASH_TEMP_ADJUST,
  adjust,
});

export const setEqBoilTime = time => ({
  type: EQ_SET_BOIL_TIME,
  time,
});

export const setEqBoilOff = boilOff => ({
  type: EQ_SET_BOIL_OFF,
  boilOff,
});

export const setEqBoilTopUp = topUp => ({
  type: EQ_SET_BOIL_TOP_UP,
  topUp,
});

export const setEqTrubLoss = loss => ({
  type: EQ_SET_TRUB_LOSS,
  loss,
});

export const setEqFermenterLoss = loss => ({
  type: EQ_SET_FERMENTER_LOSS,
  loss,
});

export const setEqFermenterTopUp = topUp => ({
  type: EQ_SET_FERMENTER_TOP_UP,
  topUp,
});

export const setEqSpecificHeat = specificHeat => ({
  type: EQ_SET_SPECIFIC_HEAT,
  specificHeat,
});

export const setEqBoilTemp = temp => ({
  type: EQ_SET_BOIL_TEMP,
  temp,
});

export const setEqWortShrinkage = shrinkage => ({
  type: EQ_SET_WORT_SHRINKAGE,
  shrinkage,
});

export const setEqGrainVolume = volume => ({
  type: EQ_SET_GRAIN_VOLUME,
  volume,
});

export const setEqGrainAbsorption = absorption => ({
  type: EQ_SET_GRAIN_ABSORPTION,
  absorption,
});

export const setEqEnableAdvanced = enable => ({
  type: EQ_SET_ENABLE_ADVANCED,
  enable,
});


// SAVING AND RETRIEVING

export const resetEquipmentProfile = () => ({
  type: RESET_EQUIPMENT_PROFILE,
});

export const requestEquipmentList = () => ({
  type: EQUIPMENT_LIST_REQUEST,
});

export const receiveEquipmentList = equipmentList => ({
  type: EQUIPMENT_LIST_SUCCESS,
  equipmentList,
});

export const errorEquipmentList = error => ({
  type: EQUIPMENT_LIST_ERROR,
  error,
});

export const fetchEquipmentList = () => (
  (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(requestEquipmentList());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/users/${userId}/equipments`,
      headers: { authorization: localStorage.getItem('token') },
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => normalize(response.data, schema.equipmentListSchema))
      .then(response => dispatch(receiveEquipmentList(response)))
      .catch((err) => {
        dispatch(errorEquipmentList(err));
        console.error(err);
      });
  }
);

export const saveEquipmentProfileRequest = () => ({
  type: SAVE_EQUIPMENT_REQUEST,
});

export const saveEquipmentProfileSuccess = (equipmentProfile, id) => ({
  type: SAVE_EQUIPMENT_SUCCESS,
  equipmentProfile,
  id,
});

export const saveEquipmentProfileError = error => ({
  type: SAVE_EQUIPMENT_ERROR,
  error,
});


export const saveEquipmentProfile = equipmentProfile => (
  (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(saveEquipmentProfileRequest());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/users/${userId}/equipments`,
      headers: { authorization: localStorage.getItem('token') },
      method: 'post',
      data: {
        ...equipmentProfile,
        userId,
      },
    })
      .then((res) => {
        dispatch(saveEquipmentProfileSuccess(res.data.equipmentProfile, res.data.id));
        dispatch(resetEquipmentProfile());
        history.push(('/equipment'));
      })
      .catch((err) => {
        dispatch(saveEquipmentProfileError(err.data));
        throw err;
      });
  }
);

export const requestEditEquipment = () => ({
  type: EDIT_EQUIPMENT_REQUEST,
});

export const successEditEquipment = (equipment, itemIndex) => ({
  type: EDIT_EQUIPMENT_SUCCESS,
  equipment,
  itemIndex,
});

export const errorEditEquipment = error => ({
  type: EDIT_EQUIPMENT_ERROR,
  error,
});

export const editEquipmentProfile = (equipmentId, equipment, itemIndex) => (
  (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(requestEditEquipment());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/users/${userId}/equipments/${equipmentId}`,
      headers: { authorization: localStorage.getItem('token') },
      timeout: 20000,
      method: 'put',
      data: {
        equipmentId,
        equipment,
      },
    })
      .then(() => {
        dispatch(successEditEquipment(equipment, itemIndex));
        dispatch(resetEquipmentProfile());
        history.push(('/equipment'));
      })
      .catch((err) => {
        dispatch(errorEditEquipment(err));
      });
  }
);
