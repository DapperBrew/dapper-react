import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './img/logo.svg';
import SidebarNav from './components/SidebarNav';


const Sidebar = () => (
  <div className="sidebar">
    <img className="sidebar__logo" src={logo} alt="Dapper Logo" />

    <ul className="side-nav">
      <li className="side-nav__title">Menu</li>
      <NavLink to="/" activeClassName="">
        <SidebarNav sideIcon="home-51" sideName="Dashboard" />
      </NavLink>
      <NavLink to="/recipes" activeClassName="is-active">
        <SidebarNav sideIcon="lab" sideName="Recipes" />
      </NavLink>
      <NavLink to="/calculators" activeClassName="is-active">
        <SidebarNav sideIcon="calculator" sideName="Calculators" />
      </NavLink>
      <NavLink to="/brewlog" activeClassName="is-active">
        <SidebarNav sideIcon="agenda-bookmark" sideName="Brew Log" />
      </NavLink>
      <NavLink to="/equipment" activeClassName="is-active">
        <SidebarNav sideIcon="box" sideName="Equipment" />
      </NavLink>
      <NavLink to="/settings" activeClassName="is-active">
        <SidebarNav sideIcon="settings-gear-64" sideName="Settings" />
      </NavLink>
    </ul>
  </div>
);

export default Sidebar;
