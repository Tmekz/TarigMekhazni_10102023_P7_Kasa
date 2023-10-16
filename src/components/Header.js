import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={"logo-container"}>
        <h1 className="kasa-title">
          <img src={Logo} alt="Logo Kasa" />
        </h1>
      </NavLink>
      <nav className="header-navigation">
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
