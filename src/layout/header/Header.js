import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// actions
import { signOutUser } from '../../actions/auth';

const Header = props => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    <span onClick={() => props.dispatch(signOutUser())} className="signout">Log Out</span>
    {/* eslint-enable jsx-a11y/no-static-element-interactions */}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// export default Header;
export default connect()(Header);
