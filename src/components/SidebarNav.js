
import React from 'react';
import icon from '../img/icon.svg';

const SidebarNav = props => (
  <li className="side-nav__item">
    <svg className="side-nav__icon"><use xlinkHref={`${icon}#side-icon-${props.sideIcon}`} /></svg>
    <span className="side-nav__text">{props.sideName}</span>
  </li>
);

SidebarNav.propTypes = {
  sideIcon: React.PropTypes.string.isRequired,
  sideName: React.PropTypes.string.isRequired,
};

export default SidebarNav;
