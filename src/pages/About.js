import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

// On importe les images 
import BannerAboutXL from "../assets/about_banner/About-Banner-XL.png";
import BannerAboutS from "../assets/about_banner/About-Banner-S.png";

// On importe la DATA des textes A propos
import { aboutAccordionDB } from "../assets/data/aboutAccordionDB";

const About = () => {
  return (
    <main className="about-main">
      <Banner
        imageS={BannerAboutS}
        imageXL={BannerAboutXL}
        alt={"Montagnes enneigées"}
        specialHeight={"specialHeight"}
      />
      <div className="about-container">
        {aboutAccordionDB.map((section, index) => (
          <div className="about-main-accordion" key={index}>
            <Accordion
              key={index}
              title={section.title}
              content={section.content}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
