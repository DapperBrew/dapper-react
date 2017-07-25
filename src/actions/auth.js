import axios from 'axios';
import history from '../history';

// other actions
import { setUserId, clearUser } from './user';
import { clearRecipes } from '../views/recipes/actions/recipes';
import { clearFlags } from './flags';

// action constants
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UNAUTHENTICATE_USER = 'UNAUTHENTICATE_USER';
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR';

export const UPDATE_AUTH_EMAIL = 'UPDATE_AUTH_EMAIL';
export const UPDATE_SIGNUP_PASSWORD = 'UPDATE_SIGNUP_PASSWORD';
export const UPDATE_LOGIN_PASSWORD = 'UPDATE_LOGIN_PASSWORD';


export const updateAuthEmail = email => ({
  type: UPDATE_AUTH_EMAIL,
  email,
});

export const updateSignupPassword = password => ({
  type: UPDATE_SIGNUP_PASSWORD,
  password,
});

export const updateLoginPassword = password => ({
  type: UPDATE_LOGIN_PASSWORD,
  password,
});

export const authError = error => ({
  type: AUTHENTICATE_ERROR,
  error,
});

export const authenticateUser = isAuth => ({
  type: AUTHENTICATE_USER,
  isAuth,
});

export const signInUser = ({ email, password }) => (
  (dispatch) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/sessions`,
      method: 'post',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        // add token to local storage
        localStorage.setItem('token', res.data.token);
        // dispatch action
        dispatch(authenticateUser(true));
        dispatch(setUserId(res.data.id));
        // redirect to application
        setTimeout(() => { history.push('/'); }, 50);
      })
      .catch(() => {
        dispatch(authError('The username or password you entered is incorrect'));
      });
  }
);

export const signUpUser = ({ email, password, passwordConfirm }) => (
  (dispatch) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/users`,
      method: 'post',
      data: {
        email,
        password,
        passwordConfirm,
      },
    })
    .then((res) => {
      // add token to local storage
      localStorage.setItem('token', res.data.token);
      // dispatch action
      dispatch(authenticateUser(true));
      dispatch(setUserId(res.data.id));
      // redirect to application
      setTimeout(() => { history.push('/'); }, 50);
      // history.push('/');
    })
    .catch((res) => {
      dispatch(authError(res.response.data.error));
    });
  }
);

export const signOutUser = () => (
  (dispatch) => {
    // remove token from localstorage
    localStorage.removeItem('token');
    // redirect to login screen
    history.push('/login');
    // dispatch action
    dispatch(authenticateUser());
    dispatch(clearUser());
    dispatch(clearRecipes());
    dispatch(clearFlags());
  }
);

export const confirmAuth = () => (
  (dispatch) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/sessions`,
      method: 'get',
      headers: { authorization: localStorage.getItem('token') },
    })
      .then((res) => {
        dispatch(authenticateUser(true));
        dispatch(setUserId(res.data.id));
      })
      .catch(() => {
        dispatch(authenticateUser(false));
        history.push('/login');
      });
  }
);
