import * as actions from '../actions/user';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_ID:
      return {
        ...state,
        id: action.id,
      };
    case actions.CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;
