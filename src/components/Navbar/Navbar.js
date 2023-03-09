import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import Logo from '../../images/logo.png'
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img className="img-logo" src={Logo} alt="logo" />
      </Link>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
