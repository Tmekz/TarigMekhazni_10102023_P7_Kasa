import React, { useEffect, useState } from "react";
import BannerAboutXL from "../assets/about_banner/About-Banner-XL.png";
import BannerAboutS from "../assets/about_banner/About-Banner-S.png";
import BannerHomeXL from "../assets/home_banner/Home-Banner-XL.png";
import BannerHomeS from "../assets/home_banner/Home-Banner-S.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const currentRoute = useLocation().pathname;
  const aboutPage = currentRoute === "/about";

  useEffect(() => {
    // Écoute les changements de la largeur de l'écran
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    // "resize" permet de garder un oeil sur le redimensionnement de l'écran
    window.addEventListener("resize", handleResize);

    // permet de remove l'event pour sauver de la mémoire
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <div
      className="banner-container"
      style={{
        height: aboutPage && smallScreen ? "223px" : "",
      }}
    >
      <img
        src={
          aboutPage
            ? smallScreen
              ? BannerAboutS
              : BannerAboutXL
            : smallScreen
            ? BannerHomeS
            : BannerHomeXL
        }
        alt={aboutPage ? "Montagnes enneigées" : "Falaises océan"}
      />
      <h2>
        Chez vous, <br />
        partout et ailleurs
      </h2>
    </div>
  );
};

export default Banner;
