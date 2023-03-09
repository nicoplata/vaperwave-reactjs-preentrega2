import React from 'react';
import { Link } from 'react-router-dom'

import NavbarCart from './NavbarCart';

const NavbarMenu = ({ }) => {
    return (
    <div id="navbar">
        <ul id="navbarMenu">
            <li>
                <Link className="active" to="/">SHOP</Link>
            </li>
            <li>
                <Link className="active" to="/category/1">PODS</Link>
            </li>
            <li>
                <Link className="active" to="/category/2">SMOKES</Link>
            </li>
            <li>
                <Link className="active" to="/category/3">RESISTENCIAS</Link>
            </li>
        </ul>
        <NavbarCart />
    </div>
    );
  };
  
  export default NavbarMenu;