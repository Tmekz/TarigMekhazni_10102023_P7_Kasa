import React, { useEffect, useState } from "react";

const Banner = ({ imageS, imageXL, alt, specialHeight }) => {

  // usestate permet un nouveau rendu du composant si etat change. Composant re rendu après chaque modification du usestate
  const [smallScreen, setSmallScreen] = useState(false);

  // fonction retourne true si écran < 500px
  const determineScreenSize = () => {
    if (window.innerWidth <= 500) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  // permet de gérer les "effets secondaires" et d'effectuer des actions en réponse à des changements d'états. Logique reactive au composant. Se joue apres le rendu du composant
  useEffect(() => {
    // Appel initial pour déterminer la taille de l'écran au chargement de la page
    determineScreenSize();

    // Écoute les changements de la largeur de l'écran
    window.addEventListener("resize", determineScreenSize);
  }, []);

  return (
    <div
      className="banner-container"
      style={{
        height: specialHeight && smallScreen ? "223px" : "",
      }}
    >
      <img
        src={smallScreen ? imageS : imageXL}
        alt={alt}
      />
      <h2>
        Chez vous, <br />
        partout et ailleurs
      </h2>
    </div>
  );
};

export default Banner;
