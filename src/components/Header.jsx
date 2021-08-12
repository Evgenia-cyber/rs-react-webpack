import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuList } from '../constants/constants';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="menu">
        {menuList.map((item) => (
          <li key={item.menuItem}>
            <NavLink className="menu-item" activeClassName="selected" exact to={item.path}>
              {item.menuItem}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
