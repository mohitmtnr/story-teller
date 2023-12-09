import React from "react";
import Wave from "../svg/wave";
import { useTheme } from "../context/theme";

const Services = () => {
  const { activeColor } = useTheme();
  return (
    <div
      id="story-teller-services"
      style={{ backgroundColor: activeColor.about }}
    >
      <h1>WHAT WE OFFER?</h1>
      <div id="main-content-services">
        <h2>
          <i className="fa-solid fa-toolbox service-icon"></i>
          Services
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
          recusandae saepe eius necessitatibus. Vitae, similique neque eaque
          modi ut saepe incidunt eligendi suscipit dolores, corrupti quas, ex
          nam exercitationem! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corrupti, praesentium. Quod officia exercitationem,
          neque eaque harum sed consectetur libero iusto quas praesentium,
          nesciunt voluptatum architecto sint facere nulla ducimus doloremque!
        </p>
      </div>
      <div className="svg-curve">
        <Wave component="services" />
      </div>
    </div>
  );
};

export default Services;
