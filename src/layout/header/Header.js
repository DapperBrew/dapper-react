import React from 'react';
import { connect } from 'react-redux';

// actions
import { signOutUser } from '../../actions/auth';

const Header = props => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    <span onClick={() => props.dispatch(signOutUser())} className="signout">Log Out</span>
  </div>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// export default Header;
export default connect()(Header);
