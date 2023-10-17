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

  const determineScreenSize = () => {
    if (window.innerWidth <= 500) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  useEffect(() => {
    // Appel initial pour déterminer la taille de l'écran
    determineScreenSize();

    // Écoute les changements de la largeur de l'écran
    window.addEventListener("resize", determineScreenSize);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    // return () => {
    //   window.removeEventListener("resize", determineScreenSize);
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
