import Card from "../components/Card";

// On importe les images
import BannerHomeXL from "../assets/home_banner/Home-Banner-XL.png";
import { NavLink } from "react-router-dom";

// // On importe les DB en local
// import housesData from "../assets/data/housesDB.json";

const Home = ({ housesData }) => {
  return (
    <main className="home-main">
      <div className="banner-container">
        <img src={BannerHomeXL} alt="Falaises" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="housing-container">
        {housesData.map((card) => (
          <NavLink
            // className="housing-link"
            key={`${card.id}`}
            to={`/housing/${card.id}`}
          >
            <Card title={card.title} cover={card.cover} key={card.id} />
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Home;
