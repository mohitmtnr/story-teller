import React from "react";
import uibixLogo from "../logo/uibix-logo.png";
import Wave from "../svg/wave";

const Home = ({ toggleDarkMode, isDark }) => {
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
        <section className="main-content">
          <div className="sub-main">
            <h1 className="heading">
              We build fun experiences using cutting edge technologies
            </h1>
          </div>
          <span className="scroll-right">Scroll &#8594;</span>
        </section>
        <div className="svg-curve">
          <Wave component="home" />
        </div>
      </div>
    </>
  );
};

export default Home;
