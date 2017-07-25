import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import isEmail from 'validator/lib/isEmail';

// actions
import * as actions from '../../actions/auth';


const inputField = (props) => {
  const { input, label, type, placeholder } = props;
  const { touched, error } = props.meta;
  return (
    <div>
      <label htmlFor={label} className="login__label">{label}</label>
      <input
        {...input}
        id={label}
        placeholder={placeholder}
        type={type}
        className={classNames(
          'login__input',
          // { isError: { error } },
        )}
      />
      <span className="login__inline-error">{touched && error ? error : ''}</span>
    </div>
  );
};


class Signup extends React.Component {

  componentWillMount() {
    const { initialize, dispatch } = this.props;
    dispatch(initialize({ email: this.props.loginEmail }));
    this.props.dispatch(actions.authError(''));
  }

  handleSignupSubmit = (formValues) => {
    this.props.dispatch(actions.signUpUser(formValues));
  }

  // Alert shown if error is received from server
  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className="login__error-box mt1">
          {this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="login-page">
        <div className="login">
          <h2 className="text-center">Sign up for Dapper</h2>
          <form onSubmit={handleSubmit(this.handleSignupSubmit)}>
            <Field
              required
              name="email"
              type="email"
              placeholder="you@domain.com"
              component={inputField}
              label="Email Address"
            />
            <Field
              required
              name="password"
              type="password"
              component={inputField}
              label="Password"
              placeholder="password"
            />
            <Field
              required
              name="passwordConfirm"
              type="password"
              component={inputField}
              label="Confirm Password"
              placeholder="password"
            />
            <button
              type="submit"
              disabled={submitting}
              className="button--block login__button"
            >
              Sign Up
            </button>
            {this.renderAlert()}
            <p className="login__message">Already have an account? <Link to="/login">Login.</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

// validation function. Checks everything here before submitting
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email address';
  }

  if (values.email && !isEmail(values.email)) {
    errors.email = 'Email address is not valid';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
};

inputField.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
};

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  loginEmail: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  loginEmail: state.auth.email,
});

const SignupForm = reduxForm({
  form: 'signupForm',
  validate,
})(Signup);

export default connect(mapStateToProps)(SignupForm);
