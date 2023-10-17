import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="accordion-container">
      <div
        className="accordion-title-container"
        onClick={() => setToggle(!toggle)}
       
      >
        <h3>{title}</h3>
        <i className={`fa-solid fa-chevron-${toggle ? "up" : "down"}`}></i>
      </div>
      {toggle && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
