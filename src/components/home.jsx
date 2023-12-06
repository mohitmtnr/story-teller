import React from "react";
import uibixLogo from "../logo/uibix-logo.png";

const Home = ({ toggleDarkMode, isDark }) => {
  return (
    <div id="story-teller-home" className={isDark ? "bg-dark" : "bg-light"}>
      <nav className={`navbar ${isDark ? "bg-dark" : "bg-light"} `}>
        <img
          src={uibixLogo}
          alt="uibix-logo"
          height={50}
          width={50}
          className="uibix-logo"
        />
        {isDark ? (
          <i class="fa-solid fa-toggle-on" onClick={toggleDarkMode}></i>
        ) : (
          <i class="fa-solid fa-toggle-off" onClick={toggleDarkMode}></i>
        )}
      </nav>
      <section className="main-content"> fasjd;l</section>
    </div>
  );
};

export default Home;
