import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
