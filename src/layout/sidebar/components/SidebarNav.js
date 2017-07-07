
import PropTypes from 'prop-types';
import React from 'react';
import icon from '../img/icon.svg';

const collapseSidebar = () => {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const blackout = document.querySelector('.blackout');
  const body = document.body;

  if (sidebar.classList.contains('is-open')) {
    hamburger.classList.toggle('is-active');
    sidebar.classList.toggle('is-open');
    blackout.classList.toggle('is-active');
    body.classList.toggle('is-open');
  }
};


const SidebarNav = props => (
  <div role="link" tabIndex={props.tabIndex} onClick={collapseSidebar} className="side-nav__item">
    <svg className="side-nav__icon"><use xlinkHref={`${icon}#side-icon-${props.sideIcon}`} /></svg>
    <span className="side-nav__text">{props.sideName}</span>
  </div>
);

SidebarNav.propTypes = {
  sideIcon: PropTypes.string.isRequired,
  sideName: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
};

export default SidebarNav;
