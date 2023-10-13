import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-404">
      <span>404</span>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <NavLink to={"/"} id="error-link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default Error404;
