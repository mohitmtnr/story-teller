import React from "react";
import uibixLogo from "../logo/uibix-logo.png";
import svgCurve from "../svg/wave.svg";

const Home = ({ toggleDarkMode, isDark }) => {
  return (
    <div id="story-teller-home" className={isDark ? "bg-dark" : "bg-light"}>
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
      <section className="main-content">
        <div className="sub-main">
          <h1 className="heading">
            We build fun experiences using cutting edge technologies
          </h1>
        </div>
        <span className="scroll-right">Scroll &#8594;</span>
      </section>
      <div className="svg-curve">
        <img src={svgCurve} alt="svg-curve" height={500} width={200} />
      </div>
    </div>
  );
};

export default Home;
