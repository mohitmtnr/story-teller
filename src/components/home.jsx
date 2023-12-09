import React from "react";
import uibixLogo from "../logo/uibix-logo.png";
import Wave from "../svg/wave";
import { useTheme } from "../context/theme";

const Home = () => {
  const { isDark, toggleDarkMode, activeColor } = useTheme();
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img
            src={uibixLogo}
            alt="uibix-logo"
            height={50}
            width={50}
            style={{ cursor: "pointer" }}
            className="uibix-logo"
          />
        </a>

        <i className="fa-solid fa-bars"></i>

        {isDark ? (
          <i className="fa-solid fa-toggle-on" onClick={toggleDarkMode}></i>
        ) : (
          <i className="fa-solid fa-toggle-off" onClick={toggleDarkMode}></i>
        )}
      </nav>
      <div id="story-teller-home">
        <section className="main-content animate__animated animate__zoomIn">
          <div className="sub-main">
            <h1 className="heading animate__animated animate__bounceInDown">
              We build fun experiences using cutting edge technologies
            </h1>
          </div>
          <a href="#story-teller-about-us" className="next">
            <i
              className="fa-solid fa-circle-chevron-right"
              style={{ color: activeColor.home }}
            ></i>
          </a>
        </section>
        <div className="svg-curve">
          <Wave component="home" />
        </div>
      </div>
    </>
  );
};

export default Home;
