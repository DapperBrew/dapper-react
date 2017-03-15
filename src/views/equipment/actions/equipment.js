import axios from 'axios';

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

export const fetchEquipmentLIst = () => (
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
      .then(response => dispatch(receiveEquipmentList(response.data)))
      .catch((err) => {
        dispatch(errorEquipmentList(err));
        console.error(err);
      });
  }
);
