import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Accordion from "../components/Accordion";
import { useEffect, useState } from "react";

const Accomodation = ({ housesData }) => {
  const { id } = useParams();
  const [foundIdData, setFoundIdData] = useState(null);
  const navigate = useNavigate();

  // Utilisez un effet pour mettre à jour house en fonction de l'ID
  useEffect(() => {
    const findIdUrl = housesData.find((item) => item.id === id);
    if (findIdUrl) {
      setFoundIdData(findIdUrl);
    } else {
      navigate("/404");
    }
  }, [id, housesData, navigate]);

  if (!foundIdData) {
    return null;
  }

  // Convertir la notation en nombre car c'est une CDC
  const rating = parseInt(foundIdData.rating);
  // Générer un tableau de 5 étoiles vides. "_" est utilisé comme une variable anonyme pour représenter les éléments de l'array généré par .map(). Dans ce cas, nous n'avons pas besoin d'utiliser la valeur de chaque élément de l'array, nous utilisons donc "_" pour indiquer que nous ne nous soucions pas de la valeur, .index est la seule valeur que nous utilisons réellement dans cette fonction .map() car nous en avons besoin pour déterminer si l'étoile doit être colorée ou non.
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <i
        key={index}
        className={`fas fa-star${index < rating ? " i-colored" : ""}`}
      ></i>
    ));

  return (
    <main className="accomodation-main">
      <Slideshow house={foundIdData} />
      <div className="title-and-location">
        <div className="titles">
          <h1>{foundIdData.title}</h1>
          <h2>{foundIdData.location}</h2>
          <div className="tags-container">
            {foundIdData.tags.map((tag, index) => (
              <li key={index} className="tags">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-infos">
            <p className="break-words">{foundIdData.host.name}</p>
            <img
              src={foundIdData.host.picture}
              alt={`Profil de ${foundIdData.host.name}`}
            />
          </div>
          <div className="host-stars">{stars}</div>
        </div>
      </div>
      <div className="about-main-container">
        <div className="accomodation-accordion-item">
          {" "}
          <Accordion title={"Description"} content={foundIdData.description} />
        </div>
        <div className="accomodation-accordion-item">
          <Accordion
            title={"Equipements"}
            content={foundIdData.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          />
        </div>
      </div>
    </main>
  );
};

export default Accomodation;
