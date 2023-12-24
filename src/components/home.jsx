import React from "react";
import logo from "../logo/logo.webp";
import Wave from "../svg/wave";
import { useTheme } from "../context/theme";

const Home = () => {
  const { isDark, toggleDarkMode, activeColor } = useTheme();
  return (
    <>
      <nav id="navbar">
        <a href="/">
          <img src={logo} alt="logo" height={50} width={50} className="logo" />
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
