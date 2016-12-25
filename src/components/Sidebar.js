import React from 'react';
import { Link } from 'react-router';

import logo from '../img/logo.svg';
import SidebarNav from './SidebarNav';

const Sidebar = () => (
  <div className="sidebar">
    <img className="sidebar__logo" src={logo} alt="Dapper Logo" />

    <ul className="side-nav">
      <li className="side-nav__title">Menu</li>
      <Link to="/" activeOnlyWhenExact activeClassName="is-active">
        <SidebarNav sideIcon="home-51" sideName="Dashboard" />
      </Link>
      <Link to="/recipes" activeClassName="is-active">
        <SidebarNav sideIcon="lab" sideName="Recipes" />
      </Link>
      <Link to="/calculators" activeClassName="is-active">
        <SidebarNav sideIcon="calculator" sideName="Calculators" />
      </Link>
      <Link to="/brewlog" activeClassName="is-active">
        <SidebarNav sideIcon="agenda-bookmark" sideName="Brew Log" />
      </Link>
      <Link to="/equipment" activeClassName="is-active">
        <SidebarNav sideIcon="box" sideName="Equipment" />
      </Link>
      <Link to="/settings" activeClassName="is-active">
        <SidebarNav sideIcon="settings-gear-64" sideName="Settings" />
      </Link>
    </ul>
  </div>
);

export default Sidebar;
