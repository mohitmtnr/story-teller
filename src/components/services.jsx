import React from "react";
import Wave from "../svg/wave";

const Services = () => {
  return (
    <div id="story-teller-services">
      <h1>WHAT WE OFFER?</h1>
      <div className="main-content">
        <h4>Services</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
          recusandae saepe eius necessitatibus. Vitae, similique neque eaque
          modi ut saepe incidunt eligendi suscipit dolores, corrupti quas, ex
          nam exercitationem!
        </p>
      </div>
      <div className="svg-curve">
        <Wave component="services" />
      </div>
    </div>
  );
};

export default Services;
