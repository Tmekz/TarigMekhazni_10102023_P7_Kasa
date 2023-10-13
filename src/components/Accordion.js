import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="accordion-container">
      {title && (
        <div className="accordion-title-container">
          <h5>{title}</h5>
          <i
            className={`fa-solid fa-chevron-${
              isContentVisible ? "up" : "down"
            }`}
            onClick={toggleContentVisibility}
          ></i>
        </div>
      )}
      {title && isContentVisible && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
