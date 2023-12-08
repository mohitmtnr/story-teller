import React from "react";
import Wave from "../svg/wave";

const AboutUs = () => {
  return (
    <div id="story-teller-about-us">
      <h1>WHO WE ARE?</h1>
      <div className="main-content-about-us">
        <h2>
          <i
            class="fa-solid fa-passport about-icon"
            style={{ color: "#c026d3" }}
          ></i>
          About us
        </h2>
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
