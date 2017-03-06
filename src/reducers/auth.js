import * as actions from '../actions/auth';

const initialState = {
  authenticated: false,
  error: '',
  email: '',
  loginPassword: '',
  signupPassword: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_AUTH_EMAIL :
      return {
        ...state,
        email: action.email,
      };
    case actions.UPDATE_LOGIN_PASSWORD :
      return {
        ...state,
        loginPassword: action.password,
      };
    case actions.UPDATE_SIGNUP_PASSWORD :
      return {
        ...state,
        signupPassword: action.password,
      };
    case actions.AUTHENTICATE_USER :
      return {
        ...state,
        authenticated: action.isAuth,
        error: '',
        email: '',
        loginPassword: '',
        signupPassword: '',
      };
    case actions.UNAUTHENTICATE_USER :
      return {
        ...state,
        authenticated: false,
      };
    case actions.AUTHENTICATE_ERROR :
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
