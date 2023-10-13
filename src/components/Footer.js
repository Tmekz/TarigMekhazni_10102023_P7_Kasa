import React from "react";
import Logo from "../assets/logo/logoWhite.png";

const Footer = () => {
  return (
    <footer>
      <div className="kasa-copyrights">
        <img id={"footer-logo"} src={Logo} alt="Kasa Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
