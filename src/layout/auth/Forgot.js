import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import * as actions from '../../actions/auth';


class Forgot extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.authError(''));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.forgotPassword({
      email: this.props.email,
    }));
  }

  handleEmailChange = (e) => {
    this.props.dispatch(actions.updateAuthEmail(e.target.value));
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
          <h2 className="text-center">Forgot your password?</h2>
          <p className="text-center">Enter your email address to reset your password.</p>
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
            <button
              className="button--block mt1 login__button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            {this.renderAlert()}
            <p className="login__message"><Link to="/login">Return to Log in.</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

Forgot.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  email: state.auth.email,
});

export default connect(mapStateToProps)(Forgot);
