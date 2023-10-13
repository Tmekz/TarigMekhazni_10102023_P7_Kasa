import React from "react";

// On importe les images
import BannerAboutXL from "../assets/about_banner/About-Banner-XL.png";

// On importe la DATA des textes A propos
import { aboutAccordionDB } from "../assets/data/aboutAccordionDB";
import Accordion from "../components/Accordion";

const About = () => {
  return (
    <main className="about-main">
      <div className="banner-container">
        <img src={BannerAboutXL} alt="Montagnes" />
      </div>
      <div className="about-container">
        {aboutAccordionDB.map((section, index) => (
          <Accordion
            
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </main>
  );
};

export default About;
