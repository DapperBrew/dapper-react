import axios from 'axios';
import history from '../history';

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

export const signInUser = ({ email, password }) => (
  (dispatch) => {
    axios({
      // url: `${process.env.REACT_APP_API_URL}/fermentables`,
      url: 'http://localhost:8080/sessions',
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
        dispatch({ type: AUTHENTICATE_USER });
        // redirect to application
        history.push('/');
      })
      .catch(() => {
        dispatch(authError('The username or password you entered is incorrect'));
      });
  }
);

export const signUpUser = ({ email, password }) => (
  (dispatch) => {
    axios({
      url: 'http://localhost:8080/users',
      method: 'post',
      responseType: 'json',
      data: {
        email,
        password,
      },
    })
    .then((res) => {
      // add token to local storage
      localStorage.setItem('token', res.data.token);
      // dispatch action
      dispatch({ type: AUTHENTICATE_USER });
      // redirect to application
      history.push('/');
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
    dispatch({ type: UNAUTHENTICATE_USER });
  }
);
