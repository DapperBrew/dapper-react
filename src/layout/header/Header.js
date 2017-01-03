import React from 'react';

const Header = props => (
  <div className="header">
    <h3 className="header__title">{props.title}</h3>
  </div>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// export default Header;
export default Header;
