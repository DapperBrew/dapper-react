// import axios from 'axios';

// constants
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const SET_USER_ID = 'SET_USER_ID';

// actions
export const setUserId = id => ({
  type: SET_USER_ID,
  id,
});
