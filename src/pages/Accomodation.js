import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Accordion from "../components/Accordion";

const Accomodation = ({ housesData }) => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === id);

  // Convertir la notation en nombre car c'est une CDC
  const rating = parseInt(house.rating);

  //   Générer un tableau d'étoiles en fonction de la notation avec en base des étoiles grises et si rated alors class i-colored.Array(5) crée un tableau vide de longueur 5. Cependant, ce tableau est composé de valeurs indéfinies, ce qui signifie qu'il est vide mais a une longueur de 5. .fill(null) remplit ce tableau vide avec la valeur null. En pratique, cette étape ne modifie pas les valeurs du tableau, car les valeurs null seront écrasées par la suite. "_" est utilisé comme une variable anonyme pour représenter les éléments de l'array généré par .map(). Dans ce cas, nous n'avons pas besoin d'utiliser la valeur de chaque élément de l'array, nous utilisons donc _ pour indiquer que nous ne nous soucions pas de la valeur.index est la seule valeur que nous utilisons réellement dans cette fonction .map() car nous en avons besoin pour déterminer si l'étoile doit être colorée ou non.
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
      <Slideshow house={house} />
      <div className="title-and-location">
        <div className="titles">
          <h1>{house.title}</h1>
          <h2>{house.location}</h2>
          <div className="tags-container">
            {house.tags.map((tag, index) => (
              <li key={index} className="tags">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-infos">
            <p>{house.host.name}</p>
            <img
              src={house.host.picture}
              alt={`Profil de ${house.host.name}`}
            />
          </div>
          <div className="host-stars">{stars}</div>
        </div>
      </div>
      <div className="about-main-container">
        <div className="accomodation-accordion-item">
          {" "}
          <Accordion title={"Description"} content={house.description} />
        </div>
        <div className="accomodation-accordion-item">
          <Accordion
            title={"Equipements"}
            content={house.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          />
        </div>
      </div>
    </main>
  );
};

export default Accomodation;
