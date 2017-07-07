import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './img/logo.svg';
import SidebarNav from './components/SidebarNav';

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

const Sidebar = () => (
  <div className="sidebar">
    <img className="sidebar__logo" src={logo} alt="Dapper Logo" />

    <ul className="side-nav">
      <li className="side-nav__title">Menu</li>
      <NavLink to="/" exact activeClassName="is-active">
        <SidebarNav sideIcon="home-51" sideName="Dashboard" tabIndex="0" />
      </NavLink>
      <NavLink to="/recipes" activeClassName="is-active">
        <SidebarNav sideIcon="lab" sideName="Recipes" tabIndex="0" />
      </NavLink>
      <NavLink to="/calculators" activeClassName="is-active">
        <SidebarNav sideIcon="calculator" sideName="Calculators" tabIndex="0" />
      </NavLink>
      <NavLink to="/brewlog" activeClassName="is-active">
        <SidebarNav sideIcon="agenda-bookmark" sideName="Brew Log" tabIndex="0" />
      </NavLink>
      <NavLink to="/equipment" activeClassName="is-active">
        <SidebarNav sideIcon="box" sideName="Equipment" tabIndex="0" />
      </NavLink>
      <NavLink to="/settings" activeClassName="is-active">
        <SidebarNav sideIcon="settings-gear-64" sideName="Settings" tabIndex="0" />
      </NavLink>
      <NavLink to="/recipes/add-new" activeClassName="is-active">
        <button onClick={collapseSidebar} className="mt1 button button--secondary sidebar__button">New Recipe</button>
      </NavLink>
    </ul>
  </div>
);

export default Sidebar;
