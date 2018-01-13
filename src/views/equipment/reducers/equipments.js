// actions
import * as actions from '../actions/equipment';

const initialState = {};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_EQUIPMENT_SUCCESS:
      return {
        ...state,
        [action.id]: action.equipmentProfile,
      };
    case actions.EQUIPMENT_LIST_SUCCESS:
      return {
        ...action.equipmentList.entities.equipments,
      };
    case actions.EDIT_EQUIPMENT_SUCCESS:
      return {
        ...state,
        [action.itemIndex]: action.equipment,
      };
    case actions.EQ_CLEAR_EQUIPMENT:
      return initialState;
    default:
      return state;
  }
};

export default equipments;
