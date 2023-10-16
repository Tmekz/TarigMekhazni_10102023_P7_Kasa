import Card from "../components/Card";

// On importe les images
import BannerHomeXL from "../assets/home_banner/Home-Banner-XL.png";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

// // On importe les DB en local
// import housesData from "../assets/data/housesDB.json";

const Home = ({ housesData }) => {
  return (
    <main className="home-main">
      <Banner src={BannerHomeXL} />
      <div className="accomodation-container">
        {housesData.map((card) => (
          <NavLink
            className={"card-container"}
            key={`${card.id}`}
            to={`/accomodation/${card.id}`}
          >
            <Card title={card.title} cover={card.cover} key={card.id} />
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Home;
