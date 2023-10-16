import React from "react";

// On importe la DATA des textes A propos
import { aboutAccordionDB } from "../assets/data/aboutAccordionDB";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

const About = () => {
  return (
    <main className="about-main">
      <Banner />
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
