import Card from "../components/Card";

import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

// On importe les images
// check S ou XL envoyer deux images
import BannerHomeXL from "../assets/home_banner/Home-Banner-XL.png";
import BannerHomeS from "../assets/home_banner/Home-Banner-S.png";

const Home = ({ housesData }) => {
  return (
    <main className="home-main">
      <Banner imageXL={BannerHomeXL} imageS={BannerHomeS} alt={"Falaises océan"} />
      <div className="accomodation-container">
        {housesData.map((card) => (
          <NavLink
            className={"card-container"}
            key={card.id}
            to={`/accomodation/${card.id}`}
          >
            <Card title={card.title} cover={card.cover}/>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Home;
