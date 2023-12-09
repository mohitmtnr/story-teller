import { createContext, useContext, useEffect, useState } from "react";
const theme = createContext();
const colorBank = {
  home: "#f0abfc",
  dHome: "#701a75",
  about: "#93c5fd",
  dAbout: "#172554",
  service: "#ffffff",
  dService: "#020617",
};
const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(true);
  const [activeColor, setActiveColor] = useState({
    home: colorBank["dHome"],
    about: colorBank["dAbout"],
    service: colorBank["dService"],
  });

  const toggleComponentBackground = (isDark) => {
    if (!isDark) {
      setActiveColor({
        home: colorBank["home"],
        about: colorBank["about"],
        service: colorBank["service"],
      });
    } else {
      setActiveColor({
        home: colorBank["dHome"],
        about: colorBank["dAbout"],
        service: colorBank["dService"],
      });
    }
  };

  const toggleDarkMode = () => {
    toggleComponentBackground(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setDark((prev) => !prev);
  };

  useEffect(() => {
    const themeCache = localStorage.getItem("theme");
    toggleComponentBackground(themeCache === "dark" ? true : false);
    setDark(themeCache === "dark" ? true : false);
  }, []);

  return (
    <theme.Provider value={{ isDark, toggleDarkMode, activeColor }}>
      {children}
    </theme.Provider>
  );
};

export const useTheme = () => useContext(theme);
export default ThemeProvider;
