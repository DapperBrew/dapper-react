import { REHYDRATE } from 'redux-persist/constants';
// import * as actions from '../actions/equipment';

const initialState = [];

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.equipments; // eslint-disable-line
      if (incoming) return [{ ...state, ...action.payload.equipments }];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default equipments;
