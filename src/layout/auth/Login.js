import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import * as actions from '../../actions/auth';


class Login extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.updateLoginPassword(''));
    this.props.dispatch(actions.authError(''));
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.signInUser({
      email: this.props.email,
      password: this.props.password,
    }));
  }

  handleEmailChange = (e) => {
    this.props.dispatch(actions.updateAuthEmail(e.target.value));
  }

  handlePasswordChange = (e) => {
    this.props.dispatch(actions.updateLoginPassword(e.target.value));
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
    return (
      <div className="login-page">
        <div className="login">
          <h2 className="text-center">Welcome! Please log in.</h2>
          <form className="login__form mt1">
            <label htmlFor="login-email" className="login__label">Email Address</label>
            <input
              id="login-email"
              className="login__input"
              type="text"
              placeholder="you@domain.com"
              onChange={this.handleEmailChange}
              value={this.props.email}
            />
            <label htmlFor="login-password" className="login__label mt1">Password</label>
            <input
              id="login-password"
              className="login__input"
              type="password"
              placeholder="password"
              value={this.props.password}
              onChange={this.handlePasswordChange}
            />
            <button
              className="button--block mt1 login__button"
              onClick={this.handleLogin}
            >
              Login
            </button>
            {this.renderAlert()}
            <p className="login__message">Don&#39;t have an account? <Link to="/signup">Sign up.</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  email: state.auth.email,
  password: state.auth.loginPassword,
});

export default connect(mapStateToProps)(Login);
