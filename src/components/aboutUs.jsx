import React from "react";
import Wave from "../svg/wave";
import { useTheme } from "../context/theme";

const AboutUs = () => {
  const { activeColor } = useTheme();
  return (
    <div
      id="story-teller-about-us"
      style={{ backgroundColor: activeColor.home }}
    >
      <h1>WHO WE ARE?</h1>
      <div id="main-content-about-us">
        <i className="fa-solid fa-passport about-icon"></i>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
          recusandae saepe eius necessitatibus. Vitae, similique neque eaque
          modi ut saepe incidunt eligendi suscipit dolores, corrupti quas, ex
          nam exercitationem! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nulla fuga, sunt minima officia incidunt recusandae
          in assumenda cupiditate expedita odio molestiae cum eligendi explicabo
          illum possimus magni. Eos, a delectus.
        </p>
        <a href="#story-teller-services" className="next">
          <i
            className="fa-solid fa-circle-chevron-right"
            style={{ color: activeColor.about }}
          ></i>
        </a>
      </div>
      <div className="svg-curve">
        <Wave component="aboutUs" />
      </div>
    </div>
  );
};

export default AboutUs;
