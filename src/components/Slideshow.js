import React, { useState } from "react";

const Slideshow = ({ house }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    // Incrémente l'index de l'image et revient au début lorsque l'on atteint la dernière image. Car l'opérateur modulo % renvoie le reste de la division. Dans ce cas, 5 % 5 est égal à 0. (si 5 images index=4 car début à 0 et length = 5) d'ou le +1
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % house.pictures.length
    );
  };

  const previousImage = () => {
    // Décrémente l'index de l'image et revient à la dernière image si clic sur première image
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + house.pictures.length) % house.pictures.length
    );
  };

  return (
    <div className="banner">
      {house && (
        <img
          src={house.pictures[currentImageIndex]}
          alt={house.title + " " + house.location}
        />
      )}
      {house.pictures.length > 1 ? (
        <p>{currentImageIndex + 1 + "/" + house.pictures.length}</p>
      ) : null}
      <div className="navigation">
        {house.pictures.length > 1 ? (
          <>
            <i onClick={previousImage} className="fa-solid fa-chevron-left"></i>
            <i onClick={nextImage} className="fa-solid fa-chevron-right"></i>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Slideshow;
