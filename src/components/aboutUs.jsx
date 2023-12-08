import React from "react";
import Wave from "../svg/wave";

const AboutUs = () => {
  return (
    <div id="story-teller-about-us">
      <h1>WHO WE ARE?</h1>
      <div className="main-content">
        <h4>About us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
          recusandae saepe eius necessitatibus. Vitae, similique neque eaque
          modi ut saepe incidunt eligendi suscipit dolores, corrupti quas, ex
          nam exercitationem!
        </p>
      </div>
      <div className="svg-curve">
        <Wave component="aboutUs" />
      </div>
    </div>
  );
};

export default AboutUs;
