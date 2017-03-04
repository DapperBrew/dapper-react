import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import classNames from 'classnames';


// actions
import * as actions from '../../actions/auth';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      confirmFocus: false,
    };
  }

  componentWillMount() {
    this.setState({ confirmPassword: '' });
    this.props.dispatch(actions.updateSignupPassword(''));
  }

  onConfirmFocus = () => {
    this.setState({ confirmFocus: true });
  }

  handleSignup = (e) => {
    e.preventDefault();

    let isValid = true;
    // email validation
    if (!this.props.email) {
      this.setState({ emailError: 'Please enter an email address' });
      isValid = false;
    } else if (!isEmail(this.props.email)) {
      this.setState({ emailError: 'Email address is not valid' });
      isValid = false;
    } else {
      this.setState({ emailError: '' });
    }

    // password validation
    if (!this.props.password) {
      this.setState({ passwordError: 'Please enter a password' });
      isValid = false;
    } else {
      this.setState({ passwordError: '' });
    }

    // password confirmation validation
    if (!this.state.confirmPassword) {
      this.setState({ confirmPasswordError: 'Please enter a confirmation password' });
      isValid = false;
    } else {
      this.setState({ confirmPasswordError: '' });
    }

    // if everything is valid, dispatch signUpUser
    if (isValid) {
      this.props.dispatch(actions.signUpUser({
        email: this.props.email,
        password: this.props.password,
      }));
    }
  }

  handleEmailChange = (e) => {
    this.props.dispatch(actions.updateAuthEmail(e.target.value));
  }

  handlePasswordChange = (e) => {
    this.props.dispatch(actions.updateSignupPassword(e.target.value));
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  }

  checkPasswordEqual = () => {
    if (this.state.confirmPassword !== this.props.password) {
      this.setState({ confirmPasswordError: 'Passwords do not match' });
    } else {
      this.setState({ confirmPasswordError: '' });
    }
  }

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
    let passwordsEqual = false;
    let passwordsEqualMessage;
    // if password & confirm password are equal, set var to true
    if (this.state.confirmPassword === this.props.password) {
      passwordsEqual = true;
    }
    // set message below confirm password input
    if (
      !passwordsEqual
      && this.state.confirmPassword
      && this.state.confirmFocus
    ) {
      passwordsEqualMessage = 'Passwords do not match';
    } else if (this.state.confirmPassword && this.props.password && passwordsEqual) {
      passwordsEqualMessage = 'Passwords Match!';
    } else if (!this.state.confirmPassword) {
      passwordsEqualMessage = this.state.confirmPasswordError;
    }
    return (
      <div className="login-page">
        <div className="login">
          <h2 className="text-center">Sign up for Dapper</h2>
          <form className="login__form">
            <label htmlFor="login-email" className="login__label">Email Address</label>
            <input
              id="login-email"
              className={
                classNames(
                  'login__input',
                  { isError: this.state.emailError || this.props.errorMessage })
              }
              type="text"
              placeholder="you@domain.com"
              onChange={this.handleEmailChange}
              value={this.props.email}
            />
            <span className="login__inline-error">{this.state.emailError}</span>
            <label htmlFor="login-password" className="login__label">Password</label>
            <input
              id="login-password"
              className={
                classNames(
                  'login__input',
                  { isError: this.state.passwordError })
              }
              type="password"
              placeholder="password"
              value={this.props.password}
              onChange={this.handlePasswordChange}
            />
            <span className="login__inline-error">{this.state.passwordError}</span>
            <label htmlFor="login-confirm-password" className="login__label">Confirm Password</label>
            <input
              id="login-confirm-password"
              className={
                classNames(
                  'login__input',
                  { isError: this.state.passwordError })
              }
              type="password"
              placeholder="confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordChange}
              onFocus={this.onConfirmFocus}
            />
            <span
              className={
                classNames(
                  'login__inline-error',
                  'login__inline-error--password-match',
                  { isError: !passwordsEqual || !this.state.confirmPassword },
                )
              }
            >
              {passwordsEqualMessage}
            </span>
            <button
              className="button--block mt1 login__button"
              onClick={this.handleSignup(passwordsEqual)}
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

Signup.propTypes = {
  dispatch: React.PropTypes.func,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  email: state.auth.email,
  password: state.auth.signupPassword,
});

export default connect(mapStateToProps)(Signup);
