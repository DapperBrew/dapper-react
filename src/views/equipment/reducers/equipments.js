import { REHYDRATE } from 'redux-persist/constants';

// actions
import * as actions from '../actions/equipment';

const initialState = {};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.equipments; // eslint-disable-line
      if (incoming) return { ...state, ...incoming };
      return state;
    case actions.SAVE_EQUIPMENT_SUCCESS:
      return {
        ...state,
        [action.id]: action.equipmentProfile,
      };
    case actions.EQUIPMENT_LIST_SUCCESS:
      return {
        ...state,
        ...action.equipmentList.entities.equipments
      };
    default:
      return state;
  }
};

export default equipments;
